<template>
    <li v-show="visible">
      <slot>
        <span>{{ currentLabel }}</span>
      </slot>
    </li>
</template>

<script>
export default {
  name: 'zzr-option',
  props: {
    value: {
      require: true
    },
    label: [String, Number],
    created: Boolean,
  },
  computed: {
    currentLabel () {
      return this.label || (this.isObject ? '' : this.value)
    }
  },
  data () {
    return {
      visible: true
    }
  }
}
</script>

<style scoped>

</style>
