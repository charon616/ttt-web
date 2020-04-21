<template lang="pug">
kinesis-container.ttt
  .title(v-if="$device.isDesktop")
    kinesis-element.title-element.animated.slideInUp(:strength="8") Todai 
    kinesis-element.title-element.animated.slideInUp(:strength="16") To 
    kinesis-element.title-element.animated.slideInUp(:strength="4") Texas 
    kinesis-element.title-element.animated.slideInUp(:strength="-8") 2020
  .title(v-else)
    .title-element Todai 
    .title-element To 
    .title-element Texas 
    .title-element 2020

  .message(v-bind:class="{ close: isClose }")
    .message__content
      h2(v-bind:class="{ 'link-button': isClose }" @click="onClick") WHY THIS SITE?
      p SXSW2020, where Todai To Texas was supposed to exhibit, has been cancelled due to COVID-19. There were six teams participating in TTT2020. We wanted to leave a mark on them, so we've created this special site as one of the opportunities to do so. While the future is still unclear, each of us is starting to make progress towards the next opportunities, including SXSW2021. I hope you will continue to support TTT and its participants in their challenges.
      br
      p Todai To Texasが出展を予定していたSXSW2020が、新型コロナウイルスの影響により中止となりました。TTT2020には6つのチームが参加していましたが、彼らの足跡を少しでも残したいと思い、その場の１つとして、この特設サイトを用意しました。先行きはまだまだ不透明ですが、SXSW2021を含む次の機会へ向けて、それぞれが進み始めています。TTTとその参加者のチャレンジを引き続き応援していただければ幸いです。
      a.link-button(href="http://todaitotexas.com/" target="_blank") TTT OFFICIAL WEB SITE
    .close-button(@click="onClick")
  .message-bg(@click="onClick" v-if="!isClose")
  .guide
    .icon-scroll 

</template>
<script>
import Artwork from "~/components/Artwork";
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import { mapState } from 'vuex';

export default {
  components: {
    Artwork,
    KinesisContainer,
    KinesisElement
  },
  computed: mapState({
    isClose: state => state.isClose,
  }),
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
    onClick: function(){
      this.$store.commit("changeIsCloseStatus")
    }
  }
}
</script>

<style lang="stylus" scoped>
border = 8px

.ttt
  height 100%
  width 100%
  position relative
  .title
    position absolute
    padding 8px
    width 480px
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
      &:nth-child(2)
        animation-delay .2s 
      &:nth-child(3)
        animation-delay .4s 
      &:nth-child(4)
        animation-delay .6s 
  .message-bg
    z-index -1
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
  .message
    position absolute
    left calc(50% - 120px)
    top 50%
    transform translateY(-50%)
    text-align left
    width 720px
    padding 0
    z-index 1
    border 1px solid txt-color
    backdrop-filter blur(8px) brightness(150%)
    background rgba(255, 255, 255, .5) 
    &__content
      margin 32px 108px 32px 32px
      h2 
        margin-top 32px
        margin-bottom 20px
        font-weight 800
        position relative
        font-size 1.2em
      h2, p
        color txt-color
      p
        text-align justify
        letter-spacing .1em
        line-height 24px
    .close-button
      position absolute
      right 32px
      top 50%
      transform translateY(-50%)
      width 80px
      height 80px
      cursor pointer
      &:hover
        &::before, &::after
          background lightgray

      &::before, &::after
        content ""
        display block
        width 100%
        height 1px
        background txt-color
        transform rotate(65deg)
        transform-origin 0% 50%
        position absolute
        left 42%
      &::after
        transform rotate(-65deg)
        transform-origin 100% 50%
        left auto
        right 14%
    &.close
      right 0
      bottom 16px
      top initial
      left initial
      width auto
      background rgba(0, 0, 0, 0)
      border none
      backdrop-filter none
      .message__content
        margin 0
        .link-button
          color bg-color
          margin 0 
          cursor pointer
          &:hover
            color txt-color
            border-right none
        p, br, a
          display none
      .close-button
        display none
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
      background rgba(0, 0, 0, .2)
    .icon-scroll:before
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
  .ttt
    margin 0 auto
    .title
      position initial
      margin 32px auto
      height auto
      width 55%
      .title-element
        font-size calc(100vw/5)
        line-height calc(100vw/5 * 0.8)
        &:after
          background sxsw1
        &:nth-child(2)
          &::after
            background sxsw2
        &:nth-child(3)
          &::after
            background sxsw3
        &:nth-child(4)
          &::after
            background sxsw4
    .message-bg
      display none
    .message
      transform translateX(-50%) translateY(-50%)
      padding 32px 80px 108px 80px
      left 50%
      top 50%
      text-align center
      width calc(100% - 160px)
      &__content
        margin 0
      &.close
        right initial
        bottom 0
        left 50%
      .close-button
        right 50%
        top initial 
        bottom 32px
        transform translateX(50%) rotate(90deg)
    .guide
      display none

+sp()
  .ttt
    .message
      padding 8px 32px 16px
      width 100%
      height 100%
      top 0
      transform translateX(-50%)
      border none
      &.close
        position relative
      &__content
        p 
          font-size 12px
          line-height 18px
        h2
          margin 8px 0
          font-size 1.2em
        a.link-button
          display none

</style>