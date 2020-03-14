<template>
  <div :class="[
      type === 'textarea' ? 'zzr-textarea' : 'zzr-input',
      inputSize ? 'zzr-input--' + inputSize : '',
      {
        'is-disabled': inputDisabled,
        'zzr-input--prefix': $slots.prefix || prefixIcon,
        'zzr-input--suffix': $slots.suffix || suffixIcon || clearable
      }
    ]" @mouseenter="hovering = true" @mouseleave="hovering = false">
    <template v-if="type !== 'textarea'">
      <!--        前置-->
      <div class="zzr-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input type="text"
             v-if="type !== 'textarea'"
             class="zzr-input__inner"
             ref="input"
             v-bind="$attrs"
             @input="handleInput"
             @focus="handleFocus"
             @blur="handleBlur"
             @change="handleChange"
      >
      <!--        前置内容-->
      <span class="zzr-input__prefix" v-if="this.$slots.prefix || prefixIcon">
          <slot name="prefix"></slot>
          <zzr-icon :name="prefixIcon" class="zzr-icon__icon" v-if="prefixIcon"></zzr-icon>
        </span>
      <!--        后置内容-->
      <span class="zzr-input__suffix" v-if="getSuffixVisible()">
          <span class="zzr-input__suffix-inner">
            <template v-if="!showClear">
              <slot name="suffix"></slot>
               <zzr-icon :name="suffixIcon" class="zzr-icon__icon" v-if="suffixIcon"></zzr-icon>
            </template>
            <span v-if="showClear" @click="clear">
              <zzr-icon name="roundclose" class="zzr-icon__icon zzr-input__clear"></zzr-icon>
            </span>

          </span>
        </span>
      <!--        后置元素-->
      <div class="zzr-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea v-else ref="textarea" class="zzr-textarea__inner" :style="textareaStyle" v-bind="$attrs"
              @change="handleChange"
              @input="handleInput"
    ></textarea>
  </div>
</template>

<script>
import ZzrIcon from '../icon/zzr-icon'
import calcTextareaHeight from './calcTextareaHeight'
import merge from '../../../util/merge'
// import { isKorean } from '../../../util/shared'

export default {
  name: 'zzr-input',
  components: { ZzrIcon },
  props: {
    type: {
      type: String,
      defalut: ''
    },
    value: [String, Number],
    size: String,
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    suffixIcon: String,
    prefixIcon: String,
    autosize: {
      type: [Boolean, Object],
      default: false
    }
  },
  data () {
    return {
      textareaCalcStyle: {},
      hovering: false,
      focused: false,
      isComposing: false
    }
  },
  computed: {
    inputSize () {
      return this.size
    },
    inputDisabled () {
      return this.disabled
    },
    nativeInputValue () {
      // 根据v-model的输入值判断值
      return this.value === null || this.value === undefined ? '' : String(this.value)
    },
    showClear () {
      // 当clearable存在, 获取焦点或者悬停时,showClear为true
      return this.clearable && !this.inputDisabled && this.nativeInputValue && (this.focused || this.hovering)
    },
    textareaStyle () {
      return merge({}, this.textareaCalcStyle, { resize: this.resize })
    }
  },
  watch: {
    value () {
      this.$nextTick(this.resizeTextarea)
    },
    nativeInputValue () {
      this.setNativeInputValue()
    },
    type () {
      this.$nextTick(() => {
        this.setNativeInputValue()
        this.resizeTextarea()
      })
    }
  },
  mounted () {
    this.setNativeInputValue()
    this.resizeTextarea()
  },
  methods: {
    handleFocus (event) {
      this.focused = true
      this.$emit('focus', event);
    },
    handleBlur (event) {
      this.focused = false
    },
    handleInput (event) {
      if (this.isComposing) return
      if (event.target.value === this.nativeInputValue) return
      this.$emit('input', event.target.value)
      this.$nextTick(this.setNativeInputValue)
    },
    handleChange (event) {
      console.log(event)
      this.$emit('change', event.target.value)
    },
    clear () {
      // this.$emit('input', '')
      console.log(111111111111)
      this.$refs.input.value = ''
      // this.$emit('change', '')
    },
    getSuffixVisible () {
      return this.$slots.suffix || this.suffixIcon || this.showClear
    },
    getInput () {
      return this.$refs.input || this.$refs.textarea
    },
    // 获取输入框的值,判断是否为空和是否与设置值一样
    setNativeInputValue () {
      const input = this.getInput()
      if (!input) return
      if (input.value === this.nativeInputValue) return
      input.value = this.nativeInputValue
    },
    resizeTextarea () {
      if (this.$isServer) return
      const { autosize, type } = this
      if (type !== 'textarea') return
      if (!autosize) {
        // 不存在则设置最小高度为2
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
        }
        return
      }
      // autosize传递对象
      const minRows = autosize.minRows
      const maxRows = autosize.maxRows
      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows)
    },
    // handleCompositionStart () {
    //   console.log('111111111111111111111')
    //   this.isComposing = true
    // },
    // handleCompositionUpdate (event) {
    //   const text = event.target.value
    //   const lastCharacter = text[text.length - 1] || ''
    //   this.isComposing = !isKorean(lastCharacter)
    // },
    // handleCompositionEnd (event) {
    //   if (this.isComposing) {
    //     this.isComposing = false
    //     this.handleInput(event)
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
  @import "zzr-input";
</style>
