<template lang="pug">
.menus
  .mask(v-bind:class="{ black: animateMenu }")
    img(src="~assets/logo_wh.svg" alt="logo")
  header.menus__main
    nuxt-link.menus__main__logo(to="/" @click.native="resetSlide(); animateOn()")
      img(src="~assets/logo_bl.svg" alt="logo")
  .menus__sns(v-bind:class="{ hide: isHide }")
    span.main-font SHARE ON:
    a.fb-share-button.link(data-href="https://2020.todaitotexas.com/" data-layout="button" data-size="small" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F2020.todaitotexas.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore")
      font-awesome-icon.icon.icon-facebook(:icon="['fab', 'facebook-f']")
    a.tw-share-button.link(href="http://twitter.com/share?url=https://2020.todaitotexas.com/&text=Todai To Texas 2020 special site&hashtags=SXSW" target="_blank")
      font-awesome-icon.icon.icon-twitter(:icon="['fab', 'twitter']") 
  .menus__pos
    .menus__pos__no(v-if="selectedPos != 0")
      span.normal No.
      transition(name="slide-fade" mode="out-in")
        span.num(:key="selectedPos") {{ selectedPos }}
      .line  
      span.all 6
    .menus__pos__name(v-if="selectedPos != 0")
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
    swiperPos: function(val){
      this.selectedProject = this.jsondata.projects_real_title[val-1]
      this.selectedPos = val
    },
    animate: function(val){
      this.animateMenu = val
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
    },
    animateOn: function(){
      if(this.$store.state.page != "index"){
        this.$store.commit("changeAnimateStatus", true);
      }
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
  margin 0 auto
  {flex-center}
  img 
    width 420px
    height 420px
    display none
    opacity 0
  &.black
    height 100%
    img 
      opacity 1
      display initial

.menus
  &__main
    position fixed
    top 0
    left 50%
    transform translateX(-50%)
    z-index 100
    &__logo
      img
        width 96px
        height auto
  &__sns
    z-index 80
    position fixed
    bottom 0
    left 0
    padding 0 16px
    display flex
    flex-direction row
    height 48px
    background txt-color
    span 
      font-weight 800
      line-height 48px
      margin-right 8px
      color bg-color
    .link
      padding 16px
      width 48px
      height 48px
      position relative
      margin 0
      .icon
        font-size 2em
        color bg-color
        position absolute
        top 50%
        left 50%
        transform translateX(-50%) translateY(-50%)
      &:hover
        .icon
          color lightgray 
      span 
        display none
        &:hover
          color lightgray
  &__pos
    {flex-center}
    font-weight 800
    z-index 90
    flex-direction column
    position fixed
    top 50%
    right 0
    &__no
      text-align right
      position fixed
      right 32px
      top 50%
      transform translateY(-70%)
      width 48px
      height 96px
      .normal
        display none
      .num
        text-align left
        position absolute
        top 0
        left 0
      .line
        width 100%
        height 100%
        top 0 
        right 0
        &::after
          content ""
          width 223%
          height 1px
          background txt-color
          position absolute
          top 0
          right 0
          transform rotate(-63.4deg)
          transform-origin 100% 50%
      .all
        text-align right
        position absolute
        right 0
        bottom 0
    &__name
      font-size 1.4em
      display none

+tb()
  .mask
    img
      width 50%
      height auto
  .menus
    &__main
      left 0
      transform initial
      display flex
      justify-content space-between
      &__logo
        position initial
        transform initial
        img
          width nav-height
    &__sns
      transform translateY(-50%)
      top 50%
      left initial
      padding 8px 0 0 0 
      flex-direction column
      width 'calc( %s / 2 )' % nav-height 
      height 'calc( %s * 1.5 )' % nav-height
      span 
        line-height 'calc( %s / 2 )' % nav-height
        line-height 'calc( %s / 4 )' % nav-height
        text-align center
        margin 0
        height 'calc( %s / 2 )' % nav-height
      .link
        width 'calc( %s / 2 )' % nav-height
        height 'calc( %s / 2 )' % nav-height
    &__pos
      width 200px
      top 0
      left 50%
      transform translateX(-50%)
      height nav-height
      &__no
        {flex-center}
        position initial
        padding 0
        transform initial
        // font-size .8rem
        width auto
        height auto
        & > p
          display initial
        .normal
          display initial
        .num
          justify-content center
          flex-direction row
          margin-left 4px
          width auto
          height auto
          position relative
        .line
          display none
        .all
          display none
      &__name
        display initial
        // font-size 1rem

+sp()
  nav-height = nav-height-sp
  .menus
    &__main
      &__logo
        img
          width nav-height
    &__sns
      flex-direction row
      width nav-height
      height nav-height
      padding 0
      top 0
      right 0
      left initial
      transform initial
      span 
        display none
      .link
        width 'calc( %s / 2 )' % nav-height
        height nav-height
        padding 0
        .icon
          font-size 1em
    &__pos
      height nav-height
      &__no
        font-size .8em
      &__name
        font-size 1em
</style>