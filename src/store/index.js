/**
 * Created by Lee on 2016/12/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

//先模拟数据
// 个人数据
const state = {
  admin:{
    blogName: 'PhychoLee',
    description: 'Note Everything',
    url: 'https://github.com/phycholee',
    avatar: './../assert/img/avatar'
  },
  articles:[],
  currentArticle:{}
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
