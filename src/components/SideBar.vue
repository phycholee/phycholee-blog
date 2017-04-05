<template>
  <!-- Sidebar Container -->
  <div class="col-lg-3 col-lg-offset-0
                    col-md-3 col-md-offset-0
                    col-sm-12
                    col-xs-12
                    sidebar-container">
    <!-- Featured Tags -->

    <section>
      <!-- no hr -->
      <h5><a href="#">标签</a></h5>
      <div class="tags">
        <a href="#" title="前端开发" rel="3">前端开发</a>

        <a href="#" title="Java" rel="3">Java</a>

      </div>
    </section>

    <hr>
    <h5>最近文章</h5>
    <ul class="recent-post">
      <li v-for="article in articles"><a @click="goPost(article.id)">{{article.title}}</a></li>
    </ul>

    <!-- Friends Blog -->
    <hr>
    <h5>友情链接</h5>
    <ul class="list-inline">
      <li><a href="#" target="_blank">Hux Blog</a></li>
    </ul>
  </div>
</template>
<script>
  import { request, getUrl } from './../request'

  export default{
    name: 'SideBar',
    data(){
      return {
        articles: []
      }
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
    },
    mounted(){
      var params = {
        page: 1,
        limit: 5,
      }
      //获取数据
      request.article.articles(params).then(res=>{
        if(200 == res.code){
          this.articles = res.data
        } else{

        }
      })
    }
  }
</script>

<style scoped>
  @import "../assets/css/index.css";

  .recent-post a{
    cursor: pointer;
  }
</style>
