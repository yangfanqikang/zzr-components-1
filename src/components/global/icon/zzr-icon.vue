<template>
  <svg class="zzr-icon" :class="sizeValue" :style="`fill: ${color};`">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import '../../../assets/font/iconfont'
export default {
  name: 'zzr-icon',
  props: {
    name: {
      type: String,
      require: true
    },
    color: {},
    size: {
      type: String || Number,
      default: ''
    }
  },
  computed: {
    iconName () {
      let str = this.name.replace(/_/g, '')
      return `#icon${str}`
    },
    sizeValue () {
      if (this.size) {
        return this.size
      } else {
        // 默认取最小
        return 'sl'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .zzr-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .sl{
    height: 14px;
    width: 14px;
  }
  .md{
    height: 24px;
    width: 24px;
  }
  .lg {
    height: 36px;
    width: 36px;
  }
</style>
