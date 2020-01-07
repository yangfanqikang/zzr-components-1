<template>
  <label
    class="zzr-radio"
    :class="[
      border && radioSize ? 'zzr-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span class="zzr-radio__input"
          :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="zzr-radio__inner"></span>
      <input
        ref="radio"
        class="zzr-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
      >
    </span>
    <span class="zzr-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
import Emitter from '../../../mixins/emitter'

export default {
  name: 'ZzrRadio',

  mixins: [Emitter],
  // 与表单form一起用才会生效
  inject: {
    zzrForm: {
      default: ''
    },

    zzrFormItem: {
      default: ''
    }
  },

  componentName: 'ZzrRadio',

  props: {
    // 接收六个属性
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },

  data () {
    return {
      focus: false
    }
  },
  computed: {
    // 判断是否为单选组
    isGroup () {
      let parent = this.$parent
      while (parent) {
        // 父组件的名称不等于ZzrRadioGroup,继续往上
        if (parent.$options.componentName !== 'ZzrRadioGroup') {
          parent = parent.$parent
        } else {
          // 如果为单选组,增设置为this._radioGroup,且停止
          this._radioGroup = parent
          return true
        }
      }
      return false
    },
    model: {
      // 监听是否为单选组,若是则为单选组绑定的值,否则为本身value值
      get () {
        return this.isGroup ? this._radioGroup.value : this.value
      },
      set (val) {
        if (this.isGroup) {
          // 单选组 派发
          this.dispatch('ZzrRadioGroup', 'input', [val])
        } else {
          this.$emit('input', val)
        }
        // 当model==label时,设置为checked为true
        this.$refs.radio && (this.$refs.radio.checked = this.model === this.label)
      }
    },
    _zzrFormItemSize () {
      return (this.zzrFormItem || {}).zzrFormItemSize
    },
    radioSize () {
      const temRadioSize = this.size || this._zzrFormItemSize || (this.$ELEMENT || {}).size
      return this.isGroup
        ? this._radioGroup.radioGroupSize || temRadioSize
        : temRadioSize
    },
    isDisabled () {
      return this.isGroup
        ? this._radioGroup.disabled || this.disabled || (this.zzrForm || {}).disabled
        : this.disabled || (this.zzrForm || {}).disabled
    },
    tabIndex () {
      return (this.isDisabled || (this.isGroup && this.model !== this.label)) ? -1 : 0
    }
  },

  methods: {
    handleChange () {
      this.$nextTick(() => {
        // 给上级传递消息
        this.$emit('change', this.model)
        this.isGroup && this.dispatch('ZzrRadioGroup', 'handleChange', this.model)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "zzr-radio";
</style>
