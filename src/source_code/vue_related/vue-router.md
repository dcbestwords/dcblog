# vue-router 原理解析

> 基本原理参考：[手写 vue-router 原理](https://juejin.cn/post/6854573222231605256?searchId=202408191039247CFA7EF46D1E3902A82F)

## 一、基本用法

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
});
```

我们需要做的事情如下：

- 注册路由器

- 定义路由表，以此 ==实例化== 一个路由器对象，并将其实例传入 Vue 实例化的 options 中

## 二、路由注册

Vue 提供了 `Vue.use` 的全局 API 来注册这些插件，比如注册 VueRouter。VueRouter 本质上是一个类，实现了 install 的静态方法：`VueRouter.install = install`，当执行 `Vue.use(VueRouter)` 的时候，实际上就是在执行 install 函数。

install 函数主要的功能如下：

- 利用 `Vue.mixin` 去把 `beforeCreate` 和 `destroyed` 钩子函数注入到每一个组件中。

  ```js
  Vue.mixin({
    beforeCreate() {
      // 在实例化Vue的时候会将router实例作为options传入
      // 只有当前组件为根组件时进入此分支
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed() {
      registerInstance(this);
    },
  });
  ```

  主要实现的功能为：

  - 确定 router 和 route 指向的对象
  - ==为 route 添加响应式==，以便路由的变化触发页面的重新渲染
  - 执行 router 的初始化（`router.init`）。

- 通过`Object.defineProperty`方法为 vue 的原型对象添加`$router`和`$route`属性，以便我们在组件内可以方便地访问路由器和当前路由对象。

  ```js
  Object.defineProperty(Vue.prototype, '$router', {
    get() {
      return this._routerRoot._router;
    },
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get() {
      return this._routerRoot._route;
    },
  });
  ```

- 通过 `Vue.component` 方法定义了全局的 `<router-link> `和 `<router-view> `2 个组件，这也是为什么我们在写模板的时候可以使用这两个标签。

router 的初始化用于初始化路由器实例，并设置初始的路由状态。在此步骤中最重要的逻辑为：

```js
history.transitionTo(history.getCurrentLocation(), setupListeners, setupListeners);
```

首先获取当前浏览器地址栏中的 URL，通常是浏览器地址栏中的路径和查询参数。然后根据当前的 URL 进行一次路由导航，从而初始化应用的路由状态，使应用在加载时根据当前 URL 展示相应的组件和视图。然后设置相关的事件监听器，用于处理浏览器的前进和后退等操作。

## 三、VueRouter 实例化

VueRouter 的实现是一个类，定义了一些属性和方法。当我们执行 new VueRouter 的时候会实例化一个路由器对象。主要的初始化如下：

- 根据传入的路由表创建`Matcher`对象。

  ```js
  this.matcher = createMatcher(options.routes || [], this);
  ```

- 确定模式。在浏览器不支持 history.pushState 的情况下，根据传入的 fallback 配置参数，决定是否回退到 hash 模式。

- 根据模式实例化对应的`history`对象

  ```js
  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break;
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break;
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break;
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, `invalid mode: ${mode}`);
      }
  }
  ```

### 1. matcher 对象

matcher 对象主要为后续路由的跳转提供支持，createMatcher 主要实现的功能如下：

- 根据路由的配置描述建立映射表，包括路径、名称到路由 record 的映射关系。

  ```js
  const { pathList, pathMap, nameMap } = createRouteMap(routes);
  ```

  假设有如下路由配置：

  ```js
  const routes = [
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          path: 'profile',
          component: UserProfile,
        },
        {
          path: 'posts',
          component: UserPosts,
        },
      ],
    },
    {
      path: '/about',
      component: About,
    },
  ];
  ```

  最终会生成如下几个映射表：

  ```js
  pathList: ['/user/:id', '/user/:id/profile', '/user/:id/posts', '/about']
  pathMap:  {
     '/user/:id': { path: '/user/:id', component: User, children: [...] },
     '/user/:id/profile': { path: '/user/:id/profile', component: UserProfile, parent: { ... } },
     '/user/:id/posts': { path: '/user/:id/posts', component: UserPosts, parent: { ... }},
     '/about': { path: '/about', component: About }
  }
  // nameMap: 如果路由配置中有命名路由，则会包含相应的路由记录。
  ```

- 仿照类的写法，数据由类本身维护，返回一些操作数据的方法：

  ```js
  return {
    match,
    addRoute,
    getRoutes,
    addRoutes,
  };
  ```

  `addRoutes` 方法的作用是动态添加路由配置，因为在实际开发中有些场景是不能提前把路由写死的，需要根据一些条件动态添加路由。addRoutes 的方法十分简单，再次调用 createRouteMap 即可，传入新的 routes 配置，由于 pathList、pathMap、nameMap 都是引用类型，执行 addRoutes 后会修改它们的值。

  ```js
  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }
  ```

  `match` 会根据传入的位置和路径计算出新的位置并匹配到相应的路由 record ，然后根据新的位置和 record 创建新的路径并返回。通过 matcher 的 match 方法，我们会找到匹配的路径 Route，这个对 Route 的切换，组件的渲染都有非常重要的指导意义。

  ```js
  // 假设有如下的路由配置
  const routes = [
    { path: '/user/:id', component: User },
    { path: '/about', component: About },
    { path: '*', component: NotFound }
  ]
  const router = new VueRouter({
    routes
  })

  // 匹配如下路由路径
  const match = router.match('/about')
  console.log(match)

  // 输出结果，外层是一个route对象，matched是一个record对象
  {
    path: '/about',
    matched: [
      {
        path: '/about',
        regex: /^\/about(?:\/(?=$))?$/i,
        components: { default: About },
        instances: {},
        name: undefined,
        parent: undefined,
        matchAs: undefined,
        redirect: undefined,
        beforeEnter: undefined,
        meta: {},
        props: { default: undefined }
      }
    ],
    params: {},
    query: {},
    hash: '',
    redirectedFrom: undefined,
    meta: {}
  }
  ```

  `getRoutes`会返回所有路由路径对应的路由配置。

  ```js
  function getRoutes() {
    return pathList.map((path) => pathMap[path]);
  }
  ```

### 2. history 对象

> push、replace --> 触发守卫，跳转路由，更改 url setupListeners --> 绑定事件 current --> 当前路由

`history` 是一个核心概念，用于管理浏览器的历史记录和路由状态。`history` 对象负责处理路由的导航、路径匹配、导航钩子等。Vue Router 提供了不同的 `history` 模式来适应不同的需求和浏览器环境。

history 中重要的 ==属性== 包括当前路由器 router、当前路由 current 以及各种 hook 数组，还包含主要的路由跳转 ==方法== push 和 replace，其中都使用了同一个函数`history.transitionTo`，只是传入的成功回调不同。

```js
push(location, onComplete, onAbort) {
    const { current: fromRoute } = this;
    this.transitionTo(
        location,
        (route) => {
            pushHash(route.fullPath); // 修改页面的url
            handleScroll(this.router, route, fromRoute, false);
            onComplete && onComplete(route);
        },
        onAbort
    );
}

replace(location, onComplete, onAbort) {
    const { current: fromRoute } = this;
    this.transitionTo(
        location,
        (route) => {
            replaceHash(route.fullPath); // 修改页面的url
            handleScroll(this.router, route, fromRoute, false);
            onComplete && onComplete(route);
        },
        onAbort
    );
}
```

`history.transitionTo`是 vue-router 处理路由跳转的核心逻辑，其主要的步骤如下：

```js
transitionTo(location, onComplete, onAbort) {
    let route;
    // 1. 路径匹配
    try {
        route = this.router.match(location, this.current);
    } catch (e) {
        this.errorCbs.forEach((cb) => {
            cb(e);
        });
        throw e;
    }
    const prev = this.current;

    // 2. 确认从一个路由到另一个路由的过渡是否应该进行，并执行相应的导航守卫
    this.confirmTransition(
        route,
        // 确定应该进行跳转
        () => {
            // 更新当前路由
            this.updateRoute(route);
            // 调用成功回调
            onComplete && onComplete(route);
            this.ensureURL();
            // 执行全局后置守卫
            this.router.afterHooks.forEach((hook) => {
                hook && hook(route, prev);
            });

            // fire ready cbs once
            if (!this.ready) {
                this.ready = true;
                this.readyCbs.forEach((cb) => {
                    cb(route);
                });
            }
        },
        (err) => {} // 失败回调
    );
}
```

而`confirmTransition`的代码如下所示：

```js
confirmTransition(route, onComplete, onAbort) {
    // 省略部分代码
    // ...

    // 确定需要更新、失活和激活的路由组件
    const { updated, deactivated, activated } = resolveQueue(this.current.matched, route.matched);

    // 构建一个“导航守卫队列”，即在进行路由导航时，需要依次执行的各种守卫函数
    const queue = [].concat(
        // 组件内 beforeRouteLeave 守卫
        extractLeaveGuards(deactivated),
        // 全局前置守卫
        this.router.beforeHooks,
        // 组件内 beforeRouteUpdate 守卫
        extractUpdateHooks(updated),
        // 路由配置中的beforeEnter守卫
        activated.map((m) => m.beforeEnter),
        // 异步组件的解析
        resolveAsyncComponents(activated)
    );

    const iterator = (hook, next) => {
        if (this.pending !== route) {
            return abort(createNavigationCancelledError(current, route));
        }
        try {
            // 这里的回调即我们定义守卫时所用的next
            hook(route, current, (to: any) => {
                // 取消这次路由跳转，让用户停留在当前页面
                if (to === false) {
                    // next(false)
                    this.ensureURL(true); // 强制vuerouter内部path与当前url同步
                    abort(createNavigationAbortedError(current, route));
                } else if (isError(to)) {
                    this.ensureURL(true);
                    abort(to);
                } else if (
                    typeof to === 'string' ||
                    (typeof to === 'object' && (typeof to.path === 'string' || typeof to.name === 'string'))
                ) {
                    // next('/') or next({ path: '/' }) -> redirect
                    abort(createNavigationRedirectedError(current, route));
                    if (typeof to === 'object' && to.replace) {
                        this.replace(to);
                    } else {
                        this.push(to);
                    }
                } else {
                    // 确认跳转并传递值
                    next(to);
                }
            });
        } catch (e) {
            abort(e);
        }
    };

    // 执行导航守卫
    runQueue(queue, iterator, () => {
        // beforeRouteEnter
        const enterGuards = extractEnterGuards(activated);
        // resolveHooks
        const queue = enterGuards.concat(this.router.resolveHooks);
        runQueue(queue, iterator, () => {
            if (this.pending !== route) {
                return abort(createNavigationCancelledError(current, route));
            }
            this.pending = null;
            onComplete(route);
            if (this.router.app) {
                this.router.app.$nextTick(() => {
                    handleRouteEntered(route);
                });
            }
        });
    });
}

function runQueue (queue: Array<?NavigationGuard>, fn: Function, cb: Function) {
  const step = index => {
    if (index >= queue.length) {
      cb()
    } else {
      if (queue[index]) {
        fn(queue[index], () => {
          step(index + 1)
        })
      } else {
        step(index + 1)
      }
    }
  }
  step(0)
}
```

- 首先会根据跳转的`path`匹配到对应的路由对象，然后调用`confirmTransition`来确认此次跳转是否应该进行，并执行相应的导航守卫。如果确定可以跳转，则更新当前路由，执行全局的后置守卫。

  > 更新路由指的是 ==更新 history.current 以及 vue 实例的\_route 属性==
  >
  > ```js
  > updateRoute(route) {
  >  this.current = route;
  >  this.cb && this.cb(route);
  > }
  > ```
  >
  > 在执行 router 的初始化时执行了下述代码
  >
  > ```js
  > history.listen((route) => {
  >   this.apps.forEach((app) => {
  >     app._route = route;
  >   });
  > });
  > ```
  >
  > `history.listen`即将传入的函数保存到`history.cb`中。
  >
  > 此时 vue-router 内部的路由已经更新，但是 ==页面的 url 尚未同步== ，通过定义 transitionTo 的成功回调来完成此部分的功能。
  >
  > - 通过`pushState`或者`replaceState`，url 会更改且不会引起页面刷新
  > - 直接修改`window.location.hash`

- 在执行`confirmTransition`时，通过对比当前路由和需要跳转的路由对象，确定需要更新、失活和激活的路由组件分别有哪些。

- 然后构建一个“导航守卫队列”，即在进行路由导航时，需要依次执行的各种守卫函数。依次执行其中的守卫函数。

  > 从代码中可以看出当我们编写守卫函数时调用`next()`，会对其调用情况做出判断和处理，如果未传参则直接放行，此处的放行指的是进入下一次循环，即执行守卫队列中的下一个守卫函数，直到队列为空，则执行成功回调更新当前路由进行跳转。

导航守卫实际上就是发生在路由路径切换的时候，执行的一系列钩子函数。完整的导航解析流程如下所示：

- 导航被触发。
- 在失活的组件里调用离开守卫。
- 调用全局的 beforeEach 守卫。
- 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
- 在路由配置里调用 beforeEnter。
- 解析异步路由组件。
- 在被激活的组件里调用 beforeRouteEnter。
- 调用全局的 beforeResolve 守卫 (2.5+)。
- 导航被确认。（==更新路由==）
- 调用全局的 afterEach 钩子。
- 触发 DOM 更新。
- 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。（`vue.$nextTick`）

## 四、全局组件

hash 模式下具体流程：

- 当我们点击 `router-link` 的时候，实际上最终会执行 `router.push`。
- push 函数会先执行 `this.transitionTo` 做路径切换，在切换完成的回调函数中，执行 `pushHash` 函数
- pushState 会调用浏览器原生的 history 的 pushState 接口或者 replaceState 接口，==更新浏览器的 url 地址== ，并把当前 url 压入历史栈中。
- ensureSlash
  - 开发项目时，打开调试页面 http://localhost:8080 后会自动把 url 修改为 http://localhost:8080/#/。这是因为在实例化 HashHistory 的时候，构造函数会执行 `ensureSlash()` 方法，修改了 url 的原因。

### 1. router-view

路由最终的渲染离不开组件，Vue-Router 内置了 `<router-view>` 组件。`<router-view>` 是一个 functional 组件，它的渲染同样依赖 render 函数。

1. `<router-view>` 是支持嵌套的， render 函数中定义了 depth 的概念，它表示 `<router-view> `嵌套的深度。

2. 每个`<router-view>`在渲染的时候，会进行一个循环，就是从当前的 `<router-view>` 的父节点向上找，一直找到根 Vue 实例，在这个过程，如果父节点也是 `<router-view> `，说明 `<router-view> `存在嵌套的情况，depth++。遍历完成后，根据当前线路匹配的路径和 depth 找到对应的 RouteRecord，进而找到该渲染的组件。

   ```js
   const route = parent.$route;
   const matched = route.matched[depth];
   const component = matched && matched.components[name];

   return h(component, data, children);
   ```

   name 是传入的 props，默认值为 default，等同于`route.component`，即在使用 router-view 的时候如果不传入 name，默认渲染当前路由对应的组件。

3. 注册路由实例

   ```js
   // view组件
   data.registerRouteInstance = (vm, val) => {
     // val could be undefined for unregistration
     const current = matched.instances[name];
     if ((val && current !== vm) || (!val && current === vm)) {
       matched.instances[name] = val;
     }
   };

   const registerInstance = (vm, callVal) => {
     let i = vm.$options._parentVnode;
     if (isDef(i) && isDef((i = i.data)) && isDef((i = i.registerRouteInstance))) {
       i(vm, callVal);
     }
   };

   Vue.mixin({
     beforeCreate() {
       // ...
       registerInstance(this, this);
     },
     destroyed() {
       registerInstance(this);
     },
   });
   ```

   在混入的 beforeCreate 钩子函数中，会执行 `registerInstance` 方法，进而执行 render 函数中定义的 `registerRouteInstance` 方法，从而给 `matched.instances[name]` 赋值当前组件的 vm 实例。

4. 当我们执行 `transitionTo` 来更改路由线路后，组件是如何重新渲染 ？

   在 Vue 混入的 beforeCreate 钩子函数中，我们把根 Vue 实例的 \_route 属性定义成响应式的了。

   ```js
   if (isDef(this.$options.router)) {
     Vue.util.defineReactive(this, '_route', this._router.history.current);
   }
   ```

   在 router-view 组件的 render 函数中首先会使用`$route`访问当前路由对象，从而访问 `this._routerRoot._route`，触发了它的 getter，相当于 `<router-view>` 对它有依赖，然后再执行完 transitionTo 后，更新路由`updateRoute`，修改了 `app._route` ，触发了 setter，因此会通知` <router-view>` 的渲染 watcher 更新，重新渲染组件。

### 2. router-link

Vue-Router 还内置了另一个组件 `<router-link>`，它支持用户在具有路由功能的应用中（点击）导航。 通过 to 属性指定目标地址，默认渲染成带有正确链接的 `<a>` 标签，可以通过配置 tag 属性生成别的标签。另外，当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名。其大致逻辑如下：

- 首先根据当前路由和目标路由进行路由解析得到`location, route, href`
- 根据不同的配置对 exactActiveClass 、 activeClass 和 ariaCurrentValue 做处理
- 创建了一个守卫函数 handler，会监听点击事件或者其它可以通过 prop 传入的事件类型，在某些情况下拦截路由跳转，放行通过后会执行 `router.push` 或者 `router.replace` 函数，实际上就是执行了 history 的 push 和 replace 方法做路由跳转。
- 最后判断当前 tag 是否是`<a>`标签，`<router-link> `默认会渲染成 `<a>` 标签，当然我们也可以修改 tag 的 prop 渲染成其他节点，这种情况下会尝试找它子元素的 `<a>` 标签，如果有则把事件绑定到 `<a> `标签上并添加 href 属性，否则绑定到外层元素本身。

## 五、总结

路由器始终会维护当前的路由，路由切换的时候会把当前路由切换到目标路由，切换过程中会执行一系列的导航守卫钩子函数，会更改 url，同样也会渲染对应的组件，切换完毕后会把目标路由更新替换当前路由，从而作为下一次路由切换的依据。

### 1. 路由变化触发组件重渲染

以 history 模式为例，在 vue-Router3.x 中，流程如下所示：

- 点击浏览器的前进后退，触发 popstate 事件，执行定义的回调函数

  ```js
  const handleRoutingEvent = () => {
    const current = this.current;
    const location = getLocation(this.base);
    if (this.current === START && location === this._startLocation) {
      return;
    }

    this.transitionTo(location, (route) => {
      if (supportsScroll) {
        handleScroll(router, route, current, true);
      }
    });
  };
  ```

- transitionTo 中会依次执行路由守卫，成功通行后更新内部的`current`和`app._route`。而 view 组件依赖与响应式数据`app._route`，其值的改变会触发 setter，从而通知` <router-view>` 的渲染 watcher 更新，重新渲染组件。

而在 vue-Router4.x 中，情况略有不同，流程如下所示：

- 点击浏览器的前进后退，触发 popstate 事件，执行定义的回调函数

  ```js
  const popStateHandler = (state) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;

    if (state) {
      currentLocation.value = to;
      historyState.value = state;

      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }

    // 路由器首次导航时会利用此函数添加listener
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta
          ? delta > 0
            ? NavigationDirection.forward
            : NavigationDirection.back
          : NavigationDirection.unknown,
      });
    });
  };
  ```

- listener 中会调用`navigate`函数执行路由守卫，并执行 replace || push 更改 url 并更新`router.currentRoute`。而 vue-Router 将其中的每个属性定义为计算属性，以此构造了一个响应式的对象作为当前路由（即我们在组件中使用 useRoute 导入的路由对象），并且 view 组件依赖于当前路由对象，因此`router.currentRoute`的改变会引起组件的重新渲染。

### 2. 3.x 与 4.x 版本的区别

> 为什么不直接使用 currentRoute 作为路由而是使用计算属性将每个属性包了一层？

配合 vue3 在编译阶段的优化，实现细粒度的响应式。

当使用计算属性时，Vue 的响应式系统会对各个属性进行细粒度的依赖追踪，而不仅仅是对整个对象进行依赖追踪。这就确保了无论是 `currentRoute.value.path` 还是 `currentRoute.value.name` 变化，都会精确触发相应的渲染更新，性能更高。

通过 `currentRoute.value` 绑定整个对象，任何属性变化都会触发依赖这个对象的所有地方重新渲染：

```html
<template>
  <div>
    <p>{{ currentRoute.value.path }}</p>
    <p>{{ currentRoute.value.name }}</p>
  </div>
</template>
```

实现的结果是，如果 `currentRoute.value.path` 发生变化，虽然页面只需要更新对应的 `<p>` 标签，但实际上可能会导致 `currentRoute.value.name` 也被重新计算或渲染，产生不必要的开销。

而使用计算属性包装后，`reactiveRoute.path` 和 `reactiveRoute.name` 自动更新时，对应的模板部分只会重新渲染需要更新的部分，而不是整个对象。

> push 阶段为什么使用两次 changeLocation？

> 执行路由守卫方式的区别？

> 3.x 版本使用面向对象的方式，4.x 迎合 vue3 组合式 api 的写法，使用函数式编程。
