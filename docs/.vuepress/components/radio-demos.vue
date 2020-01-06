<template>
    <div class="radio-demos">
      <div class="zzr-radio-1">
        <h3>基础用法</h3>
        <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
        <div>
          <zzr-radio v-model="radio" label="1">备选项</zzr-radio>
          <zzr-radio v-model="radio" label="2">备选项</zzr-radio>
        </div>
        <pre><code>{{content1}}</code></pre>
      </div>
      <div class="zzr-radio-1">
        <h3>禁用状态</h3>
        <p>单选框不可用的状态。</p>
        <div>
          <zzr-radio disabled v-model="radio" label="禁用">备选项</zzr-radio>
          <zzr-radio disabled v-model="radio" label="选中且禁用">备选项</zzr-radio>
        </div>
        <pre><code>{{content2}}</code></pre>
      </div>
    </div>
</template>

<script>
  import ZzrRadio from '../../../src/components/global/radio/zzr-radio'
  export default {
    name: 'radio-demos',
    components: { ZzrRadio },
    data () {
      return {
        radio: '1',
        content1: `
            <zzr-radio v-model="radio" label="1">备选项</zzr-radio>
          <zzr-radio v-model="radio" label="2">备选项</zzr-radio>
      `.replace(/^ {8}/gm, '').trim(),
        content2: `
            <zzr-radio disabled v-model="radio" label="禁用">备选项</zzr-radio>
          <zzr-radio disabled v-model="radio" label="选中且禁用">备选项</zzr-radio>
      `.replace(/^ {8}/gm, '').trim(),
      }
    },
  }
</script>

<style lang="scss" scoped>
    .radio-demos {

    }
</style>
