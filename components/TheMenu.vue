<template lang="pug">
header.menu
  nuxt-link.menu__logo(to="/" @click.native="resetSlide")
    img(src="~assets/logo_bl.png")
  .menu__sns(v-bind:class="{ hide: isHide }")
    span.min SHARE ON:
    //- button.hide-button(@click="onclick")

    a(href="https://www.facebook.com/" target="_blank").link
      font-awesome-icon.icon.icon-facebook(:icon="['fab', 'facebook-f']")
      span FACEBOOK
    a(href="https://twitter.com/home?lang=ja" target="_blank").link
      font-awesome-icon.icon.icon-twitter(:icon="['fab', 'twitter']") 
      span TWITTER

</template>

<script>
import jsonfile from '~/assets/projects.json';

export default {
  data(){
    return{
      isHide: false
    }
  },
  asyncData () {
    return{
      jsondata: jsonfile
    }
  },
  methods: {
    resetSlide: function(){
      if(this.$store.state.page != "index"){
        this.$store.commit("updateSwiperPos", 0)
      }else{
        this.$store.commit("changeIsSlideToDefalutState")
      }
    },
    onclick: function(){
      console.log("click")
      this.isHide = !this.isHide
    }
  
  }
}

</script>

<style scoped lang="stylus">
.menu
  &__logo
    position fixed
    top 0
    left 0
    z-index 100
    fill pink
    img
      width 120px
      height auto
      +sp()
        width 80px
  &__sns
    font-family aktiv-grotesk, sans-serif
    font-weight 800
    z-index 100
    position fixed
    top 0
    right 0
    padding 20px
    background txt-color
    span, a
      color bg-color
    .min 
      font-size .7rem
      margin-right 4px
    .link
      margin 8px 6px
      .icon
        color white
        display none
        +tb()
          display initial
      span
        &:hover
          color lightgray 
     
    +tb()
      top 40%
      left 0
      display flex
      flex-direction column
      width 20%
      background initial
      padding 0 0 0 8px
      transition all .6s main-transition
      .hide-button
        position fixed
        top 35%
        left 0
        width 36px
        height 36px
        background txt-color
        color bg-color

        border none
        outline none
        padding 0
        appearance none

        width 0
        height 0
        border-style solid
        border-width 20px 32px 20px 0
        border-color transparent bg-color transparent transparent

        
      &.hide
        left -20%
      
      .min 
        display none
      .link
        background txt-color
        padding 16px
        border 1px solid bg-color
        width 36px
        height 36px
        position relative
        margin 8px
        .icon
          color bg-color
          vertical-align middle
          display table-cell
          position absolute
          top 50%
          left 50%
          transform translateX(-50%) translateY(-50%)
        span 
          display none

</style>