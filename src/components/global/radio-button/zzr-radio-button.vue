<template>
  <label
    class="zzr-radio-button"
    :class="[
      size ? 'zzr-radio-button--' + size : '',
      { 'is-active': value === label },
      { 'is-disabled': isDisabled },
      { 'is-focus': focus }
    ]"
    role="radio"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="value = isDisabled ? value : label"
  >
    <input
      class="zzr-radio-button__orig-radio"
      :value="label"
      type="radio"
      v-model="value"
      :name="name"
      @change="handleChange"
      :disabled="isDisabled"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false"
    >
    <span
      class="zzr-radio-button__inner"
      :style="value === label ? activeStyle : null"
      @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
import Emitter from '../../../mixins/emitter'

export default {
  name: 'ZzrRadioButton',

  mixins: [Emitter],

  inject: {
    zzrForm: {
      default: ''
    },
    zzrFormItem: {
      default: ''
    }
  },

  props: {
    label: {},
    disabled: Boolean,
    name: String
  },
  data () {
    return {
      focus: false
    }
  },
  computed: {
    value: {
      get () {
        return this._radioGroup.value
      },
      set (value) {
        this._radioGroup.$emit('input', value)
      }
    },
    _radioGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'ZzrRadioGroup') {
          parent = parent.$parent
        } else {
          return parent
        }
      }
      return false
    },
    activeStyle () {
      return {
        backgroundColor: this._radioGroup.fill || '',
        borderColor: this._radioGroup.fill || '',
        boxShadow: this._radioGroup.fill ? `-1px 0 0 0 ${this._radioGroup.fill}` : '',
        color: this._radioGroup.textColor || ''
      }
    },
    _zzrFormItemSize () {
      return (this.zzrFormItem || {}).zzrFormItemSize
    },
    size () {
      return this._radioGroup.radioGroupSize || this._zzrFormItemSize || (this.$ELEMENT || {}).size
    },
    isDisabled () {
      return this.disabled || this._radioGroup.disabled || (this.zzrForm || {}).disabled
    },
    tabIndex () {
      return (this.isDisabled || (this._radioGroup && this.value !== this.label)) ? -1 : 0
    }
  },

  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.dispatch('ZzrRadioGroup', 'handleChange', this.value)
      })
    }
  }
}
</script>
<style lang="scss">
  @import "radio-button";
</style>
