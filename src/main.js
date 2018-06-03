import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import About from './About.vue'
import Navigation from './components/Navigation.vue'

/**
 * ================= Front-end dependencies =================
 */

// Feels right at home!
import $ from 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

global.$ = $

// This will import Bootstrap CSS file
import 'bootstrap/dist/css/bootstrap.min.litera.css'
// This will import C3 CSS file
import 'c3/c3.min.css'

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

/**
 * ================= Routing Stuff =================
 */

Vue.config.productionTip = false

//  Use Vue Router
Vue.use(VueRouter)

const routes = {
    '/': App,
    '/about': About
}

new Vue({
    render(h) { return h(Navigation) }
}).$mount('#navigationBlock')

new Vue({
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || App
        }
    },
    render(h) { return h(this.ViewComponent) }
}).$mount('#app')