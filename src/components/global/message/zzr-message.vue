<template>
  <transition name="zzr-message-fade" @after-leave="handleAfterLeave">
    <div
      :class="[
        'zzr-message',
        type && !iconClass ? `zzr-message--${ type }` : '',
        center ? 'is-center' : '',
        showClose ? 'is-closable' : '',
        customClass
      ]"
      :style="positionStyle"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      role="alert">
      <i :class="iconClass" v-if="iconClass"></i>
      <i :class="typeClass" v-else></i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="zzr-message__content">{{ message }}</p>
        <p v-else v-html="message" class="zzr-message__content"></p>
      </slot>
      <i v-if="showClose" class="zzr-message__closeBtn el-icon-close" @click="close"></i>
    </div>
  </transition>
</template>

<script type="text/babel">
const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}

export default {
  name: 'zz-message',
  data () {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: 'info',
      iconClass: '',
      customClass: '',
      onClose: null,
      showClose: false,
      closed: false,
      verticalOffset: 20,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false
    }
  },

  computed: {
    typeClass () {
      return this.type && !this.iconClass
        ? `zzr-message__icon el-icon-${typeMap[this.type]}`
        : ''
    },
    positionStyle () {
      return {
        'top': `${this.verticalOffset}px`
      }
    }
  },

  watch: {
    // 根据这个值判断visible是否关闭
    closed (newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  },

  methods: {
    // 离开就删除当前元素
    handleAfterLeave () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },

    close () {
      this.closed = true
      // 如果onClose是函数的话,调用
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },

    clearTimer () {
      clearTimeout(this.timer)
    },

    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    keydown (e) {
      if (e.keyCode === 27) { // esc关闭消息
        if (!this.closed) {
          this.close()
        }
      }
    }
  },
  mounted () {
    this.startTimer()
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.keydown)
  }
}
</script>
