import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    carlist: [

    ]

  },
  mutations: {
    writecarlist (state, payload) {
      state.carlist = payload
    },
    deletecarlist (state) {
      state.carlist = null
    }
  }
})

export default store
