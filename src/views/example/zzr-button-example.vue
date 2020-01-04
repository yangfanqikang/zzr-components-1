<template>
    <div class="zzr-button">
      <p>常用的操作按钮</p>
      <div class="zzr-button-1">
        <p>
          <strong>基础按钮</strong>
        </p>
        <div>
          <zzr-button type="default">默认</zzr-button>
          <zzr-button type="primary">主要</zzr-button>
          <zzr-button type="info">信息</zzr-button>
          <zzr-button type="success">成功</zzr-button>
          <zzr-button type="warning">警告</zzr-button>
          <zzr-button type="error">错误</zzr-button>
          <zzr-button type="disabled">禁用</zzr-button>
        </div>
        <pre><code>{{content1}}</code></pre>
      </div>
      <div class="zzr-button-2">
        <p>
          <strong>朴素按钮</strong>
        </p>
        <div>
          <zzr-button type="default" plain>默认</zzr-button>
          <zzr-button type="primary" plain>主要</zzr-button>
          <zzr-button type="info" plain>信息</zzr-button>
          <zzr-button type="success" plain>成功</zzr-button>
          <zzr-button type="warning" plain>警告</zzr-button>
          <zzr-button type="error" plain>错误</zzr-button>
          <zzr-button type="disabled" plain>禁用</zzr-button>
        </div>
        <pre><code>{{content2}}</code></pre>
      </div>

      <div class="zzr-button-3">
        <p>
          <strong>圆角按钮</strong>
        </p>
        <div>
          <zzr-button type="default" round>默认</zzr-button>
          <zzr-button type="primary" round>主要</zzr-button>
          <zzr-button type="info" round>信息</zzr-button>
          <zzr-button type="success" round>成功</zzr-button>
          <zzr-button type="warning" round>警告</zzr-button>
          <zzr-button type="error" round>错误</zzr-button>
          <zzr-button type="disabled" round>禁用</zzr-button>
        </div>
        <pre><code>{{content3}}</code></pre>
      </div>
      <div class="zzr-button-4">
        <p>
          <strong>图标+按钮</strong>
        </p>
        <div>
          <zzr-button type="default" icon-name="edit" round>默认</zzr-button>
          <zzr-button type="primary" icon-name="close">主要</zzr-button>
          <zzr-button type="info" icon-name="favor">信息</zzr-button>
          <zzr-button type="success" icon-name="favor">成功</zzr-button>
          <zzr-button type="warning" icon-name="favor">警告</zzr-button>
          <zzr-button type="error" icon-name="favor">错误</zzr-button>
          <zzr-button type="disabled" icon-name="favor">禁用</zzr-button>
        </div>
        <pre><code>{{content4}}</code></pre>
      </div>
      <div class="zzr-button-5">
        <p>
          <strong>圆形按钮</strong>
        </p>
        <div>
          <zzr-button type="default" icon-name="edit" circle>默认</zzr-button>
          <zzr-button type="primary" icon-name="phone" circle>主要</zzr-button>
          <zzr-button type="info" icon-name="favor" circle>信息</zzr-button>
          <zzr-button type="success" icon-name="search" circle>成功</zzr-button>
          <zzr-button type="warning" icon-name="taxi" circle>警告</zzr-button>
          <zzr-button type="error" icon-name="time" circle>错误</zzr-button>
          <zzr-button type="disabled" icon-name="warn" circle>禁用</zzr-button>
        </div>
        <pre><code>{{content5}}</code></pre>
      </div>
      <div class="zzr-button-6">
        <p>
          <strong>图标按钮倒置</strong>
        </p>
        <div>
          <zzr-button type="default" icon-name="edit" icon-position="inverted" >默认</zzr-button>
          <zzr-button type="primary" icon-name="phone" icon-position="inverted"  >主要</zzr-button>
          <zzr-button type="info" icon-name="favor" icon-position="inverted"  >信息</zzr-button>
          <zzr-button type="success" icon-name="search" icon-position="inverted"  >成功</zzr-button>
          <zzr-button type="warning" icon-name="taxi" icon-position="inverted"  >警告</zzr-button>
          <zzr-button type="error" icon-name="time" icon-position="inverted"  >错误</zzr-button>
          <zzr-button type="disabled" icon-name="warn" icon-position="inverted"  >禁用</zzr-button>
        </div>
        <pre><code>{{content6}}</code></pre>
      </div>
      <div class="zzr-button-7">
        <p>
          <strong>禁用/无效按钮</strong>
        </p>
        <div>

          <zzr-button type="default" disabled>默认</zzr-button>
          <zzr-button type="primary" disabled>主要</zzr-button>
          <zzr-button type="info" disabled>信息</zzr-button>
          <zzr-button type="success" disabled>成功</zzr-button>
          <zzr-button type="warning" plain disabled>警告</zzr-button>
          <zzr-button type="error" plain disabled>错误</zzr-button>
          <zzr-button type="disabled" plain disabled>禁用</zzr-button>
        </div>
        <pre><code>{{content7}}</code></pre>
      </div>
      <div class="zzr-button-8">
        <p>
          <strong>自定义宽高</strong>
        </p>
        <div>
          <zzr-button type="default" width="80" height="30">默认</zzr-button>
          <zzr-button type="primary" width="80" height="50">主要</zzr-button>
          <zzr-button type="info" width="80" height="60" >信息</zzr-button>
          <zzr-button type="success" width="100" height="60" >成功</zzr-button>
          <zzr-button type="warning"  width="80" height="60" >警告</zzr-button>
          <zzr-button type="error"  width="80" height="50">错误</zzr-button>
          <zzr-button type="disabled" width="80" height="30">禁用</zzr-button>
        </div>
        <pre><code>{{content8}}</code></pre>
      </div>
      <div class="zzr-button-8">
        <p>
          <strong>加载中...</strong>
        </p>
        <div>
          <zzr-button type="default" :is-loading=true>加载中</zzr-button>
        </div>
        <pre><code>{{content9}}</code></pre>
      </div>
    </div>
</template>

<script>
import ZzrButton from '../../components/global/button/zzr-button'
export default {
  name: 'zzr-button-example',
  components: {
    ZzrButton
  },
  data () {
    return {
      content1: `
          <zzr-button type="default">默认</zzr-button>
        <zzr-button type="primary">主要</zzr-button>
        <zzr-button type="info">信息</zzr-button>
        <zzr-button type="success">成功</zzr-button>
        <zzr-button type="warning">警告</zzr-button>
        <zzr-button type="error">错误</zzr-button>
        <zzr-button type="disabled">禁用</zzr-button>
      `.replace(/^ {8}/gm, '').trim(),
      content2: `
           <zzr-button type="default" plain>默认</zzr-button>
        <zzr-button type="primary" plain>主要</zzr-button>
        <zzr-button type="info" plain>信息</zzr-button>
        <zzr-button type="success" plain>成功</zzr-button>
        <zzr-button type="warning" plain>警告</zzr-button>
        <zzr-button type="error" plain>错误</zzr-button>
        <zzr-button type="disabled" plain>禁用</zzr-button>
      `.replace(/^ {8}/gm, '').trim(),
      content3: `
          <zzr-button type="default" round>默认</zzr-button>
        <zzr-button type="primary" round>主要</zzr-button>
        <zzr-button type="info" round>信息</zzr-button>
        <zzr-button type="success" round>成功</zzr-button>
        <zzr-button type="warning" round>警告</zzr-button>
        <zzr-button type="error" round>错误</zzr-button>
        <zzr-button type="disabled" round>禁用</zzr-button>
      `.replace(/^ {8}/gm, '').trim(),
      content4: `
          <zzr-button type="default" icon-name="edit" round>默认</zzr-button>
        <zzr-button type="primary" icon-name="close">主要</zzr-button>
        <zzr-button type="info" icon-name="favor">信息</zzr-button>
        <zzr-button type="success" icon-name="favor">成功</zzr-button>
        <zzr-button type="warning" icon-name="favor">警告</zzr-button>
        <zzr-button type="error" icon-name="favor">错误</zzr-button>
        <zzr-button type="disabled" icon-name="favor">禁用</zzr-button>
      `.replace(/^ {8}/gm, '').trim(),
      content5: `
          <zzr-button type="default" icon-name="edit" circle>默认</zzr-button>
        <zzr-button type="primary" icon-name="phone" circle>主要</zzr-button>
        <zzr-button type="info" icon-name="favor" circle>信息</zzr-button>
        <zzr-button type="success" icon-name="search" circle>成功</zzr-button>
        <zzr-button type="warning" icon-name="taxi" circle>警告</zzr-button>
        <zzr-button type="error" icon-name="time" circle>错误</zzr-button>
        <zzr-button type="disabled" icon-name="warn" circle>禁用</zzr-button>
      `.replace(/^ {8}/gm, '').trim(),
      content6: `
          <zzr-button type="default" icon-name="edit" icon-position="inverted" >默认</zzr-button>
        <zzr-button type="primary" icon-name="phone" icon-position="inverted"  >主要</zzr-button>
        <zzr-button type="info" icon-name="favor" icon-position="inverted"  >信息</zzr-button>
        <zzr-button type="success" icon-name="search" icon-position="inverted"  >成功</zzr-button>
        <zzr-button type="warning" icon-name="taxi" icon-position="inverted"  >警告</zzr-button>
        <zzr-button type="error" icon-name="time" icon-position="inverted"  >错误</zzr-button>
        <zzr-button type="disabled" icon-name="warn" icon-position="inverted"  >禁用</zzr-button>
      `.replace(/^ {8}/gm, '').trim(),
      content7: `
          <zzr-button type="default" disabled>默认</zzr-button>
        <zzr-button type="primary" disabled>主要</zzr-button>
        <zzr-button type="info" disabled>信息</zzr-button>
        <zzr-button type="success" disabled>成功</zzr-button>
        <zzr-button type="warning" plain disabled>警告</zzr-button>
        <zzr-button type="error" plain disabled>错误</zzr-button>
        <zzr-button type="disabled" plain disabled>禁用</zzr-button>
      `.replace(/^ {8}/gm, '').trim(),
      content8: `
            <zzr-button type="default" width="80" height="30">默认</zzr-button>
        <zzr-button type="primary" width="80" height="50">主要</zzr-button>
        <zzr-button type="info" width="80" height="60" >信息</zzr-button>
        <zzr-button type="success" width="100" height="60" >成功</zzr-button>
        <zzr-button type="warning"  width="80" height="60" >警告</zzr-button>
        <zzr-button type="error"  width="80" height="50">错误</zzr-button>
        <zzr-button type="disabled" width="80" height="30">禁用</zzr-button>
      `.replace(/^ {8}/gm, '').trim(),
      content9: `
            <zzr-button type="default" :is-loading=true>加载中</zzr-button>
      `.replace(/^ {8}/gm, '').trim(),
    }
  }
}
</script>

<style lang="scss" scoped>
    .zzr-button {
      >div{
        margin: 10px 0;
        >div{
          display: flex;
          align-items: center;
          .zzr-button-default{
            margin-right: 10px;
          }
        }
      }
    }
</style>
