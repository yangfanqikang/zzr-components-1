<template>
    <div class="zzr-color">
      <div class="zzr-color-primary">
        <h3>主色</h3>
        <p>View UI（iView） 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。</p>
        <div>
          <div class="Primary">1</div>
          <div class="Light-Primary">2</div>
          <div class="Dark-Primary">3</div>
        </div>
      </div>
      <div class="zzr-color-assist">
        <h3>辅助色</h3>
        <p>View UI（iView） 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。</p>
        <div>
          <div class="Primary"></div>
          <div class="Light-Primary"></div>
          <div class="Dark-Primary"></div>
        </div>
      </div>
      <div class="zzr-color-neuter">
        <h3>中性色</h3>
        <p>View UI（iView） 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。</p>
        <div>
          <div class="Primary"></div>
          <div class="Light-Primary"></div>
          <div class="Dark-Primary"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'zzr-color'
}
</script>

<style lang="scss" scoped>
.zzr-color{
  >div{
    >h3{
      font-size: 16px;
      line-height: 2em;
    }
  }
  >.zzr-color-primary{
    >div{
      border: 1px solid #000;
      height: 100px;
      background-color: #df5efd;
    }
  }
}
</style>
