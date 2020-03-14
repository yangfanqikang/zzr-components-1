<template>
    <div class="input-demos">
      <p>通过鼠标或键盘输入字符</p>
      <div>
        <h4>基础用法</h4>
        <div>
          <div class="input-demos-ex1">
            <zzr-input v-model="input1" placeholder="请输入内容"></zzr-input>
          </div>
        </div>
        <pre><code>{{content1}}</code></pre>
      </div>
      <div>
        <h4>禁用状态</h4>
        <p>通过 disabled 属性指定是否禁用 input 组件</p>
        <div>
          <div class="input-demos-ex1">
            <zzr-input v-model="input2" placeholder="请输入内容" :disabled="true"></zzr-input>
          </div>
        </div>
        <pre><code>{{content2}}</code></pre>
      </div>
      <div>
        <h4>可清空</h4>
        <p>使用clearable属性即可得到一个可清空的输入框</p>
        <div>
          <div class="input-demos-ex1">
            <zzr-input v-model="input3" placeholder="请输入内容" clearable ></zzr-input>
          </div>
        </div>
        <pre><code>{{content3}}</code></pre>
      </div>
      <div>
        <h4>带 icon 的输入框</h4>
        <p>带有图标标记输入类型</p>
        <div>
          <h5>属性方式</h5>
          <div class="input-demos-ex2">
            <zzr-input
              placeholder="请选择日期"
              suffix-icon="unfold"
              v-model="input4">
            </zzr-input>
            <zzr-input
              placeholder="请选择日期"
              prefix-icon="unfold"
              v-model="input4">
            </zzr-input>
          </div>
          <h5>slot方式</h5>
          <div class="input-demos-ex2">
            <zzr-input
              placeholder="请选择日期"
              v-model="input4">
                <zzr-icon name="evaluate"  slot="prefix"></zzr-icon>
            </zzr-input>
            <zzr-input
              placeholder="请选择日期"
              v-model="input4">
                <zzr-icon name="favor"  slot="suffix"></zzr-icon>
            </zzr-input>
          </div>
        </div>
        <pre><code>{{content4}}</code></pre>
      </div>
      <div>
        <h4>文本域</h4>
        <p>用于输入多行文本信息，通过将 type 属性的值指定为 textarea。</p>
        <div>
          <div class="input-demos-ex1">
            <zzr-input type="textarea" :rows="10" v-model="input3" placeholder="请输入内容" ></zzr-input>
          </div>
        </div>
        <pre><code>{{content5}}</code></pre>
      </div>
      <div>
        <h4>可自适应文本高度的文本域</h4>
        <p>通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。</p>
        <div>
          <div class="input-demos-ex1" style="width: 300px;">
            <zzr-input type="textarea" :rows="2" v-model="input6" placeholder="请输入内容" autosize></zzr-input>
          </div>
          <div class="input-demos-ex1" style="margin-top: 20px;width: 300px;">
            <zzr-input type="textarea" v-model="input66" placeholder="请输入内容" :autosize="{ minRows: 3, maxRows: 14}"></zzr-input>
          </div>
        </div>
        <pre><code>{{content5}}</code></pre>
      </div>
      <div>
        <h4>带输入建议</h4>
        <p>根据输入内容提供对应的输入建议</p>
        <div>
          <div class="input-demos-ex1" style="width: 300px;">
            <zzr-autocomplete @select="handleSelect" :fetch-suggestions="fetchSuggestions"></zzr-autocomplete>
          </div>
          <div class="input-demos-ex1" style="margin-top: 20px;width: 300px;">
          </div>
        </div>
        <pre><code>{{content6}}</code></pre>
      </div>
    </div>
</template>

<script>
  import ZzrInput from '../../../src/components/global/input/zzr-input'
  import ZzrIcon from '../../../src/components/global/icon/zzr-icon'
  import ZzrAutocomplete from '../../../src/components/global/autocomplete/zzr-autocomplete'
  export default {
    name: 'input-demos',
    components: { ZzrAutocomplete, ZzrIcon, ZzrInput },
    data () {
      return {
        restaurants: require('../data/suggestData').suggestData,
        input1: 'input1',
        input2: 'input1',
        input3: '',
        input4: '', input6: '', input66: '',
        content1: `
        <zzr-input v-model="input1" placeholder="请输入内容"></zzr-input>
        `.replace(/^ {8}/gm, '').trim(),
        content2: `
        <zzr-input v-model="input2" placeholder="请输入内容" :disabled="true"></zzr-input>
        `.replace(/^ {8}/gm, '').trim(),
        content3: `
        <zzr-input v-model="input3" placeholder="请输入内容" clearable></zzr-input>
        `.replace(/^ {8}/gm, '').trim(),
        content4: `
         <zzr-input placeholder="请选择日期" suffix-icon="unfold" v-model="input4"></zzr-input>
            <zzr-input placeholder="请选择日期" prefix-icon="unfold" v-model="input4">
  </zzr-input>

  <zzr-input placeholder="请选择日期" v-model="input4">
             <zzr-icon name="evaluate"  slot="prefix"></zzr-icon>
  </zzr-input>
  <zzr-input placeholder="请选择日期" v-model="input4">
        <zzr-icon name="favor"  slot="suffix"></zzr-icon>
  </zzr-input>
        `.replace(/^ {8}/gm, '').trim(),
        content5: `
        <zzr-input type="textarea" :rows="10" v-model="input3" placeholder="请输入内容" ></zzr-input>
        `.replace(/^ {8}/gm, '').trim(), content6: `
        <zzr-input type="textarea" :rows="2" v-model="input3" placeholder="请输入内容" autosize></zzr-input>
        `.replace(/^ {8}/gm, '').trim(),
        content6: `
        <zzr-input type="textarea" :rows="10" v-model="input3" placeholder="请输入内容" ></zzr-input>
        `.replace(/^ {8}/gm, '').trim(), content6: `
        <zzr-input type="textarea" :rows="2" v-model="input3" placeholder="请输入内容" autosize></zzr-input>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: {
      handleSelect(item) {
        console.log(item);
      },
      fetchSuggestions(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
    },
  }
</script>

<style lang="scss" scoped>
    .input-demos {
      .input-demos-ex1{
        width: 180px;
      }
      .input-demos-ex2{
        display: flex;
        >div{
          width: 180px;
          margin-right: 20px;
        }
      }
    }
</style>
