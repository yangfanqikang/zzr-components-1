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
    </div>
</template>

<script>
  import ZzrCheckbox from '../../../src/components/global/checkbox/zzr-checkbox'
  import ZzrCheckboxGroup from '../../../src/components/global/check-group/zzr-checkbox-group'
  const cityOptions = ['上海', '北京', '广州', '深圳']
  export default {
    name: 'checkbox-demos',
    components: { ZzrCheckboxGroup, ZzrCheckbox },
    data () {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
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
