
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//import router from './router'
import App from './components/App'

import store from './store/index'
import {currency} from "./currency";


Vue.filter('currency', currency)

const app = new Vue({
    el: '#app',
    components:{
        'app':App
    },
    data () {
        return {

        }
    },
    //router,
    store,
});