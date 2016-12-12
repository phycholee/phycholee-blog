/**
 * Created by Lee on 2016/12/6.
 */
import * as types from './mutation-types'
import Vue from 'vue'

export default {
  //获取文章列表
  [types.GET_ARTICLE_LIST](state,params){
    Vue.http.post('http://localhost:8080/article/articles', params).then((response)=>{
      // console.log(response.body.code)
      state.articles = response.body.rows
    }, (response)=>{
      //error
    })
  },
  //获取单个文章信息
  [types.GET_ARTICLE](state,id){
    Vue.http.get('http://localhost:8080/article/article/'+id).then((response)=>{
      state.currentArticle= response.body.article
    }, (response)=>{
      //error
    })
  }
}
