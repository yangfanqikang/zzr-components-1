<template>
    <div class="input-demos">
      <h4>基础用法</h4>
      <p>仅允许输入标准的数字值，可定义范围</p>
      <div>
        <h4>基础用法</h4>
        <div class="input-demos-ex1">
         <input-number v-model="num1"></input-number>
        </div>
      </div>
      <pre><code>{{content1}}</code></pre>
    </div>
</template>

<script>
  import InputNumber from '../../../src/components/global/input-number/input-number'
  export default {
    name: 'input-number-demos',
    data () {
      return {
        num1: 1,
        content1: 'value'
      }
    },
    components: { InputNumber }
  }
</script>

<style lang="scss" scoped>
  .input-demos {
    .input-demos-ex1{
      width: 180px;
    }
  }
</style>
