export const state = () => ({
  page: 'index',
  swiperPos: 0,
  isSlideToDefault: false,
  animate: false,
  isClose: false
})

export const getters = {
  isSlideToDefault: state => state.isSlideToDefault,
  page: state => state.page,
  swiperPos: state => state.swiperPos,
  animate: state => state.animate,
  isClose: state => state.isClose
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
  changeAnimateStatus(state){
    state.animate = !state.animate
  },
  changeIsCloseStatus(state) {
    state.isClose = !state.isClose
  }
}