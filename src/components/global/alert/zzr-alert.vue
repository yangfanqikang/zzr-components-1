<template>
  <transition name="el-alert-fade">
    <div
      class="zzr-alert"
      v-show="visible"
    :class="[typeClass]">
      <div class="zzr-alert__content">
        <span class="zzr-alert__title" :class="[isBlodTitle]" v-if="title || $slots.title">
          <slot name="title">{{title}}</slot>
        </span>
        <p class="zzr-alert__description" v-if="$slots.default && !description"><slot></slot></p>
        <p class="zzr-alert__description" v-if="description && !$slots.default">{{description}}</p>
        <i class="zzr-alert__closebtn" :class="{'is-customed': closeText !== '', 'zzr-icon-close': closeText === ''}" v-show="closeable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'zzr-alert',
  props: {
    type: {
      type: String,
      default: ''
    },
    title: String,
    isBlodTitle: Boolean,
    description: String,
    closeable: Boolean,
    closeText: String
  },
  data () {
    return {
      visible: true
    }
  },
  computed:{
    typeClass() {
      return `zzr-alert--${ this.type }`
    },
  },
  methods: {
    close () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
  @import "alert";
</style>
