<template>
    <div>
      <zzr-show-card :obj="obj1" :real-width="'100%'">
        <div class="show-loading" v-loading="true"></div>
      </zzr-show-card>
      <zzr-show-card :obj="obj2" :real-width="'100%'">
        <div class="show-loading" v-loading="true"
             zzr-loading-text="拼命加载中"
             zzr-loading-spinner="el-icon-loading"
             zzr-loading-background="rgba(0, 0, 0, 0.8)"></div>
      </zzr-show-card>
    </div>
</template>

<script>
  import ZzrShowCard from '../_components/zzr-show-card'
  import Vue from 'vue'
  import VLoading from '../../../src/components/global/loading/directive'
  VLoading.install(Vue)
  export default {
    name: 'loading-demos',
    components: { ZzrShowCard },
    data () {
      return {
        obj1: {
          title: '区域加载',
          value: '',
          des: '在容器中加载数据时显示。',
          content: ' <div class="show-loading" v-loading="true"></div>'
        },
        obj2: {
          title: '自定义',
          value: '',
          des: '可自定义加载文案、图标和背景色。',
          content: ' <div class="show-loading" v-loading="true"></div>'
        },
      }
    },
  }
</script>

<style lang="scss" scoped>
.show-loading{
  height: 300px;
  background-color: yellowgreen;
}
</style>
