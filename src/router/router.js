import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Index from '@/views/Index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: 'http://localhost:8080/#index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
