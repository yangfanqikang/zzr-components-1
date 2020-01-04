<template>
    <div class="zzr-button-group-example">
      <h2>按钮组</h2>
      <div>
        <p>
          <strong>分页按钮组</strong>
        </p>
        <zzr-button-group>
          <zzr-button type="primary" icon-name="back">上一页</zzr-button>
          <zzr-button>1</zzr-button>
          <zzr-button>2</zzr-button>
          <zzr-button>3</zzr-button>
          <zzr-button>4</zzr-button>
          <zzr-button>...</zzr-button>
          <zzr-button>末页</zzr-button>
          <zzr-button icon-name="right" icon-position="inverted">下一页</zzr-button>
        </zzr-button-group>
        <pre><code>{{content2}}</code></pre>

      </div>
      <div>
        <p>
          <strong>普通按钮组</strong>
        </p>
        <zzr-button-group>
          <zzr-button icon-name="back"></zzr-button>
          <zzr-button icon-name="mall_light"></zzr-button>
          <zzr-button icon-name="right"></zzr-button>
        </zzr-button-group>
        <pre><code>{{content2}}</code></pre>
      </div>
    </div>
</template>

<script>
import ZzrButtonGroup from '../../components/global/button-group/zzr-button-group'
import ZzrButton from '../../components/global/button/zzr-button'
export default {
  name: 'zzr-button-group-example',
  components: { ZzrButton, ZzrButtonGroup },
  data () {
    return {
      content1: `
          <zzr-button-group>
          <zzr-button type="primary" icon-name="back">上一页</zzr-button>
          <zzr-button>1</zzr-button>
          <zzr-button>2</zzr-button>
          <zzr-button>3</zzr-button>
          <zzr-button>4</zzr-button>
          <zzr-button>...</zzr-button>
          <zzr-button>末页</zzr-button>
          <zzr-button icon-name="right" icon-position="inverted">下一页</zzr-button>
        </zzr-button-group>
      `.replace(/^ {8}/gm, '').trim(),
      content2: `
           <zzr-button-group>
          <zzr-button icon-name="back"></zzr-button>
          <zzr-button icon-name="mall_light"></zzr-button>
          <zzr-button icon-name="right"></zzr-button>
        </zzr-button-group>
      `.replace(/^ {8}/gm, '').trim(),
    }
  },
}
</script>

<style lang="scss" scoped>
    .zzr-button-group-example {
      >div{
        margin: 20px 0;
      }
    }
</style>
