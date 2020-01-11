<template>
    <div class="input-demos">
      <p>通过鼠标或键盘输入字符</p>
      <div>
        <h4>基础用法</h4>
        <div>
          <zzr-input></zzr-input>
        </div>
      </div>
    </div>
</template>

<script>
  import ZzrInput from '../../../src/components/global/input/zzr-input'
  export default {
    name: 'input-demos',
    components: { ZzrInput }
  }
</script>

<style lang="scss" scoped>
    .input-demos {

    }
</style>
