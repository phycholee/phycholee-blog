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
        <div style="display: inline-block" v-for="(tag, index) in tags">
          <a class="tag" @click="goTag(tag.id)">{{ tag.name }}</a>
        </div>
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
      <li><a href="http://huangxuan.me/" target="_blank">Hux Blog</a></li>
    </ul>
  </div>
</template>
<script>
  import { request, getUrl } from './../request'

  export default{
    name: 'SideBar',
    data(){
      return {
        articles: [],
        tags: []
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
      },
      goTag(id){
        this.$router.push({
          path:'/tag',
          query: {
            id: id
          }
        })
      }
    },
    mounted(){
      let params = {
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

      let params2 = {
        isIndex: 1
      }
      request.tag.indexTags(params2).then(res => {
        if(200 == res.code){
        //初始化初始数据
        this.tags = res.data
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
