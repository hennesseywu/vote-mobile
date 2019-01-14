// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@/assets/styles/reset.less'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router.js'
import store from './store'
import axio from './utils/axio'

Vue.config.productionTip = false
Vue.prototype.$ajax = axio
    /* eslint-disable no-new */
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')