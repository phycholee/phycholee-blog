
import * as types from './mutation-types'

export default {
  getArticleList({commit},params){
    commit(types.GET_ARTICLE_LIST, params)
  },
  getArticle({commit},id){
    commit(types.GET_ARTICLE,id)
  },
  getTag({commit},id){
    commit(types.GET_TAG,id)
  },
  setHomeScroll({commit},height){
    commit(types.SET_HOME_SCROLL,height)
  }
}
