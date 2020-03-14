<template>
    <div v-clickoutside="close">
      <zzr-input @focus="handleFocus" @input="handleChange" ref="input"></zzr-input>
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
          :class="{'highlighted': highlightedIndex === index}"
        >
<!--          <slot :item="item">-->
<!--            {{ item[valueKey] }}-->
<!--          </slot>-->
          {{item.value}}
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
    fetchSuggestions: Function,
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
      const suggestions = this.suggestions
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
      this.debouncedGetData(this.value)
    },
    handleChange (value) {
      this.$emit('input', value)
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
    }
  }
}
</script>

<style lang="scss">
@import "autocomplete";
</style>
