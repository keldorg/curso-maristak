import Vue from 'vue'
import Router from 'vue-router'
import ToDo from '@/pages/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToDo',
      component: ToDo
    }
  ]
})
