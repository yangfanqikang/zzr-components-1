<template>
    <div>
      <zzr-show-card :obj="obj1">
        <div>
          <zzr-alert title="成功提示的文案" type="success"></zzr-alert>
        </div>
      </zzr-show-card>
    </div>
</template>

<script>
  import ZzrShowCard from '../_components/zzr-show-card'
  import ZzrAlert from '../../../src/components/global/alert/zzr-alert'
  export default {
    name: 'alert-demos',
    components: { ZzrAlert, ZzrShowCard },
    data () {
      return {
        obj1: {
          title: '基本用法',
          value: '',
          des: '页面中的非浮层元素，不会自动消失。',
          content: ''
        }
      }
    },
  }
</script>

<style scoped>

</style>
