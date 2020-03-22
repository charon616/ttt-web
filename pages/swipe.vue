<template>
  <div>
    <swiper :options="swiperOption" class="mySwiper" ref="mySwiper" @slide-change="slideChanged">
      <swiper-slide style="background: green;">
        <h1>スライド1</h1>  
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
    <p class="link-button" ref="button" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">CLICK</p>

  </div>
</template>
<script> 
import {TweenMax, Expo, Elastic} from 'gsap'

export default {
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
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(2, 1000, false)
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
        TweenMax.to(this.$refs.title, 0.05, { // `this.$refs`でDOMにアクセス
          color: 'red',
          scale: 1.3,
          ease: Expo.easeIn,
          // repeat: 19,
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
    }

  }

}
</script>
<style scoped lang="stylus">
.mySwiper
  width 100vw
  height 90vh
  text-align center

.title
  color blue
  padding 16px
  font-size 2em
  background yellow

.link-button
  display inline-block

</style>