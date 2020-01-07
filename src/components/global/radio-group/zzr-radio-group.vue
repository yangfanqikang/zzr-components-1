<template>
  <component
    :is="_zzrTag"
    class="zzr-radio-group"
    role="radiogroup"
    @keydown="handleKeydown"
  >
    <slot></slot>
  </component>
</template>
<script>
import Emitter from '../../../mixins/emitter'

const keyCode = Object.freeze({
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
})
export default {
  name: 'ZzrRadioGroup',

  componentName: 'ZzrRadioGroup',

  inject: {
    ZzrFormItem: {
      default: ''
    }
  },

  mixins: [Emitter],

  props: {
    value: {},
    size: String,
    fill: String,
    textColor: String,
    disabled: Boolean
  },

  computed: {
    _ZzrFormItemSize () {
      return (this.ZzrFormItem || {}).ZzrFormItemSize
    },
    _zzrTag () {
      return (this.$vnode.data || {}).tag || 'div'
    },
    radioGroupSize () {
      return this.size || this._ZzrFormItemSize || (this.$ELEMENT || {}).size
    }
  },

  created () {
    // 这里监听子组件的handleChange,触发给父集如form表单
    this.$on('handleChange', value => {
      this.$emit('change', value)
    })
  },
  mounted () {
    // 当radioGroup没有默认选项时，第一个可以选中Tab导航
    const radios = this.$el.querySelectorAll('[type=radio]')
    const firstLabel = this.$el.querySelectorAll('[role=radio]')[0]
    if (![].some.call(radios, radio => radio.checked) && firstLabel) {
      firstLabel.tabIndex = 0
    }
  },
  methods: {
    handleKeydown (e) { // 左右上下按键 可以在radio组内切换不同选项
      const target = e.target
      const className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
      const radios = this.$el.querySelectorAll(className)
      const length = radios.length
      const index = [].indexOf.call(radios, target)
      const roleRadios = this.$el.querySelectorAll('[role=radio]')
      switch (e.keyCode) {
        case keyCode.LEFT:
        case keyCode.UP:
          e.stopPropagation()
          e.preventDefault()
          if (index === 0) {
            roleRadios[length - 1].click()
            roleRadios[length - 1].focus()
          } else {
            roleRadios[index - 1].click()
            roleRadios[index - 1].focus()
          }
          break
        case keyCode.RIGHT:
        case keyCode.DOWN:
          if (index === (length - 1)) {
            e.stopPropagation()
            e.preventDefault()
            roleRadios[0].click()
            roleRadios[0].focus()
          } else {
            roleRadios[index + 1].click()
            roleRadios[index + 1].focus()
          }
          break
        default:
          break
      }
    }
  },
  watch: {
    value (value) {
      // 这里的监听与form相关
      this.dispatch('ZzrFormItem', 'el.form.change', [this.value])
    }
  }
}
</script>
<style lang="scss">
  @import "radio-group";
</style>
