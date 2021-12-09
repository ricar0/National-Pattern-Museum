// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
import ElementUI from 'element-ui';
import echarts from 'echarts' //引入echarts
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$echarts = echarts //挂载在原型，组件内使用直接this.$echarts调用

sync(store, router)
Vue.prototype.$http = axios;
Vue.use(ElementUI)
Vue.config.productionTip = false
router.beforeEach(function(to, from, next) {
  if (to.meta.needLogin) {
      if (localStorage.getItem("token")) {
          next();
      } else {
          next('/Login');
      } 
  } else {
      next();
  }
}) 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
