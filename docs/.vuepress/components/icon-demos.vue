<template>
    <div class="icon-demos">
      <div>
        <h4>sl:14X14</h4>
        <zzr-icon name="edit" color="#f6416c"></zzr-icon>
        <zzr-icon name="close" color="#ffde7d"></zzr-icon>
        <zzr-icon name="favor" color="#00b8a9"></zzr-icon>
        <zzr-icon name="location" color="#14ffec"></zzr-icon>
        <zzr-icon name="phone" color="#3490de"></zzr-icon>
      </div>
      <div>
        <h4>md:24X24</h4>
        <zzr-icon name="edit" color="#f6416c" size="md"></zzr-icon>
        <zzr-icon name="close" color="#ffde7d" size="md"></zzr-icon>
        <zzr-icon name="favor" color="#00b8a9" size="md"></zzr-icon>
        <zzr-icon name="location" color="#14ffec" size="md"></zzr-icon>
        <zzr-icon name="phone" color="#3490de" size="md"></zzr-icon>
      </div>
      <div>
        <h4>lg:36X36</h4>
        <zzr-icon name="edit" color="#f6416c" size="lg"></zzr-icon>
        <zzr-icon name="close" color="#ffde7d" size="lg"></zzr-icon>
        <zzr-icon name="favor" color="#00b8a9" size="lg"></zzr-icon>
        <zzr-icon name="location" color="#14ffec" size="lg"></zzr-icon>
        <zzr-icon name="phone" color="#3490de" size="lg"></zzr-icon>
      </div>
      <iframe id="icon-iframe" src="http://www.zouzhirui.xyz/dist/" frameborder="0"></iframe>
    </div>
</template>

<script>
  import ZzrIcon from '../../../src/components/global/icon/zzr-icon'
  export default {
    name: 'icon-demos',
    components: { ZzrIcon }
  }
</script>

<style lang="scss" scoped>
    .icon-demos {
      #icon-iframe{
        width: 100%;
        height: 800px;
        border: 1px solid #eeeeee;
        margin-top: 20px;
      }
    }
</style>
