import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'font-awesome/css/font-awesome.min.css'

import store from './store'

//自定义组件
import Home from './components/Home'
import About from './components/About'
import Post from './components/Post'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path:'/',
  component: Home
},{
  path:'/home',
  component: Home
},{
  path:'/about',
  component: About
},{
  path:'/post',
  component: Post
}];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  ...App,
  // template: '<App/>',
  // components: { App }
})
