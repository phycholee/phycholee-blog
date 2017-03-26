<template>
  <div>
    <my-header></my-header>

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
  import Header from './Header'
  import SideBar from './SideBar'
  import { request, getUrl } from './../request'


  export default{
    name: 'Home',
    data(){
      return {
        articles: [],
        pageTotal: 0
      }
    },
    components:{
      'my-header': Header,
      'side-bar': SideBar
    },
    computed:{
//      articles(){
//        return this.$store.state.articles
//      }
    },
    mounted() {
//      this.$store.dispatch('getArticleList', params)

      var params = {
        offset: 0,
        limit: 10,
      }
      //获取数据
      request.article.articles(params).then(res=>{
        if(200 == res.code){
          this.articles = res.data
          this.pageTotal = res.total
        } else{

        }
      })
    },
    methods:{
      goPost(id){
        this.$router.push({
          path:'/post',
          query: {
            id: id
          }
        })
      }
    }
  }

</script>

<style scoped>
  @import "./../assets/css/index.css";
</style>
