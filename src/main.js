// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import store from './store'
import axio from './utils/axio'
import '@/assets/styles/reset.less';
import '@/assets/styles/font-awesome.min.css'
import FastClick from 'fastclick'
FastClick.attach(document.body)


Vue.config.productionTip = false
Vue.prototype.$ajax = axio
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
