<template>
    <div class="button-demos">
      <ZzrButtonExample></ZzrButtonExample>
      <ZzrButtonGroupExample></ZzrButtonGroupExample>
    </div>
</template>

<script>
 import ZzrButtonExample from '../../../src/views/example/zzr-button-example'
 import ZzrButtonGroupExample from '../../../src/views/example/zzr-button-group-example'
 export default {
   name: 'button-demos',
   components: {
     ZzrButtonGroupExample,
     ZzrButtonExample
   }
 }
</script>

<style lang="scss" scoped>
    .button-demos {

    }
</style>
