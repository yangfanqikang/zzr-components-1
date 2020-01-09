<template>
    <div class="zzr-checkbox-group">
      <slot></slot>
    </div>
</template>

<script>
import Emitter from '../../../mixins/emitter'
export default {
  name: 'zzr-checkbox-group',
  componentName: 'ZzrCheckboxGroup',
  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },
  mixins: [Emitter]
  // watch: {
  //   value: {
  //     handler () {
  //       this.broadcast('ZzrCheckbox', 'on-message', this.value)
  //     },
  //     immediate: true
  //   }
  // }
}
</script>

<style lang="scss" scoped>
    .zzr-checkbox-group {

    }
</style>
