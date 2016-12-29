// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Router from './router'
import store from './vuex/store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './assets/base.less'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MuseUI);
const router = new VueRouter(Router);
new Vue({
  el: '#app',
  router,
  store,
  render: tpl =>tpl(App)
});
