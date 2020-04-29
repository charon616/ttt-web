<template lang="pug">
.main
  .title
    .title-element.animated.slideInUp Todai 
    .title-element.animated.slideInUp To 
    .title-element.animated.slideInUp Texas 
    .title-element.animated.slideInUp 2020
  Message(v-if="!$device.isMobile")
</template>
<script>
import Message from "~/components/Message.vue";
export default {
  components: {
    Message
  }
}
</script>

<style lang="stylus" scoped>
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
</style>