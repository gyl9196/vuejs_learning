import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 解决有些机型的click事件300ms延时
import fastClick from 'fastclick'
// 解决css的reset问题, 保证每个机型的样式统一
import 'normalize.css'
// 解决大分辨下的边框问题
import './assets/style/border.css'
import './assets/style/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
