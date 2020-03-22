<template>

  <div class="swipe">
    <!-- <Artwork /> -->
    <MainPage />
    <!-- <swiper :options="swiperOption" class="mySwiper" ref="mySwiper" @slide-change="slideChanged">
      <swiper-slide style="background: green;">
        <h1>スライド1</h1>  
          <p style="background: pink; padding: 16px;">test</p>
      </swiper-slide>
      <swiper-slide style="background: orange;">
        <h1>スライド2</h1>  
      </swiper-slide>
      <swiper-slide style="background: blue;">
        <h1>スライド3</h1>  
      </swiper-slide>
      <swiper-slide style="background: red;">
        <h1>スライド4</h1>  
      </swiper-slide>
      <swiper-slide style="background: pink;">
        <h1>スライド5</h1>  
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <button @click="click1">button1</button>
    <button @click="click2">button2</button>
    <p ref="title" class="title">ANIMATION</p>
    <p class="new-link-button" ref="button" v-on:click="slideReset">CLICK</p>
    <p class="link-button my-button1" ref="button" v-on:click="slideReset">CLICK</p>
    <p class="link-button my-button2" ref="button" v-on:click="slideReset">CLICK</p>

    <div class="target">
      <!-- <img src="genkan.png"> -->
    <!-- </div>  -->

  </div>
</template>
<script> 
import {TweenMax, Expo, Elastic} from 'gsap'
import MainPage from '~/components/Main.vue';

export default {
  components: {
    MainPage
  },
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        loop: true,
        loopedSlides: 7, // looped slides should be the same
        spaceBetween: 0,
        mousewheel: true,
        speed: 600,
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination'
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(2, 1000, false)
  },
  methods: {
    slideChanged: function() {
      console.log('slide changed')
      // console.log(self.selectedPos)
      // this.$store.commit("increment")
      // this.selectedProject = this.jsondata.projects_real_title[mySwiper.realIndex-1]
      // this.selectedPos = mySwiper.realIndex
    },
    click1: function() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.title, 0.5, { // `this.$refs`でDOMにアクセス
          color: 'red',
          scale: 1.3,
          ease: Expo.easeIn,
          repeat: 19,
          yoyo: true
        })
      })
    },
    click2: function() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.title, 1, {
          scaleX: 1,
          ease: Expo.easeOut
        })
      })
    },
    mouseover: function() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.button, 0.25, {
          backgroundColor: "white"
        })
      })
    },
    mouseleave: function() {
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.button, 0.25, {
          backgroundColor: "black"
        })
      })
    },
    slideReset: function() {
      this.swiper.slideToLoop(0, 1000, false)
    }

  }

}
</script>
<style scoped lang="stylus">
.swipe
  // background green

.mySwiper
  width 100vw
  height 50vh
  text-align center

.title
  color blue
  padding 16px
  font-size 2em
  background yellow

.new-link-button
  transition .4s main-transition
  color bg-color
  background txt-color
  text-decoration none
  font-weight bold
  font-size 1.2em
  letter-spacing .1em
  // border 3px solid txt-color
  padding 14px 22px
  display inline-block
  // clip-path: polygon(0 5%, 100% 0, 100% 95%, 0% 100%);
  margin 16px 200px
  clip-path: polygon(0 0%, 100% 0, 100% 100%, 0% 100%);
  &:hover
    clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
    color txt-color
    background lightgray
    // letter-spacing .2em

.my-button1
  position relative
  background rgba(0, 0, 0, 0)
  color txt-color
  overflow hidden
  &::after
    content ""
    position absolute
    top 0
    left 0
    width 0%
    height 100%
    background txt-color
    z-index -1
    transition all .4s main-transition
  &:hover:after
    width 100%
  &:hover
    transition all .3s main-transition
    background rgba(0, 0, 0, 0)
    letter-spacing .2em
    color bg-color

.my-button2
  position relative
  overflow hidden
  &::after
    content ""
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background pink
    z-index -1
    transition all .4s main-transition
  &:hover
    // box-shadow 2px 2px 0 2px lightgray
    transform translateX(-4px) translateY(-4px)
  
  

.target
  // clip-path: circle(160px at center);
  width 300px
  height 300px
  margin 0 auto 200px
  background-size: cover;
  transition: 0.4s cubic-bezier(1, -1, 0, 2);
  clip-path: polygon(50% 5%, 0% 100%, 100% 100%);
  background: url("~assets/logo.png") 
  &:hover
    clip-path: polygon(50% 19%, 0 76%, 100% 76%);

</style>