import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'font-awesome/css/font-awesome.min.css'

import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'

import store from './store'

//自定义组件
import Home from './components/Home'
import About from './components/about/About'
import Post from './components/Post'
import Tags from './components/tag/Tags'
import Tag from './components/tag/Tag'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path:'/',
  component: Home
},{
  path:'/home',
  component: Home
},{
  path:'/tags',
  component: Tags
},{
  path:'/tag',
  component: Tag
},{
  path:'/about',
  component: About
},{
  path:'/post',
  component: Post
}];

// const scrollBehavior = (to, from, savedPosition) => {
//   if (savedPosition) {
//     console.log(savedPosition)
//     return savedPosition
//   } else {
//     return { x: 0, y: 0 }
//   }
// }

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    if (to.hash) {
      return { anchor: true }
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      return { x: 0, y: 0 }
    }
  }
}

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
})

router.afterEach(transition => {
  NProgress.done();
});

new Vue({
  el: '#app',
  router,
  store,
  ...App,
  // template: '<App/>',
  // components: { App }
})
