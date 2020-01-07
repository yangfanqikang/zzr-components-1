<template>
    <div class="radio-demos">
      <div class="zzr-radio-1">
        <h3>基础用法</h3>
        <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
        <div>
          <zzr-radio v-model="radio" label="1">备选项</zzr-radio>
          <zzr-radio v-model="radio" label="2">备选项</zzr-radio>
        </div>
        <pre><code>{{content1}}</code></pre>
      </div>
      <div class="zzr-radio-1">
        <h3>禁用状态</h3>
        <p>单选框不可用的状态。</p>
        <div>
          <zzr-radio disabled v-model="radio" label="禁用">备选项</zzr-radio>
          <zzr-radio disabled v-model="radio" label="选中且禁用">备选项</zzr-radio>
        </div>
        <pre><code>{{content2}}</code></pre>
      </div>
      <div class="zzr-radio-1">
        <h3>单选框组</h3>
        <p>适用于在多个互斥的选项中选择的场景。</p>
        <div>
          <zzr-radio-group v-model="radio">
            <zzr-radio :label="3">备选项</zzr-radio>
            <zzr-radio :label="6">备选项</zzr-radio>
            <zzr-radio :label="9">备选项</zzr-radio>
          </zzr-radio-group>
        </div>
        <pre><code>{{content3}}</code></pre>
      </div>
      <div class="zzr-radio-1">
        <h3>按钮样式</h3>
        <p>按钮样式的单选组合。</p>
        <div>
          <div>
            <zzr-radio-group v-model="radio1">
              <zzr-radio-button label="上海"></zzr-radio-button>
              <zzr-radio-button label="北京"></zzr-radio-button>
              <zzr-radio-button label="广州"></zzr-radio-button>
              <zzr-radio-button label="深圳"></zzr-radio-button>
            </zzr-radio-group>
          </div>
          <div style="margin-top: 20px">
            <zzr-radio-group v-model="radio2" size="medium">
              <zzr-radio-button label="上海" ></zzr-radio-button>
              <zzr-radio-button label="北京"></zzr-radio-button>
              <zzr-radio-button label="广州"></zzr-radio-button>
              <zzr-radio-button label="深圳"></zzr-radio-button>
            </zzr-radio-group>
          </div>
          <div style="margin-top: 20px">
            <zzr-radio-group v-model="radio3" size="small">
              <zzr-radio-button label="上海"></zzr-radio-button>
              <zzr-radio-button label="北京" disabled ></zzr-radio-button>
              <zzr-radio-button label="广州"></zzr-radio-button>
              <zzr-radio-button label="深圳"></zzr-radio-button>
            </zzr-radio-group>
          </div>
          <div style="margin-top: 20px">
            <zzr-radio-group v-model="radio4" disabled size="mini">
              <zzr-radio-button label="上海"></zzr-radio-button>
              <zzr-radio-button label="北京"></zzr-radio-button>
              <zzr-radio-button label="广州"></zzr-radio-button>
              <zzr-radio-button label="深圳"></zzr-radio-button>
            </zzr-radio-group>
          </div>
        </div>
        <pre><code>{{content4}}</code></pre>
      </div>
      <div class="zzr-radio-1">
        <h3>带有边框</h3>
        <p>带有边框。</p>
        <div>
          <div>
            <zzr-radio v-model="radio5" label="1" border>备选项1</zzr-radio>
            <zzr-radio v-model="radio5" label="2" border>备选项2</zzr-radio>
          </div>
          <div style="margin-top: 20px">
            <zzr-radio v-model="radio6" label="1" border size="medium">备选项1</zzr-radio>
            <zzr-radio v-model="radio6" label="2" border size="medium">备选项2</zzr-radio>
          </div>
          <div style="margin-top: 20px">
            <zzr-radio-group v-model="radio7" size="small">
              <zzr-radio label="1" border>备选项1</zzr-radio>
              <zzr-radio label="2" border disabled>备选项2</zzr-radio>
            </zzr-radio-group>
          </div>
          <div style="margin-top: 20px">
            <zzr-radio-group v-model="radio8" size="mini" disabled>
              <zzr-radio label="1" border>备选项1</zzr-radio>
              <zzr-radio label="2" border>备选项2</zzr-radio>
            </zzr-radio-group>
          </div>
        </div>
        <pre><code>{{content5}}</code></pre>
      </div>
    </div>
</template>

<script>
  import ZzrRadio from '../../../src/components/global/radio/zzr-radio'
  import ZzrRadioGroup from '../../../src/components/global/radio-group/zzr-radio-group'
  import ZzrRadioButton from '../../../src/components/global/radio-button/zzr-radio-button'
  export default {
    name: 'radio-demos',
    components: { ZzrRadioButton, ZzrRadioGroup, ZzrRadio },
    data () {
      return {
        radio: '1',
        radio1: '上海',
        radio2: '上海',
        radio3: '上海',
        radio4: '上海',
        radio5: '1',
        radio6: '1',
        radio7: '1',
        radio8: '1',
        content1: `
            <zzr-radio v-model="radio" label="1">备选项</zzr-radio>
          <zzr-radio v-model="radio" label="2">备选项</zzr-radio>
      `.replace(/^ {8}/gm, '').trim(),
        content2: `
            <zzr-radio disabled v-model="radio" label="禁用">备选项</zzr-radio>
          <zzr-radio disabled v-model="radio" label="选中且禁用">备选项</zzr-radio>
      `.replace(/^ {8}/gm, '').trim(),
        content3: `
            <zzr-radio-group v-model="radio">
            <zzr-radio :label="3">备选项</zzr-radio>
            <zzr-radio :label="6">备选项</zzr-radio>
            <zzr-radio :label="9">备选项</zzr-radio>
          </zzr-radio-group>
      `.replace(/^ {8}/gm, '').trim(),
        content4: `
                <zzr-radio-group v-model="radio1">
              <zzr-radio-button label="上海"></zzr-radio-button>
              <zzr-radio-button label="北京"></zzr-radio-button>
              <zzr-radio-button label="广州"></zzr-radio-button>
              <zzr-radio-button label="深圳"></zzr-radio-button>
            </zzr-radio-group>

            <zzr-radio-group v-model="radio2" size="medium">
              <zzr-radio-button label="上海" ></zzr-radio-button>
              <zzr-radio-button label="北京"></zzr-radio-button>
              <zzr-radio-button label="广州"></zzr-radio-button>
              <zzr-radio-button label="深圳"></zzr-radio-button>
            </zzr-radio-group>

            <zzr-radio-group v-model="radio3" size="small">
              <zzr-radio-button label="上海"></zzr-radio-button>
              <zzr-radio-button label="北京" disabled ></zzr-radio-button>
              <zzr-radio-button label="广州"></zzr-radio-button>
              <zzr-radio-button label="深圳"></zzr-radio-button>
            </zzr-radio-group>

             <zzr-radio-group v-model="radio4" disabled size="mini">
              <zzr-radio-button label="上海"></zzr-radio-button>
              <zzr-radio-button label="北京"></zzr-radio-button>
              <zzr-radio-button label="广州"></zzr-radio-button>
              <zzr-radio-button label="深圳"></zzr-radio-button>
            </zzr-radio-group>
      `.replace(/^ {8}/gm, '').trim(),
        content5: `
                <zzr-radio v-model="radio5" label="1" border>备选项1</zzr-radio>
            <zzr-radio v-model="radio5" label="2" border>备选项2</zzr-radio>

            <zzr-radio v-model="radio6" label="1" border size="medium">备选项1</zzr-radio>
            <zzr-radio v-model="radio6" label="2" border size="medium">备选项2</zzr-radio>

            <zzr-radio-group v-model="radio7" size="small">
              <zzr-radio label="1" border>备选项1</zzr-radio>
              <zzr-radio label="2" border disabled>备选项2</zzr-radio>
            </zzr-radio-group>

            <zzr-radio-group v-model="radio8" size="mini" disabled>
              <zzr-radio label="1" border>备选项1</zzr-radio>
              <zzr-radio label="2" border>备选项2</zzr-radio>
            </zzr-radio-group>
      `.replace(/^ {8}/gm, '').trim(),
      }
    },
  }
</script>

<style lang="scss" scoped>
    .radio-demos {

    }
</style>
