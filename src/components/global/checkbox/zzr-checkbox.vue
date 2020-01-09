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
               v-if="trueLabel || falseLabel"
               :disabled="isDisabled"
               :true-value="trueLabel"
               :false-value="falseLabel"
               v-model="model"
               :name="name"
               @change="handleChange"
               @focus="focus = true"
               @blur="focus = false">
        <input type="checkbox" class="zzr-checkbox__original"
               v-else
               v-model="model"
               :disabled="isDisabled"
               :name="name"
               :value="label"
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
import Emitter from '../../../mixins/emitter'
export default {
  name: 'zzr-checkbox',
  componentName: 'ZzrCheckbox',
  mixins: [Emitter],
  props: {
    label: {},
    value: {},
    name: {},
    checked: Boolean,
    disabled: Boolean,
    trueLabel: [String, Number],
    falseLabel: [String, Number]
  },
  computed: {
    // 父组件接收到的v-model的值
    model: {
      get () {
        // 是复选组则为组级别v-model的值; 不存在复选组时,则为自身v-model的值
        return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel
      },
      set (val) {
        if (this.isGroup) {
          this.isLimitExceeded = false;
          // 如果复选组存在,且最小数量比数组val 多 则设置超过限制
          (this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min && (this.isLimitExceeded = true));

          (this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max && (this.isLimitExceeded = true))
          // 如果没有超出仙子,那么给复选组派发 val值
          this.isLimitExceeded === false && this.dispatch('ZzrCheckboxGroup', 'input', [val])
        } else {
          // 如果不是复选组, 那么触发input,传值val,设置自身model 为 val,val 为true或者false
          this.$emit('input', val)
          this.selfModel = val
        }
      }
    },
    store () {
      // 存在复选组 则 为 复选组的值 ,不存在 则为 v-model的值
      return this._checkboxGroup ? this._checkboxGroup.value : this.value
    },
    isGroup () {
      // 判断是否包含组
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'ZzrCheckboxGroup') {
          parent = parent.$parent
        } else {
          this._checkboxGroup = parent
          return true
        }
      }
      return false
    },
    isDisabled () {
      return this.isGroup
        ? this._checkboxGroup.disabled || this.disabled || (this.elForm || {}).disabled || this.isLimitDisabled
        : this.disabled || (this.elForm || {}).disabled
    },
    isChecked () {
      // if ({}.toString.call(this.model) === '[object Boolean]') {
      //   return this.model
      // } else if (Array.isArray(this.model)) {
      //   return this.model.indexOf(this.label) > -1
      // } else if (this.model !== null && this.model !== undefined) {
      //   return this.model === this.trueLabel
      // }
      if (typeof this.model === 'string') {
        return this.model.indexOf(this.label) > -1
      } else if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel
      }
    }
  },
  watch: {
    // value: {
    //   handler () {
    //     if (typeof this.value === 'string' && this.value.indexOf(this.label) > -1) {
    //       this.isChecked = true
    //     }
    //   },
    //   immediate: true
    // }
    value (value) {
      this.dispatch('ElFormItem', 'el.form.change', value)
    }
  },
  data () {
    return {
      focus: false,
      selfModel: false,
      isLimitExceeded: false
    }
  },
  created () {
    // 如果选中 则
    this.checked && this.addToStore()
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
    handleChange (ev) {
      if (this.isLimitExceeded) return
      let value
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel
      }
      // this.isChecked = !this.isChecked
      // checkbox 的change
      this.$emit('change', value, ev)
      this.$nextTick(() => {
        if (this.isGroup) {
          // 触发复选组的change
          this.dispatch('ZzrCheckboxGroup', 'change', [this._checkboxGroup.value])
        }
      })
    //  是否存在上级
    },
    addToStore () {
      // 即为复选组时,且不包含标签值 则添加进去model
      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label)
      } else {
        this.model = this.trueLabel || true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "zzr-checkbox";
</style>
