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
import Vconsole from 'vconsole'
FastClick.attach(document.body)
import {
  TransferDom
} from 'vux'

const vConsole = new Vconsole();

Vue.directive('transfer-dom', TransferDom) //必须有一个 div 作为占位元素否则会出错

Vue.config.productionTip = false
Vue.prototype.$ajax = axio
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
