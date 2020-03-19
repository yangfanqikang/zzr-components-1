<template>
    <div>
      <zzr-show-card :title="obj1.title" :des="obj1.des" :content="obj1.content">
          <zzr-switch  v-model="obj1.value" active-color="#00dd00" inactive-color="#ff4949"></zzr-switch>
      </zzr-show-card>
      <zzr-show-card :title="obj2.title" :des="obj2.des" :content="obj2.content">
        <div>
          <zzr-switch
            v-model="obj2.value1"
            active-text="按月付费"
            inactive-text="按年付费">
          </zzr-switch>
          <zzr-switch
            style="display: block"
            v-model="obj2.value2"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按月付费"
            inactive-text="按年付费">
          </zzr-switch>
        </div>
      </zzr-show-card>
      <zzr-show-card :title="obj3.title" :des="obj3.des" :content="obj3.content">
        <div>
          <zzr-switch
            v-model="obj3.value"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-value="100"
            inactive-value="0">
          </zzr-switch>
        </div>
      </zzr-show-card>
      <zzr-show-card :title="obj4.title" :des="obj4.des" :content="obj4.content">
        <div>
          <zzr-switch v-model="obj4.value1" disabled></zzr-switch>
          <zzr-switch v-model="obj4.value2" disabled></zzr-switch>
        </div>
      </zzr-show-card>
    </div>
</template>

<script>
  import ZzrShowCard from '../_components/zzr-show-card'
  import ZzrSwitch from '../../../src/components/global/switch/zzr-switch'
  export default {
    name: 'switch-demos',
    components: {
      ZzrSwitch,
      ZzrShowCard
    },
    data () {
      return {
        obj1: {
          title: '基础用法',
          value: true,
          des: '绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。',
          content: `
<zzr-switch
  v-model="value"
  active-color="#00dd00"
  inactive-color="#ff4949">
</zzr-switch>`.replace(/^ {8}/gm, '').trim(),
        },
        obj3: {
          title: '基础用法',
          value: '100',
          des: '设置active-value和inactive-value属性，接受Boolean, String或Number类型的值。',
          content: `
<zzr-switch
  v-model="obj3.value"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-value="100"
  inactive-value="0">
</zzr-switch>`.replace(/^ {8}/gm, '').trim(),
        },
        obj4: {
          title: '基础用法',
          value1: true,
          value2: false,
          des: '设置active-value和inactive-value属性，接受Boolean, String或Number类型的值。',
          content: `
<zzr-switch v-model="obj4.value1" disabled></zzr-switch>
<zzr-switch v-model="obj4.value2" disabled></zzr-switch>`.replace(/^ {8}/gm, '').trim(),
        },
        obj2: {
          title: '文字描述',
          value1: true,
          value2: true,
          des: '使用active-text属性与inactive-text属性来设置开关的文字描述。',
          content: `
<zzr-switch
  v-model="obj2.value1"
  active-text="按月付费"
  inactive-text="按年付费">
</zzr-switch>
<zzr-switch
  style="display: block"
  v-model="obj2.value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费">
</zzr-switch>`.replace(/^ {8}/gm, '').trim(),
        },
      }
    },
  }
</script>

<style scoped>

</style>
