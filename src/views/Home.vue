<template>
  <div class="home">
    <ZzrIcon name="'edit'"></ZzrIcon>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ZzrIcon from '../components/global/icon/zzr-icon'
export default {
  name: 'home',
  components: {
    HelloWorld,
    ZzrIcon
  }
}
</script>
