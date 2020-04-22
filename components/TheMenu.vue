<template lang="pug">
.menus
  .mask(v-bind:class="{ black: animateMenu }")
    img(src="~assets/logo_wh.svg")
  header.menus__main
    nuxt-link.menus__main__logo(to="/" @click.native="resetSlide(); animateOn()")
      img(src="~assets/logo_bl.svg" )
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
      span 
        display none
      .link
        margin auto
        width 120px
        height 60px
        .icon
          font-size 1em
    &__pos
      width 200px
      height 10%
      top 0
      left 50%
      transform translateX(-50%)
      &__no
        {flex-center}
        position initial
        padding 0
        transform initial
        font-size .8rem
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
        font-size 1rem

+sp()
  .menus
    &__main
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
    &__pos
      width 120px

</style>