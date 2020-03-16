<template>
  <div class="input-demos">
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
    <div>
      <h4>基础用法</h4>
      <p>适用广泛的基础单选</p>
      <div class="input-demos-ex1">
        <zzr-select v-model="value1">
          <zzr-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"></zzr-option>
        </zzr-select>
      </div>
      <pre><code>{{content1}}</code></pre>
    </div>
  </div>
</template>

<script>
  import ZzrSelect from '../../../src/components/global/select/zzr-select'
  import ZzrOption from '../../../src/components/global/select/zzr-option'

  export default {
    name: 'select-demos',
    components: { ZzrOption, ZzrSelect },
    data () {
      return {
        value1: '',
        content1: '1',
        options: [
          {
          value: '选项1',
          label: '黄金糕'
        },
          {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .input-demos {
    .input-demos-ex1 {
      width: 180px;
      margin: 10px 0;
    }
  }
</style>
