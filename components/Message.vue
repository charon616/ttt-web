<template lang="pug">
.message-container
  .message(v-bind:class="{ close: isClose }")
    .message__content
      h2(v-bind:class="{ 'link-button': isClose }" @click="changeIsCloseStatus") WHY THIS SITE?
      p SXSW2020, where Todai To Texas was supposed to exhibit, has been cancelled due to COVID-19. There were six teams participating in TTT2020. We wanted to leave a mark on them, so we've created this special site as one of the opportunities to do so. While the future is still unclear, each of us is starting to make progress towards the next opportunities, including SXSW2021. I hope you will continue to support TTT and its participants in their challenges.
      br
      p Todai To Texasが出展を予定していたSXSW2020が、新型コロナウイルスの影響により中止となりました。TTT2020には6つのチームが参加していましたが、彼らの足跡を少しでも残したいと思い、その場の１つとして、この特設サイトを用意しました。先行きはまだまだ不透明ですが、SXSW2021を含む次の機会へ向けて、それぞれが進み始めています。TTTとその参加者のチャレンジを引き続き応援していただければ幸いです。
      a.link-button(href="http://todaitotexas.com/" target="_blank" rel="noopener noreferrer") TTT OFFICIAL WEB SITE
    .close-button(@click="changeIsCloseStatus")
  .message-bg(@click="changeIsCloseStatus" v-show="!isClose")
  .guide(v-show="isClose")
    .icon-scroll 

</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: "Message",
  computed: {
    ...mapState(["isClose"])
  },
  methods: {
    ...mapMutations(["changeIsCloseStatus"])
  }
}
</script>
<style lang="stylus" scoped>

.message
  position absolute
  left calc(50% - 120px)
  top 50%
  transform translateY(-50%)
  text-align left
  width 'calc(%s * 0.6)' % content-width
  padding 0
  z-index 1
  border 1px solid txt-color
  backdrop-filter blur(8px) brightness(150%)
  background alpha(bg-color, .8)
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
    background alpha(txt-color, 0)
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
.message-bg
  position fixed
  width 100%
  height 100%
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
      animation 3s scroll infinite
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
  .message-bg, .guide
    display none
  .message
    top 50%
    left 50%
    transform initial
    text-align center
    width calc(100% - 160px)
    padding 24px
    transform translateX(-50%) translateY(-50%)
    height 80%
    &.close
      padding 0
      transform translateX(0) translateY(0)
      left 0
      top initial
      width auto
      height auto
      bottom 108px
    &__content
      margin 0
      overflow-y scroll
      position relative
      height 84%
      h2 
        margin 0 0 8px 0
    .close-button
      position relative
      transform initial
      top initial
      right initial
      margin 0 auto
      {flex-center}
      &::before, &::after
        content ""
        display block
        width 100%
        height 1px
        background txt-color
        transform rotate(25deg)
        transform-origin 0% 50%
        position absolute
        left 42%
        left 5%
      &::after
        transform rotate(-25deg)
        transform-origin 100% 50%
        left auto
        right 5%

+sp()
  .message
    width 100%
    height 100%
    top 0
    transform translateX(-50%) translateY(0)
    padding 80px 24px 0
    z-index 80
    border 8px solid txt-color
    &__content
      height calc(100% - 80px)
      padding-bottom 24px
      padding-top 24px
      .link-button
        font-size 1em
        margin-top 8px
    .close-button
      height 40px
      &::before, &::after
        transform rotate(25deg) translateY(-50%)
      &::after
        transform rotate(-25deg) translateY(-50%)
</style>