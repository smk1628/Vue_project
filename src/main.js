import Vue from 'vue'
import App from '@/App.vue'
import 'lib-flexible'   //使用lib-flexible库设置根源素rem
import router from './router'
import Header from './components/Header/Header.vue'
Vue.config.productionTip = false //关闭vue开发模式下的提示
//注册全局组件Header
Vue.component('Header',Header)
new Vue({
    render:h=>h(App),
    router
}).$mount("#app")
