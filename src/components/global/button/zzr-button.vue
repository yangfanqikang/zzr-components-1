<template>
    <div class="zzr-button-default" :class="[type == 'default' ? '': `zzr-button-${type}`, {
      'is-plain': plain,
        'is-round': round,
        'is-circle': circle
    }]">
      <zzr-icon :name="iconName" v-if="iconName"></zzr-icon>
      <div class="zzr-button-content" v-if="!circle">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import ZzrIcon from '../icon/zzr-icon'
export default {
  name: 'zzr-button',
  components: { ZzrIcon },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    iconName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "zzr-button";
</style>
