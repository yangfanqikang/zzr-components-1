<script>
  import ZzrIcon from '../icon/zzr-icon'
export default {
  name: 'zzr-tag',
  components: {ZzrIcon},
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String,
    effect: {
      type: String,
      default: 'light',
      validator(val) {
        return ['dark', 'light', 'plain'].indexOf(val) !== -1;
      }
    }
  },
  methods: {
    handleClose(event) {
      // 阻止冒泡
      event.stopPropagation();
      this.$emit('close', event);
    },
    handleClick(event) {
      this.$emit('click', event);
    }
  },
  computed: {
    tagSize() {
      return this.size || (this.$ELEMENT || {}).size;
    }
  },
  render (h) {
    const { type, tagSize, hit, effect } = this
    // 样式
    const classes = [
      'zzr-tag',
      type ? `zzr-tag--${type}` : '',
      tagSize ? `zzr-tag--${tagSize}` : '',
      effect ? `zzr-tag--${effect}` : '',
      hit && 'is-hit'
    ]
    // html
    const tagEl = (
      <span
        class={ classes }
        style={{ backgroundColor: this.color }}
        on-click={ this.handleClick }>
        { this.$slots.default }
        {
          this.closable && <i class="zzr-tag__close zzr-icon-close" on-click={ this.handleClose }><ZzrIcon name="close"/></i>
        }
      </span>
    )
    // 动画里面渲染代码片段
    return this.disableTransitions ? tagEl : <transition name="zzr-zoom-in-center">{ tagEl }</transition>
  }
}
</script>

<style lang="scss">
@import "tag";
</style>
