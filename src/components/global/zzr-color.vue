<template>
  <div class="zzr-color">
    <h2>赤橙黄绿青蓝紫</h2>
    <p>按色相搭配</p>
    <div class="primary-red">
      <div class="primary-color">
        <h3>红色</h3>
        <p>zzr UI 使用绯红作为作为主色调时，其中增强亮度为hover，增强深度为active。</p>
        <div class="primary-color-3">
          <div>
            <h4>主色</h4>
            <p>#db272e</p>
          </div>
          <div>
            <h4>激活色</h4>
            <p>+5%</p>
          </div>
          <div>
            <h4>悬停色</h4>
            <p>-5%</p>
          </div>
        </div>
      </div>
      <div class="classic-color">
        <h3>经典配色</h3>
        <div class="classic-color-example1">
          <h4>京东单色</h4>
          <div class="jd-color-many">
            <div>
              <h5>主色</h5>
              <p>#c9271a</p>
            </div>
            <div>
              <h5>橙</h5>
              <p>#ffa904</p>
            </div>
            <div>
              <h5>黄</h5>
              <p>#f2d160</p>
            </div>
            <div>
              <h5>蓝</h5>
              <p>#5fb5f0</p>
            </div>
          </div>
        </div>
        <div class="classic-color-example2">
          <h4>京东渐变色</h4>
          <div class="jd-color-gradient">
            <div>
              <h5>红-渐变</h5>
              <p>#fa644c<br>#f61207</p>
            </div>
            <div>
              <h5>红-紫渐变</h5>
              <p>#d37ef5<br>#880cdc</p>
            </div>
            <div>
              <h5>橙-黄渐变</h5>
              <p>#fdb92a<br>#fd8703</p>
            </div>
            <div>
              <h5>青-蓝渐变</h5>
              <p>#03e4ff<br>#027ef2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="assist-color">
      <h3>辅助色</h3>
      <p>View UI（iView） 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。</p>
      <div class="assist-color-many">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="neuter-color">
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
  @import "../../styles/coolhue";

  .zzr-color {
    >.primary-red {
      >.primary-color{
        >.primary-color-3{
          @include flexCenter($justify-content: space-between);
          >div{
            width: 100px;
            height: 100px;
            border-radius: $border-radius-base;
            color: $primary-white;
            text-align: center;
            &:nth-child(1){
              background-color: $primary-red;
            }
            &:nth-child(1):hover{
              background-color: lighten($primary-red,5%);
              cursor: pointer;
            }
            &:nth-child(2){
              background-color: darken($primary-red,5%);
            }
            &:nth-child(3){
              background-color: lighten($primary-red,5%);
            }
          }
        }
      }
      >.classic-color{
        >.classic-color-example1{
          >.jd-color-many{
            @include flexCenter($justify-content: space-between);
            p{
              font-size: 14px;
              text-transform: uppercase;
            }
            >div{
              width: 100px;
              height: 100px;
              border-radius: $border-radius-base;
              color: $primary-white;
              text-align: center;
              &:nth-child(1){
                background-color: $jd-primary;
              }
              &:nth-child(1):hover{
                background-color: $jd-assist-orange;
                cursor: pointer;
              }
              &:nth-child(2){
                background-color: $jd-assist-orange;
              }
              &:nth-child(3){
                background-color: $jd-assist-yellow;
              }
              &:nth-child(4){
                background-color: $jd-assist-blue;
              }
            }
          }
        }
        >.classic-color-example2{
          >.jd-color-gradient{
            @include flexCenter($justify-content: space-between);
            p{
              font-size: 14px;
              text-transform: uppercase;
            }
            >div{
              width: 100px;
              height: 100px;
              border-radius: $border-radius-base;
              color: $primary-white;
              text-align: center;
              &:nth-child(1){
                background-image: linear-gradient( 135deg, nth($jd-list1, 1) 0%, nth($jd-list1, 2) 100%);
              }
              &:nth-child(2){
                background-image: linear-gradient( 135deg, nth($jd-list3, 1) 0%, nth($jd-list3, 2) 100%);
              }
              &:nth-child(3){
                background-image: linear-gradient( 135deg, nth($jd-list8, 1) 0%, nth($jd-list8, 2) 100%);
              }
              &:nth-child(4){
                background-image: linear-gradient( 135deg, nth($jd-list6, 1) 0%, nth($jd-list6, 2) 100%);
              }
            }
          }
        }
      }
    }
  }
</style>
