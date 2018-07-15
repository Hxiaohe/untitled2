import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    carlist: [],
    interiorlist: [],
    user: {},
    token: 0
  },
  mutations: {
    writecarlist (state, payload) {
      state.carlist = payload.data
    },
    addtocarlist (state, payload) {
      state.carlist[0] = payload.data
    },
    writeinteriorlist (state, payload) {
      state.interiorlist = payload.data
    },
    addtointeriorlist (state, payload) {
      state.interiorlist[0] = payload.data
    },
    writetoken (state, payload) {
      state.token = payload.data
    },
    writeuser (state, payload) {
      state.user = payload.data
    }
  }
})

export default store
