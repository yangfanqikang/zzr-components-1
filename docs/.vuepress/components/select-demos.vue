<template>
  <div class="input-demos">
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
    <div>
      <h4>基础用法</h4>
      <p>适用广泛的基础单选</p>
      <div class="input-demos-ex1">
        <zzr-select v-model="value1">
          <zzr-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"></zzr-option>
        </zzr-select>
      </div>
      <pre><code>{{content1}}</code></pre>
    </div>
    <div>
      <h4>有禁用选项</h4>
      <p>在zzr-option中，设定disabled值为 true，即可禁用该选项</p>
      <div class="input-demos-ex1">
        <zzr-select v-model="value1">
          <zzr-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          ></zzr-option>
        </zzr-select>
      </div>
      <pre><code>{{content2}}</code></pre>
    </div>
    <div>
      <h4>禁用状态</h4>
      <p>选择器不可用状态</p>
      <div class="input-demos-ex1">
        <zzr-select v-model="value1" disabled>
          <zzr-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></zzr-option>
        </zzr-select>
      </div>
      <pre><code>{{content3}}</code></pre>
    </div>
    <div>
      <h4>可清空单选</h4>
      <p>包含清空按钮，可将选择器清空为初始状态</p>
      <div class="input-demos-ex1">
        <zzr-select v-model="value1" clearable >
          <zzr-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></zzr-option>
        </zzr-select>
      </div>
      <pre><code>{{content4}}</code></pre>
    </div>
    <div>
      <h4>基础多选</h4>
      <p>适用性较广的基础多选，用 Tag 展示已选项</p>
      <div class="input-demos-ex1">
        <zzr-select v-model="value2" multiple>
          <zzr-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></zzr-option>
        </zzr-select>
      </div>
      <div class="input-demos-ex1">
        <zzr-select
          v-model="value3"
          multiple
          collapse-tags
          placeholder="请选择">
          <zzr-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </zzr-option>
        </zzr-select>
      </div>
      <pre><code>{{content5}}</code></pre>
    </div>
    <div>
      <h4>自定义模板</h4>
      <p>可以自定义备选项</p>
      <div class="input-demos-ex1">
        <zzr-select v-model="value4" placeholder="请选择">
          <zzr-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </zzr-option>
        </zzr-select>
      </div>
      <pre><code>{{content6}}</code></pre>
    </div>
    <div>
      <h4>分组</h4>
      <p>备选项进行分组展示</p>
      <div class="input-demos-ex1">
        <zzr-select v-model="value5" placeholder="请选择">
          <zzr-option-group
            v-for="group in options1"
            :key="group.label"
            :label="group.label">
            <zzr-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"></zzr-option>
          </zzr-option-group>
        </zzr-select>
      </div>
      <pre><code>{{content7}}</code></pre>
    </div>
    <div>
      <h4>可搜索</h4>
      <p>可以利用搜索功能快速查找选项</p>
      <div class="input-demos-ex1">
        <zzr-select v-model="value7" filterable placeholder="请选择">
          <zzr-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </zzr-option>
        </zzr-select>
      </div>
      <pre><code>{{content8}}</code></pre>
    </div>
  </div>
</template>

<script>
  import ZzrSelect from '../../../src/components/global/select/zzr-select'
  import ZzrOption from '../../../src/components/global/select/zzr-option'
  import ZzrOptionGroup from '../../../src/components/global/select/zzr-option-group'

  export default {
    name: 'select-demos',
    components: { ZzrOptionGroup, ZzrOption, ZzrSelect },
    data () {
      return {
        value1: '',
        value2: [],
        value3: [],
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        content1: `
<zzr-select v-model="value1">
  <zzr-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"></zzr-option>
</zzr-select>`.replace(/^ {8}/gm, '').trim(),
        content2: `
<zzr-select v-model="value1">
  <zzr-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"
    :disabled="item.disabled"></zzr-option>
</zzr-select>`.replace(/^ {8}/gm, '').trim(),
        content3: `
<zzr-select v-model="value1" disabled>
  <zzr-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"></zzr-option>
</zzr-select>`.replace(/^ {8}/gm, '').trim(),
        content4: `
<zzr-select v-model="value1" clearable>
  <zzr-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"></zzr-option>
</zzr-select>`.replace(/^ {8}/gm, '').trim(),
        content5: `
<zzr-select v-model="value2" multiple>
  <zzr-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"
  ></zzr-option>
</zzr-select>
<zzr-select
  v-model="value3"
  multiple
  collapse-tags
  placeholder="请选择">
  <zzr-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </zzr-option>
</zzr-select>`.replace(/^ {8}/gm, '').trim(),
        content6: `
<zzr-select v-model="value4" placeholder="请选择">
   <zzr-option
     v-for="item in cities"
     :key="item.value"
     :label="item.label"
     :value="item.value">
     <span style="float: left">{{ item.label }}</span>
     <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
   </zzr-option>
 </zzr-select>`.replace(/^ {8}/gm, '').trim(),
        content7: `
<zzr-select v-model="value5" placeholder="请选择">
  <zzr-option-group
    v-for="group in options1"
    :key="group.label"
    :label="group.label">
    <zzr-option
      v-for="item in group.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </zzr-option>
  </zzr-option-group>
</zzr-select>`.replace(/^ {8}/gm, '').trim(),
        content8: `
<zzr-select v-model="value" filterable placeholder="请选择">
  <zzr-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
  </zzr-option>
</zzr-select>`.replace(/^ {8}/gm, '').trim(),
        options: [
          {
          value: '选项1',
          label: '黄金糕'
        },
          {
          value: '选项2',
          label: '双皮奶',
            disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options1: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .input-demos {
    .input-demos-ex1 {
      width: 180px;
      margin: 10px 0;
    }
  }
</style>
