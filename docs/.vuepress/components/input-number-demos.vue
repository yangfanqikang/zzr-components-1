<template>
    <div class="input-demos">
      <h4>基础用法</h4>
      <p>仅允许输入标准的数字值，可定义范围</p>
      <div>
        <h4>基础用法</h4>
        <div class="input-demos-ex1">
         <input-number v-model="num1" :min="1" :max="10"></input-number>
        </div>
        <pre><code>{{content1}}</code></pre>
      </div>
      <div>
        <h4>禁用状态</h4>
        <div class="input-demos-ex1">
         <input-number v-model="num1" :disabled="true"></input-number>
        </div>
        <pre><code>{{content2}}</code></pre>
      </div>
      <div>
        <h4>步数</h4>
        <p>允许定义递增递减的步数控制</p>
        <div class="input-demos-ex1">
         <input-number v-model="num2" :step="2"></input-number>
        </div>
        <pre><code>{{content2}}</code></pre>
      </div>
      <div>
        <h4>严格步数</h4>
        <p>step-strictly属性接受一个Boolean。如果这个属性被设置为true，则只能输入步数的倍数。</p>
        <div class="input-demos-ex1">
         <input-number v-model="num3"  :step="2" step-strictly></input-number>
        </div>
        <pre><code>{{content3}}</code></pre>
      </div>
      <div>
        <h4>精度</h4>
        <p>设置 precision 属性可以控制数值精度，接收一个 Number。</p>
        <div class="input-demos-ex1">
         <input-number v-model="num4" :precision="2"  :step="0.1" :max="10"></input-number>
        </div>
        <pre><code>{{content4}}</code></pre>
      </div>
    </div>
</template>

<script>
  import InputNumber from '../../../src/components/global/input-number/input-number'
  export default {
    name: 'input-number-demos',
    data () {
      return {
        num1: 1,
        num2: 1,
        num3: 2,
        num4: 2,
        content1: '<input-number v-model="num1" :min="1" :max="10"></input-number>',
        content2: '<input-number v-model="num1" :disabled="true"></input-number>',
        content3: '<input-number v-model="num3"  :step="2" step-strictly></input-number>',
        content4: '<input-number v-model="num4" :precision="2"  :step="0.1" :max="10"></input-number>',
      }
    },
    components: { InputNumber }
  }
</script>

<style lang="scss" scoped>
  .input-demos {
    .input-demos-ex1{
      width: 180px;
      margin: 10px 0;
    }
  }
</style>
