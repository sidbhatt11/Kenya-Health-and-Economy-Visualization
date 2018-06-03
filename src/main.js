import Vue from 'vue'
import App from './App.vue'

// Feels right at home!
import $ from 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

global.$ = $

// This will import Bootstrap CSS file
import 'bootstrap/dist/css/bootstrap.min.litera.css'
// This will import C3 CSS file
import 'c3/c3.min.css'

Vue.config.productionTip = false

// Enable tooltips everywhere
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
});

// This will load Google Custom Search Engine
$(function() {
    var cx = '000388830782874123297:o_uaywvnry0';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
});


// Install D3 Plugin
var VueD3 = require('vue-d3')
Vue.use(VueD3)

new Vue({
    render: h => h(App)
}).$mount('#app')