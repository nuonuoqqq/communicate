// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index.js';

import VueLazyLoad from 'vue-lazyload';

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
Vue.use(VueLazyLoad);

Vue.config.productionTip = false;
// store.commit('login', '123456');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
