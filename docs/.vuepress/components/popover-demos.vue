<template>
  <div>
    <zzr-show-card :obj="obj1" real-width="100%">
      <zzr-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <zzr-button slot="reference">hover 激活</zzr-button>
      </zzr-popover>
      <zzr-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <zzr-button slot="reference">click 激活</zzr-button>
      </zzr-popover>
      <zzr-popover
        ref="popover"
        placement="right"
        title="标题"
        width="200"
        trigger="focus"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      </zzr-popover>
      <zzr-button v-popover:popover>focus 激活</zzr-button>
      <zzr-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="manual"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        v-model="visible">
        <zzr-button slot="reference" @click="visible = !visible">手动激活</zzr-button>
      </zzr-popover>
    </zzr-show-card>
    <zzr-show-card :obj="obj2">
      <zzr-popover
        placement="right"
        width="400"
        trigger="click">
        <div>
          嵌套内容
        </div>
        <zzr-button slot="reference">click 激活</zzr-button>
      </zzr-popover>
    </zzr-show-card>
    <zzr-show-card :obj="obj3">
      <zzr-popover
        placement="top"
        width="160"
        v-model="visible">
        <p>这是一段内容这是一段内容确定删除吗？</p>
        <div style="text-align: right; margin: 0">
          <zzr-button size="mini" type="text" @click="visible = false">取消</zzr-button>
          <zzr-button type="primary" size="mini" @click="visible = false">确定</zzr-button>
        </div>
        <zzr-button slot="reference">删除</zzr-button>
      </zzr-popover>
    </zzr-show-card>
  </div>
</template>

<script>
  import ZzrShowCard from '../_components/zzr-show-card'
  import ZzrPopover from '../../../src/components/global/popover/zzr-popover'
  import ZzrButton from '../../../src/components/global/button/zzr-button'
  export default {
    name: 'popover-demos',
    components: { ZzrButton, ZzrPopover, ZzrShowCard },
    data () {
      return {
        visible: false,
        obj1: {
          title: '基础用法',
          value: '',
          des: 'Popover 的属性与 Tooltip 很类似，它们都是基于Vue-popper开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。',
          content: '<zzr-popover\n' +
            '  placement="top-start"\n' +
            '  title="标题"\n' +
            '  width="200"\n' +
            '  trigger="hover"\n' +
            '  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">\n' +
            '  <zzr-button slot="reference">hover 激活</zzr-button>\n' +
            '</zzr-popover>\n' +
            '<zzr-popover\n' +
            '  placement="bottom"\n' +
            '  title="标题"\n' +
            '  width="200"\n' +
            '  trigger="click"\n' +
            '  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">\n' +
            '  <zzr-button slot="reference">click 激活</zzr-button>\n' +
            '</zzr-popover>\n' +
            '<zzr-popover\n' +
            '  ref="popover"\n' +
            '  placement="right"\n' +
            '  title="标题"\n' +
            '  width="200"\n' +
            '  trigger="focus"\n' +
            '  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">\n' +
            '</zzr-popover>\n' +
            '<zzr-button v-popover:popover>focus 激活</zzr-button>\n' +
            '<zzr-popover\n' +
            '  placement="bottom"\n' +
            '  title="标题"\n' +
            '  width="200"\n' +
            '  trigger="manual"\n' +
            '  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"\n' +
            '  v-model="visible">\n' +
            '  <zzr-button slot="reference" @click="visible = !visible">手动激活</zzr-button>\n' +
            '</zzr-popover>'
        },
        obj2: {
          title: '嵌套信息',
          value: '',
          des: '可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。',
          content: '<zzr-popover\n' +
            '  placement="right"\n' +
            '  width="400"\n' +
            '  trigger="click">\n' +
            '  <div>\n' +
            '    嵌套内容\n' +
            '  </div>\n' +
            '  <zzr-button slot="reference">click 激活</zzr-button>\n' +
            '</zzr-popover>'
        },
        obj3: {
          title: '嵌套操作\n',
          value: '',
          des: '当然，你还可以嵌套操作，这相比 Dialog 更为轻量',
          content: '<zzr-popover\n' +
            '  placement="top"\n' +
            '  width="160"\n' +
            '  v-model="visible">\n' +
            '  <p>这是一段内容这是一段内容确定删除吗？</p>\n' +
            '  <div style="text-align: right; margin: 0">\n' +
            '    <zzr-button size="mini" type="text" @click="visible = false">取消</zzr-button>\n' +
            '    <zzr-button type="primary" size="mini" @click="visible = false">确定</zzr-button>\n' +
            '  </div>\n' +
            '  <zzr-button slot="reference">删除</zzr-button>\n' +
            '</zzr-popover>'
        },
      }
    },
  }
</script>

<style scoped>

</style>
