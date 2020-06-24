<template>
  <div class="zzr-show-card">
    <h4>{{title || obj.title}}</h4>
    <p>{{des || obj.des}}</p>
    <div class="ex1" :class="[
      {'is-flex': isFlex},
    ]" :style="{width: realWidth}">
      <slot></slot>
    </div>
    <pre><code>{{content || obj.content}}</code></pre>
  </div>
</template>

<script>
  export default {
    name: 'zzr-show-card',
    props: {
      obj: {
        type: Object,
        default: () => new Object()
      },
      title: String,
      des: String,
      content: String,
      isFlex: false,
      multiple: false,
      realWidth: {
        type: String,
        default: '180px'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .zzr-show-card {
    margin-top: 20px;
    .ex1{
      width: 180px;
      margin: 10px 0;
    }
    .is-flex{
      display: flex;
    }
  }
</style>
