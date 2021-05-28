import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import lazyLoad from 'vue3-lazyload'
// 解决移动端300ms延迟
FastClick.attach(document.body)
const app = createApp(App)

createApp(App).use(store).use(router).use(lazyLoad,{
  loading: require('@/assets/img/common/placeholder.png'),
  log: false
}).mount('#app')
