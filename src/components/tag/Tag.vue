<template>
  <div>
    <tag-header></tag-header>

    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-1
                            col-md-8 col-md-offset-1
                            col-sm-12
                            col-xs-12
                            post-container">

          <div class="post-preview" v-for="article in articles">
            <a class="to-post" @click="goPost(article.id)">
              <h2 class="post-title">
                {{article.title}}
              </h2>

              <h3 class="post-subtitle">
                {{article.subTitle}}
              </h3>

              <div class="post-content-preview">
                {{article.htmlContent}}
              </div>
            </a>
            <p class="post-meta">
              Posted by PhychoLee on
              {{article.createTime}}
            </p>
          </div>

          <hr>
          <!-- Pager -->
          <ul class="pager"></ul>
        </div>

        <side-bar></side-bar>

      </div>
    </div>
  </div>
</template>
<script>
  import TagHeader from './TagHeader'
  import SideBar from './../SideBar'

  export default{
    name: 'Tags',
    components:{
      'tag-header': TagHeader,
      'side-bar': SideBar
    },
    computed:{
      articles(){
        return ''
      }
    },
    mounted(){
      this.$store.dispatch('getTag', this.$route.query.id)
    }

  }
</script>

<style scoped>
  @import "./../../assets/css/index.css";
  @import "./../../assets/css/header.css";
</style>
