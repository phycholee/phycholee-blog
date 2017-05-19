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
          <ul class="pager">
            <li class="previous" v-if="previousShow">
              <a @click="previous()">
                ← PREVIOUS
              </a>
            </li>

            <li class="next" v-if="nextShow">
              <a @click="next()">
                NEXT →
              </a>
            </li>
          </ul>

        </div>

        <side-bar></side-bar>

      </div>
    </div>
  </div>
</template>
<script>
  import TagHeader from './TagHeader'
  import SideBar from './../SideBar'
  import { request, getUrl } from './../../request'


  export default{
    name: 'Tags',
    components:{
      'tag-header': TagHeader,
      'side-bar': SideBar
    },
    data(){
      return {
        articles: [],
        pageTotal: 0,
        params : {
          page: 1,
          limit: 10,
          tagId: '',
        },
        loading: false
      }
    },
    computed:{
      previousShow(){
        return this.params.page > 1
      },
      nextShow(){
        //计算总页数
        let lastPage = parseInt(this.pageTotal/this.params.limit+1)
        console.log('总页数：'+lastPage)
        return this.params.page < lastPage
      }
    },
    mounted(){
      //回到顶部
      window.scrollTo(0, 0)

      this.$store.dispatch('getTag', this.$route.query.id)

      this.params.tagId= this.$route.query.id

      request.article.articles(this.params).then(res=>{
        if(200 == res.code){
          this.articles = res.data
          this.pageTotal = res.total
        } else{
        }
      })
    },
    updated(){
      this.$store.dispatch('getTag', this.$route.query.id)
      this.params.tagId= this.$route.query.id
      request.article.articles(this.params).then(res=>{
        if(200 == res.code){
          this.articles = res.data
          this.pageTotal = res.total
        } else{
        }
      })

      //还原当前滚动条高度
      let height = this.$store.state.homeScrollHeight
      if (height > 0){
        window.scrollTo(0, height)
        console.log('滚动到：'+height)
        this.$store.dispatch('setHomeScroll', 0)
      }
    },
    methods:{
      previous(){
        this.loading = true

        if(this.params.page > 1){
          this.params.page -= 1

          request.article.articles(this.params).then(res=>{
            if(200 == res.code){
              this.articles = res.data
              this.pageTotal = res.total
            } else{

            }
            this.loading = false
          })
        }
        window.scrollTo(0, 358)

      },
      next(){
        this.loading = true

        let lastPage = parseInt(this.pageTotal/this.params.limit+1)

        if(this.params.page < lastPage){
          this.params.page += 1

          request.article.articles(this.params).then(res=>{
            if(200 == res.code){
              this.articles = res.data
              this.pageTotal = res.total
            } else{

            }
            this.loading = false
          })

          window.scrollTo(0, 358)
        }
      },
      goPost(id){
        let height = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log('当前滚动条高度：'+height)
        this.$store.dispatch('setHomeScroll', height)

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
  @import "./../../assets/css/index.css";
  @import "./../../assets/css/header.css";
</style>
