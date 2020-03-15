<template>
    <div v-clickoutside="close">
<!--      $props这个属性很关键-->
      <zzr-input @focus="handleFocus" @input="handleChange" ref="input" v-bind="[$attrs, $props]"  @blur="handleBlur"  @clear="handleClear">
        <template slot="prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </template>
        <template slot="append" v-if="$slots.append">
          <slot name="append"></slot>
        </template>
        <template slot="prefix" v-if="$slots.prefix">
          <slot name="prefix"></slot>
        </template>
        <template slot="suffix" v-if="$slots.suffix">
          <slot name="suffix"></slot>
        </template>
      </zzr-input>
      <zzr-autocomplete-suggestions visible-arrow
                                    :class="[popperClass ? popperClass : '']"
                                    :popper-options="popperOptions"
                                    :append-to-body="popperAppendToBody"
                                    ref="suggestions"
                                    :placement="placement"
                                    :id="id">
        <li
          v-for="(item, index) in suggestions"
          :key="index"
          :id="`${id}-item-${index}`"
          role="option"
          @click="select(item)"
          :class="{'highlighted': highlightedIndex === index}"
        >
<!--          这个插槽代表什么？将item对象绑定在slot上，是作用域插槽吗？的确是作用于插槽，这是一个默认插槽：item省略了v-slot？那么它确定就是作用域插槽-->
          <slot :item="item">
            {{ item[valueKey] }}
          </slot>
<!--          {{item.value}}-->
        </li>
      </zzr-autocomplete-suggestions>
    </div>
</template>

<script>
import { debounce } from '../../../util/throttle-debounce/index.cjs'
import ZzrInput from '../input/zzr-input'
import Clickoutside from '../../../util/clickoutside'
import ZzrAutocompleteSuggestions from './zzr-autocomplete-suggestions'
import Emitter from '../../../mixins/emitter'
import { generateId } from '../../../util/util'
export default {
  name: 'zzr-autocomplete',
  mixins: [Emitter],
  components: { ZzrAutocompleteSuggestions, ZzrInput },
  directives: { Clickoutside },
  props: {
    // valueKey代表什么？属性是从父级传过来的，我这里没有几成关于父级的东西，哦，默认值为value，如果键值对变化的话，那么你可以传递valueKey过来，那么一样可以渲染出来，明白了；
    valueKey: {
      type: String,
      default: 'value'
    },
    fetchSuggestions: Function,
    triggerOnFocus: {
      type: Boolean,
      default: true
    },
    debounce: {
      type: Number,
      default: 300
    },
    popperClass: String,
    popperOptions: Object,
    placeholder: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    }
  },
  data () {
    return {
      activated: false,
      suggestions: [],
      suggestionDisabled: false,
      highlightedIndex: -1
    }
  },
  computed: {
    suggestionVisible () {
      console.log(this.activated)
      const suggestions = this.suggestions
      console.log(suggestions)
      let isValidData = Array.isArray(suggestions) && suggestions.length > 0
      return isValidData && this.activated
    },
    id () {
      return `zzr-autocomplete-${generateId()}`
    }
  },
  watch: {
    suggestionVisible (val) {
      let w = this.$refs.input.$refs.input.offsetWidth
      console.log(val, w)
      this.broadcast('ZzrAutocompleteSuggestions', 'visible', [val, w])
    }
  },
  mounted () {
    this.debouncedGetData = debounce(this.debounce, this.getData)
  },
  methods: {
    handleFocus (event) {
      this.activated = true
      this.$emit('focus', event)
      if (this.triggerOnFocus) {
        this.debouncedGetData(this.value)
      }
    },
    handleBlur (event) {
      this.$emit('blur', event)
    },
    handleChange (value) {
      this.$emit('input', value)
      this.suggestionDisabled = false
      if (!this.triggerOnFocus && !value) {
        this.suggestionDisabled = true
        this.suggestions = []
        return
      }
      this.debouncedGetData(value)
    },
    handleClear () {
      this.activated = false
      this.suggestions = []
      this.$emit('clear')
    },
    close (e) {
      // 点击外面才出现
      this.activated = false
    },
    getData (queryString) {
      if (this.suggestionDisabled) {
        return
      }
      this.loading = true
      // 将参数suggestions赋值给this.suggestions
      this.fetchSuggestions(queryString, (suggestions) => {
        this.loading = false
        if (this.suggestionDisabled) {
          return
        }
        if (Array.isArray(suggestions)) {
          this.suggestions = suggestions
          this.highlightedIndex = this.highlightFirstItem ? 0 : -1
        } else {
          console.error('[Element Error][Autocomplete]autocomplete suggestions must be an array')
        }
      })
    },
    select (item) {
      this.$emit('input', item[this.valueKey])
      this.$emit('select', item)
      this.$nextTick(_ => {
        this.suggestions = []
        this.highlightedIndex = -1
      })
    }
  }
}
</script>

<style lang="scss">
@import "autocomplete";
</style>
