import Vue from 'vue'
import App from './App.vue'

// This will make JQuery available globally as '$' 
// Feels right at home!
import jQuery from 'jquery'
// eslint-disable-next-line
global.$ = jQuery

// This will import all Bootstrap JavaScript files
// eslint-disable-next-line
let Bootstrap = require('bootstrap')

// This will import all Bootstrap CSS files
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')