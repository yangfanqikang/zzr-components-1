<template>
    <label class="zzr-checkbox">
      <span class="zzr-checkbox__input" :class="[
        {
          'is-checked': isChecked,
         'is-disabled': isDisabled
         }
      ]">
        <span class="zzr-checkbox__inner" :class="[
          {
           'is-checked': isChecked,
            'is-disabled': isDisabled,
          'is-focus': focus
          }
        ]"></span>
        <input type="checkbox" class="zzr-checkbox__original"
               v-model="model"
               @change="handleChange"
               @focus="focus = true"
               @blur="focus = false">
      </span>
      <span class="zzr-checkbox__label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
      </span>
    </label>
</template>

<script>
export default {
  name: 'zzr-checkbox',
  componentName: 'ZzrCheckbox',
  props: {
    label: {},
    value: {},
    checked: Boolean,
    disabled: Boolean
  },
  computed: {
    // 父组件接收到的v-model的值
    model: {
      get () {},
      set () {}
    },
    isGroup () {
      let parent = this.$parent
      console.log(parent)
      while (parent) {
        if (parent.$options.componentName !== 'ElCheckboxGroup') {
          parent = parent.$parent
        } else {
          this._checkboxGroup = parent
          return true
        }
      }
      return false
    },
    isDisabled () {
      return this.disabled
    }
  },
  watch: {
    value: {
      handler () {
        if (typeof this.value === 'string' && this.value.indexOf(this.label) > -1) {
          this.isChecked = true
        }
      },
      immediate: true
    }
  },
  data () {
    return {
      focus: false,
      isChecked: false
    }
  },
  created () {
    if (this.checked) {
      this.isChecked = this.checked
    }
    this.$on('on-message', this.showMessage)
  },
  // mounted () {
  //   if (this.$parent.$options.componentName === 'ZzrCheckboxGroup') {
  //     let val = this.$parent.$attrs.value
  //     console.log(val)
  //     if (val && val.includes(this.label)) {
  //       this.isChecked = true
  //     }
  //   }
  // },
  methods: {
    handleChange () {
      this.isChecked = !this.isChecked
      this.$emit('change', this.isChecked)
    //  是否存在上级
    },
    showMessage  (val) {
      console.log('来自group的v-model' + val)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "zzr-checkbox";
</style>
