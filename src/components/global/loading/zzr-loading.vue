<template>
  <transition name="zzr-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="zzr-loading-mask"
      :style="{ backgroundColor: background || '' }"
      :class="[customClass, { 'is-fullscreen': fullscreen }]">
      <div class="zzr-loading-spinner">
        <svg v-if="!spinner" class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"/>
        </svg>
        <i v-else :class="spinner"></i>
        <p v-if="text" class="zzr-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
// import './zzr-loading.scss'
export default {
  name: 'zzr-loading',
  data () {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: ''
    }
  },
  methods: {
    handleAfterLeave () {
      this.$emit('after-leave')
    },
    setText (text) {
      this.text = text
    }
  }
}
</script>
<style lang="scss">
  @import "zzr-loading";
  @import "../el-icon/icon";
</style>
