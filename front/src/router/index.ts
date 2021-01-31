import Vue from 'vue'
import VueRouter, { RouteConfig, Route } from 'vue-router'
import Home from '../views/Home.vue'
import _ from 'lodash'
import vuex from 'vuex'

Vue.use(VueRouter)

const beforeEnter = (to:Route , from:Route , next:any) => {
    const token = localStorage.getItem('token')
    if(_.isEmpty(token)) next('SignIn')
    next()
}
 
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue'),
    beforeEnter: ( to, from , next) => {
      if(localStorage.getItem('token')) next('mypage')
      next();
    }
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import(/* webpackChunkName: "about" */ '../views/QuestionBoard.vue')
  },
  {
    path: '/shopingCart',
    name: 'ShopingCart',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopingCart.vue'),
    beforeEnter
  },
  {
    path: '/myPage',
    name: 'mypage',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyPage.vue'),
    beforeEnter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
