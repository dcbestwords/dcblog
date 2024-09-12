---
title: vue3挂载流程
---

## 一、整体渲染流程

众所周知vue的渲染从其入口函数，即`createApp(APP).mount('#app')`开始，整体的大概流程如下所示：

```js
// 1.创建app
app = createApp(APP)
app = ensureRenderer().createApp(APP)
createRenderer(rendererOptions).createApp(APP)
baseCreateRenderer(rendererOptions).createApp(APP) // 为了实现重载额外包了一层
createAppAPI(render)(App)

// 2. 执行app的挂载
app.mount('#app')
    vnode = createVNode(APP)
    render(vnode,container)
		patch(null, vnode, container)
		processComponent(null, vnode, container, null);
		mountComponent(vnode, container, null);
        instance = vnode.component = createComponentInstance(vnode,null)
        setupComponent(instance)
--------------------------------------------------- setupComponent
            initProps(instance, instance .vnode.props)
            initSlots(instance, instance .vnode.children)
            setupStatefulComponent(instance)
            instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers)
            setupContext = createSetupContext(instance)
            setupResult = setup && setup(shallowReadonly(instance.props), setupContext)
            handleSetupResult(instance, setupResult)
            instance.setupState = proxyRefs(setupResult)
            new Proxy(setupResult, shallowUnwrapHandlers);
---------------------------------------------------
        setupRenderEffect(instance, vnode, container)
        instance.update = effect(componentUpdateFn, {
            scheduler: () => {
                queueJob(instance.update);
            },
        });
```

## 二、createApp

`createApp`主要完成了如下三个功能：

```js
export const createApp = ((...args) => {
    // 1. 创建渲染器  2. 创建app
    const app = ensureRenderer().createApp(...args) 

    const { mount } = app
    // 3. 重写mount（添加初始化container等功能）
    app.mount = () => {
        // 省略部分代码
        
        // 执行原始mount
        mount()
    }
    return app // 返回app
})

function ensureRenderer() {
  return ( renderer || ( renderer = createRenderer(rendererOptions)));
}
```

- 对于mount的重写主要用于添加一些平台相关的额外功能，比如根据`#app`获取到具体的dom元素等
- `ensureRenderer`确保渲染器只会进行一次初始化，其中`rendererOptions`是一些web平台的dom操作集合对象，在分析渲染器时，我们知道vue为了实现跨平台，将其中一些依赖于特定平台的操作进行了封装。

在`createRenderer`定义了一大堆函数，但对于我们理解整体流程来说，最重要的是它返回的对象，因为可以看出vue通过调用其返回对象中的createApp方法，从而创建了app对象。

```js
function baseCreateRenderer( options, createHydrationFns){
    // 省略部分代码

    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate) // 创建app的方法。这里会调用render方法
    }
}
```

`hydrate`是服务端渲染使用的变量这里不用管，`createAppAPI(render)`主要完成的功能如下：

```js
export function createAppAPI(render) {
  return function createApp(rootComponent) {
    const app = {
      _component: rootComponent,
      mount(rootContainer) {
        const vnode = createVNode(rootComponent);
        render(vnode, rootContainer);
      },
    };
    return app;
  };
}
```

- 传入的render在执行`app.mount`的时候调用
- 创建app实例并返回

## 二、mount

### 1. mountComponent

从上述代码可以看出原始的mount函数主要完成的功能为 ==创建vnode并使用render函数进行渲染== 。其中render函数内部会调用`patch`函数，根据`vnode.type`进行不同的处理。初始渲染时执行的是`mountComponent(vnode, container, null)`（[mountComponent](./05.渲染器.html#_2-mountcomponent)），mountComponent主要实现的功能如下：

```js
function mountComponent(initialVNode, container, parentComponent) {
    // 1. 先创建一个组件instance
    const instance = (initialVNode.component = createComponentInstance(
        initialVNode,
        parentComponent
    ));

    // 2. 给 instance 加工加工
    setupComponent(instance);

    // 3. 设置渲染副作用
    setupRenderEffect(instance, initialVNode, container);
}
```

- `setupComponent`类似于组件实例的初始化，在instance上添加额外的属性
- `setupRenderEffect`类似于vue2中设置render Watcher

### 2. setupComponent

```js
function setupComponent(instance) {
    const { props, children } = instance.vnode;
    initProps(instance, props); // 解析props和attrs
    initSlots(instance, children); // 初始化slots
    setupStatefulComponent(instance);
}

function setupStatefulComponent(instance) {
    // 1. 创建渲染上下文
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);

    // 2. 调用 setup
    const Component = instance.type;
    const { setup } = Component;
    if (setup) {
        // 设置当前 currentInstance 的值
        setCurrentInstance(instance);
        const setupContext = createSetupContext(instance); // { attrs, emit, slots, expose}
        const setupResult = setup && setup(shallowReadonly(instance.props), setupContext);
        setCurrentInstance(null);

        // 3. 处理 setupResult
        handleSetupResult(instance, setupResult);
    } else {
        // 给 instance 设置 render
        // 包含模板/渲染函数规范化以及对2.x选项式的兼容
        finishComponentSetup(instance);
    }
}
```

- 初始化props时根据组件内部声明的props选项将传入组件的属性挂载到`instance.props`或`instance.attrs`

- 父组件环境下在编译时会将使用子组件时传入的插槽编译为一个children对象，其中包含返回vnode的函数。在初始化slots时将children对象中的函数取出并挂载到`instance.slots`

- 渲染上下文指的是在我们在编写template模板中会使用的数据，实际上是对`instance.ctx` 对象的代理

- `setupContext`中使用的expose函数本质上依然是将传入的对象挂载到`instance.exposed`中

- `handleSetupResult`实现的功能是根据setup函数返回值的类型进行不同处理

  - 如果返回值是函数，将此函数作为render挂载到`instance.render`

  - 如果返回值是对象，将此对象挂载到`instance.setupState`，因为此对象中的数据在模板中也需要可以直接进行访问。（在渲染上下文中对其进行处理）

    > 之所以返回对象中ref类型的响应式数据在模板中可以直接使用而不用`xx.value`，是因为在挂载时使用`proxyRefs`进行了解构。
    >
    > ```js
    > instance.setupState = proxyRefs(setupResult);
    > ```

### 3. setupRenderEffect

```js
function setupRenderEffect(instance, initialVNode, container) {
    function componentUpdateFn() {
        if (!instance.isMounted) {
            // 组件初始化的时候会执行这里
            // 调用 render 函数触发依赖收集，响应式的值变更后会再次触发这个函数
            const proxyToUse = instance.proxy; // 渲染上下文
            const subTree = (instance.subTree = normalizeVNode(
                instance.render.call(proxyToUse, proxyToUse)
            ));

            // 触发beforeMount钩子函数

            // patch组件内实际的内容
            patch(null, subTree, container, null, instance);
            // 把 root element 赋值给 组件的vnode.el ，为后续调用 $el 的时候获取值
            initialVNode.el = subTree.el;
            instance.isMounted = true;
        } else {
            // 响应式的值变更后会执行此处逻辑
            // 主要就是拿到新的 vnode ，然后和之前的 vnode 进行对比
            
            // 拿到最新的 subTree
            const { next, vnode } = instance;

            // 如果有 next 的话， 说明需要更新组件的数据（props，slots 等）
            // 先更新组件的数据，然后更新完成后，再继续对比当前组件的子元素
            if (next) {
                next.el = vnode.el;
                updateComponentPreRender(instance, next);
            }

            const proxyToUse = instance.proxy;
            const nextTree = normalizeVNode(
                instance.render.call(proxyToUse, proxyToUse)
            );
            // 替换之前的 subTree
            const prevTree = instance.subTree;
            instance.subTree = nextTree;

            // 触发 beforeUpdated hook

            // 用旧的 vnode 和新的 vnode 交给 patch 来处理
            patch(prevTree, nextTree, prevTree.el, null, instance);
            // 触发 updated hook
        }
    }

    instance.update = effect(componentUpdateFn, {
        scheduler: () => {
            queueJob(instance.update);
        },
    });
}
```

- 在 vue3.2 版本里面设置副作用函数使用的是 `new ReactiveEffect`，至于为什么不直接用 effect ，是因为需要一个 scope  参数来收集所有的 effect，而 effect 这个函数是对外暴露的 API ，设计上要保持简洁和稳定性，不适合频繁改变其参数和行为。所以会使用  `new ReactiveEffect`，因为 它是一个内部类，具有更高的灵活性来适应内部需求，包括接受额外的参数。
- 执行`instance.render`函数会生成组件实际内容的vnode，然后调用`patch`将其挂载
- 当组件更新是因为内部数据变更引起的自更新时，next的值为null；而父组件传入子组件的props发生变化导致的被动更新时，next的值为新的子组件vnode。
- 当在组件标签上使用ref获取组件实例时，实际获取的是`exposeProxy`，因此使用`ref.value.xxx`使用子组件的属性或者方法时，只能使用子组件通过expose暴露出来的方法和公共方法。（即`$el,$props`这些）

> 本质上和vue2区别不大，主要实现就两部分：
>
> - 封装一个函数，其中先`render`再`patch`
> - 将函数设置为副作用（vue2中的watcher）
>
> 设置副作用的时候函数会自动执行一次，将其与模板中所用到的响应式数据绑定

## 三、总结

总体来说整体流程与vue2区别不大，首先会实例化应用（createApp和new vue），然后创建组件vnode并执行挂载，挂载过程中会将包含`render`和`patch`的函数与响应式数据相关联，并在执行patch函数时挂载子节点和子组件。
