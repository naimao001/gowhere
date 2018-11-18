// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "styles/reset.css"
import "styles/border.css"
import "styles/iconfont.css"
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
//引入fastclick处理 移动端300ms点击事件的延迟
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
