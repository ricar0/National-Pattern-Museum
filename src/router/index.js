import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Updpwd from '../pages/Updpwd.vue'
import NewPage from '../pages/NewPage.vue'
import UserInfo from '../pages/UserInfo.vue'
import Exhibition1 from '../pages/Exhibition1.vue'
import Exhibition2 from '../pages/Exhibition2.vue'
import Exhibition3 from '../pages/Exhibition3.vue'
import Exhibition4 from '../pages/Exhibition4.vue'

import UpdInfo from '../pages/UpdInfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/Updpwd',
      component: Updpwd
    },
    {
      path: '/NewPage',
      component: NewPage,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/UserInfo',
      component: UserInfo,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/UpdInfo',
      component: UpdInfo,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/Exhibition1',
      component: Exhibition1,
    },
    {
      path: '/Exhibition2',
      component: Exhibition2,
    },
    {
      path: '/Exhibition3',
      component: Exhibition3,
    },
    {
      path: '/Exhibition4',
      component: Exhibition4,
    },
  ]
})
