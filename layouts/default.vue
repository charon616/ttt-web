<template lang="pug">
  .default
    Menu 
    Artwork(v-if="$device.isDesktop" v-show="this.swiperPos == 0")
    nuxt 
    transition(name="fade")
      Message(v-if="$device.isMobile && page=='index'" v-show="show")
    .load(v-if="loading")
</template>

<script>
// import Menu from '~/components/TheMenu.vue';
// import Message from "~/components/Message.vue";
// import Artwork from "~/components/Artwork";
import { mapState } from "vuex";

export default {
  components: {
    // Menu,
    // Message,
    // Artwork
    'Menu' : () => import('~/components/TheMenu.vue'),
    'Message' : () => import('~/components/Message.vue'),
    'Artwork' : () => import('~/components/Artwork'),
  },
  data(){
    return{
      loading: true,
      show: true
    }
  },
  watch: {
    swiperPos: function(val){
      if(val==0){
        setTimeout(() => {
          this.show = true
        }, 500);
      }else{
        this.show = false
      }
    }
  },
  computed: {
    ...mapState([
      "swiperPos", 
      "page"
    ]),
  },
  methods: {
    changeLoadingStatus: function(){
      this.loading = false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.changeLoadingStatus
    });
  }
}

</script>

<style lang="stylus">
html 
  font-family 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size 14px
  word-spacing 1px
  line-height 21px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  overflow-y scroll

html.index, html.index>body 
  -ms-scroll-chaining none
  overscroll-behavior none
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  width 100%
  height 100%
  overflow hidden

*, *:before, *:after 
  box-sizing border-box
  margin 0

a
  text-decoration none
  cursor pointer

h1, .main-font
  font-family aktiv-grotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif

p
  font-family a-otf-gothic-bbb-pr6n, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif

.load
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background txt-color
  z-index 9999
  animation byeShutter 3s forwards
  &::before
    content ''
    position absolute
    top 0
    left 0
    bottom 0
    margin auto
    background-color bg-color
    width 0
    height 2px
    animation shutterOpen 3s forwards

@keyframes byeShutter 
  60% 
    opacity 1
  100% 
    opacity 0
    display none
    z-index -1

@keyframes shutterOpen 
  0% 
    width 0
    height 2px
  50% 
    width 100%
    height 2px
  90% 
    width 100%
    height 100%
  100% 
    width 100%
    height 100%
</style>
