<template>
  <div
    class="zzr-select"
    :class="[selectSize ? 'zzr-select--' + selectSize : '']"
    @click.stop="toggleMenu"
    v-clickoutside="handleClose">
    <div class="zzr-select__tags" ref="tags" v-if="multiple"
         :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }">
      <!--        判断折叠标签、选中数量-->
      <span v-if="collapseTags && selected.length">
          <zzr-tag
            :closable="!selectDisabled"
            :size="collapseTagSize"
            type="info"
            @close="deleteTag($event, selected[0])">
            <span class="zzr-select__tags-text">{{ selected[0].currentLabel }}</span>
          </zzr-tag>
          <zzr-tag
            v-if="selected.length > 1"
            :size="collapseTagSize"
            :closable="false"
            type="info">
            <span class="zzr-select__tags-text">+ {{ selected.length - 1 }}</span>
          </zzr-tag>
        </span>
      <transition-group @after-leave="resetInputHeight" v-if="!collapseTags">
        <zzr-tag v-for="item in selected" :key="getValueKey(item)" :closable="!selectDisabled"
                 @close="deleteTag($event, item)">
          <span class="zzr-select__tags-text">{{ item.currentLabel }}</span>
        </zzr-tag>
      </transition-group>
      <input
        type="text"
        class="zzr-select__input"
        :disabled="selectDisabled"
        @focus="handleFocus"
        @blur="softFocus = false"
        v-model="query"
        v-if="filterable"
        @input="debouncedQueryChange"
        :style="{ 'flex-grow': '1', width: inputLength / (inputWidth - 32) + '%', 'max-width': inputWidth - 42 + 'px' }"
        ref="input">

    </div>
    <zzr-input
      ref="reference"
      :disabled="selectDisabled"
      v-model="selectedLabel"
      :class="{ 'is-focus': visible }"
      :placeholder="currentPlaceholder"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.native="debouncedOnInputChange"
      @mouseenter.native="inputHovering = true"
      @mouseleave.native="inputHovering = false">
      <template slot="prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix">
        <i v-if="!showClose">
          <zzr-icon :name="iconClass"></zzr-icon>
        </i>
        <i v-if="showClose" @click="handleClickClear">
          <zzr-icon name="close"></zzr-icon>
        </i>
      </template>
    </zzr-input>
    <transition>
      <zzr-select-menu
        ref="popper"
        :append-to-body="popperAppendToBody"
        v-show="visible">
        <zzr-scrollbar
          tag="ul"
          wrap-class="zzr-select-dropdown__wrap"
          view-class="zzr-select-dropdown__list"
          ref="scrollbar"
          :class="{ 'is-empty': !allowCreate && query && filteredOptionsCount === 0 }"
          v-show="options.length > 0">
          <zzr-option
            class="zzr-123"
            :value="query"
            created
            v-if="showNewOption"
          ></zzr-option>
          <slot></slot>
        </zzr-scrollbar>
        <!--        当没有数据的时候如下展示-->
        <template v-if="emptyText && (!allowCreate || (allowCreate && options.length === 0 ))">
          <slot name="empty" v-if="$slots.empty"></slot>
          <p class="el-select-dropdown__empty" v-else>
            {{ emptyText }}
          </p>
        </template>
      </zzr-select-menu>
    </transition>
  </div>
</template>

<script>
import ZzrTag from '../tag/zzr-tag'
import ZzrInput from '../input/zzr-input'
import ZzrIcon from '../icon/zzr-icon'
import ZzrSelectMenu from './zzr-select-dropdown'
import ZzrOption from './zzr-option'
import ZzrScrollbar from '../scrollbar/index'
import Focus from '../../../mixins/focus'
import Emitter from '../../../mixins/emitter'
import { getValueByPath, valueEquals } from '../../../util/util'
import scrollIntoView from '../../../util/scroll-into-view'
import Clickoutside from '../../../util/clickoutside'
import { debounce } from '../../../util/throttle-debounce/index.cjs'
export default {
  name: 'zzr-select',
  components: { ZzrOption, ZzrIcon, ZzrInput, ZzrTag, ZzrSelectMenu, ZzrScrollbar },
  componentName: 'ZzrSelect',
  mixins: [Focus('reference'), Emitter],
  directives: { Clickoutside },
  provide () {
    return {
      // 将整个实例赋予select
      'select': this
    }
  },
  props: {
    value: {
      required: true
    },
    multiple: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    clearable: Boolean,
    collapseTags: Boolean,
    popperClass: String,
    iconClass: {
      type: String,
      default: 'unfold'
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    // 可过滤
    filterable: Boolean,
    allowCreate: Boolean,
    reserveKeyword: Boolean,
    remoteMethod: Function,
    filterMethod: Function,
    defaultFirstOption: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String
  },
  data () {
    return {
      options: [],
      cachedOptions: [],
      optionsCount: 0,
      filteredOptionsCount: 0,
      selected: this.multiple ? [] : {},
      query: '',
      menuVisibleOnFocus: false,
      visible: false,
      inputLength: 20,
      inputWidth: 0,
      remote: Boolean,
      softFocus: false,
      isSilentBlur: false,
      createdLabel: null,
      createdSelected: false,
      cachedPlaceHolder: '',
      currentPlaceholder: '',
      selectedLabel: '',
      hoverIndex: -1,
      inputHovering: false,
      multipleLimit: {
        type: Number,
        default: 0
      },
      automaticDropdown: Boolean,
      isOnComposition: false,
    }
  },
  computed: {
    showNewOption () {
      // 输入怎么就直接添加到options里面去了呢
      console.log(this.allowCreate)
      let hasExistingOption = this.options.filter(option => !option.created)
        .some(option => option.currentLabel === this.query)
      return this.filterable && this.allowCreate && this.query !== '' && !hasExistingOption
    },
    // 展示关闭
    showClose () {
      let hasValue = this.multiple
        ? Array.isArray(this.value) && this.value.length > 0
        : this.value !== undefined && this.value !== null && this.value !== ''
      let criteria = this.clearable &&
          !this.selectDisabled &&
          this.inputHovering &&
          hasValue
      return criteria
    },
    emptyText () {
      if (this.loading) {
        return this.loadingText || ('el.select.loading')
      } else {
        if (this.remote && this.query === '' && this.options.length === 0) return false
        if (this.filterable && this.query && this.options.length > 0 && this.filteredOptionsCount === 0) {
          return this.noMatchText || ('el.select.noMatch')
        }
        if (this.options.length === 0) {
          return this.noDataText || ('el.select.noData')
        }
      }
      return null
    },
    // 选项是否被禁用
    selectDisabled () {
      return this.disabled || (this.elForm || {}).disabled
    },
    selectSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
    },
    collapseTagSize () {
      return ['small', 'mini'].indexOf(this.selectSize) > -1
        ? 'mini'
        : 'small'
    },
    debounce () {
      return this.remote ? 300 : 300
    }
  },
  watch: {
    value (val, oldVal) {
      // 监听value是否变化
      console.log('>>>>>>>>>value (val, oldVal)')
      if (this.multiple) {
        // 如果多选时,重置input的高度
        this.resetInputHeight()
        if ((val && val.length > 0) || (this.$refs.input && this.query !== '')) {
          this.currentPlaceholder = ''
        } else {
          this.currentPlaceholder = this.cachedPlaceHolder
        }
        if (this.filterable && !this.reserveKeyword) {
          this.query = ''
          this.handleQueryChange(this.query)
        }
      }
      this.setSelected()
      if (this.filterable && !this.multiple) {
        this.inputLength = 20
      }
      if (!valueEquals(val, oldVal)) {
        // this.dispatch('ElFormItem', 'el.form.change', val)
      }
    },

    visible (val) {
      if (!val) {
        // 如果不可见,通知下拉选择销毁Popper
        this.broadcast('ZzrSelectDropdown', 'destroyPopper')
        // 如果refs 存在,则让input失焦
        if (this.$refs.input) {
          this.$refs.input.blur()
        }
        // 将query置空
        this.query = ''
        this.previousQuery = null
        // 将已选中标签置空
        this.selectedLabel = ''
        this.inputLength = 20
        // 将菜单设置不可见
        this.menuVisibleOnFocus = false
        // 重置悬停索引
        this.resetHoverIndex()
        this.$nextTick(() => {
          // input存在并无value值且无选中值,则将占位字符重新设置
          if (this.$refs.input &&
              this.$refs.input.value === '' &&
              this.selected.length === 0) {
            this.currentPlaceholder = this.cachedPlaceHolder
          }
        })
        // 如果不存在多个
        if (!this.multiple) {
          console.log('**********', 'watch visible')
          // 如果已有选中项
          if (this.selected) {
            // 如果可过滤和允许创建
            if (this.filterable && this.allowCreate &&
                this.createdSelected && this.createdLabel) {
              this.selectedLabel = this.createdLabel
            } else {
              console.log(this.selected)
              this.selectedLabel = this.selected.currentLabel
            }
            if (this.filterable) this.query = this.selectedLabel
          }

          // if (this.filterable) {
          //   this.currentPlaceholder = this.cachedPlaceHolder;
        }
      } else {
        // 如果下拉选项可见,则通知下来选项
        this.broadcast('ZzrSelectDropdown', 'updatePopper')
        if (this.filterable) {
          // 如果过滤存在, 当remote存在时,query为空,当不存在时,为当前selectedLabel
          this.query = this.remote ? '' : this.selectedLabel
          // 启动查询
          this.handleQueryChange(this.query)
          if (this.multiple) {
            this.$refs.input.focus()
          } else {
            if (!this.remote) {
              this.broadcast('ZzrOption', 'queryChange', '')
              this.broadcast('ZzrOptionGroup', 'queryChange')
            }

            if (this.selectedLabel) {
              // 如果选中项存在,则如此设置
              this.currentPlaceholder = this.selectedLabel
              this.selectedLabel = ''
            }
          }
        }
      }
      // 触发 visible-change事件
      // this.$emit('visible-change', val);
    },
    options () {
      if (this.$isServer) return
      this.$nextTick(() => {
        this.broadcast('ZzrSelectDropdown', 'updatePopper')
      })
      if (this.multiple) {
        this.resetInputHeight()
      }
      let inputs = this.$el.querySelectorAll('input')
      if ([].indexOf.call(inputs, document.activeElement) === -1) {
        this.setSelected()
      }
      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
        this.checkDefaultFirstOption()
      }
    }
  },
  created () {
    this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder
    if (this.multiple && !Array.isArray(this.value)) {
      // 如果多选存在, 设置 value初始值为数组
      this.$emit('input', [])
    }
    if (!this.multiple && Array.isArray(this.value)) {
      // 如果不存在设置value的初始值为字符串
      this.$emit('input', '')
    }

    // 松开键盘时调用
    this.debouncedOnInputChange = debounce(this.debounce, () => {
      this.onInputChange()
    })

    // 木有动
    this.debouncedQueryChange = debounce(this.debounce, (e) => {
      this.handleQueryChange(e.target.value)
    })

    this.$on('handleOptionClick', this.handleOptionSelect)
    this.$on('setSelected', this.setSelected)
  },
  mounted () {
    if (this.multiple && Array.isArray(this.value) && this.value.length > 0) {
      // 如果为多选的情况,且value有值,那么设置当前占位符为字符串''
      this.currentPlaceholder = ''
    }
    // addResizeListener(this.$el, this.handleResize);
    const reference = this.$refs.reference
    if (reference && reference.$el) {
      const sizeMap = {
        medium: 36,
        small: 32,
        mini: 28
      }
      const input = reference.$el.querySelector('input')
      this.initialInputHeight = input.getBoundingClientRect().height || sizeMap[this.selectSize]
    }
    if (this.remote && this.multiple) {
      this.resetInputHeight()
    }
    this.$nextTick(() => {
      if (reference && reference.$el) {
        this.inputWidth = reference.$el.getBoundingClientRect().width
      }
    })
    this.setSelected()
  },
  methods: {
    toggleMenu () {
      if (!this.selectDisabled) {
        if (this.menuVisibleOnFocus) {
          this.menuVisibleOnFocus = false
        } else {
          this.visible = !this.visible
        }
        if (this.visible) {
          // this.$refs.input.focus() || this.$refs.reference.$refs.input.focus()
        }
      }
    },
    handleClose () {
      this.visible = false
    },
    handleFocus (event) {
      if (!this.softFocus) {
        if (this.automaticDropdown || this.filterable) {
          this.visible = true
          if (this.filterable) {
            this.menuVisibleOnFocus = true
          }
        }
        this.$emit('focus', event)
      } else {
        this.softFocus = false
      }
    },
    handleBlur (event) {
      setTimeout(() => {
        if (this.isSilentBlur) {
          this.isSilentBlur = false
        } else {
          this.$emit('blur', event)
        }
      }, 50)
      this.softFocus = false
    },
    handleClickClear (event) {
      this.deleteSelected(event)
    },
    deleteSelected (event) {
      // 阻止冒泡
      event.stopPropagation()
      const value = this.multiple ? [] : ''
      this.$emit('input', value)
      this.emitChange(value)
      this.visible = false
      this.$emit('clear')
    },
    handleQueryChange (val) {
      if (this.previousQuery === val || this.isOnComposition) return
      if (
        this.previousQuery === null &&
          (typeof this.filterMethod === 'function' || typeof this.remoteMethod === 'function')
      ) {
        this.previousQuery = val
        return
      }
      this.previousQuery = val
      this.$nextTick(() => {
        if (this.visible) this.broadcast('ZzrSelectDropdown', 'updatePopper')
      })
      this.hoverIndex = -1
      if (this.multiple && this.filterable) {
        this.$nextTick(() => {
          const length = this.$refs.input.value.length * 15 + 20
          this.inputLength = this.collapseTags ? Math.min(50, length) : length
          this.managePlaceholder()
          this.resetInputHeight()
        })
      }
      if (this.remote && typeof this.remoteMethod === 'function') {
        this.hoverIndex = -1
        this.remoteMethod(val)
      } else if (typeof this.filterMethod === 'function') {
        this.filterMethod(val)
        this.broadcast('ZzrOptionGroup', 'queryChange')
      } else {
        this.filteredOptionsCount = this.optionsCount
        // 输入搜索条件的时候,走的是这里
        console.log('>>>>>>>>>>', this.filteredOptionsCount, val)
        this.broadcast('ZzrOption', 'queryChange', val)
        this.broadcast('ZzrOptionGroup', 'queryChange')
      }
      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
        console.log('>>>>>>>>>>', this.defaultFirstOption)
        this.checkDefaultFirstOption()
      }
    },
    checkDefaultFirstOption () {
      this.hoverIndex = -1
      // highlight the created option
      let hasCreated = false
      for (let i = this.options.length - 1; i >= 0; i--) {
        if (this.options[i].created) {
          hasCreated = true
          this.hoverIndex = i
          break
        }
      }
      if (hasCreated) return
      for (let i = 0; i !== this.options.length; ++i) {
        const option = this.options[i]
        if (this.query) {
          // highlight first options that passes the filter
          if (!option.disabled && !option.groupDisabled && option.visible) {
            this.hoverIndex = i
            break
          }
        } else {
          // highlight currently selected option
          if (option.itemSelected) {
            this.hoverIndex = i
            break
          }
        }
      }
    },

    // 传递选择事件
    handleOptionSelect (option, byClick) {
      console.log('handleOptionSelect')
      if (this.multiple) {
        // 如果多选存在
        const value = (this.value || []).slice() // 数组
        const optionIndex = this.getValueIndex(value, option.value)
        if (optionIndex > -1) {
          value.splice(optionIndex, 1)
        } else if (this.multipleLimit.default <= 0 || value.length < this.multipleLimit.default) {
          // 将选中值 push进value数组
          value.push(option.value)
        }
        // 这里触发了value的监听器的改变
        this.$emit('input', value)
        this.emitChange(value)
        if (option.created) {
          this.query = ''
          this.handleQueryChange('')
          this.inputLength = 20
        }
        // if (this.filterable) this.$refs.input.focus()
      } else {
        // 如果为单选, 则为v-model的值
        console.log('*********')
        this.$emit('input', option.value)
        this.emitChange(option.value)
        this.visible = false
      }
      this.isSilentBlur = byClick
      this.setSoftFocus()
      if (this.visible) return
      this.$nextTick(() => {
        this.scrollToOption(option)
      })
    },
    emitChange (val) {
      if (!valueEquals(this.value, val)) {
        // 判断两个数组是否相等
        console.log('>>>>>>>>>>', val)
        this.$emit('change', val)
      }
    },
    setSoftFocus () {
      this.softFocus = true
      const input = this.$refs.input || this.$refs.reference
      if (input) {
        // input.focus()
        // console.log(input)
      }
    },
    scrollToOption (option) {
      // 如果option为数组,则target为第一个的dom结构
      const target = Array.isArray(option) && option[0] ? option[0].$el : option.$el
      if (this.$refs.popper && target) {
        // 如果popper和第一个存在, 则选择弹出框的包裹class类
        const menu = this.$refs.popper.$el.querySelector('.zzr-select-dropdown__wrap')
        scrollIntoView(menu, target)
      }
      this.$refs.scrollbar && this.$refs.scrollbar.handleScroll()
    },
    // 接收设置事件
    setSelected () {
      if (!this.multiple) {
        // 不为多选时, 设置新的选项
        let option = this.getOption(this.value)
        if (option.created) {
          // 如果存在已创建,设置当前标签为createLabel
          this.createdLabel = option.currentLabel
          this.createdSelected = true
        } else {
          // 如果没有,设置为false
          this.createdSelected = false
        }
        // 将当前标签赋值给已选标签, <<<这里是关键值的赋值>>>
        this.selectedLabel = option.currentLabel
        // 将选项赋值给已选
        this.selected = option
        // 如果可过滤,将已选标签赋值给query查询
        if (this.filterable) this.query = this.selectedLabel
        return
      }
      let result = []
      if (Array.isArray(this.value)) {
        this.value.forEach(value => {
          result.push(this.getOption(value))
          console.log(result)
        })
      }
      this.selected = result
      this.$nextTick(() => {
        this.resetInputHeight()
      })
    },
    // 获取option
    getOption (value) {
      let option
      // 判断是否为对象
      const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]'
      // 判断是否为空
      const isNull = Object.prototype.toString.call(value).toLowerCase() === '[object null]'
      // 判断是否未定义
      const isUndefined = Object.prototype.toString.call(value).toLowerCase() === '[object undefined]'
      // 遍历cachedOptions
      for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
        const cachedOption = this.cachedOptions[i]
        const isEqual = isObject
          ? getValueByPath(cachedOption.value, this.valueKey) === getValueByPath(value, this.valueKey)
          : cachedOption.value === value
        if (isEqual) {
          option = cachedOption
          break
        }
      }
      // 拿到的是一个对象
      if (option) return option
      const label = (!isObject && !isNull && !isUndefined)
        ? value : ''
      let newOption = {
        value: value,
        currentLabel: label
      }
      if (this.multiple) {
        newOption.hitState = false
      }
      return newOption
    },
    resetInputHeight () {
      // 判断是否折叠标签或者不能过滤,则终止
      if (this.collapseTags && !this.filterable) return
      this.$nextTick(() => {
        // 如果不存在reference,则终止
        if (!this.$refs.reference) return
        let inputChildNodes = this.$refs.reference.$el.childNodes
        let input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0]
        const tags = this.$refs.tags
        const sizeInMap = this.initialInputHeight || 40
        input.style.height = this.selected.length === 0
          ? sizeInMap + 'px'
          : Math.max(
            tags ? (tags.clientHeight + (tags.clientHeight > sizeInMap ? 6 : 0)) : 0,
            sizeInMap
          ) + 'px'
        if (this.visible && this.emptyText !== false) {
          this.broadcast('ZzrSelectDropdown', 'updatePopper')
        }
      })
    },

    resetHoverIndex () {
      setTimeout(() => {
        if (!this.multiple) {
          this.hoverIndex = this.options.indexOf(this.selected)
        } else {
          if (this.selected.length > 0) {
            this.hoverIndex = Math.min.apply(null, this.selected.map(item => this.options.indexOf(item)))
          } else {
            this.hoverIndex = -1
          }
        }
      }, 300)
    },
    //
    getValueKey (item) {
      if (Object.prototype.toString.call(item.value).toLowerCase() !== '[object object]') {
        return item.value
      } else {
        return getValueByPath(item.value, this.valueKey)
      }
    },
    // 获取value值的索引
    getValueIndex (arr = [], value) {
      // 是否为一个对象
      const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]'
      if (!isObject) {
        // 不为对象,返回数组的索引
        return arr.indexOf(value)
      } else {
        // valueKey默认为value
        const valueKey = this.valueKey
        let index = -1
        arr.some((item, i) => {
          if (getValueByPath(item, valueKey) === getValueByPath(value, valueKey)) {
            // 找寻索引,如果有有,则返回true
            index = i
            return true
          }
          // 如果没有则为false
          return false
        })
        // 最终返回索引
        return index
      }
    },

    managePlaceholder () {
      if (this.currentPlaceholder !== '') {
        this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder
      }
    },

    deleteTag (event, tag) {
      let index = this.selected.indexOf(tag)
      if (index > -1 && !this.selectDisabled) {
        const value = this.value.slice()
        value.splice(index, 1)
        this.$emit('input', value)
        this.emitChange(value)
        this.$emit('remove-tag', tag.value)
      }
      event.stopPropagation()
    },

    // 如果可以过滤 搜索条件也不等于当前值，那么调用
    onInputChange () {
      if (this.filterable && this.query !== this.selectedLabel) {
        // 将query等于
        this.query = this.selectedLabel
        // console.log(this.query)
        this.handleQueryChange(this.query)
      }
    }

  }
}
</script>

<style lang="scss">
  @import "select";
</style>
