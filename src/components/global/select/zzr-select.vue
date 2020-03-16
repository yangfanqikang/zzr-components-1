<template>
    <div
      class="zzr-select"
      @click.stop="toggleMenu">
      <div class="zzr-select-tags" ref="tags">
<!--        判断折叠标签、选中数量-->
        <span></span>
      </div>

    </div>
</template>

<script>
export default {
  name: 'zzr-select',
  methods: {
    toggleMenu () {

    }
  },
}
</script>

<style scoped>

</style>
