<template>
    <div class="zzr-button-group">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'zzr-button-group',
  mounted () {
    for (let node of this.$el.children) {
      let name = node.className.toLowerCase()
      console.log(name)
      if (!name.includes('zzr-button-default')){
        console.warn(`zzr-button-group 的子元素应该全是 zzr-button，但是你写的是 ${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/styles/coolhue";
    .zzr-button-group {
      display: flex;
      .zzr-button-default{
        border-radius: 0;
        &:not(:first-child) {
          margin-left: -1px;
        }
        &:first-child{
          border-top-left-radius: $border-radius-small;
          border-bottom-left-radius: $border-radius-small;
        }
        &:last-child{
          border-top-right-radius: $border-radius-small;
          border-bottom-right-radius: $border-radius-small;
        }
      }
    }
</style>
