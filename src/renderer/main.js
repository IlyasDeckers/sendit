import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import './components/_globals'
import './plugins'
import vueXlsxTable from 'vue-xlsx-table'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(vueXlsxTable, {rABS: false})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
