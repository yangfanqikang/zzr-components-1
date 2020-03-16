<template>
  <div>
    <zzr-show-card :title="obj1.title" :des="obj1.des" :content="obj1.content">
      <div class="zzr-tag-ex1">
        <zzr-tag>标签</zzr-tag>
        <zzr-tag type="success">标签</zzr-tag>
        <zzr-tag type="info">标签</zzr-tag>
        <zzr-tag type="warning">标签</zzr-tag>
        <zzr-tag type="danger">标签</zzr-tag>
      </div>
    </zzr-show-card>
    <zzr-show-card :title="obj2.title" :des="obj2.des" :content="obj2.content">
      <div class="zzr-tag-ex1">
        <zzr-tag closable>标签</zzr-tag>
        <zzr-tag closable type="success">标签</zzr-tag>
        <zzr-tag closable type="info">标签</zzr-tag>
        <zzr-tag closable type="warning">标签</zzr-tag>
        <zzr-tag closable type="danger">标签</zzr-tag>
      </div>
    </zzr-show-card>
    <zzr-show-card :title="obj3.title" :des="obj3.des" :content="obj3.content">
      <div class="zzr-tag-ex1">
        <zzr-tag closable>默认标签</zzr-tag>
        <zzr-tag size="medium" closable>中等标签</zzr-tag>
        <zzr-tag size="small" closable>小型标签</zzr-tag>
        <zzr-tag size="mini" closable>超小标签</zzr-tag>
      </div>
    </zzr-show-card>
    <zzr-show-card :title="obj4.title" :des="obj4.des" :content="obj4.content">
      <div class="zzr-tag-ex1">
        <zzr-tag effect="dark">标签</zzr-tag>
        <zzr-tag effect="dark" type="success">标签</zzr-tag>
        <zzr-tag effect="dark" type="info">标签</zzr-tag>
        <zzr-tag effect="dark" type="warning">标签</zzr-tag>
        <zzr-tag effect="dark" type="danger">标签</zzr-tag>
      </div>
      <div class="zzr-tag-ex1">
        <zzr-tag effect="plain">标签</zzr-tag>
        <zzr-tag effect="plain" type="success">标签</zzr-tag>
        <zzr-tag effect="plain" type="info">标签</zzr-tag>
        <zzr-tag effect="plain" type="warning">标签</zzr-tag>
        <zzr-tag effect="plain" type="danger">标签</zzr-tag>
      </div>
    </zzr-show-card>
    <zzr-show-card :title="obj5.title" :des="obj5.des" :content="obj5.content">
      <div class="zzr-tag-ex1">
        <zzr-tag closable v-for="tag in dynamicTags">{{tag}}</zzr-tag>
        <zzr-input v-if="inputVisible" ref="saveTagInput" @blur="handleInputConfirm" v-model="inputValue"  @keyup.enter.native="handleInputConfirm"></zzr-input>
        <zzr-button v-else class="button-new-tag" size="small" @click="showInput">+Tag</zzr-button>
      </div>
    </zzr-show-card>
  </div>
</template>

<script>
  import ZzrShowCard from '../_components/zzr-show-card'
  import ZzrTag from '../../../src/components/global/tag/zzr-tag'
  import ZzrButton from '../../../src/components/global/button/zzr-button'
  import ZzrInput from '../../../src/components/global/input/zzr-input'
  export default {
    name: 'tag-demos',
    components: { ZzrInput, ZzrButton, ZzrTag, ZzrShowCard },
    data () {
      return {
        obj1: {
          title: '基础用法',
          des: '由type属性来选择tag的类型，也可以通过color属性来自定义背景色。',
          content: `
<zzr-tag>标签</zzr-tag>
<zzr-tag type="success">标签</zzr-tag>
<zzr-tag type="info">标签</zzr-tag>
<zzr-tag type="warning">标签</zzr-tag>
<zzr-tag type="danger">标签</zzr-tag>`.replace(/^ {8}/gm, '').trim(),
        },
        obj2: {
          title: '可移除标签',
          des: '设置closable属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置disable-transitions属性，它接受一个Boolean，true 为关闭。',
          content: `
<zzr-tag closable>标签</zzr-tag>
<zzr-tag closable type="success">标签</zzr-tag>
<zzr-tag closable type="info">标签</zzr-tag>
<zzr-tag closable type="warning">标签</zzr-tag>
<zzr-tag closable type="danger">标签</zzr-tag>`.replace(/^ {8}/gm, '').trim(),
        },
        obj3: {
          title: '不同尺寸',
          des: 'Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。',
          content: `
<zzr-tag closable>默认标签</zzr-tag>
<zzr-tag size="medium" closable>中等标签</zzr-tag>
<zzr-tag size="small" closable>小型标签</zzr-tag>
<zzr-tag size="mini" closable>超小标签</zzr-tag>`.replace(/^ {8}/gm, '').trim(),
        },
        obj4: {
          title: '不同主题',
          des: 'Tag 组件提供了三个不同的主题：dark、light 和 plain',
          content: `
<zzr-tag closable>默认标签</zzr-tag>
<zzr-tag size="medium" closable>中等标签</zzr-tag>
<zzr-tag size="small" closable>小型标签</zzr-tag>
<zzr-tag size="mini" closable>超小标签</zzr-tag>`.replace(/^ {8}/gm, '').trim(),
        },
        obj5: {
          title: '动态编辑标签',
          des: '动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现',
          content: `
<zzr-tag closable>默认标签</zzr-tag>
<zzr-tag size="medium" closable>中等标签</zzr-tag>
<zzr-tag size="small" closable>小型标签</zzr-tag>
<zzr-tag size="mini" closable>超小标签</zzr-tag>`.replace(/^ {8}/gm, '').trim(),
        },
        inputVisible: false,
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputValue: ''
      }
    },
    methods: {
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        console.log('***************')
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    },
  }
</script>

<style lang="scss" scoped>
.zzr-tag-ex1{
  display: flex;
  margin: 10px 0;
  span{
    margin-right: 10px;
  }
}
</style>
