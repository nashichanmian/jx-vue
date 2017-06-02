import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import mounthKH from '@/components/mounth/mounthKH'
import Mlist from '@/components/mounth/Mlist'
import Input from '@/components/mounth/input'
import CheckList from '@/components/mounth/checkList'
import H1KH from '@/components/H1/H1KH'
import yearKH from '@/components/year/yearKH'
import MyJX from '@/components/myjx/MyJX'
import FGlist from '@/components/FGresearch/FGlist'
import Alllist from '@/components/Allresearch/Alllist'
import Login from '@/login/login'
import Register from '@/login/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component: Register
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
        },
        //分管领导
        {
          path:'/FGlist',
          component:FGlist
        },
        //主任
        {
          path:'/Alllist',
          component:Alllist
        }
      ]
    }
   ]
})
