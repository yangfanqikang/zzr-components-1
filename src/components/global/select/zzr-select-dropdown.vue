<template>
    <div class="zzr-select-dropdown zzr-popper" :class="[
      {
        'is-multiple': $parent.multiple
      },
      popperClass
    ]" :style="{
      minWidth: minWidth
    }">
      <slot></slot>
    </div>
</template>

<script>
import Popper from '../../../util/vue-popper'
export default {
  name: 'zzr-select-dropdown',
  componentName: 'ZzrSelectDropdown',
  mixins: [Popper],
  props: {
    placement: {
      default: 'bottom-start'
    },
    boundariesPadding: {
      default: 0
    },
    popperOptions: {
      default () {
        return {
          gpuAcceleration: false
        }
      }
    },
    visibleArrow: {
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      minWidth: ''
    }
  },
  computed: {
    popperClass () {
      return this.$parent.popperClass
    }
  },
  // watch: {
  //   '$parent.inputWidth' () {
  //     this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px'
  //     console.log('/////////')
  //   }
  // },
  mounted () {
    this.referenceElm = this.$parent.$refs.reference.$el
    this.$parent.popperElm = this.popperElm = this.$el
    this.$on('updatePopper', () => {
      if (this.$parent.visible) this.updatePopper()
      console.log('>>>>>>>>>>>>>>>>>>')
      console.log(this.$parent.$refs.reference.$refs.input.offsetWidth)
      this.minWidth = (this.$parent.$refs.reference.$refs.input.offsetWidth || this.$parent.$refs.input.offsetWidth) + 'px'
      // console.log(this.minWidth)
    })
    this.$on('destroyPopper', this.destroyPopper)
  }
}
</script>

<style lang="scss">
@import "select-dropdown";
</style>
