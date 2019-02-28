import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
    goodDetail:{},
  },
  mutations:{
   stateGoodDetail(state,goodDetail){
    state.goodDetail=goodDetail
   }
}
})