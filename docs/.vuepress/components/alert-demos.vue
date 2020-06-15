<template>
    <div>
      <zzr-show-card :obj="obj1" :real-width="'100%'">
        <div>
          <zzr-alert title="成功提示的文案" type="success" style="margin-bottom: 10px;"></zzr-alert>
          <zzr-alert title="消息提示的文案" type="info" close-text="关闭" style="margin-bottom: 10px;"></zzr-alert>
          <zzr-alert title="警告提示的文案" type="warning" style="margin-bottom: 10px;"></zzr-alert>
          <zzr-alert title="错误提示的文案" type="error" close-text="关闭" style="margin-bottom: 10px;"></zzr-alert>
        </div>
      </zzr-show-card>
      <zzr-show-card :obj="obj2" :real-width="'100%'">
        <div>
          <zzr-alert title="成功提示的文案" type="success" style="margin-bottom: 10px;" effect="dark"></zzr-alert>
          <zzr-alert title="消息提示的文案" type="info" close-text="关闭" style="margin-bottom: 10px;" effect="dark"></zzr-alert>
          <zzr-alert title="警告提示的文案" type="warning" style="margin-bottom: 10px;" effect="dark"></zzr-alert>
          <zzr-alert title="错误提示的文案" type="error" close-text="关闭" style="margin-bottom: 10px;" effect="dark"></zzr-alert>
        </div>
      </zzr-show-card>
      <zzr-show-card :obj="obj3" :real-width="'100%'">
        <div>
          <zzr-alert show-icon title="成功提示的文案" type="success" style="margin-bottom: 10px;"></zzr-alert>
          <zzr-alert show-icon title="消息提示的文案" type="info" close-text="关闭" style="margin-bottom: 10px;" ></zzr-alert>
          <zzr-alert show-icon title="警告提示的文案" type="warning" style="margin-bottom: 10px;"></zzr-alert>
          <zzr-alert show-icon title="错误提示的文案" type="error" close-text="关闭" style="margin-bottom: 10px;"></zzr-alert>
        </div>
      </zzr-show-card>
    </div>
</template>

<script>
  import ZzrShowCard from '../_components/zzr-show-card'
  import ZzrAlert from '../../../src/components/global/alert/zzr-alert'
  import ZzrIcon from '../../../src/components/global/icon/zzr-icon'
  export default {
    name: 'alert-demos',
    components: { ZzrIcon, ZzrAlert, ZzrShowCard },
    data () {
      return {
        obj1: {
          title: '基本用法',
          value: '',
          des: '页面中的非浮层元素，不会自动消失。',
          content: '<zzr-alert title="成功提示的文案" type="success" style="margin-bottom: 10px;"></zzr-alert>\n' +
            '<zzr-alert title="消息提示的文案" type="info" close-text="关闭" style="margin-bottom: 10px;"></zzr-alert>\n' +
            '<zzr-alert title="警告提示的文案" type="warning" style="margin-bottom: 10px;"></zzr-alert>\n' +
            '<zzr-alert title="错误提示的文案" type="error" close-text="关闭" style="margin-bottom: 10px;"></zzr-alert>'
        },
        obj2: {
          title: '主题',
          value: '',
          des: 'Alert 组件提供了两个不同的主题：light和dark。',
          content: '<zzr-alert title="成功提示的文案" type="success" style="margin-bottom: 10px;" effect="dark"></zzr-alert>\n' +
            '<zzr-alert title="消息提示的文案" type="info" close-text="关闭" style="margin-bottom: 10px;" effect="dark"></zzr-alert>\n' +
            '<zzr-alert title="警告提示的文案" type="warning" style="margin-bottom: 10px;" effect="dark"></zzr-alert>\n' +
            '<zzr-alert title="错误提示的文案" type="error" close-text="关闭" style="margin-bottom: 10px;" effect="dark"></zzr-alert>'
        },
        obj3: {
          title: '带有 icon',
          value: '',
          des: '表示某种状态时提升可读性。',
          content: '<zzr-alert title="成功提示的文案" type="success" style="margin-bottom: 10px;" effect="dark"></zzr-alert>\n' +
            '<zzr-alert title="消息提示的文案" type="info" close-text="关闭" style="margin-bottom: 10px;" effect="dark"></zzr-alert>\n' +
            '<zzr-alert title="警告提示的文案" type="warning" style="margin-bottom: 10px;" effect="dark"></zzr-alert>\n' +
            '<zzr-alert title="错误提示的文案" type="error" close-text="关闭" style="margin-bottom: 10px;" effect="dark"></zzr-alert>'
        },
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
