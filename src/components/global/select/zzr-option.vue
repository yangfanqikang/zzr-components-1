<template>
  <li
    v-show="visible"
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
    class="zzr-select-dropdown__item"
    :class="{
        'selected': itemSelected,
         'is-disabled': disabled || groupDisabled,
      'hover': hover
    }">
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script>
import Emitter from '../../../mixins/emitter'
import { getValueByPath, escapeRegexpString } from '../../../util/util'

export default {
  name: 'zzr-option',
  componentName: 'ZzrOption',
  mixins: [Emitter],
  // 将父级实例select注入到option里
  inject: ['select'],
  props: {
    value: {
      require: true
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isObject () {
      // 判断是否是对象
      return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]'
    },
    currentLabel () {
      return this.label || (this.isObject ? '' : this.value)
    },
    currentValue () {
      return this.value || this.label || ''
    },
    itemSelected () {
      if (!this.select.multiple) {
        // 若不为多选,是否为同一选项
        return this.isEqual(this.value, this.select.value)
      } else {
        // 当为多选时,是否包含此选项
        return this.contains(this.select.value, this.value)
      }
    }
  },
  watch: {
    currentLabel () {
      if (!this.created && !this.select.remote) this.dispatch('ZzrSelect', 'setSelected')
    },
    value (val, oldVal) {
      console.log('^^^^^^^^^^^^^^^^^^')
      const { valueKey, remote } = this.select
      if (!this.created && !remote) {
        if (valueKey && typeof val === 'object' && typeof oldVal === 'object' && val[valueKey] === oldVal[valueKey]) {
          return
        }
        // 想select选择器传递事件
        console.log('watch>>>>value>>>>>>>>>>' + this)
        this.dispatch('ZzrSelect', 'setSelected')
      }
    }
  },
  data () {
    return {
      visible: true,
      hover: false,
      groupDisabled: false,
      index: -1
    }
  },
  created () {
    this.select.options.push(this)
    this.select.cachedOptions.push(this)
    this.select.optionsCount++
    this.select.filteredOptionsCount++
    // 监听查询改变
    this.$on('queryChange', this.queryChange)
    // 监听是否组级别禁用
    // this.$on('handleGroupDisabled', this.handleGroupDisabled)
  },
  methods: {
    isEqual (a, b) {
      if (!this.isObject) {
        return a === b
      } else {
        const valueKey = this.select.valueKey
        return getValueByPath(a, valueKey) === getValueByPath(b, valueKey)
      }
    },
    contains (arr = [], target) {
      if (!this.isObject) {
        return arr && arr.indexOf(target) > -1
      } else {
        const valueKey = this.select.valueKey
        return arr && arr.some(item => {
          return getValueByPath(item, valueKey) === getValueByPath(target, valueKey)
        })
      }
    },
    hoverItem () {
      if (!this.disabled && !this.groupDisabled) {
        // 当可用之时,悬停的次序,将当前置顶
        this.select.hoverIndex = this.select.options.indexOf(this)
      }
    },
    selectOptionClick () {
      if (this.disabled !== true && this.groupDisabled !== true) {
        console.log('>>>>>>>>>>this>>>>>>', this)
        this.dispatch('ZzrSelect', 'handleOptionClick', [this, true])
      }
    },
    // 可搜索
    queryChange (query) {
      // 搜索能成功,但是直接多添加了一个
      console.log('>>>>>>>>>>>>>option=============queryChange'+ query)
      this.visible = new RegExp(escapeRegexpString(query), 'i').test(this.currentLabel) || this.created
      console.log(this.visible)
      if (!this.visible) {
        this.select.filteredOptionsCount--
      }
    },
    handleGroupDisabled () {
    }
  }
}
</script>

<style lang="scss">
  @import "option";
</style>
