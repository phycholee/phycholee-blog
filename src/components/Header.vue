<!--头部巨幕图-->
<template>
  <header class="intro-header" :style="bgImg">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 ">
          <site-heading v-if="isHome"></site-heading>
          <post-heading v-else></post-heading>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import SiteHeading from './SiteHeading.vue'
  import PostHeading from './PostHeading.vue'

  export default{
    name: 'Header',
    components:{
      'site-heading':SiteHeading,
      'post-heading':PostHeading
    },
    computed:{
      isHome(){
        return this.$route.path !== '/post';
      },
      bgImg(){
        if(this.$route.path === '/post'){
          var jumbotron = this.$store.state.currentArticle.jumbotron;
          if('' != jumbotron && null != jumbotron){
            return {
              backgroundImage: 'url('+jumbotron+')'
            }
          }else {
            return {
              backgroundImage: 'url('+require('./../assets/img/post.jpg')+')'
            }
          }
        } else {
          return {
            backgroundImage: 'url('+require('./../assets/img/home.jpg')+')'
          }
        }
      }
    },
    mounted(){
      var jumbotron = this.$store.state.currentArticle.jumbotron;
      if('' != jumbotron && null != jumbotron){
        this.bgImg = {
          backgroundImage: 'url('+jumbotron+')'
        }
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/header.css";
</style>
