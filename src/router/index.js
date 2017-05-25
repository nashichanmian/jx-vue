import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import mounthKH from '@/components/mounth/mounthKH'
import Mlist from '@/components/mounth/Mlist'
import Mdetail from '@/components/mounth/Mdetail'
import Input from '@/components/mounth/input'
import CheckList from '@/components/mounth/checkList'
import H1KH from '@/components/H1/H1KH'
import yearKH from '@/components/year/yearKH'
import MyJX from '@/components/myjx/MyJX'
import Login from '@/login/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      meta:{
        requiresAuth: true
      },
      component:Home,
      children:[
        {
          path: '/',
          component: mounthKH
        },
        {
          path: '/mounthKH',
          component: mounthKH
        },
        {
          path: '/Mlist',
          component: Mlist,
          children:[
            {
              path: '/',
              component: Mdetail
            },
            {
              path: '/Mdetail',
              component: Mdetail
            }
          ]
        },
        {
          path: '/input',
          component: Input
        },
        {
          path: '/checkList',
          component: CheckList
        },
        {
          path: '/H1KH',
          component: H1KH
        },
        {
          path: '/yearKH',
          component: yearKH
        },
        {
          path: '/MyJX',
          component: MyJX
        }
      ]
    },
    {
      path:'/home',
      meta:{
        requiresAuth: true
      },
      component:Home,
      children:[
        {
          path: '/',
          component: mounthKH
        },
        {
          path: '/mounthKH',
          component: mounthKH
        },
        {
          path: '/Mlist',
          component: Mlist,
          children:[
            {
              path: '/',
              component: Mdetail
            },
            {
              path: '/Mdetail',
              component: Mdetail
            }
          ]
        },
        {
          path: '/input',
          component: Input
        },
        {
          path: '/checkList',
          component: CheckList
        },
        {
          path: '/H1KH',
          component: H1KH
        },
        {
          path: '/yearKH',
          component: yearKH
        },
        {
          path: '/MyJX',
          component: MyJX
        }
      ]
    }
   ]
})
