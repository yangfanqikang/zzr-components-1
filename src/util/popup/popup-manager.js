import Vue from 'vue'
import { addClass, removeClass } from '../dom'

let hasModal = false
let hasInitZIndex = false
let zIndex
/**
 * 定义方法，获取模态框
 * @returns {HTMLDivElement | undefined}
 */
const getModal = function () {
  if (Vue.prototype.$isServer) return
  let modalDom = PopupManager.modalDom
  if (modalDom) {
    hasModal = true
  } else {
    hasModal = false
    // 如果没有模态框，则创建div，赋予popupManage的modalDom
    modalDom = document.createElement('div')
    PopupManager.modalDom = modalDom

    // 模态框div监听移动touchMove，阻止默认事件
    modalDom.addEventListener('touchmove', function (event) {
      event.preventDefault()
      event.stopPropagation()
    })
    // 监听点击事件，如果模态框点击存在则执行
    modalDom.addEventListener('click', function () {
      PopupManager.doOnModalClick && PopupManager.doOnModalClick()
    })
  }

  return modalDom
}

const instances = {}

const PopupManager = {
  modalFade: true,

  getInstance: function (id) {
    return instances[id]
  },

  register: function (id, instance) {
    if (id && instance) {
      instances[id] = instance
    }
  },

  deregister: function (id) {
    if (id) {
      instances[id] = null
      delete instances[id]
    }
  },

  nextZIndex: function () {
    return PopupManager.zIndex++
  },

  modalStack: [],
  /**
   * 弹出管理的模态湛
   */
  doOnModalClick: function () {
    // topItem 为最高级，如不过不存在则停止运转
    const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1]
    if (!topItem) return

    // 弹出管理获取实例，如果实例存在，closeOnClickModal也存在，则执行实例的关闭方法
    const instance = PopupManager.getInstance(topItem.id)
    if (instance && instance.closeOnClickModal) {
      instance.close()
    }
  },
  /**
   * 打开模态框，五种参数，id，zIndex，dom，modalClass，modalFade
   * @param id
   * @param zIndex
   * @param dom
   * @param modalClass
   * @param modalFade
   */
  openModal: function (id, zIndex, dom, modalClass, modalFade) {
    if (Vue.prototype.$isServer) return
    // 如果id不存在或者zIndex未定义 则返回
    if (!id || zIndex === undefined) return
    // 将modalFade参数赋予modalFade
    this.modalFade = modalFade

    // 将模态框 栈取出
    const modalStack = this.modalStack

    // 遍历循环，如果是同一个，则无需再弹出
    for (let i = 0, j = modalStack.length; i < j; i++) {
      const item = modalStack[i]
      if (item.id === id) {
        return
      }
    }

    const modalDom = getModal()

    addClass(modalDom, 'v-modal')
    if (this.modalFade && !hasModal) {
      addClass(modalDom, 'v-modal-enter')
    }
    if (modalClass) {
      let classArr = modalClass.trim().split(/\s+/)
      classArr.forEach(item => addClass(modalDom, item))
    }
    setTimeout(() => {
      removeClass(modalDom, 'v-modal-enter')
    }, 200)

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom)
    } else {
      document.body.appendChild(modalDom)
    }

    if (zIndex) {
      modalDom.style.zIndex = zIndex
    }
    modalDom.tabIndex = 0
    modalDom.style.display = ''

    this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass })
  },

  closeModal: function (id) {
    const modalStack = this.modalStack
    const modalDom = getModal()

    if (modalStack.length > 0) {
      const topItem = modalStack[modalStack.length - 1]
      if (topItem.id === id) {
        if (topItem.modalClass) {
          let classArr = topItem.modalClass.trim().split(/\s+/)
          classArr.forEach(item => removeClass(modalDom, item))
        }

        modalStack.pop()
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex
        }
      } else {
        for (let i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1)
            break
          }
        }
      }
    }

    if (modalStack.length === 0) {
      if (this.modalFade) {
        addClass(modalDom, 'v-modal-leave')
      }
      setTimeout(() => {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom)
          modalDom.style.display = 'none'
          PopupManager.modalDom = undefined
        }
        removeClass(modalDom, 'v-modal-leave')
      }, 200)
    }
  }
}

Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get () {
    if (!hasInitZIndex) {
      zIndex = zIndex || (Vue.prototype.$ELEMENT || {}).zIndex || 2000
      hasInitZIndex = true
    }
    return zIndex
  },
  set (value) {
    zIndex = value
  }
})

const getTopPopup = function () {
  if (Vue.prototype.$isServer) return
  if (PopupManager.modalStack.length > 0) {
    const topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1]
    if (!topPopup) return
    const instance = PopupManager.getInstance(topPopup.id)

    return instance
  }
}

if (!Vue.prototype.$isServer) {
  // handle `esc` key when the popup is shown
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      const topPopup = getTopPopup()

      if (topPopup && topPopup.closeOnPressEscape) {
        topPopup.handleClose
          ? topPopup.handleClose()
          : (topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close())
      }
    }
  })
}

export default PopupManager
