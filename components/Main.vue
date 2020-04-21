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
  //- .message(v-bind:class="{ close: isClose }")
  //-   h2 WHY THIS SITE?
  //-   p SXSW2020, where Todai To Texas was supposed to exhibit, has been cancelled due to COVID-19. There were six teams participating in TTT2020. We wanted to leave a mark on them, so we've created this special site as one of the opportunities to do so. While the future is still unclear, each of us is starting to make progress towards the next opportunities, including SXSW2021. I hope you will continue to support TTT and its participants in their challenges.
  //-   <br/>
  //-   p Todai To Texasが出展を予定していたSXSW2020が、新型コロナウイルスの影響により中止となりました。TTT2020には6つのチームが参加していましたが、彼らの足跡を少しでも残したいと思い、その場の１つとして、この特設サイトを用意しました。先行きはまだまだ不透明ですが、SXSW2021を含む次の機会へ向けて、それぞれが進み始めています。TTTとその参加者のチャレンジを引き続き応援していただければ幸いです。
  //-   a.link-button(href="http://todaitotexas.com/" target="_blank") TTT WEB | TTT公式サイト
  //-   .close-button(@click="onClick")
  //- .message-bg(@click="onClick" v-if="!isClose")

  swiper.message(v-bind:class="{ close: isClose }" :options="swiperOption")
    swiper-slide.message__content
      h2 WHY THIS SITE?
      p SXSW2020, where Todai To Texas was supposed to exhibit, has been cancelled due to COVID-19. There were six teams participating in TTT2020. We wanted to leave a mark on them, so we've created this special site as one of the opportunities to do so. While the future is still unclear, each of us is starting to make progress towards the next opportunities, including SXSW2021. I hope you will continue to support TTT and its participants in their challenges.
      <br/>
      p Todai To Texasが出展を予定していたSXSW2020が、新型コロナウイルスの影響により中止となりました。TTT2020には6つのチームが参加していましたが、彼らの足跡を少しでも残したいと思い、その場の１つとして、この特設サイトを用意しました。先行きはまだまだ不透明ですが、SXSW2021を含む次の機会へ向けて、それぞれが進み始めています。TTTとその参加者のチャレンジを引き続き応援していただければ幸いです。
      p(style="text-align:center;") Get more details about Todai to Texas↓
      a.link-button(href="http://todaitotexas.com/" target="_blank") TTT WEB | TTT公式サイト
    swiper-slide.message__content
      h2 HOW TO USE THIS SITE?
      .guide
        .icon-scroll 
        span Scroll
    swiper-slide.message__content
      h2 PROJECTS
      p There are 6 awesome projects.
      p No.1 HarvestX
      p No.2 Grubin
      p No.3 Syrinx
      p No.4 Genkan
      p No.5 ROBOXER
      p No.6 wearbo
    .swiper-pagination(slot="pagination")
    .close-button(@click="onClick")
  .message-bg(@click="onClick" v-if="!isClose")
  //- .guide
  //-   .icon-scroll 

</template>
<script>
import Artwork from "~/components/Artwork";
import { KinesisContainer, KinesisElement } from 'vue-kinesis';

export default {
  components: {
    Artwork,
    KinesisContainer,
    KinesisElement
  },
  data(){
    return{
      isClose: false,
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
      this.isClose = !this.isClose;
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  background #CCC
  width 100%
  height 100%



border = 8px

.ttt
  height 100%
  width 100%
  display flex
  justify-content center
  align-items center
  .title
    position absolute 
    left 120px
    top 16px
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
        // background sxsw1
        clip-path polygon(0 16px, 100% 0, 100% calc(100% - 16px), 0% 100%)
        // clip-path polygon(0 5%, 0% 100%, border 'calc(100% - %s)' % border, border 'calc(5% + %s)' % border, 'calc(100% - %s)' % border border, 'calc(100% - %s)' % border 'calc(95% - %s)' % border, border 'calc(100% - %s)' % border, 0 100%, 100% 95%, 100% 0)
      &:nth-child(2)
        animation-delay .2s 
        &::after
          // background sxsw2
      &:nth-child(3)
        animation-delay .4s 
        &::after
          // background sxsw3
      &:nth-child(4)
        animation-delay .6s 
        &::after
          // background sxsw4
  .message-bg
    z-index -1
    position fixed
    top 0
    left 0
    // background rgba(0, 0, 0, .7)
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
  .message
    position relative
    text-align center
    width 1200px
    height 560px
    // padding 40px 320px
    padding 0
    z-index 1
    background txt-color
    background bg-color
    // transition 1s all main-transition
    border 1px solid txt-color
    +tb()
      width 100%
      height 60%
      padding 32px
      border none
    h2 
      margin-top 32px
      margin-bottom 20px
      font-weight 800
      position relative
    h2, p
      color bg-color
      color txt-color
    p
      text-align justify
      letter-spacing .1em
    &__content
      width 100%
      height 100%
      padding 40px 320px
    .close-button
      position absolute
      right 160px
      top 50%
      transform translateX(50%) translateY(-50%)
      // display block
      width 80px
      height 80px
      cursor pointer
      &::before, &::after
        content ""
        display block
        width 100%
        height 1px
        background txt-color
        transform rotate(45deg)
        transform-origin 0% 50%
        position absolute
        top calc(14% - 5px)
        left 14%
      &::after
        transform rotate(-45deg)
        transform-origin 100% 50%
        left auto
        right 14%
    &.close
      // padding 32px
      position absolute 
      right 0
      top 0
      width auto
      height 30%
      background rgba(0, 0, 0, 0)
      // background deeppink
      border none

      p, br, .link-button
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
      color deeppink
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
    display initial
    .title
      position initial
      margin 40px auto
      width 50%
      .title-element
        font-size calc(100vw/5)
        line-height calc(100vw/5 * 0.7)
    .message
      background rgba(0, 0, 0, 0)
      padding 0
      bottom 64px
      width 70%
      left 50%
      transform translateX(-50%)
      border none
      text-align center
      h2
        color black
        font-size 1rem
      h2, p
        color txt-color
    .guide
      display none


</style>