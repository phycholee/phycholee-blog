<template>
  <div class="site-heading">
    <h1>{{admin.blogName}}</h1>
    <span class="subheading">{{admin.description}}</span>
  </div>
</template>

<script>
  export default{
    name: 'SiteHeading',
    computed:{
      admin(){
        return this.$store.state.admin
      }
    }
  }
</script>
<style scoped>
  @import "../assets/css/header.css";
</style>
