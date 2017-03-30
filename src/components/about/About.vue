<template>
  <div>
    <about-header></about-header>

    <div class="time-line">
      <section id="cd-timeline" class="cd-container">
        <div class="cd-timeline-block">
          <div class="cd-timeline-icon cd-primary">
            <i class="fa fa-arrow-up"></i>
          </div>

          <div class="cd-timeline-content">
            <h2 class="time-line-title">Future</h2>
            <p>
              To Be Continue...
            </p>
            <!--<a href="#0" class="cd-read-more">Read more</a>-->
            <span class="cd-date">2016-08-02</span>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-icon cd-success">
            <i class="fa fa-github"></i>
          </div>

          <div class="cd-timeline-content">
            <h2 class="time-line-title">博客</h2>
            <p>
              建立此博客，记录自己的学习笔记、心得感想等等
            </p>
            <!--<a href="#0" class="cd-read-more">Read more</a>-->
            <span class="cd-date">2016-08-02</span>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-icon cd-primary">
            <i class="fa fa-laptop"></i>
          </div>

          <div class="cd-timeline-content">
            <h2 class="time-line-title">实习</h2>
            <p>
              有幸进入广东宝丽华电力有限公司，为期三个月的实习，进行JavaWeb项目开发
            </p>
            <!--<a href="#0" class="cd-read-more">Read more</a>-->
            <span class="cd-date">2016-07-13</span>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-icon cd-warning">
            <i class="fa fa-plug"></i>
          </div>

          <div class="cd-timeline-content">
            <h2 class="time-line-title">自学</h2>
            <p>
              决定主攻Java方向，自学JavaWeb开发和Android开发
            </p>
            <!--<a href="#0" class="cd-read-more">Read more</a>-->
            <span class="cd-date">2014-09-15</span>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-icon cd-danger">
            <i class="fa fa-university" aria-hidden="true"></i>
          </div>

          <div class="cd-timeline-content">
            <h2 class="time-line-title">进入嘉应学院</h2>
            <p>
              广东省嘉应学院
              <br>
              计算机软件工程专业
            </p>
            <span class="cd-date">2013-09-07</span>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<script>
  import AboutHeader from './AboutHeader'

  export default{
    name: 'Home',
    components:{
      'about-header': AboutHeader
    },
    mounted(){
      //回到顶部
      window.scrollTo(0, 0)
    }
  }
</script>

<style scoped>
  @import "./../../assets/css/animate.css";
  @import "./../../assets/css/timeline.css";

</style>
