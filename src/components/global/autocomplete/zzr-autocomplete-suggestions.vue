<template>
  <transition name="zzr-zoom-in-top" @after-leave="doDestroy">
    <div v-show="showPopper"
         :style="{ width: dropdownWidth }"
         class="zzr-autocomplete-suggestion zzr-popper"
         role="region">
      <Scrollbar
        tag="ul"
        view-class="zzr-autocomplete-suggestion__list"
        wrap-class="zzr-autocomplete-suggestion__wrap">
        <li v-if="!parent.hideLoading && parent.loading"><i class="el-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </Scrollbar>
    </div>
  </transition>
</template>

<script>
import Popper from '../../../util/vue-popper'
import Emitter from '../../../mixins/emitter'
import Scrollbar from '../scrollbar/index'

export default {
  name: 'zzr-autocomplete-suggestions',
  componentName: 'ZzrAutocompleteSuggestions',
  mixins: [Popper, Emitter],
  components: { Scrollbar },
  props: {
    options: {
      default () {
        return {
          gpuAcceleration: false
        }
      }
    },
    id: String
  },
  data () {
    return {
      parent: this.$parent,
      dropdownWidth: ''
    }
  },
  mounted () {
    this.$parent.popperElm = this.popperElm = this.$el
    this.referenceElm = this.$parent.$refs.input.$refs.input
    this.referenceList = this.$el.querySelector('.zzr-autocomplete-suggestion__list')
    this.referenceList.setAttribute('role', 'listbox')
    this.referenceList.setAttribute('id', this.id)
  },
  updated() {
    this.$nextTick(_ => {
      console.log('updated==============')
      this.popperJS && this.updatePopper();
    });
  },
  created () {
    this.$on('visible', (val, inputWidth) => {
      console.log(val, inputWidth)
      this.dropdownWidth = inputWidth + 'px'
      this.showPopper = val
    })
  },
  methods: {
    select (item) {
      this.dispatch('ZzrAutocomplete', 'item-click', item)
    }
  }
}
</script>

<style lang="scss">
@import "../scrollbar/scrollbar";
</style>
