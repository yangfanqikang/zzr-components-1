<template>
  <i :class="'el-icon-' + name"></i>
</template>

<script>
export default {
  name: 'ElIcon',

  props: {
    name: String
  }
}
</script>
<style lang="scss">
  @import "icon.scss";
</style>
