// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import data from './data.js'
import store from './store.js'
import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters);

import Tabs from 'vue-tabs-component';
Vue.use(Tabs);

import StarRating from 'vue-star-rating';
Vue.component('star-rating', StarRating);

window.Fire = new Vue();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
