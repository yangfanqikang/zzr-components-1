<template>
    <div class="checkbox-demos">
      <div class="checkbox-demos1">
        <h4>基础用法</h4>
        <div>
          <zzr-checkbox v-model="checkboxDemo1" label="1">复选框1</zzr-checkbox>
          <zzr-checkbox v-model="checkboxDemo11" label="2">复选框2</zzr-checkbox>
        </div>
        <pre><code>{{content1}}</code></pre>
      </div>
      <div class="checkbox-demos1">
        <h4>禁用状态</h4>
        <p>多选框不可用状态。</p>
        <div>
          <zzr-checkbox v-model="checkboxDemo2" label="1" disabled>复选框1</zzr-checkbox>
          <zzr-checkbox v-model="checkboxDemo22" label="2" disabled checked>复选框2</zzr-checkbox>
        </div>
        <pre><code>{{content2}}</code></pre>
      </div>
      <div class="checkbox-demo3">
        <h4>多选框组</h4>
        <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
        <zzr-checkbox-group v-model="checkList">
          <zzr-checkbox label="复选框 A"></zzr-checkbox>
          <zzr-checkbox label="复选框 B"></zzr-checkbox>
          <zzr-checkbox label="复选框 C"></zzr-checkbox>
          <zzr-checkbox label="禁用" disabled></zzr-checkbox>
          <zzr-checkbox label="选中且禁用" disabled></zzr-checkbox>
        </zzr-checkbox-group>
        <pre><code>{{content3}}</code></pre>
      </div>
      <div class="checkbox-demo3">
        <h4>全选</h4>
        <p>适用全选</p>
        <div>
          <zzr-checkbox v-model="checkAll" @change="handleCheckAllChange" label="全选"></zzr-checkbox>
          <div style="margin: 15px 0;"></div>
          <zzr-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <zzr-checkbox v-for="city in cities" :label="city" :key="city"></zzr-checkbox>
          </zzr-checkbox-group>
        </div>
        <pre><code>{{content4}}</code></pre>
      </div>
      <div class="checkbox-demo3">
        <h4>可选项目数量的限制</h4>
        <p>使用 min 和 max 属性能够限制可以被勾选的项目的数量。</p>
        <div>
          <zzr-checkbox-group v-model="checkedCities2" :min="1" :max="2">
            <zzr-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</zzr-checkbox>
          </zzr-checkbox-group>
        </div>
        <pre><code>{{content5}}</code></pre>
      </div>
      <div class="checkbox-demos6">
        <h4>按钮样式</h4>
        <p>按钮样式的多选组合。</p>
        <zzr-checkbox-button :items="items" v-model="selectedItem"></zzr-checkbox-button>
        <pre><code>{{content6}}</code></pre>
      </div>
      <div class="checkbox-demos6">
        <h4>边框</h4>
        <zzr-checkbox bordered>备选项1</zzr-checkbox>
        <zzr-checkbox bordered>备选项2</zzr-checkbox>
        <pre><code>{{content7}}</code></pre>
      </div>
    </div>
</template>

<script>
  import ZzrCheckbox from '../../../src/components/global/checkbox/zzr-checkbox'
  import ZzrCheckboxGroup from '../../../src/components/global/check-group/zzr-checkbox-group'
  import ZzrCheckboxButton from '../../../src/components/global/checkbox-button/zzr-checkbox-button'
  const cityOptions = ['上海', '北京', '广州', '深圳']
  export default {
    name: 'checkbox-demos',
    components: { ZzrCheckboxButton, ZzrCheckboxGroup, ZzrCheckbox },
    data () {
      return {
        selectedItem: ['上海', '广州', '宁夏'],
        items: cityOptions,
        selectedItem2: ['上海', '宁夏'],
        items2: cityOptions,
        checkAll: false,
        checkedCities: ['上海', '北京'],
        checkedCities2: ['上海', '北京'],
        cities: cityOptions,
        cities2: cityOptions,
        checkboxDemo1: '1',
        checkboxDemo11: false,
        checkboxDemo2: false,
        checkboxDemo22: '2',
        checkList: ['选中且禁用','复选框 A'],
        content1: `
            <zzr-checkbox v-model="checkboxDemo1" label="1">复选框1</zzr-checkbox>
        <zzr-checkbox v-model="checkboxDemo1" label="2">复选框2</zzr-checkbox>
      `.replace(/^ {8}/gm, '').trim(),
        content2: `
            <zzr-checkbox v-model="checkboxDemo2" label="1">复选框1</zzr-checkbox>
        <zzr-checkbox v-model="checkboxDemo2" label="2">复选框2</zzr-checkbox>
      `.replace(/^ {8}/gm, '').trim(),
        content3: `
            <zzr-checkbox-group v-model="checkList">
          <zzr-checkbox label="复选框 A"></zzr-checkbox>
          <zzr-checkbox label="复选框 B"></zzr-checkbox>
          <zzr-checkbox label="复选框 C"></zzr-checkbox>
          <zzr-checkbox label="禁用" disabled></zzr-checkbox>
          <zzr-checkbox label="选中且禁用" disabled checked></zzr-checkbox>
</zzr-checkbox-group>
      `.replace(/^ {8}/gm, '').trim(),
        content4: `
            <zzr-checkbox v-model="checkAll" @change="handleCheckAllChange"></zzr-checkbox>
        <zzr-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <zzr-checkbox v-for="city in cities" :label="city" :key="city"></zzr-checkbox>
        </zzr-checkbox-group>
      `.replace(/^ {8}/gm, '').trim(),
        content5: `
            <zzr-checkbox-group v-model="checkedCities2" :min="1" :max="2">
          <zzr-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</zzr-checkbox>
        </zzr-checkbox-group>
      `.replace(/^ {8}/gm, '').trim(),
        content6: `
             <zzr-checkbox-button :items="items" v-model="selectedItem"></zzr-checkbox-button>
      `.replace(/^ {8}/gm, '').trim(),
        content7: `
            <zzr-checkbox bordered>备选项1</zzr-checkbox>
        <zzr-checkbox bordered>备选项2</zzr-checkbox>
      `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: {
      handleCheckAllChange (val) {
        console.log(val)
        this.checkedCities = val ? cityOptions : []
      },
      handleCheckedCitiesChange (value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
      }
    },
  }
</script>

<style lang="scss" scoped>
    .checkbox-demos {

    }
</style>
