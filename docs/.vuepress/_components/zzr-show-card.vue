<template>
  <div class="zzr-show-card">
    <h4>{{title}}</h4>
    <p>{{des}}</p>
    <div class="ex1" :class="[
      {'is-flex': isFlex}
    ]">
      <slot></slot>
    </div>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
  export default {
    name: 'zzr-show-card',
    props: {
      title: String,
      des: String,
      content: String,
      isFlex: false,
      multiple: false
    }
  }
</script>

<style lang="scss" scoped>
  .zzr-show-card {
    .ex1{
      width: 180px;
      margin: 10px 0;
    }
    .is-flex{
      display: flex;
    }
  }
</style>
