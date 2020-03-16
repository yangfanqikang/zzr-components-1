<template>
  <div
    class="zzr-select"
    @click.stop="toggleMenu">
    <div class="zzr-select-tags" ref="tags" v-if="multiple">
      <!--        判断折叠标签、选中数量-->
      <span v-if="collapseTags && selected.length">
          <zzr-tag
            :closable="!selectDisabled"
            type="info"
          ></zzr-tag>
          <zzr-tag v-if="selected.length > 1" :closable="false" type="info"></zzr-tag>
        </span>
      <transition-group>
        <zzr-tag v-for="item in selected">
          <span class="">{{item.currentLabel}}</span>
        </zzr-tag>
      </transition-group>
      <input ref="input" type="text" @focus="handleFocus" @blur="handleBlur">
    </div>
    <zzr-input
      ref="reference"
      :class="{ 'is-focus': visible }"
      @focus="handleFocus"
      @blur="handleBlur">
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
          wrap-class="el-select-dropdown__wrap"
          view-class="el-select-dropdown__list"
          ref="scrollbar">
            <zzr-option
             :value="query"
              created
              v-if="showNewOption"
            ></zzr-option>
          <slot></slot>
        </zzr-scrollbar>
<!--        当没有数据的时候如下展示-->
        <template>
<!--          <slot name="empty" v-if="$slots.empty"></slot>-->
<!--          <p class="zzr-select-dropdown__empty" v-else>-->
<!--            {{ emptyText }}-->
<!--          </p>-->
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

export default {
  name: 'zzr-select',
  components: { ZzrOption, ZzrIcon, ZzrInput, ZzrTag, ZzrSelectMenu, ZzrScrollbar },
  props: {
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
    }
  },
  data () {
    return {
      selected: this.multiple ? [] : {},
      query: '',
      menuVisibleOnFocus: false,
      visible: false,
      inputWidth: 0,
    }
  },
  computed: {
    showClose () {

    },
    showNewOption () {

    },
    // 选项是否被禁用
    selectDisabled () {
      return this.disabled || (this.elForm || {}).disabled
    }
  },
  mounted () {
    console.log(this)
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
          console.log(this.$refs)
          (this.$refs.input || this.$refs.reference).focus()
        }
      }
    },
    handleFocus () {

    },
    handleBlur (event) {
    },
    handleClickClear () {}
  }
}
</script>

<style lang="scss">
@import "select";
</style>
