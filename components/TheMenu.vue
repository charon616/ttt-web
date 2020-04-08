<template lang="pug">
.menus
  //- header.menu(v-bind:class="{ black: animate }")
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

  //- .pos
  //-   .no(v-if="selectedPos != 0")
  //-     .number
  //-       //- p.main-font(:key="selectedPos") No.
  //-       p.main-font No.
  //-       transition(name="slide-fade" mode="out-in")
  //-         //- span.main-font(:key="selectedPos") {{ selectedPos }} 
  //-         span.main-font(:key="selectedPos") 1
  //-   .name
  //-   .name(v-if="selectedPos != 0")
  //-     transition(name="slide-fade2" mode="out-in")
  //-       //- p.main-font(:key="selectedPos") {{ selectedProject }}
  //-       p.main-font(:key="selectedPos") test

</template>

<script>
import jsonfile from '~/assets/projects.json';
import { mapState } from 'vuex';

export default {
  data(){
    return{
      isHide: false,
      animate: false
    }
  },
  asyncData () {
    return{
      jsondata: jsonfile
    }
  },
  watch: {
    page: function(val){ 
      this.animate = true
      setTimeout(() => this.animate = false, 2000)
    }
  },
  computed: mapState({
    page: state => state.page
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
    },
    test: function(){
      console.log("hey")
    }
  },
  mounted() {
    // window.addEventListener('beforeunload', this.test);
  }
}

</script>

<style scoped lang="stylus">
.pos
    text-align center
    font-weight 800
    width 100%
    height 10%
    display flex
    justify-content center
    align-items center
    flex-direction column
    z-index 100
    .no
      text-align right
      position fixed
      right 0
      top 50%
      padding 20px
      transform translateY(-50%)
      & > p
        // display none
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
      // display none

.menu
  width 80px
  height 80px
  position fixed
  top 0
  left 50%
  transform translateX(-50%)
  z-index 100
  transition .6s all main-transition
  // background txt-color
  text-align center
  &__logo
    img
      width 96px
      height auto
  &.black
    width 100%
    height 100%
  &__sns
    z-index 100
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

+tb()
  .menu
    width 100%
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
      height 8%
      .link
        margin auto
        width 120px
        height 60px

+sp()
  .menu
    height 80px
    &__logo
      img
        width 80px
    &__sns
      width 80px
      .link
        width 80px
        height 40px

</style>