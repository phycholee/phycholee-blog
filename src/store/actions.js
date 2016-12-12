
import * as types from './mutation-types'

export default {
  getArticleList({commit},params){
    commit(types.GET_ARTICLE_LIST, params)
  },
  getArticle({commit},id){
    commit(types.GET_ARTICLE,id)
  }
}
