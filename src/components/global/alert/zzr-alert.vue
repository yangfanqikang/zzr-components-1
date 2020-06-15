<template>
  <transition name="zzr-alert-fade">
    <div
      class="zzr-alert"
      v-show="visible"
    :class="[typeClass, 'is-' + effect]">
      <zzr-icon :name="colorObj[type]" v-if="showIcon" style="margin-right: 10px;"></zzr-icon>
      <div class="zzr-alert__content">
        <span class="zzr-alert__title" :class="[isBlodTitle]" v-if="title || $slots.title">
          <slot name="title">{{title}}</slot>
        </span>
        <p class="zzr-alert__description" v-if="$slots.default && !description"><slot></slot></p>
        <p class="zzr-alert__description" v-if="description && !$slots.default">{{description}}</p>
<!--        <i class="zzr-alert__closebtn" :class="{'is-customed': closeText !== '', 'el-icon-close': closeText === ''}" v-show="closable" @click="close()">{{closeText}}</i>-->
        <div v-show="closable" @click="close">
          <zzr-icon name="close" v-if="closeText === ''"></zzr-icon>
          <i v-else>{{closeText}}</i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ZzrIcon from '../icon/zzr-icon'
const colorObj = {
  success: 'round_check_fill',
  info: 'info_fill',
  warning: 'warn_fill',
  error: 'round_close_fill'
}
export default {
  name: 'zzr-alert',
  components: { ZzrIcon },
  props: {
    type: {
      type: String,
      default: ''
    },
    title: String,
    isBlodTitle: Boolean,
    description: String,
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    effect: {
      type: String,
      default: 'light',
      validator: function (value) {
        return ['light', 'dark'].indexOf(value) !== -1
      }
    }
  },
  data () {
    return {
      visible: true,
      colorObj
    }
  },
  computed: {
    typeClass () {
      return `zzr-alert--${this.type}`
    }
  },
  methods: {
    close () {
      this.visible = false
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
  @import "alert";
</style>
