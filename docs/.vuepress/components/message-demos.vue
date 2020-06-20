<template>
    <div>
      <zzr-show-card :obj="obj1" real-width="100%">
        <zzr-button :plain="true" @click="open">打开消息提示</zzr-button>
        <zzr-button :plain="true" @click="openVn">VNode</zzr-button>
      </zzr-show-card>
      <zzr-show-card :obj="obj2" real-width="100%">
        <zzr-button :plain="true" @click="open2">成功</zzr-button>
        <zzr-button :plain="true" @click="open3">警告</zzr-button>
        <zzr-button :plain="true" @click="open1">消息</zzr-button>
        <zzr-button :plain="true" @click="open4">错误</zzr-button>
      </zzr-show-card>
      <zzr-show-card :obj="obj3" real-width="100%">
        <zzr-button :plain="true" @click="open5">成功</zzr-button>
        <zzr-button :plain="true" @click="open6">警告</zzr-button>
        <zzr-button :plain="true" @click="open7">消息</zzr-button>
        <zzr-button :plain="true" @click="open8">错误</zzr-button>
      </zzr-show-card>
    </div>
</template>

<script>
  import Message from '../../../src/components/global/message/main'
  import '../../../src/components/global/message/message.scss'
  import '../../../src/components/global/el-icon/icon.scss'
  import ZzrShowCard from '../_components/zzr-show-card'
  import ZzrButton from '../../../src/components/global/button/zzr-button'
  import Vue from 'vue'
  Vue.prototype.$message = Message
  export default {
    name: 'message-demos',
    components: { ZzrButton, ZzrShowCard },
    data () {
      return {
        obj1: {
          title: '基础用法',
          value: '',
          des: '从顶部出现，3 秒后自动消失。',
          content: '<zzr-button :plain="true" @click="open">打开消息提示</zzr-button>\n' +
            '<zzr-button :plain="true" @click="openVn">VNode</zzr-button>'
        },
        obj2: {
          title: '不同状态',
          value: '',
          des: '用来显示「成功、警告、消息、错误」类的操作反馈。',
          content: '<zzr-button :plain="true" @click="open2">成功</zzr-button>\n' +
            '<zzr-button :plain="true" @click="open3">警告</zzr-button>\n' +
            '<zzr-button :plain="true" @click="open1">消息</zzr-button>\n' +
            '<zzr-button :plain="true" @click="open4">错误</zzr-button>'
        },
        obj3: {
          title: '可关闭',
          value: '',
          des: '可以添加关闭按钮。',
          content: '<zzr-button :plain="true" @click="open5">成功</zzr-button>\n' +
            '<zzr-button :plain="true" @click="open6">警告</zzr-button>\n' +
            '<zzr-button :plain="true" @click="open7">消息</zzr-button>\n' +
            '<zzr-button :plain="true" @click="open8">错误</zzr-button>'
        },
      }
    },
    methods: {
      open () {
        console.log('/////')
        new Message('sdfasdfasdf')
      },
      openVn() {
        const h = this.$createElement;
        console.log(typeof this.$message)
       new Message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      },
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      },
      open5() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
        });
      },

      open6() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open7() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
      open8() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    },
  }
</script>

<style scoped>

</style>
