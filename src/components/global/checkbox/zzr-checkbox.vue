<template>
    <label class="zzr-checkbox">
      <span class="zzr-checkbox__input" :class="[
        { 'is-checked': isChecked }
      ]">
        <span class="zzr-checkbox__inner" :class="[
          {
           'is-checked': isChecked,
          'is-focus': focus
          }
        ]"></span>
        <input type="checkbox" class="zzr-checkbox__original"
               v-model="model"
               @change="handleChange"
               @focus="focus = true"
               @blur="focus = false">
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
    label: {},
    checked: Boolean
  },
  computed: {
    model: {
      get () {},
      set () {}
    }
  },
  data () {
    return {
      focus: false,
      isChecked: false
    }
  },
  created () {
    this.isChecked = this.checked
  },
  methods: {
    handleChange () {
      this.isChecked = !this.isChecked
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "zzr-check";
</style>
