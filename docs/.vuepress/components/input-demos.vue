<template>
    <div class="input-demos">
      <p>通过鼠标或键盘输入字符</p>
      <div>
        <h4>基础用法</h4>
        <div>
          <div class="input-demos-ex1">
            <zzr-input v-model="input1" placeholder="请输入内容"></zzr-input>
          </div>
        </div>
        <pre><code>{{content1}}</code></pre>
      </div>
      <div>
        <h4>禁用状态</h4>
        <p>通过 disabled 属性指定是否禁用 input 组件</p>
        <div>
          <div class="input-demos-ex1">
            <zzr-input v-model="input2" placeholder="请输入内容" :disabled="true"></zzr-input>
          </div>
        </div>
        <pre><code>{{content2}}</code></pre>
      </div>
      <div>
        <h4>可清空</h4>
        <p>使用clearable属性即可得到一个可清空的输入框</p>
        <div>
          <div class="input-demos-ex1">
            <zzr-input v-model="input3" placeholder="请输入内容" clearable ></zzr-input>
          </div>
        </div>
        <pre><code>{{content3}}</code></pre>
      </div>
    </div>
</template>

<script>
  import ZzrInput from '../../../src/components/global/input/zzr-input'
  export default {
    name: 'input-demos',
    components: { ZzrInput },
    data () {
      return {
        input1: 'input1',
        input2: 'input1',
        input3: '',
        content1: `
        <zzr-input v-model="input1" placeholder="请输入内容"></zzr-input>
        `.replace(/^ {8}/gm, '').trim(),
        content2: `
        <zzr-input v-model="input2" placeholder="请输入内容" :disabled="true"></zzr-input>
        `.replace(/^ {8}/gm, '').trim(),
        content3: `
        <zzr-input v-model="input3" placeholder="请输入内容" clearable></zzr-input>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
  }
</script>

<style lang="scss" scoped>
    .input-demos {
      .input-demos-ex1{
        width: 180px;
      }
    }
</style>
