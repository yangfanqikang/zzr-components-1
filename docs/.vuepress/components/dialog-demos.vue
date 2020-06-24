<template>
  <div>
    <zzr-show-card :obj="obj1">
        <zzr-button type="text" @click="dialogVisible = true">点击打开 Dialog</zzr-button>
        <zzr-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <zzr-button @click="dialogVisible = false">取 消</zzr-button>
            <zzr-button type="primary" @click="dialogVisible = false">确 定</zzr-button>
          </span>

        </zzr-dialog>
    </zzr-show-card>
    <zzr-show-card :obj="obj2">
      <zzr-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</zzr-button>

      <zzr-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <span>需要注意的是内容是默认不居中的</span>
        <span slot="footer" class="dialog-footer">
          <zzr-button @click="centerDialogVisible = false">取 消</zzr-button>
          <zzr-button type="primary" @click="centerDialogVisible = false">确 定</zzr-button>
        </span>
      </zzr-dialog>
    </zzr-show-card>
  </div>

</template>

<script>
  import ZzrShowCard from '../_components/zzr-show-card'
  import ZzrButton from '../../../src/components/global/button/zzr-button'
  import ZzrDialog from '../../../src/components/global/dialog/zzr-dialog'

  export default {
    components: { ZzrDialog, ZzrButton, ZzrShowCard },
    name: 'dialog-demos',
    data () {
      return {
        dialogVisible: false,
        centerDialogVisible: false,
        obj1: {
          title: '基本用法',
          value: '',
          des: 'Dialog 弹出一个对话框，适合需要定制性更大的场景。',
          content: '<zzr-button type="text" @click="dialogVisible = true">点击打开 Dialog</zzr-button>\n' +
            '<zzr-dialog\n' +
            '  title="提示"\n' +
            '  :visible.sync="dialogVisible"\n' +
            '  width="30%"\n' +
            '  :before-close="handleClose">\n' +
            '  <span>这是一段信息</span>\n' +
            '  <span slot="footer" class="dialog-footer">\n' +
            '    <zzr-button @click="dialogVisible = false">取 消</zzr-button>\n' +
            '    <zzr-button type="primary" @click="dialogVisible = false">确 定</zzr-button>\n' +
            '  </span>\n' +
            '</zzr-dialog>'
        },
        obj2: {
          title: '居中布局',
          value: '',
          des: '标题和底部可水平居中。',
          content: '<zzr-button type="text" @click="dialogVisible = true">点击打开 Dialog</zzr-button>\n' +
            '<zzr-dialog\n' +
            '  title="提示"\n' +
            '  :visible.sync="dialogVisible"\n' +
            '  width="30%"\n' +
            '  :before-close="handleClose">\n' +
            '  <span>这是一段信息</span>\n' +
            '  <span slot="footer" class="dialog-footer">\n' +
            '    <zzr-button @click="dialogVisible = false">取 消</zzr-button>\n' +
            '    <zzr-button type="primary" @click="dialogVisible = false">确 定</zzr-button>\n' +
            '  </span>\n' +
            '</zzr-dialog>'
        },
      }
    },
    methods: {
      handleClose(done) {
      }
    },
  }
</script>

<style scoped>

</style>
