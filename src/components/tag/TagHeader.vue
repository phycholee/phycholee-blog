<!--头部巨幕图-->
<template>
  <header class="intro-header" :style="bgImg">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 ">
          <div class="site-heading">
            <h1>{{currentTag.name}}</h1>
            <span class="subheading">{{currentTag.description}}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

  export default{
    name: 'TagHeader',
    data(){
      return{
        currentTag: {}
      }
    },
    computed:{
      bgImg(){
        var jumbotron = this.$store.state.currentTag.jumbotron;
        if('' != jumbotron && null != jumbotron){
          return {
            backgroundImage: 'url('+jumbotron+')'
          }
        }else {
          return {
            backgroundImage: 'url('+require('./../../assets/img/tags.jpg')+')'
          }
        }
      },
      currentTag(){
        return this.$store.state.currentTag

      }
    },
    mounted(){
      var jumbotron = this.$store.state.currentTag.jumbotron
      if('' != jumbotron && null != jumbotron){
        this.bgImg = {
          backgroundImage: 'url('+jumbotron+')'
        }
      }
    }
  }
</script>

<style scoped>
  @import "./../../assets/css/header.css";
</style>
