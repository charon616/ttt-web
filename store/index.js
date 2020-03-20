export const state = () => ({
  counter: 10,
  page: 'index'
})

// export const getters = {
//   add ({commit}){
//     commit('increment')
//   }
// }

export const mutations = {
  increment(state) {
    state.counter++
  },
  updatePage(state, pageName){
    state.page = pageName
  }
}