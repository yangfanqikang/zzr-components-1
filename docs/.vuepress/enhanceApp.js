import Vue from 'vue'
import MessageBox from '../../src/components/global/message-box/main.js'
import Message from '../../src/components/global/message/main'
import Notification from '../../src/components/global/notification/main'
import '../../src/components/global/el-icon/icon.scss'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$message = Message;
  Vue.prototype.$notify = Notification;
  Vue.mixin({
    mounted() {
      import('../../src/assets/font/iconfont')
    }
  })
}
