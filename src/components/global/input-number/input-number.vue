<template>
  <div class="zzr-input-number">
    <span class="zzr-input-number__decrease" v-repeat-click="decrease">-</span>
    <zzr-input ref="input" :value="displayValue"></zzr-input>
    <span class="zzr-input-number__increase"  v-repeat-click="increase">+</span>
  </div>
</template>

<script>
import ZzrInput from '../input/zzr-input'
import RepeatClick from '../../../directives/repeat-click'
export default {
  name: 'input-number',
  components: { ZzrInput },
  directives: { RepeatClick },
  props: {
    value: {},
    step: {
      type: Number,
      default: 1
    },
    stepStrictly: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    precision: {
      type: Number,
      validator (val) {
        return val >= 0 && val === parseInt(val, 10)
      }
    }
  },
  data () {
    return {
      currentValue: 0,
      userInput: null
    }
  },
  computed: {
    numPrecision () {
      const { value, step, getPrecision, precision } = this
      // 获取步进的精度
      const stepPrecision = getPrecision(step)
      // 接收的精度值，如果存在
      if (precision !== undefined) {
        // 如果步进的精度长度大于设置精度，则提出警告， 返回设置精度
        if (stepPrecision > precision) {
          console.warn('[Element Warn][InputNumber]precision should not be less than the decimal places of step')
        }
        return precision
      } else {
        // 如果精度没有被设置，则默认取v-model和步进的最大精度值
        return Math.max(getPrecision(value), stepPrecision)
      }
    },
    displayValue () {
      if (this.userInput !== null) {
        return this.userInput
      }
      let currentValue = this.currentValue
      if (typeof currentValue === 'number') {
        if (this.stepStrictly) {
          //
        }
        if (this.precision !== undefined) {
          //
        }
      }
      return currentValue
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (value) {
        let newVal = value === undefined ? value : Number(value)
        if (newVal === undefined) {
          if (isNaN(newVal)) {
            return
          }
          if (this.stepStrictly) {
          //
          }
          if (this.precision !== undefined) {
            //
          }
        }
        this.currentValue = newVal
        this.userInput = null
        this.$emit('input', newVal)
      }
    }
  },
  methods: {
    // 获取精度，传入step
    getPrecision (value) {
      // 如果value不存在则 返回 0
      if (value === undefined) return 0
      // 转为字符串
      const valueString = value.toString()
      // 小数点的索引
      const dotPosition = valueString.indexOf('.')
      // 默认精度为0
      let precision = 0
      // 如果存在小数点，设置精度，如果值为0.11，那么dotPosition=1
      if (dotPosition !== -1) {
        // 4-1-1 为小数点后两位
        precision = valueString.length - dotPosition - 1
      }
      return precision
    },
    // 指定精度，传两个参数
    toPrecision (num, precision) {
      // 如果没有设置，则让精度值为计算属性 numPrecision的值
      if (precision === undefined) precision = this.numPrecision
      // 取浮点数
      return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision))
    },
    // 传入val和步进
    _increase (val, step) {
      // 如果val不是数字类型且不存在，则直接返回当前值
      if (typeof val !== 'number' && val !== undefined) return this.currentValue
      // 获取当前精度
      const precisionFactor = Math.pow(10, this.numPrecision)
      // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
      //
      return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor)
    },
    _decrease (val, step) {
      if (typeof val !== 'number' && val !== undefined) return this.currentValue

      const precisionFactor = Math.pow(10, this.numPrecision)

      return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor)
    },
    increase () {
      // if (this.inputNumberDisabled || this.maxDisabled) return;
      const value = this.value || 0
      const newVal = this._increase(value, this.step)
      this.setCurrentValue(newVal)
    },
    decrease () {
      if (this.inputNumberDisabled || this.minDisabled) return
      const value = this.value || 0
      const newVal = this._decrease(value, this.step)
      this.setCurrentValue(newVal)
    },
    setCurrentValue (newVal) {
      // 获取oldVal
      const oldVal = this.currentValue
      // 判断并得到newVal
      if (typeof newVal === 'number' && this.precision !== undefined) {
        newVal = this.toPrecision(newVal, this.precision)
      }
      // 判断大于、小于、等于
      if (newVal >= this.max) newVal = this.max
      if (newVal <= this.min) newVal = this.min
      if (oldVal === newVal) return
      // 将用户输入置空
      this.userInput = null
      // 触发input 将newVal复制给v-model
      this.$emit('input', newVal)
      // 触发change，传入两个参数
      this.$emit('change', newVal, oldVal)
      // 将最新值赋给当前
      this.currentValue = newVal
    }
  }
}
</script>

<style lang="scss">
  @import "input-number";
</style>
