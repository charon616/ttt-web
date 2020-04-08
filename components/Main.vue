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
  .message
    h2 There are 6 Awesome Projects.
    p Get more details about Todai To Texas↓
    a.link-button-wh(href="http://todaitotexas.com/" target="_blank") TTT WEB
  //- .guide
  //-   svg(width="100" height="100")
  //-     polyline(points="0, 0 100, 100 30, 30" stroke="black" stroke-width="2")
  //-   p scroll

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
  asyncData (ctx) {
    return { 
      strength: (ctx.isDesktop) ? 8 : 0
    }
  }
}
</script>

<style lang="stylus" scoped>
// .ttt
//   height 100%
//   width 100%
//   display flex
//   justify-content center
//   align-items center
//   +tb()
//     display initial
//   .message
//     text-align center
//     width 400px
//     height 400px
//     padding 40px
//     z-index 0
//     background rgba(0, 0, 0, .4)
//     border 4px solid bg-color
//     +tb()
//       background rgba(0, 0, 0, 0)
//       width 100%
//       height 60%
//       padding 32px
//       border none
//     h1 
//       margin-top 32px
//       margin-bottom 20px
//       font-weight 800
//       position relative
//     h1, p
//       color bg-color

// .link-button-wh
//   &:hover
//     background rgba(0, 0, 0, 0)
//   +tb()
//     margin-top 8px
//     padding 8px 16px
//     font-size 1rem

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
    .title-element
      margin-bottom 8px
      font-weight 800
      font-size calc(100vh/4 * 0.8)
      line-height calc(100vh/4 * 0.7)
      text-align left
      color txt-color
      opacity 1
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
        background sxsw1
        clip-path polygon(0 16px, 100% 0, 100% calc(100% - 16px), 0% 100%)
        // clip-path polygon(0 5%, 0% 100%, border 'calc(100% - %s)' % border, border 'calc(5% + %s)' % border, 'calc(100% - %s)' % border border, 'calc(100% - %s)' % border 'calc(95% - %s)' % border, border 'calc(100% - %s)' % border, 0 100%, 100% 95%, 100% 0)
      &:nth-child(2)
        animation-delay .2s 
        &::after
          background sxsw2
      &:nth-child(3)
        animation-delay .4s 
        &::after
          background sxsw3
      &:nth-child(4)
        animation-delay .6s 
        &::after
          background sxsw4
  .message
    text-align right 
    z-index 0
    background txt-color
    padding 32px
    position absolute 
    right 0
    bottom 24px
    h2, p
      color bg-color
  .guide
    text-align center
    background pink 
    padding 32px

.link-button-wh
  margin-top 8px
  padding 8px 16px
  font-size 1rem
  &:hover
    background rgba(0, 0, 0, 0)
  +tb()
    background txt-color
    color bg-color

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
      bottom 32px
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


</style>