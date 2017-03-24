/**
 * Created by Lee on 2016/12/6.
 */
import * as types from './mutation-types'

import { request, getUrl } from './../request'

export default {
  //获取文章列表
  [types.GET_ARTICLE_LIST](state,params){
    request.article.articles(params).then(res=>{
      if(200 == res.code){
        state.articles = res.rows
      } else{
        console.log(res.body.code)
      }
    })
  },
  //获取单个文章信息
  [types.GET_ARTICLE](state,id){
    request.article.get(id).then(res=>{
      if(200 == res.code){
        state.currentArticle= res.article
      } else{
        console.log(res.body.code)
      }
    })
  },
  //获取单个标签信息
  [types.GET_TAG](state,id){
    request.tag.get(id).then(res=>{
      if(200 == res.code){
        state.currentTag= res.data
      } else{
        console.log(res.body.code)
      }
    })
  }
}
