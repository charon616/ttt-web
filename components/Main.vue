<template lang="pug">
.main
  .title(v-if="$device.isDesktop")
    .title-element.animated.slideInUp(:strength="8") Todai 
    .title-element.animated.slideInUp(:strength="16") To 
    .title-element.animated.slideInUp(:strength="4") Texas 
    .title-element.animated.slideInUp(:strength="-8") 2020
  .title(v-else)
    .title-element Todai 
    .title-element To 
    .title-element Texas 
    .title-element 2020

  Message
  .message-bg(@click="onClick" v-show="!isClose")
  .guide(v-show="isClose")
    .icon-scroll 
</template>
<script>
import Artwork from "~/components/Artwork";
import Message from "~/components/Message.vue";
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    Artwork,
    Message
  },
  computed: {
    ...mapState(["isClose"])
  },
  data(){
    return{
      swiperOption: {
        loop: false,
        spaceBetween: 200,
        speed: 800,
        centeredSlides: true,
        pagination: { //ページネーション設定
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },
  asyncData (ctx) {
    return { 
      strength: (ctx.isDesktop) ? 8 : 0
    }
  },
  methods: {
    ...mapMutations({
      onClick: "changeIsCloseStatus"
    })
  }
}
</script>

<style lang="stylus" scoped>
border = 8px

.main
  height 100%
  width 100%
  position relative
  .title
    position absolute
    padding 8px
    width 'calc(%s * 0.4)' % content-width
    height 100%
    right calc(50% + 120px)
    z-index -2
    .title-element
      margin-bottom 8px
      font-weight 800
      font-size calc(100vh/4 * 0.8)
      line-height calc(100vh/4 * 0.7)
      text-align left
      color txt-color
      position relative
      animation-delay 0s 
      &::after
        content ''
        width 100%
        height 100%
        position absolute
        left 0
        top 0
        z-index -1
        clip-path polygon(0 16px, 100% 0, 100% calc(100% - 16px), 0% 100%)

      for num in (2..4)
        &:nth-child({num})
          animation-delay num * .2s 
  .message-bg
    z-index -1
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    {flex-center}
  .guide
    text-align center
    padding 32px
    position relative
    position absolute 
    left 50%
    top 50%
    transform translateX(-50%)
    .icon-scroll
      width 40px
      height 70px
      margin-top -35px
      box-shadow inset 0 0 0 2px bg-color
      border-radius 25px
      background alpha(txt-color, .2)
      &:before
        content: ''
        position absolute
        width 8px
        height 8px
        background bg-color
        margin-left -4px
        top 8px
        border-radius 4px
        animation-duration 3s
        animation-iteration-count infinite
        animation-name scroll
@keyframes scroll
  0%
    opacity: 1
  60%
    opacity: 0
    transform: translateY(46px)
  100%
    opacity: 0
    transform: translateY(46px)

+tb()
  .main
    margin 0 auto
    .title
      position initial
      height auto
      width 55%
      margin 0 auto
      padding-top 32px
      .title-element
        font-size calc(100vw/5)
        line-height calc(100vw/5 * 0.8)
        for num in (1..4)
          &:nth-child({num})
            &::after
              background sxsw[ num - 1]
    .message-bg
      display none
    .guide
      display none
</style>