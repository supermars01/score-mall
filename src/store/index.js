import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 80,
    score: 999,
    test: 123
  },
  mutations: {
    increament (state) {
      state.count++
    }
  }
})
