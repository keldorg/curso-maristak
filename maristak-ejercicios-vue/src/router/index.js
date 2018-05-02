import Vue from 'vue'
import Router from 'vue-router'
import ToDo from '@/pages/todo'
import ToDo2 from '@/pages/todoVuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToDo',
      component: ToDo
    },
    {
      path: '/todo2',
      name: 'ToDo',
      component: ToDo2
    }
  ]
})
