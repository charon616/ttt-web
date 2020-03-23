<template lang="pug">
header.menu
  nuxt-link.menu__logo(to="/" @click.native="resetSlide")
    img(src="~assets/logo_bl.png")
  .menu__sns
    //- font-awesome-icon.icon(:icon="['fab', 'facebook']")
    span SHARE ON:
    a(href="https://www.facebook.com/" target="_blank") FACEBOOK
    //- font-awesome-icon.icon(:icon="['fab', 'twitter']") 
    a(href="https://twitter.com/home?lang=ja" target="_blank") TWITTER
</template>

<script>
import jsonfile from '~/assets/projects.json';

export default {
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
    // padding 20px
    fill pink
    img
      width 120px
      height auto
      +sp()
        width 96px
  &__sns
    // background bg-color
    font-family aktiv-grotesk, sans-serif
    font-weight 800
    z-index 100
    position fixed
    top 0
    right 0
    padding 20px
    span, a
      color bg-color
    span 
      font-size .7rem
      margin-right 4px
    a
      margin 8px 6px
      &:hover
        color lightgray
</style>