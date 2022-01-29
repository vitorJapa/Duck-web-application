import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Reports from '@/components/Reports'
import Home from '@/components/Home'
import CreateReport from '@/components/Create_report'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports
    },
    {
      path: '/create_report',
      name: 'create_report',
      component: CreateReport
    }
  ]
})
