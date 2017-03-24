<template>
  <header class="intro-header" :style="bgImg">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 ">
          <div class="tag-heading">
            <h1>Tags</h1>
            <span class="subheading"></span>
          </div>

          <div class="tags">
            <div style="display: inline-block" v-for="(tag, index) in tags">
              <a class="tag" @click="goTag(tag.id)">{{ tag.name }}</a>
              <input type="hidden" v-model="tag.id">
            </div>
          </div>

        </div>
      </div>
    </div>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <p class="copyright text-muted">
              Copyright © <a href="https://github.com/phycholee">PhychoLee</a> 2017
              <br>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </header>
</template>
<script>
  import {request} from './../../request'

  export default{
    name: 'Tags',
    data(){
      return {
        tags: []
      }
    },
    computed:{
      bgImg(){
        var winHeight
        if (window.innerHeight)
          winHeight = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
          winHeight = document.body.clientHeight;
        console.log("高度："+winHeight)
        return {
          backgroundImage: 'url('+require('./../../assets/img/tags.jpg')+')',
          height: winHeight+'px'
        }
      }
    },
    mounted(){
      request.tag.tags().then(res => {
        if(200 == res.code){

          //初始化初始数据
          this.tags = setColorClass(res.rows)

        } else{
          this.$message.error('获取数据失败');
        }
      })
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
    }
  }

  var setColorClass = (tags) => {

    const tagPrimary = { 'tag-primary' : true }
    const tagSuccess = { 'tag-success' : true }
    const tagWarning = { 'tag-warning' : true }
    const tagDanger = { 'tag-danger' : true }
    const tagInfo = { 'tag-info' : true }

    for(var i=0; i<tags.length; i++){
      var randomNum = Math.floor(Math.random()*5)

      //根据随机数给不同节点不同的颜色class
      if(1 == randomNum){
        tags[i].colorClass = {
          'tag-primary' : true
        }
      }else if(2 == randomNum){
        tags[i].colorClass = {
          'tag-success' : true
        }
      }else if(3 == randomNum){
        tags[i].colorClass = {
          'tag-warning' : true
        }
      } else if(4 == randomNum){
        tags[i].colorClass = {
          'tag-danger' : true
        }
      }else if(5 == randomNum){
        tags[i].colorClass = {
          'tag-info' : true
        }
      }else {
        tags[i].colorClass = {
          'tag-primary' : false
        }
      }
    }

    return tags
  }

</script>
<style scoped>
  @import "./../../assets/css/header.css";
  /*@import "./../../assets/css/tag.css";*/

  @media only screen and (min-width: 768px) {
    .intro-header .tag-heading{
      padding: 55px 0
    }
  }

  .intro-header .tag-heading {
    padding: 150px 0 60px
  }

  .intro-header{
    position: relative;
  }

  /*标签*/
  .tags {
    margin-bottom: -5px;
    text-align: center;
  }

  .tags a, .tags .tag {
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, .8);
    border-radius: 999em;
    padding: 0 10px;
    color: #fff;
    line-height: 24px;
    font-size: 12px;
    text-decoration: none;
    margin: 0 1px;
    margin-bottom: 6px;
    cursor: pointer;
  }

  .tags a:hover, .tags .tag:hover, .tags a:active, .tags .tag:active {
    color: #fff;
    border-color: #fff;
    background-color: rgba(255, 255, 255, .4);
    text-decoration: none
  }

  footer{
    position: absolute;
    bottom: 10px;
    padding-left: 87px;
  }
  footer .copyright {
    font-size: 14px;
    margin-bottom: 0;
    text-align: center;
    color: #fff;
  }
  .footer .copyright a{
    color: #ccc;
  }
  .footer .copyright a:hover{
    color: #23527c;
    text-decoration: underline;
  }
</style>
