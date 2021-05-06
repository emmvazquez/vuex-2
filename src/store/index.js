import { createStore } from 'vuex'

export default createStore({
  state: {
    contador : 11
  },
  mutations: {
    mutacionAumentar(state){
      state.contador = state.contador + 1
    },
    mutacionDisminuir(state){
      state.contador = state.contador - 1
    }
  },
  actions: {
      accionIncrementar({commit}){
          commit('mutacionAumentar')
      },
      accionDisminuir({commit}){
        commit('mutacionDisminuir')
      }
  },
  modules: {
  }
})
