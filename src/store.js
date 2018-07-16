import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    carlist: [],
    interiorlist: [],
    shoplist: [],
    shopcarlist: [],
    carimage: '',
    interiorimage: '',
    avatarimage: '',
    licenseimage: '',
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
    },
    writeshoplist (state, payload) {
      state.shoplist = payload.data
    },
    writeshopcarlist (state, payload) {
      state.shoplist = payload.data
    },
    writeavatarimage (state, payload) {
      state.avatarimage = payload.data
    },
    writeinteriorimage (state, payload) {
      state.interiorimage = payload.data
    },
    writecarimage (state, payload) {
      state.carimage = payload.data
    },
    writelicenseimage (state, payload) {
      state.licenseimage = payload.data
    }
  }
})

export default store
