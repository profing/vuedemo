import Vue from 'vue'
import Router from 'vue-router'
// 引入路由组件，Vue的路由可以看成是带path可以跳转的组件
import Home from '@/pages/Home.vue'
import Shop from '@/pages/Shop.vue'
import Profile from '@/pages/Profile.vue'
// 单页面应用中 一级路由组件的显示由App.vue中的<router-view/>标签显示
Vue.use(Router)
// 配置路由：每一个path对应一个vue组件，'/'表示根路由
// vue—router 配置的是前端路由跟后端路由没有半毛钱关系，路径path自己喜好定义，其作用就是实现前端的页面跳转
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/home'//实现重定向 一打开8080立即定向到首页home组件
    }
  ]
})
