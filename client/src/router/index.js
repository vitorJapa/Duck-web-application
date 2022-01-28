import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Reports from '@/components/Reports'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports
    }
  ]
})
