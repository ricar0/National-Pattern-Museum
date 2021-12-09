import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Updpwd from '../pages/Updpwd.vue'
import NewPage from '../pages/NewPage.vue'
import UserInfo from '../pages/UserInfo.vue'
import Exhibition from '../pages/Exhibition.vue'
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
      path: '/Exhibition',
      component: Exhibition,
    },
  ]
})
