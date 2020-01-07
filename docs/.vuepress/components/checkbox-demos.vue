<template>
    <div class="checkbox-demos">
      <div>
        <zzr-checkbox v-model="checkboxDemo1" label="1">复选框1</zzr-checkbox>
        <zzr-checkbox v-model="checkboxDemo1" label="2">复选框2</zzr-checkbox>
      </div>
    </div>
</template>

<script>
  import ZzrCheckbox from '../../../src/components/global/checkbox/zzr-checkbox'
  export default {
    name: 'checkbox-demos',
    components: { ZzrCheckbox },
    data () {
      return {
        checkboxDemo1: ''
      }
    },
  }
</script>

<style lang="scss" scoped>
    .checkbox-demos {

    }
</style>
