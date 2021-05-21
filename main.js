import Vue from 'vue'
import App from './App'

import pmDate from './untils/data_formate.js'

Vue.config.productionTip = false
Vue.prototype.$pmDate = pmDate;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
