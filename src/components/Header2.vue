<template>
  <div class="container" style="width:100%;padding: 0;margin: 0">
    <header class="head-pad" style="">
      <img :src="avatar" style="width: 200px" title="最帅" class="img-circle avatar animated bounceInDown">
    </header>
  </div>
</template>
<script>
  export default{
    name: 'Header2',
    data(){
      return {
        avatar: require('./../assets/img/avatar.jpg')
      }
    },

  }
</script>
<style scoped>
  body{
    background-color: #e9f0f5;
  }
  .head-pad{
    background-color: #74a43e;
    height:300px;
    text-align: center;
  }
  .head-pad img{
    margin-top: 150px;
    cursor: pointer;
    z-index: 2;
  }
</style>
