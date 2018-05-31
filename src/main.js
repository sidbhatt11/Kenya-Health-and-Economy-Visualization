import Vue from 'vue'
import App from './App.vue'

// Feels right at home!
import $ from 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

global.$ = $;

// This will import Bootstrap CSS file
import 'bootstrap/dist/css/bootstrap.min.litera.css'

Vue.config.productionTip = false

// Enable tooltips everywhere
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

new Vue({
    render: h => h(App)
}).$mount('#app')