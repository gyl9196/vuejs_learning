import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 解决有些机型的click事件300ms延时
import fastClick from 'fastclick'
// 解决css的reset问题, 保证每个机型的样式统一
import 'normalize.css'
// 解决大分辨下的边框问题
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

// To deal with the touch event issue
window.addEventListener('touchmove', (event) => {
  event.preventDefault()
}, { passive: false })

Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
