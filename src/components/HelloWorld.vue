<template>
  <div class="hello">
    <zzr-color></zzr-color>
  </div>
</template>

<script>
import ZzrColor from '../views/example/zzr-color'
export default {
  name: 'HelloWorld',
  components: {
    ZzrColor
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
