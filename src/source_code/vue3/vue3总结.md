---
title: vue3响应式总结
---

## 一、基础响应式

### 1. 注册副作用函数

- 解决effet嵌套问题：`effectStack`
- 移除副作用函数：`deps、cleanup`
- 懒加载：`lazy`

```javascript
let activeEffect;
let effectStack = [];
const effect = function(fn, options = {}) {
    const effectFn = () => {
        cleanup(effectFn)
        activeEffect = effectFn
        effectStack.push(effectFn)
        // 将 fn 的执行结果存储到 res 中
        const res = fn() // 执行副作用函数收集依赖
        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1 ]
        // 将 res 作为 effectFn 的返回值
        return res 
    }
    effectFn.options = options
    effectFn.deps = [] // 用来存储与此副作用函数相关的依赖数组
    if (!options.lazy) {
        effectFn()
    }
    return effectFn
}

// 清除过时的副作用函数
const cleanup = function(effectFn){
    // 遍历 effectFn.deps 数组
    for (let i =  ; i < effectFn.deps.length; i++) {
        // deps 是依赖集合
        const deps = effectFn.deps[i]
        // 将 effectFn 从依赖集合中移除
        deps.delete(effectFn)
    }
    // 最后需要重置 effectFn.deps 数组
    effectFn.deps.length = 0
}
```
### 2. 响应式的代理操作

- 调度器，当更新依赖时代替副作用函数执行
- 解决死循环问题：cleanup和执行副作用函数循环的set不同

```js
const obj = new Proxy(data, {
    get(target, key) {
        track(target, key)
        return Reflect.get(target, key, receiver) 
    },
    set(target, key, newVal, receiver) {
        // 设置属性值 
        const res = Reflect.set(target, key, newVal, receiver) 
        trigger(target, key)
        return res
    }
})

function track(target, key) {
    if (!activeEffect) return
    let depsMap = bucket.get(target)
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)
    // deps 就是一个与当前副作用函数存在联系的依赖集合
    // 将其添加到 activeEffect.deps 数组中
    activeEffect.deps.push(deps)
}

function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)

    const effectsToRun = new Set()
    effects && effects.forEach(effectFn => {
        if (effectFn !== activeEffect) {
            effectsToRun.add(effectFn)
        }
    })
    effectsToRun.forEach(effectFn => {
        // 如果一个副作用函数存在调度器，则调用该调度器，并将副作用函数作为参数传递
        if (effectFn.options.scheduler) { 
            effectFn.options.scheduler(effectFn) 
        } else {
            // 否则直接执行副作用函数（之前的默认行为）
            effectFn() 
        }
    })
}
```

### 3. 计算属性

- 懒加载：lazy为true，返回副作用函数`effectFn`
- 可调度：调度器中设置dirty为true，更新计算属性相关的依赖
- 缓存：dirty为false，说明数据没有变化，直接返回缓存的数据

```javascript
function computed(getter) {
    let value
    let dirty = true

    const effectFn = effect(getter, {
        lazy: true,
        scheduler() {
            if (!dirty) {
                dirty = true
                // 当计算属性依赖的响应式数据变化时，手动调用 trigger 函数触发响应
                trigger(obj, 'value')
            }
        }
    })

    const obj = {
        get value() {
            if (dirty) {
                value = effectFn()
                dirty = false
            }
            // 当读取 value 时，手动调用 track 函数进行追踪
            track(obj, 'value')
            return value
        }
    }
    return obj
}
```

### 4. watch

```javascript
function watch(source, cb, options = {}) {
    let getter
    if (typeof source === 'function') {
        getter = source
    } else {
        getter = () => traverse(source)
    }

    let oldValue, newValue

    // 竞态问题
    let cleanup
    function onInvalidate(fn) {
        cleanup = fn
    }

    const job = () => {
        // 新值 
        newValue = effectFn()
        if (cleanup) {
            cleanup()
        }
        cb(newValue, oldValue, onInvalidate)
        oldValue = newValue
    }

    const effectFn = effect(
        () => getter(),
        {
            lazy: true,
            scheduler: () => {
                if (options.flush === 'post') {
                    const p = Promise.resolve()
                    p.then(job)
                } else {
                    job()
                }
            }
        }
    )
    
    // immediate
    if (options.immediate) {
        job()
    } else {
        // 旧值
        oldValue = effectFn()
    }
}

```

- 新旧值：利用调用器获取副作用函数的新值

- immediate

- 竞态问题

  ```js
  watch(obj, async (newValue, oldValue, onInvalidate) => {
      // 定义一个标志，代表当前副作用函数是否过期，默认为 false，代表没有过期
      let expired = false
      // 调用 onInvalidate() 函数注册一个过期回调
      onInvalidate(() => {
          // 当过期时，将 expired 设置为 true
          expired = true
      })
  
      // 发送网络请求
      const res = await fetch('/path/to/request')
  
      // 只有当该副作用函数的执行没有过期时，才会执行后续操作。
      if (!expired) {
          finalData = res
      }
  })
  ```

  - 第一次执行调度器注册过期回调，发送第一次网络请求。
  - 第二次执行调度器先执行过期回调`expired = true`，这会将第一次网络请求的结果抛弃，然后执行cb回调，发送第二个网络请求。

## 二、非原始值响应式

### 1. 读取操作

| 操作                | 对应的拦截函数       |
| ------------------- | -------------------- |
| obj.prop、obj[prop] | get                  |
| in                  | has                  |
| for...in            | ownKeys(ITERATE_KEY) |
| delete              | deleteProperty       |

### 2. 完善

- 在`set`的拦截函数中判断当前操作类型（`ADD or SET`）
  - 要设置的属性不存在：`ADD`
  - 要设置的属性存在：`SET`

- 添加新旧值对比，不同时才触发响应
- `delete`触发`trigger`时传递操作类型 `DELETE`
- `ADD`和`DELETE`触发`ITERATE_KEY`相关的副作用函数。
- 在`get`拦截函数中访问`.raw`访问原始数据，只有当 `receiver` 是 `target` 的代理对象时才触发更新。

**trigger函数**

```javascript
// 当操作类型为 ADD 或 DELETE 时，需要触发与 ITERATE_KEY 相关联的副作用函数重新执行
if (type === 'ADD'|| type === 'DELETE') { 
    const iterateEffects = depsMap.get(ITERATE_KEY) 
    iterateEffects && iterateEffects.forEach(effectFn => { 
        if (effectFn !== activeEffect) { 
            effectsToRun.add(effectFn) 
        } 
    }) 
} 
```
**reactive**

```javascript
function reactive(obj) { 
    return new Proxy(obj,{ 
        get(target, key, receiver) { 
            // 代理对象可以通过 raw 属性访问原始数据 
            if (key === 'raw') { 
                return target 
            } 
            track(target, key) 
            return Reflect.get(target, key, receiver) 
        },
        set(target, key, newVal, receiver) { 
            const oldVal = target[key] 
            const type = Object.prototype.hasOwnProperty.call(target,key) ? 'SET' : 'ADD' 
            const res = Reflect.set(target, key, newVal, receiver) 

            // target === receiver.raw 说明 receiver 就是 target 的代理对象 
            if (target === receiver.raw) { 
                if (oldVal !== newVal && (oldVal === oldVal || newVal === newVal)) { 
                    trigger(target, key, type) 
                } 
            } 
            return res 
        },
        deleteProperty(target, key) { 
            const hadKey = Object.prototype.hasOwnProperty.call(target, key) 
            const res = Reflect.deleteProperty(target, key) 
            if (res && hadKey) { 
                trigger(target, key, 'DELETE') 
            } 
            return res 
        },
        // 省略其他拦截函数 
    }) 
}
```

### 3. 深浅响应

封装 `createReactive` 函数，接收一个参数 `isShallow`，代表是否为浅响应，默认为 false，即非浅响应 。

```javascript
function createReactive(obj, isShallow = false) { 
    return new Proxy(obj, { 
        get(target, key, receiver) { 
            if (key === 'raw') { 
                return target 
            } 
            const res = Reflect.get(target, key, receiver) 
            track(target, key) 

            // 如果是浅响应，则直接返回原始值 
            if (isShallow) { 
                return res 
            } 
            // 递归响应式
            if (typeof res === 'object' && res !== null) { 
                return reactive(res) 
            } 
            return res 
        } 
        // 省略其他拦截函数 
    }) 
}
function reactive(obj) { 
    return createReactive(obj) 
} 
function shallowReactive(obj) { 
    return createReactive(obj, true) 
}
```

### 4. 深浅只读

增加第三个参数 `isReadonly`，代表是否只读，默认为 false，即非只读 。

```javascript
function createReactive(obj, isShallow = false, isReadonly = false) { 
    return new Proxy(obj, { 
        set(target, key, newVal, receiver) { 
            if (isReadonly) { 
                console.warn(`属性 ${key} 是只读的`) 
                return true 
            } 
        // 省略其他代码
        }, 
        deleteProperty(target, key) { 
            if (isReadonly) { 
                console.warn(`属性 ${key} 是只读的`) 
                return true 
            } 
        // 省略其他代码
        },
        get(target, key, receiver) { 
            // 非只读的时候才需要建立响应联系 
            if (!isReadonly) { 
                track(target, key) 
            } 
            if (typeof res === 'object' && res !== null) { 
              return isReadonly ? readonly(res) : reactive(res) 
            }
        // 省略其他代码
        }
        // 省略其他拦截函数 
    }) 
}
function readonly(obj) { 
    return createReactive(obj, false, true) 
} 
function shallowReadonly(obj) { 
    return createReactive(obj, true /* shallow */, true) 
}
```

### 5. 代理数组

- 通过索引读取和设置数组
- 访问或设置`length`的长度
- `for...in...`、`for...of...`遍历数组

> 上述操作的同时会更改`length`或受到`length`的影响

```javascript
function reactive(obj) { 
    return new Proxy(obj,{ 
        // 省略其他拦截函数 
        set(target, key, newVal, receiver) { 
            if (isReadonly) { 
                console.warn(`属性 ${key} 是只读的`) 
                return true 
            } 
            
            const oldVal = target[key] 
            const type = Array.isArray(target) 
            // 如果代理目标是数组，则检测被设置的索引值是否小于数组长度， 
            // 如果是，则视作 SET 操作，否则是 ADD 操作 
            ? Number(key) < target.length ? 'SET' : 'ADD' 
            : Object.prototype.hasOwnProperty.call(target, key) ? 'SET' : 'ADD' 
            
            const res = Reflect.set(target, key, newVal, receiver) 
            if (target === receiver.raw) { 
                if (oldVal !== newVal && (oldVal === oldVal || newVal === newVal)) { 
                    // 增加第四个参数，即触发响应的新值（新的索引值）
                    trigger(target, key, type, newVal) 
                } 
            } 
            return res 
        }
        ownKeys(target) { 
            // 如果操作目标 target 是数组，则使用 length 属性作为 key 并建立响应联系 
            track(target, Array.isArray(target) ? 'length' : ITERATE_KEY) 
            return Reflect.ownKeys(target) 
        } 
        // 省略其他拦截函数 
    }) 
}

function trigger(target, key, type) { 
    // 省略部分内容 

    // 当操作类型为 ADD 并且目标对象是数组时，应该取出并执行那些与 length属性相关联的副作用函数 
    if (type === 'ADD' && Array.isArray(target)) { 
        // 取出与 length 相关联的副作用函数 
        const lengthEffects = depsMap.get('length') 
        // 将这些副作用函数添加到 effectsToRun 中，待执行 
        lengthEffects && lengthEffects.forEach(effectFn => { 
            if (effectFn !== activeEffect) { 
                effectsToRun.add(effectFn) 
            } 
        }) 
    } 
    
    if (Array.isArray(target) && key === 'length') { 
        // 对于索引大于或等于新的 length 值的元素， 
        // 需要把所有相关联的副作用函数取出并添加到 effectsToRun 中待执行 
        depsMap.forEach((effects, key) => { 
            if (key >= newVal) { 
                effects.forEach(effectFn => { 
                    if (effectFn !== activeEffect) { 
                        effectsToRun.add(effectFn) 
                    } 
                }) 
            } 
        }) 
    }

    // 省略部分内容 
}
```

`includes、indexof、lastIndexOf`：根据给定的值返回查找结果

- arr里的this指向代理对象，拿原始数组中的对象去对比，找不到

```javascript
const arrayInstrumentations = {};
['includes', 'indexOf', 'lastIndexOf'].forEach(method => { 
    const originMethod = Array.prototype[method] 
    arrayInstrumentations[method] = function(...args) { 
        // this 是代理对象，先在代理对象中查找，将结果存储到 res 中 
        let res = originMethod.apply(this, args) 

        if (res === false || res === -1) { 
            // res 为 false 说明没找到，通过 this.raw 拿到原始数组，再去其中查找，并更新 res 值 
            res = originMethod.apply(this.raw, args) 
        } 
        // 返回最终结果 
        return res 
    } 
})

function createReactive(obj, isShallow = false, isReadonly = false) { 
    return new Proxy(obj, { 
        // 拦截读取操作 
        get(target, key, receiver) { 
            if (key === 'raw') { 
                return target 
            } 
            
            // 如果操作的目标对象是数组，并且 key 存在于arrayInstrumentations 上， 
            // 那么返回定义在 arrayInstrumentations 上的值 
            if (Array.isArray(target) &&
                arrayInstrumentations.hasOwnProperty(key)) { 
                return Reflect.get(arrayInstrumentations, key, receiver) 
            } 

            if (!isReadonly && typeof key !== 'symbol') { 
                track(target, key) 
            } 
            const res = Reflect.get(target, key, receiver) 
            if (isShallow) { 
                return res 
            } 
            if (typeof res === 'object' && res !== null) { 
                return isReadonly ? readonly(res) : reactive(res) 
            } 
            return res 
        }, 
    }) 
}
```

`push、pop、shift、unshift、splice`：隐式修改数组的长度

push的执行流程：

- 判断数组的length加上参数的length有没有超过范围
- 遍历参数，设置数组内的值，然后length+1
- return length

在push的时候，即会读取数组的length，又会修改数组的length，如果我们只是执行一次，应该不会出什么问题，但如果我们执行了多次，那就会出现爆栈。

```js
let shouldTrack = true;
// 重写数组的 push、pop、shift、unshift 以及 splice 方法 
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(method =>{ 
    const originMethod = Array.prototype[method];
    arrayInstrumentations[method] = function(...args) { 
        shouldTrack = false 
        let res = originMethod.apply(this, args) 
        shouldTrack = true 
        return res 
    } 
})

function track(target, key) { 
    // 当禁止追踪时，直接返回 
    if (!activeEffect || !shouldTrack) return 
    // 省略部分代码 
}
```
