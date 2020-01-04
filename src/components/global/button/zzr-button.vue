<template>
    <div @click="$emit('click')" class="zzr-button-default" :class="[type == 'default' ? '': `zzr-button-${type}`, {
      'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
    },{[`icon-${iconPosition}`]: iconPosition ? true: false}]" :style="`width: ${width}px;height:${height}px`">
      <zzr-icon :name="iconName" v-if="!isLoading && iconName" class="zzr-button-icon"></zzr-icon>
      <zzr-icon name="loading" v-if="isLoading" class="zzr-button-icon zzr-button-icon-loading"></zzr-icon>
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
    disabled: Boolean,
    iconName: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      validator (value) {
        return value === 'inverted'
      }
    },
    width: {
      type: String || Number
    },
    height: {
      type: String || Number
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "zzr-button";
</style>
