<template>
  <div class="zzr-color">
    <div class="zzr-color-des">
      <h4>赤橙黄绿青蓝紫 </h4>
      <p>--按色相搭配</p>
    </div>
    <div class="primary-red">
      <div class="primary-color">
        <div class="primary-color-des">
          <h3>红色</h3>
          <p>--zzr UI 使用绯红作为作为主色调时，其中增强亮度为hover，增强深度为active。</p>
        </div>
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
        <h5>★经典配色★</h5>
        <div class="classic-color-example1">
          <h4>◆京东单色</h4>
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
          <h4>◆京东渐变色</h4>
          <div class="jd-color-gradient">
            <div>
              <h5>红-渐变</h5>
              <p>#fa644c<br>#f61207</p>
            </div>
            <div>
              <h5>紫-渐变</h5>
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
      <div class="assist-color-des">
        <h3>万能辅助色</h3>
        <p>--辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。</p>
      </div>
      <div class="assist-color-many">
        <div>
          <h4>信息色</h4>
          <p>#2db7f5</p>
        </div>
        <div>
          <h4>成功色</h4>
          <p>#19be6b</p>
        </div>
        <div>
          <h4>警告色</h4>
          <p>#ff9900</p>
        </div>
        <div>
          <h4>错误色</h4>
          <p>#ed4014</p>
        </div>
      </div>
    </div>
    <div class="neuter-color">
      <div class="neuter-color-des">
        <h3>中性色</h3>
        <p>--将灰度值分为11份</p>
      </div>
      <div class="neuter-color-many">
        <div>
          <h4>黑</h4>
          <p>1</p>
        </div>
        <div>
          <h4>黑</h4>
          <p>2</p>
        </div>
        <div>
          <h4>黑</h4>
          <p>3</p>
        </div>
        <div>
          <h4>黑</h4>
          <p>4</p>
        </div>
        <div>
          <h4>黑</h4>
          <p>5</p>
        </div>
        <div>
          <h4>黑</h4>
          <p>6</p>
        </div>
        <div>
          <h4>黑</h4>
          <p>7</p>
        </div>
        <div>
          <h4>黑</h4>
          <p>8</p>
        </div>
        <div>
          <h4>黑</h4>
          <p>9</p>
        </div>
      </div>
      <div class="neuter-color-des">
        <h3>用途</h3>
        <p> --用于文本/背景/边框</p>
      </div>
      <div class="neuter-color-use">
        <div class="neuter-color-use-title">
          <div>
            <h4>主要标题</h4>
            <p>#333</p>
          </div>
          <div>
            <h4>常用标题</h4>
            <p>#666</p>
          </div>
          <div>
            <h4>次要标题</h4>
            <p>#999</p>
          </div>
          <div>
            <h4>占位文字</h4>
            <p>#999</p>
          </div>
        </div>
        <div class="neuter-color-use-border">
          <div>
            <h4>一级边框</h4>
            <p>#DCDFE6</p>
          </div>
          <div>
            <h4>二级边框</h4>
            <p>#E4E7ED</p>
          </div>
          <div>
            <h4>三级边框</h4>
            <p>#EBEEF5</p>
          </div>
          <div>
            <h4>四级边框</h4>
            <p>#F2F6FC</p>
          </div>
        </div>
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
  /*@import '../../styles/reset.css';*/
  @import "../../styles/coolhue";
  .flex-column{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
  }
  .div-block{
    width: 100px;
    height: 100px;
    border-radius: $border-radius-base;
    color: $primary-white;
    text-align: center;
  }
  .zzr-color {
    .zzr-color-des,.primary-color-des,.assist-color-des,.neuter-color-des{
      @include flexCenter($align-items: center, $justify-content: flex-start)
    }
    p{
      line-height: 1em;
      text-transform: uppercase;
    }
    >.primary-red {
      margin-top: 20px;
      >.primary-color{
        >.primary-color-3{
          margin-top: 20px;
          @include flexCenter($justify-content: space-between);
          >div{
            @extend .div-block;
            @extend .flex-column;
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
        margin-top: 20px;
        >.classic-color-example1{
          margin-top: 20px;
          margin-bottom: 20px;
          >h4{
            margin-bottom: 10px;
          }
          >.jd-color-many{
            @include flexCenter($justify-content: space-between);
            p{
              font-size: 14px;
              text-transform: uppercase;
            }
            >div{
              @extend .div-block;
              @extend .flex-column;
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
          margin-bottom: 20px;
          >h4{
            margin-bottom: 10px;
          }
          >.jd-color-gradient{
            @include flexCenter($justify-content: space-between);
            p{
              font-size: 14px;
              text-transform: uppercase;
            }
            >div{
              @extend .div-block;
              @extend .flex-column;
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
    >.assist-color{
      margin-top: 20px;
      >.assist-color-many{
        margin-top: 20px;
        @include flexCenter($justify-content: space-between);
        >div{
          @extend .div-block;
          @extend .flex-column;
          &:nth-child(1){
            background-color: $primary-info;
          }
          &:nth-child(2){
            background-color: $primary-success;
          }
          &:nth-child(3){
            background-color: $primary-warning;
          }
          &:nth-child(4){
            background-color: $primary-error;
          }
        }
      }
    }
    >.neuter-color{
      margin-top: 20px;
      .neuter-color-many{
        margin: 20px 0;
        @include flexCenter($justify-content: space-between);
        >div{
          @extend .div-block;
          @extend .flex-column;
          width: 70px;
          height: 70px;
          &:nth-child(1){
            background-color: darken($primary-white,10%);
          }
          &:nth-child(2){
            background-color: darken($primary-white,20%);
          }
          &:nth-child(3){
            background-color: darken($primary-white,30%);
          }
          &:nth-child(4){
            background-color: darken($primary-white,40%);
          }
          &:nth-child(5){
            background-color: darken($primary-white,50%);
          }
          &:nth-child(6){
            background-color: darken($primary-white,60%);
          }
          &:nth-child(7){
            background-color: darken($primary-white,70%);
          }
          &:nth-child(8){
            background-color: darken($primary-white,80%);
          }
          &:nth-child(9){
            background-color: darken($primary-white,90%);
          }
        }
      }
      .neuter-color-use{
        >.neuter-color-use-title,.neuter-color-use-border{
          margin: 20px 0;
          @include flexCenter($justify-content: space-between);
          >div{
            @extend .div-block;
            @extend .flex-column;
          }
        }
        >.neuter-color-use-title{
          >div:nth-child(1){
            background-color: $color-text-primary;
          }
          >div:nth-child(2){
            background-color: $color-text-common;
          }
          >div:nth-child(3){
            background-color: $color-text-second;
          }
          >div:nth-child(4){
            background-color: $color-text-hold;
          }
        }
        >.neuter-color-use-border{
          p,h4{
            color: $color-text-primary;
          }
          >div:nth-child(1){
            background-color: $color-border-1;
          }
          >div:nth-child(2){
            background-color: $color-border-2;
          }
          >div:nth-child(3){
            background-color: $color-border-3;
          }
          >div:nth-child(4){
            background-color: $color-border-4;
          }

        }
      }
    }
  }
</style>
