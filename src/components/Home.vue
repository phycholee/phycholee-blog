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

          <div class="loading" v-if="loading">
            <div class="spinner">
              <div class="bounce1"></div>
              <div class="bounce2"></div>
              <div class="bounce3"></div>
            </div>
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
  import Header from './Header'
  import SideBar from './SideBar'
  import { request, getUrl } from './../request'

  export default{
    name: 'Home',
    data(){
      return {
        articles: [],
        pageTotal: 0,
        params : {
          page: 1,
          limit: 10,
        },
        loading: false
      }
    },
    components:{
      'my-header': Header,
      'side-bar': SideBar,
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
    mounted() {

      //获取数据
      request.article.articles(this.params).then(res=>{
        if(200 == res.code){
          this.articles = res.data
          this.pageTotal = res.total
        } else{

        }
      })

    },
    updated(){
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
      },
    }
  }

</script>

<style scoped>
  @import "./../assets/css/index.css";

  /*分页*/
  .post-container ul, .post-container ol {
    margin-bottom: 40px;
  }

  .pager li > a {
    display: inline-block;
    padding: 5px 14px;
    border-radius: 4px;
    background-color: #fff;
    border-color: #ccc;
    color: #333;
    cursor: pointer;
  }

  .pager li>a:hover{
    background-color: #e6e6e6;
    border-color: #adadad;
    color: #333;
  }


  /*等待动画*/
  .spinner {
    margin: 50px auto;
    width: 150px;
    text-align: center;
  }

  .spinner > div {
    width: 30px;
    height: 30px;
    background-color: #b4b4b4;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
    animation: bouncedelay 1.4s infinite ease-in-out;
    /* Prevent first frame from flickering when animation starts */
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 40% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
  }
</style>
