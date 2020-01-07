<template>
    <label class="zzr-checkbox">
      <span class="zzr-checkbox__input">
        <span class="zzr-checkbox__inner"></span>
        <input type="checkbox" class="zzr-checkbox__original" v-model="model">
      </span>
      <span class="zzr-checkbox__label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
      </span>
    </label>
</template>

<script>
export default {
  name: 'zzr-checkbox',
  props: {
    label: {}
  },
  computed: {
    model: {
      get () {},
      set () {}
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "zzr-check";
</style>
