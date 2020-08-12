import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'
import City from '@/views/city/City'
import Detail from '@/views/detail/Detail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    //动态路由
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes,

  //为了解决滑动某页，其他页面也一并发生滑动：
  scrollBehavior(to, from, savedPosition) {
    // 页面切换时，显示出来的页面始终回到最顶部
    return { x: 0, y: 0 }
  }
})

export default router
