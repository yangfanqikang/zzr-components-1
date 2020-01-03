<template>
    <div class="zzr-button">
      <div class="zzr-button-1">
        <zzr-button type="default">默认</zzr-button>
        <zzr-button type="primary">主要</zzr-button>
        <zzr-button type="info">信息</zzr-button>
        <zzr-button type="success">成功</zzr-button>
        <zzr-button type="warning">警告</zzr-button>
        <zzr-button type="error">错误</zzr-button>
        <zzr-button type="disabled">禁用</zzr-button>
      </div>
      <div class="zzr-button-2">
        <zzr-button type="default" plain>默认</zzr-button>
        <zzr-button type="primary" plain>主要</zzr-button>
        <zzr-button type="info" plain>信息</zzr-button>
        <zzr-button type="success" plain>成功</zzr-button>
        <zzr-button type="warning" plain>警告</zzr-button>
        <zzr-button type="error" plain>错误</zzr-button>
        <zzr-button type="disabled" plain>禁用</zzr-button>
      </div>
      <div class="zzr-button-3">
        <zzr-button type="default" round>默认</zzr-button>
        <zzr-button type="primary" round>主要</zzr-button>
        <zzr-button type="info" round>信息</zzr-button>
        <zzr-button type="success" round>成功</zzr-button>
        <zzr-button type="warning" round>警告</zzr-button>
        <zzr-button type="error" round>错误</zzr-button>
        <zzr-button type="disabled" round>禁用</zzr-button>
      </div>
      <div class="zzr-button-4">
        <zzr-button type="default" icon-name="edit" round>默认</zzr-button>
        <zzr-button type="primary" icon-name="close">主要</zzr-button>
        <zzr-button type="info" >信息</zzr-button>
        <zzr-button type="success" >成功</zzr-button>
        <zzr-button type="warning" >警告</zzr-button>
        <zzr-button type="error" >错误</zzr-button>
        <zzr-button type="disabled" >禁用</zzr-button>
      </div>
      <div class="zzr-button-5">
        <zzr-button type="default" icon-name="edit" round>默认</zzr-button>
        <zzr-button type="primary" icon-name="edit" circle>主要</zzr-button>
        <zzr-button type="info" icon-name="edit" circle>信息</zzr-button>
        <zzr-button type="success" icon-name="edit">成功</zzr-button>
        <zzr-button type="warning" icon-name="edit">警告</zzr-button>
        <zzr-button type="error" icon-name="edit">错误</zzr-button>
        <zzr-button type="disabled" icon-name="edit">禁用</zzr-button>
      </div>

    </div>
</template>

<script>
import ZzrButton from '../../components/global/button/zzr-button'
export default {
  name: 'zzr-button-example',
  components: {
    ZzrButton
  }
}
</script>

<style lang="scss" scoped>
    .zzr-button {
      >div{
        margin: 10px 0;
      }
    }
</style>
