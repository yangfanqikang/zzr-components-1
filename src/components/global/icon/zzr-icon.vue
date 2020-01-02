<template>
  <svg class="zzr-icon" aria-hidden="true" :style="{fill: `${color}`}">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'zzr-icon',
  props: ['name', 'color']
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
</style>
