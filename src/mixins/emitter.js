// vue之自行实现派发与广播-dispatch与broadcast https://www.cnblogs.com/raind/p/10241720.html
/**
 * 广播 --父组件传给子组件?
 * 这里面的核心思想是通过递归或遍历来查找要broadcast或dispatch的组件名字，然后在组件自身上emit与on
 * @param componentName
 * @param eventName
 * @param params
 */
function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      // todo 如果 params 是空数组，接收到的会是 undefined
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}
export default {
  methods: {
    /**
     * 派发
     * 子组件与父组件通讯
     * @param componentName
     * @param eventName
     * @param params
     */
    dispatch (componentName, eventName, params) {
      var parent = this.$parent || this.$root
      var name = parent.$options.componentName

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.componentName
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
