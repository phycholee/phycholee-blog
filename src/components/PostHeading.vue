<template>
  <div class="post-heading">
    <h1>{{article.title}}</h1>
    <h3 class="subtitle">
      {{article.subTitle}}
    </h3>
    <div class="tags" style="display: inline-block" v-for="(tag, index) in tags">
      <a class="tag" @click="goTag(tag.id)">{{ tag.name }}</a>
    </div>
    <span class="meta">{{ article.authorName }}. {{article.createTime}}</span>
  </div>
</template>
<script>
  export default{
    name: 'PostHeading',
    computed:{
      article(){
        return this.$store.state.currentArticle
      },
      tags(){
        return this.$store.state.currentArticle.tags
      }
    },
    methods:{
      goTag(id){
        this.$router.push({
          path:'/tag',
          query: {
            id: id
          }
        })
      }
    },
  }
</script>
<style scoped>
  @import "../assets/css/header.css";

  .tags a, .tags .tag {
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, .8);
    border-radius: 999em;
    padding: 0 10px;
    color: #fff;
    line-height: 24px;
    font-size: 12px;
    text-decoration: none;
    margin: 0 3px;
    margin-bottom: 6px;
    cursor: pointer;
  }

  .tags a:hover, .tags .tag:hover, .tags a:active, .tags .tag:active {
    color: #fff;
    border-color: #fff;
    background-color: rgba(255, 255, 255, .4);
    text-decoration: none
  }

  .post-heading .meta{
    margin-top: 10px;
  }
</style>
