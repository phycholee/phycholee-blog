<!--导航组件-->
<template>
  <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header page-scroll">
        <button type="button" class="navbar-toggle">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/home">{{blogName}}</a>
      </div>
      <div id="huxblog_navbar" class=" ">
        <div class="navbar-collapse" style="height: 0px;">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/home">Home</router-link>
            </li>
            <li>
              <router-link to="/tags">Tags</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default{
    name: 'Nav',
    data(){
      return {
        blogName: 'PhychoLee'
      }
    }
  }

  $(document).ready(function (a) {
    var $body = document.body;
    var $toggle = document.querySelector('.navbar-toggle');
    var $navbar = document.querySelector('#huxblog_navbar');
    var $collapse = document.querySelector('.navbar-collapse');

    var handleMagic = {
      close: function () {
        $navbar.className = " ";
        // wait until animation end.
        setTimeout(function () {
          // prevent frequently toggle
          if ($navbar.className.indexOf('in') < 0) {
            $collapse.style.height = "0px";
          }
        }, 400)
      },
      open: function () {
        $collapse.style.height = "auto";
        $navbar.className += " in";
      }
    }

    // Bind Event
    $toggle.addEventListener('click', function (e) {
      if ($navbar.className.indexOf('in') > 0) {
        handleMagic.close();
      } else {
        handleMagic.open();
      }
    });
    //点击外部，关闭菜单框
    document.addEventListener('click', function (e) {
      if (e.target == $toggle) return;
      if (e.target.className == 'icon-bar') return;
      handleMagic.close();
    });

    var b = 1170;
    if (a(window).width() > b) {
      var c = a(".navbar-custom").height();
      a(window).on("scroll", {previousTop: 0}, function () {
        var b = a(window).scrollTop();
        b < this.previousTop ? b > 0 && a(".navbar-custom").hasClass("is-fixed") ? a(".navbar-custom").addClass("is-visible") : a(".navbar-custom").removeClass("is-visible is-fixed") : (a(".navbar-custom").removeClass("is-visible"), b > c && !a(".navbar-custom").hasClass("is-fixed") && a(".navbar-custom").addClass("is-fixed")), this.previousTop = b
      })
    }
  });
</script>

<style scoped>
  /*自定义导航条样式*/
  @media only screen and (max-width: 767px) {
    .navbar-default .navbar-collapse {
      border: none;
      background: #fff;
      box-shadow: 0 5px 10px 2px rgba(0, 0, 0, .2);
      box-shadow: rgba(0, 0, 0, .117647) 0 1px 6px, rgba(0, 0, 0, .239216) 0 1px 4px;
      border-radius: 2px;
      width: 170px;
      float: right;
      margin: 0
    }

    #huxblog_navbar {
      opacity: 0;
      transform: scaleX(0);
      transform-origin: top right;
      transition: all .25s cubic-bezier(0.23, 1, .32, 1);
      -webkit-transform: scaleX(0);
      -webkit-transform-origin: top right;
      -webkit-transition: all .25s cubic-bezier(0.23, 1, .32, 1)
    }

    #huxblog_navbar a {
      font-size: 13px;
      line-height: 28px
    }

    #huxblog_navbar .navbar-collapse {
      height: 0;
      transform: scaleY(0);
      transform-origin: top right;
      transition: transform 500ms cubic-bezier(0.23, 1, .32, 1);
      -webkit-transform: scaleY(0);
      -webkit-transform-origin: top right;
      -webkit-transition: -webkit-transform 500ms cubic-bezier(0.23, 1, .32, 1)
    }

    #huxblog_navbar li {
      opacity: 0;
      transition: opacity 450ms cubic-bezier(0.23, 1, .32, 1) 205ms;
      -webkit-transition: opacity 450ms cubic-bezier(0.23, 1, .32, 1) 205ms
    }

    #huxblog_navbar.in {
      transform: scaleX(1);
      -webkit-transform: scaleX(1);
      opacity: 1
    }

    #huxblog_navbar.in .navbar-collapse {
      transform: scaleY(1);
      -webkit-transform: scaleY(1)
    }

    #huxblog_navbar.in li {
      opacity: 1
    }
  }

  .navbar-custom {
    background: 0 0;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    font-family: -apple-system, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
    line-height: 1.7
  }

  .navbar-custom .navbar-brand {
    font-weight: 800;
    color: #fff;
    height: 56px;
    line-height: 25px
  }

  .navbar-custom .navbar-brand:hover {
    color: rgba(255, 255, 255, .8)
  }

  .navbar-custom .nav li a {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 20px;
    font-weight: 800;
    letter-spacing: 1px
  }

  .navbar-custom .nav li a:active {
    background: rgba(0, 0, 0, .12)
  }

  @media only screen and (min-width: 768px) {
    .navbar-custom {
      background: 0 0;
      border-bottom: 1px solid transparent
    }

    .navbar-custom body {
      font-size: 20px
    }

    .navbar-custom .navbar-brand {
      color: #fff;
      padding: 20px;
      line-height: 20px
    }

    .navbar-custom .navbar-brand:hover, .navbar-custom .navbar-brand:focus {
      color: rgba(255, 255, 255, .8)
    }

    .navbar-custom .nav li a {
      color: #fff;
      padding: 20px
    }

    .navbar-custom .nav li a:hover, .navbar-custom .nav li a:focus {
      color: rgba(255, 255, 255, .8)
    }

    .navbar-custom .nav li a:active {
      background: 0 0
    }
  }

  @media only screen and (min-width: 1170px) {
    .navbar-custom {
      -webkit-transition: background-color .3s;
      -moz-transition: background-color .3s;
      transition: background-color .3s;
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden
    }

    .navbar-custom.is-fixed {
      position: fixed;
      top: -61px;
      background-color: rgba(255, 255, 255, .9);
      border-bottom: 1px solid #f2f2f2;
      -webkit-transition: -webkit-transform .3s;
      -moz-transition: -moz-transform .3s;
      transition: transform .3s
    }

    .navbar-custom.is-fixed .navbar-brand {
      color: #404040
    }

    .navbar-custom.is-fixed .navbar-brand:hover, .navbar-custom.is-fixed .navbar-brand:focus {
      color: #0085a1
    }

    .navbar-custom.is-fixed .nav li a {
      color: #404040
    }

    .navbar-custom.is-fixed .nav li a:hover, .navbar-custom.is-fixed .nav li a:focus {
      color: #0085a1
    }

    .navbar-custom.is-visible {
      -webkit-transform: translate3d(0, 100%, 0);
      -moz-transform: translate3d(0, 100%, 0);
      -ms-transform: translate3d(0, 100%, 0);
      -o-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0)
    }
  }
  /*屏幕缩小后呼出菜单按钮样式*/
  .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
    background-color: inherit
  }

  .navbar-default .navbar-toggle:active {
    background-color: rgba(255, 255, 255, .25)
  }

  .navbar-default .navbar-toggle {
    border-color: transparent;
    padding: 19px 16px;
    margin-top: 2px;
    margin-right: 2px;
    margin-bottom: 2px;
    border-radius: 50%
  }

  .navbar-default .navbar-toggle .icon-bar {
    width: 18px;
    border-radius: 0;
    background-color: #fff
  }

  .navbar-default .navbar-toggle .icon-bar + .icon-bar {
    margin-top: 3px
  }
</style>
