<template lang="pug">
header.menu
  nuxt-link.menu__logo(to="/" @click.native="resetSlide")
    img(src="~assets/logo_bl.png")
  .menu__sns(v-bind:class="{ hide: isHide }")
    //- span.min SHARE ON:

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
    left 50%
    transform translateX(-50%)
    img
      width 80px
      height auto
  &__sns
    z-index 100
    position fixed
    top 50%
    left 0
    display flex
    flex-direction column
    width 20%
    padding 0 0 0 8px
    transition all .6s main-transition
    transform translateY(-50%)
    // .min 
    //   font-size .7rem
    //   margin-right 4px
    //   display none
    .link
      padding 16px
      width 36px
      height 36px
      position relative
      margin 0 8px
      &:hover
        .icon
          color lightgray 
      .icon
        color txt-color
        vertical-align middle
        display table-cell
        position absolute
        top 50%
        left 50%
        transform translateX(-50%) translateY(-50%)
      span 
        display none
        &:hover
          color lightgray

+tb()
  .menu
    width 100%
    height 120px
    position fixed
    top 0
    left 0
    z-index 100
    display flex
    justify-content space-between
    &__logo
      position initial
      transform initial
      img
        width 120px
    &__sns
      position initial
      flex-direction row
      transform initial
      justify-content flex-end
      padding 0
      width 120px
      .link
        margin 0
        width 120px
        height 60px

+sp()
  .menu
    height 80px
    &__logo
      img
        width 80px
    &__sns
      width 80px
      .link
        width 80px
        height 40px

</style>