<template>
    <div class="zzr-checkbox-button">
      <div v-for="(val, index) in itemsData" :key="val" @click="clickItem(index)">{{val}}</div>
    </div>
</template>

<script>
import { intersection } from 'lodash'
export default {
  name: 'zzr-checkbox-button',
  props: {
    items: {},
    value: {}
  },
  data () {
    return {
      selectedData: this.value,
      itemsData: this.items
    }
  },
  mounted () {
    // console.log(intersection(this.selectedData, this.itemsData))
    let arr = intersection(this.selectedData, this.itemsData)
    this.$nextTick(() => {
      arr && Array.prototype.slice.call(this.$el.childNodes, 0).forEach(item => {
        if (arr.includes(item.innerText)) {
          item.className = 'isChecked'
        }
      })
    })
  },
  methods: {
    clickItem (index) {
      // console.log(this.$el.children[index])
      this.$el.children[index].className
      if (this.$el.children[index].className === 'isChecked') {
        this.$el.children[index].className = ''
        let text = this.$el.children[index].innerText
        this.selectedData.splice(this.selectedData.indexOf(text), 1)
        this.$emit('input', this.selectedData)
      } else {
        this.$el.children[index].className = 'isChecked'
        let text = this.$el.children[index].innerText
        this.selectedData.push(text)
        console.log(this.selectedData)
        this.$emit('input', this.selectedData)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../styles/coolhue";
  .zzr-checkbox-button{
   >div{
     box-sizing: border-box;
     display: inline-block;
     height: 40px;
     line-height: 40px;
     padding: 0 1em;
     text-align: center;
     font-size: 14px;
     color: #666666;
     border: 1px solid #ccc;
     border-right: #cccccc;
     user-select: none;
     &:first-child{
       border-bottom-left-radius: 3px;
       border-top-left-radius: 3px;
     }
     &:last-child{
       border-bottom-right-radius: 3px;
       border-top-right-radius: 3px;
       border-right: 1px solid #cccccc;
     }
     &:hover{
       color: $primary-color;
       cursor: pointer;
     }
     &.isChecked{
       color: #fff;
       background-color: $primary-color;
       border-color: $primary-color;
       cursor: pointer;
       border-left-color: #fff;
     }
     &:first-child{
       border-bottom-left-radius: 3px;
       border-top-left-radius: 3px;
       &.isChecked{
         color: #fff;
         background-color: $primary-color;
         border-color: $primary-color;
         cursor: pointer;
       }
     }
   }
  }
</style>
