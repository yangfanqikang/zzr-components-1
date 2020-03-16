<template>
  <div class="input-demos">
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
    <div>
      <h4>基础用法</h4>
      <p>适用广泛的基础单选</p>
      <div class="input-demos-ex1">

      </div>
      <pre><code>{{content1}}</code></pre>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'select-demos',
    data () {
      return {
        content1: '1'
      }
    },
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
