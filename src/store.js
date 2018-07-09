import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    carlist: [],
    haha: '11'

  },
  mutations: {
    writecarlist (state, payload) {
      state.carlist = payload.data
    },
    deletecarlist (state) {
    }
  }
})

export default store
