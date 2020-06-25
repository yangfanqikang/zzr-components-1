<template>
    <div>
      <zzr-show-card :obj="obj1" real-width="100%">
        <zzr-button
          plain
          @click="open1">
          可自动关闭
        </zzr-button>
        <zzr-button
          plain
          @click="open2">
          不会自动关闭
        </zzr-button>
      </zzr-show-card>
      <zzr-show-card :obj="obj2" real-width="100%">
        <zzr-button
          plain
          @click="open3">
          成功
        </zzr-button>
        <zzr-button
          plain
          @click="open4">
          警告
        </zzr-button>
        <zzr-button
          plain
          @click="open5">
          消息
        </zzr-button>
        <zzr-button
          plain
          @click="open6">
          错误
        </zzr-button>
      </zzr-show-card>
      <zzr-show-card :obj="obj3" real-width="100%">
        <zzr-button
          plain
          @click="open11">
          右上角
        </zzr-button>
        <zzr-button
          plain
          @click="open12">
          右下角
        </zzr-button>
        <zzr-button
          plain
          @click="open13">
          左下角
        </zzr-button>
        <zzr-button
          plain
          @click="open14">
          左上角
        </zzr-button>
      </zzr-show-card>
      <zzr-show-card :obj="obj4" real-width="100%">
        <zzr-button
          plain
          @click="open21">
          偏移的消息
        </zzr-button>
      </zzr-show-card>
      <zzr-show-card :obj="obj5" real-width="100%">
        <zzr-button
          plain
          @click="openHTML">
          使用 HTML 片段
        </zzr-button>
      </zzr-show-card>
      <zzr-show-card :obj="obj6" real-width="100%">
        <zzr-button
          plain
          @click="openClose">
          隐藏关闭按钮
        </zzr-button>
      </zzr-show-card>
    </div>
</template>

<script>
  import ZzrShowCard from '../_components/zzr-show-card'
  import ZzrButton from '../../../src/components/global/button/zzr-button'
  export default {
    name: 'notification-demos',
    components: { ZzrButton, ZzrShowCard },
    data () {
      return {
        obj1: {
          title: '消息提示',
          value: '',
          des: '当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。',
          content: '<zzr-button plain @click="open1">可自动关闭</zzr-button>\n' +
            '<zzr-button plain @click="open2">不会自动关闭</zzr-button>'
        },
        obj2: {
          title: '带有倾向性',
          value: '',
          des: '带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息',
          content: '<zzr-button\n' +
            '  plain\n' +
            '  @click="open3">\n' +
            '  成功\n' +
            '</zzr-button>\n' +
            '<zzr-button\n' +
            '  plain\n' +
            '  @click="open4">\n' +
            '  警告\n' +
            '</zzr-button>\n' +
            '<zzr-button\n' +
            '  plain\n' +
            '  @click="open5">\n' +
            '  消息\n' +
            '</zzr-button>\n' +
            '<zzr-button\n' +
            '  plain\n' +
            '  @click="open6">\n' +
            '  错误\n' +
            '</zzr-button>'
        },
        obj3: {
          title: '自定义弹出位置',
          value: '',
          des: '可以让 Notification 从屏幕四角中的任意一角弹出',
          content: '<zzr-button\n' +
            '  plain\n' +
            '  @click="open11">\n' +
            '  右上角\n' +
            '</zzr-button>\n' +
            '<zzr-button\n' +
            '  plain\n' +
            '  @click="open12">\n' +
            '  右下角\n' +
            '</zzr-button>\n' +
            '<zzr-button\n' +
            '  plain\n' +
            '  @click="open13">\n' +
            '  左下角\n' +
            '</zzr-button>\n' +
            '<zzr-button\n' +
            '  plain\n' +
            '  @click="open14">\n' +
            '  左上角\n' +
            '</zzr-button>'
        },
        obj4: {
          title: '带有偏移',
          value: '',
          des: '让 Notification 偏移一些位置',
          content: '<zzr-button\n' +
            '  plain\n' +
            '  @click="open21">\n' +
            '  偏移的消息\n' +
            '</zzr-button>'
        },
        obj5: {
          title: '使用 HTML 片段',
          value: '',
          des: 'message 属性支持传入 HTML 片段',
          content: '<zzr-button\n' +
            '  plain\n' +
            '  @click="open21">\n' +
            '  偏移的消息\n' +
            '</zzr-button>'
        },
        obj6: {
          title: '隐藏关闭按钮',
          value: '',
          des: '可以不显示关闭按钮',
          content: '<zzr-button\n' +
            '  plain\n' +
            '  @click="openClose">\n' +
            '  隐藏关闭按钮\n' +
            '</zzr-button>'
        },
      }
    },
    methods: {
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      },
      open3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open6() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      },
      open11() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
      },

      open12() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },

      open13() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },

      open14() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
      },
      open21() {
        this.$notify({
          title: '偏移',
          message: '这是一条带有偏移的提示消息',
          offset: 100
        });
      },
      openHTML() {
        this.$notify({
          title: 'HTML 片段',
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      },
      openClose() {
        this.$notify.success({
          title: 'Info',
          message: '这是一条没有关闭按钮的消息',
          showClose: false
        });
      }
    },
  }
</script>

<style scoped>

</style>
