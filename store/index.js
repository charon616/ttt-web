export const state = () => ({
  page: 'index',
  swiperPos: 0,
  isSlideToDefault: false
})

export const getters = {
  isSlideToDefault: state => state.isSlideToDefault,
  page: state => state.page
}

export const mutations = {
  updatePage(state, pageName){
    state.page = pageName
  },
  updateSwiperPos(state, num) {
    state.swiperPos = num
  },
  changeIsSlideToDefalutState(state) {
    state.isSlideToDefault = !state.isSlideToDefault
  },
}