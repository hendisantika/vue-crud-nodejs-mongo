import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

const router = new VueRouter({mode: 'history'});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
