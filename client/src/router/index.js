import Vue from 'vue'
import Router from 'vue-router'
import Reports from '@/components/Reports'
import Home from '@/components/Home'
import CreateReport from '@/components/Create_report'
import ViewReport from '@/components/ViewReport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
    },
    {
      path: '/report/:id',
      name: 'report',
      component: ViewReport
    }
  ]
})
