<template lang="pug">
.menus
  .mask(v-bind:class="{ black: animateMenu }")
  header.menu
    nuxt-link.menu__logo(to="/" @click.native="resetSlide")
      img(src="~assets/logo_bl.svg" )
  .menu__sns(v-bind:class="{ hide: isHide }")
    //- span.min \SHARE/

    a(href="https://www.facebook.com/" target="_blank").link
      font-awesome-icon.icon.icon-facebook(:icon="['fab', 'facebook-f']")
      span FACEBOOK
    a(href="https://twitter.com/home?lang=ja" target="_blank").link
      font-awesome-icon.icon.icon-twitter(:icon="['fab', 'twitter']") 
      span TWITTER 

  .pos
    .no(v-if="selectedPos != 0")
      .number
        p.main-font(:key="selectedPos") No.
        transition(name="slide-fade" mode="out-in")
          span.main-font(:key="selectedPos") {{ selectedPos }} 
    .name(v-if="selectedPos != 0")
      transition(name="slide-fade2" mode="out-in")
        p.main-font(:key="selectedPos") {{ selectedProject }}

</template>

<script>
import jsonfile from '~/assets/projects.json';
import { mapState } from 'vuex';

export default {
  data(){
    return{
      isHide: false,
      animateMenu: false,
      selectedProject: "",
      selectedPos: "",
      jsondata: jsonfile
    }
  },
  asyncData () {
    return{
      jsondata: jsonfile
    }
  },
  watch: {
    page: function(val){ 
      // this.animateMenu = true
      // setTimeout(() => this.animateMenu = false, 2000)
    },
    swiperPos: function(val){
      this.selectedProject = this.jsondata.projects_real_title[val-1]
      this.selectedPos = val
    },
    animate: function(val){
      this.animateMenu = true
      setTimeout(() => this.animateMenu = false, 1000)
    }
  },
  computed: mapState({
    page: state => state.page,
    swiperPos: state => state.swiperPos,
    animate: state => state.animate
  }),
  methods: {
    resetSlide: function(){
      if(this.$store.state.page != "index"){
        this.$store.commit("updateSwiperPos", 0)
      }else{
        this.$store.commit("changeIsSlideToDefalutState")
      }
    },
    onclick: function(){
      this.isHide = !this.isHide
    }
  }
}

</script>

<style scoped lang="stylus">
.mask
  width 100%
  height 0%
  background txt-color
  position fixed
  top 0
  left 0
  z-index 99
  transition .6s all main-transition
  &.black
    height 100%

.menu
  width 80px
  height 80px
  position fixed
  top 0
  left 50%
  transform translateX(-50%)
  z-index 100
  transition .6s all main-transition
  text-align center
  &__logo
    img
      width 96px
      height auto
  &__sns
    z-index 80
    position fixed
    top 50%
    left 0
    display flex
    flex-direction column
    width 20%
    padding 0 0 0 8px
    transition all .6s main-transition
    transform translateY(-50%)
    // .min 
    //   margin-left 8px
    //   font-size .8rem
    .link
      padding 16px
      width 36px
      height 36px
      position relative
      margin 0 8px
      &:hover
        .icon
          color lightgray 
      .icon
        color txt-color
        vertical-align middle
        display table-cell
        position absolute
        top 50%
        left 50%
        transform translateX(-50%) translateY(-50%)
      span 
        display none
        &:hover
          color lightgray

.pos
  text-align center
  font-weight 800
  display flex
  justify-content center
  align-items center
  flex-direction column
  z-index 100
  position fixed
  top 50%
  right 0
  z-index 70
  .no
    text-align right
    position fixed
    right 0
    top 50%
    padding 20px
    transform translateY(-50%)
    .number
      display flex
      justify-content flex-end
      align-items center
      flex-direction column
      span
        border 1px solid txt-color
        width 36px
        height 36px
        text-align center
        line-height 34px
  .name
    font-size 1.4em
    display none


+tb()
  .menu
    width 120px
    height 120px
    left 0
    transform initial
    display flex
    justify-content space-between
    &__logo
      position initial
      transform initial
      img
        width 120px
    &__sns
      flex-direction row
      transform initial
      justify-content flex-end
      padding 0
      top 0
      right 0
      left initial
      width 120px
      height 10%
      .link
        margin auto
        width 120px
        height 60px
  .pos
    width 200px
    height 10%
    top 0
    left 50%
    transform translateX(-50%)
    .no
      text-align center
      position initial
      padding 0
      transform initial
      display flex
      font-size .8rem
      & > p
        display initial
      .number
        justify-content center
        flex-direction row
        margin-left 8px
        span
          border none
          width initial
          height initial
          line-height initial
    .name
      display initial
      font-size 1rem
    // p, span 
    //   display none

+sp()
  .menu
    height 80px
    width 80px
    &__logo
      img
        width 80px
    &__sns
      width 80px
      .link
        width 80px
        height 40px
  .pos
    width 120px

</style>