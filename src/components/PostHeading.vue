<template>
  <div class="post-heading">
    <h1>{{article.title}}</h1>
    <h3 class="subtitle">
      {{article.subTitle}}
    </h3>
    <span class="meta">PhychoLee. {{article.createTime}}</span>
  </div>
</template>
<script>
  export default{
    name: 'PostHeading',
    computed:{
      article(){
        return this.$store.state.currentArticle
      }
    }
  }
</script>
<style scoped>
  @import "../assets/css/header.css";
</style>
