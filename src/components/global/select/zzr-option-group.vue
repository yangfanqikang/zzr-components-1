<template>
    <div class="zzr-select-group__wrap" v-show="visible">
      <li class="zzr-select-group__title">{{label}}</li>
      <li>
        <ul class="zzr-select-group">
          <slot></slot>
        </ul>
      </li>
    </div>
</template>

<script>
import Emitter from '../../../mixins/emitter'
export default {
  name: 'zzr-option-group',
  componentName: 'ZzrOptionGroup',
  mixins: [Emitter],
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    disabled (val) {
      this.broadcast('ZzrOption', 'handleGroupDisabled', val)
    }
  },
  data () {
    return {
      visible: true
    }
  },
  created () {
    this.$on('queryChange', this.queryChange)
  },
  mounted () {
    if (this.disabled) {
      this.broadcast('ZzrOption', 'handleGroupDisabled', this.disabled)
    }
  },
  methods: {
    queryChange () {
      this.visible = this.$children && Array.isArray(this.$children) && this.$children.some(
        option => option.visible === true
      )
    }
  }
}
</script>

<style lang="scss">
@import "option-group.scss";
</style>
