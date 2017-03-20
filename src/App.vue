<template>
  <div id="app" :style="bgColor">
    <my-nav></my-nav>
    <my-header v-if="isAbout"></my-header>
    <my-header2 v-else></my-header2>

    <router-view></router-view>

    <my-footer></my-footer>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Header from './components/Header'
import Header2 from './components/Header2'
import Footer from './components/Footer'



export default {
  name: 'app',
  components: {
    'my-nav':Nav,
    'my-header':Header,
    'my-header2':Header2,
    'my-footer':Footer
  },
  computed:{
    isAbout(){
      return this.$route.path !== '/about';
    },
    bgColor(){
      if (this.$route.path === '/about'){
        return {
          backgroundColor: '#e9f0f5'
        }
      }
    }
  }
}
</script>

<style scoped>
  #app {
    color: #404040;
    font-family: -apple-system,"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB",STHeiti,"Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN","Noto Sans SC","Source Han Sans TC","Noto Sans CJK TC","WenQuanYi Micro Hei",SimSun,sans-serif;
    font-size: 16px;
    line-height: 1.7;
  }
</style>
