<template>
    <div class="zzr-switch" @click.prevent="switchValue"  :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }">
      <input type="checkbox" class="zzr-switch__input" ref="input" @change="handleChange">
      <span
        :class="['zzr-switch__label', 'zzr-switch__label--left', !checked ? 'is-active' : '']"
        v-if="inactiveIconClass || inactiveText">
      <i :class="[inactiveIconClass]" v-if="inactiveIconClass"></i>
      <span v-if="!inactiveIconClass && inactiveText" :aria-hidden="checked">{{ inactiveText }}</span>
    </span>
      <span class="zzr-switch__core" ref="core" :style="{ 'width': coreWidth + 'px' }"></span>
      <span
        :class="['zzr-switch__label', 'zzr-switch__label--right', checked ? 'is-active' : '']"
        v-if="activeIconClass || activeText">
      <i :class="[activeIconClass]" v-if="activeIconClass"></i>
      <span v-if="!activeIconClass && activeText" :aria-hidden="!checked">{{ activeText }}</span>
    </span>
    </div>
</template>

<script>
export default {
  name: 'zzr-switch',
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    activeIconClass: {
      type: String,
      default: ''
    },
    inactiveIconClass: {
      type: String,
      default: ''
    },
    activeText: String,
    inactiveText: String
  },
  data () {
    return {
      coreWidth: this.width
    }
  },
  computed: {
    checked () {
      // 当现有值和激活值相等时,返回true, 默认选中,点击触发value,触发这里
      return this.value === this.activeValue
    },
    switchDisabled () {
      return this.disabled || (this.elForm || {}).disabled
    }
  },
  watch: {
    checked () {
      this.$refs.input.checked = this.checked
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor()
      }
    },
    switchDisabled () {
      return this.disabled || (this.elForm || {}).disabled
    }
  },
  created () {
    // 默认
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit('input', this.inactiveValue)
    }
  },
  mounted () {
    this.coreWidth = this.width || 80
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor()
    }
    this.$refs.input.checked = this.checked
  },
  methods: {
    handleChange (event) {
      // 默认 this.inactiveValue=false/activeValue=true
      const val = this.checked ? this.inactiveValue : this.activeValue;
      console.log(val)
      this.$emit('input', val)
      this.$emit('change', val)
      this.$nextTick(() => {
        // set input's checked property
        // in case parent refuses to change component's value
        this.$refs.input.checked = this.checked
      })
    },
    switchValue () {
      !this.switchDisabled && this.handleChange()
    },
    setBackgroundColor () {
      let newColor = this.checked ? this.activeColor : this.inactiveColor
      this.$refs.core.style.borderColor = newColor
      this.$refs.core.style.backgroundColor = newColor
    }
  }
}
</script>

<style lang="scss">
@import "switch";
</style>
