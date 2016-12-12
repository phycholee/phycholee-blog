<template>
  <div class="container">
    <div class="row">
      <!-- Post Container -->
      <div class="col-lg-8 col-lg-offset-2
						col-md-8 col-md-offset-1
						col-sm-12
						col-xs-12
						post-container">
        <!-- Main Content -->
        <div class="post-preview" v-html="article.htmlContent">
        </div>
        <hr>
        </div>
      </div>
    </div>
</template>

<script>
  export default{
    name: 'Post',
    computed:{
      article(){
        return this.$store.state.currentArticle
      }
    },
    mounted(){
      this.$store.dispatch('getArticle', this.$route.query.id)
    }
  }
</script>

<style scoped>
  @import "../assets/css/index.css";
</style>
