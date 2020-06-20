import Vue from 'vue'
import Main from './zzr-message.vue'
import { PopupManager } from '../../../util/popup'
import { isVNode } from '../../../util/vdom'
let MessageConstructor = Vue.extend(Main)

let instance
let instances = []
let seed = 1
const Message = function (options) {
  console.log(options)

  if (Vue.prototype.$isServer) return
  options = options || {}
  // 选项如果为字符串,则message=options
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  // 两个变量
  let userOnClose = options.onClose
  let id = 'message_' + seed++

  // options中的onClose方法
  options.onClose = function () {
    Message.close(id, userOnClose)
  }
  // 实例,将options里面所有的数据都交给data,就是一个vue实例 const com = new Vue({})
  instance = new MessageConstructor({
    // 将options所有属性都交给data
    data: options
  })
  // 所以instance相当 this
  instance.id = id
  // 判断是否为虚拟节点
  console.log(typeof isVNode)
  if (isVNode(instance.message)) {
    // 如果传递了message, 则放入默认插槽中,如果为字符串, 这个中括号是数组吗 $slots.default为数组,把message当文本属性
    instance.$slots.default = [instance.message]
    instance.message = null
  }
  // 挂载
  instance.$mount()
  // 将当前实例dom添加到body后面
  document.body.appendChild(instance.$el)
  // 垂直偏移
  let verticalOffset = options.offset || 20
  // 多个则设置间距
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  // 实例之间的间距
  instance.verticalOffset = verticalOffset
  // 实例的可见属性设置为true
  instance.visible = true
  // 实例的层级
  instance.$el.style.zIndex = PopupManager.nextZIndex()
  instances.push(instance)
  return instance
};

['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

// 添加close方法
Message.close = function (id, userOnClose) {
  let len = instances.length
  let index = -1
  let removedHeight
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight
      index = i
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return
  for (let i = index; i < len - 1; i++) {
    let dom = instances[i].$el
    dom.style['top'] =
      parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px'
  }
}

// 关闭所有
Message.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}
export default Message

// 把message挂载到vue上,当传入options为字符串的时候, 重置options = { message: options}
