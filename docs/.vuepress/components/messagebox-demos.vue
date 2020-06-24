<template>
    <div>
      <zzr-show-card :obj="obj1">
        <zzr-button type="text" @click="open">点击 Message Box</zzr-button>
      </zzr-show-card>
      <zzr-show-card :obj="obj2">
        <zzr-button type="text" @click="open2">点击 Message Box</zzr-button>
      </zzr-show-card>
      <zzr-show-card :obj="obj3">
        <zzr-button type="text" @click="open3">点击 Message Box</zzr-button>
      </zzr-show-card>
    </div>
</template>

<script>
  import ZzrShowCard from '../_components/zzr-show-card'
  import ZzrButton from '../../../src/components/global/button/zzr-button'
  import Vue from 'vue'
  export default {
    name: 'messagebox-demos',
    components: { ZzrButton, ZzrShowCard },
    data () {
      return {
        obj1: {
          title: '消息提示',
          value: '',
          des: '当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。',
          content: '<zzr-button type="text" @click="open">点击 Message Box</zzr-button>'
        },
        obj2: {
          title: '确认消息',
          value: '',
          des: '提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。',
          content: '<zzr-button type="text" @click="open2">点击 Message Box</zzr-button>'
        },
        obj3: {
          title: '提交内容',
          value: '',
          des: '当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。',
          content: '<zzr-button type="text" @click="open3">点击 Message Box</zzr-button>'
        },
      }
    },
    methods: {
      open() {
        console.log(this.$alert)
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      open3() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    },
  }
</script>

<style scoped>

</style>
