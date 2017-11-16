import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home/Home'
import List from '@/containers/List/List'
import Detail from '@/containers/Detail/Detail'
import Cat from '@/containers/Cat/Cat'
import Register from '@/containers/Register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/cat',
      name: 'cat',
      component: Cat
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
