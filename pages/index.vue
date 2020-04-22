<template lang="pug">
.container#container
  .main-gallery    
    swiper.swiper.gallery-top(:options="swiperOptionTop" ref="swiperTop" @slide-change="slideChanged")
      swiper-slide
        MainPage
      swiper-slide(v-for="(ttl, index) in jsondata.projects_title" :key="index")
        ProjectSlider(:title="ttl" v-slot:detail)

  .project-nav
    swiper.swiper.gallery-thumbs(:options="swiperOptionThumbs" ref="swiperThumbs")
      swiper-slide
        Pro0
      swiper-slide(v-for="(ttl, index) in jsondata.projects_title" :key="index")
        component(v-bind:is="projects[index]")
  .load(v-if="loading")

</template>
<script>
import Artwork from "~/components/Artwork";
import MainPage from '~/components/Main.vue';
import ProjectSlider from '~/components/ProjectSlider.vue';

import Pro0 from '~/components/Logo/ttt.vue';
import Pro1 from '~/components/Logo/harvestx.vue';
import Pro2 from '~/components/Logo/grubin.vue';
import Pro3 from '~/components/Logo/syrinx.vue';
import Pro4 from '~/components/Logo/genkan.vue';
import Pro5 from '~/components/Logo/roboxer.vue';
import Pro6 from '~/components/Logo/wearbo.vue';

import jsonfile from '~/assets/projects.json';
import { mapState } from 'vuex'

export default {
  components: {
    Artwork,
    MainPage,
    ProjectSlider,
    Pro0,
    Pro1,
    Pro2,
    Pro3,
    Pro4,
    Pro5,
    Pro6
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 7, // looped slides should be the same
        spaceBetween: 100,
        mousewheel: true,
        speed: 600,
        slidesPerView: 1,
        centeredSlides: true,
        direction: 'vertical',
        parallax: true,
        breakpoints: {
          1024: {
            spaceBetween: 200,
            resistanceRatio: 0.3,
            speed: 800,
            touchAngle: 90,
            preloadImages: false
          }
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 7, // looped slides should be the same
        spaceBetween: 0,
        speed: 600,
        mousewheel: true,
        centeredSlides: true,
        slidesPerView: 7,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
          }
        }
      },
      height: window.innerHeight,
      projects: ["Pro1", "Pro2", "Pro3", "Pro4", "Pro5", "Pro6"],
      selectedProject: "",
      selectedPos: ""
    }
  },
  asyncData (ctx) {
    return { 
      jsondata: jsonfile
    }
  },
  methods: {
    handleResize: function() {
      this.height = window.innerHeight;
      let h = document.getElementById('container');
      h.style.height = this.height + 'px';

      this.swiper.update()
      this.swiperThumbs.update()
    },
    slideChanged: function() {
      this.selectedProject = this.jsondata.projects_real_title[this.swiper.realIndex-1]
      this.selectedPos = this.swiper.realIndex
      this.$store.commit("updateSwiperPos", this.swiper.realIndex)
    },
    returnToDefault: function() {
      this.swiper.slideToLoop(0, 1000, false)
    }
  },
  watch: {
    isSlideToDefault: function(val){
      this.returnToDefault()
    }
    // isClose: function(val){
    //   this.swiper.allowTouchMove = val;
    //   this.swiperThumbs.allowTouchMove = val;
    // }
  },
  computed: mapState({
    isSlideToDefault: state => state.isSlideToDefault,
    loading: state => state.loading,
    isClose: state => state.isClose,
    animate: state => state.animate,
    swiper(){
      return this.$refs.swiperTop.swiper
    },
    swiperThumbs(){
      return this.$refs.swiperThumbs.swiper
    }
  }),
  mounted() {
    this.$store.commit("updatePage","index")
    this.$nextTick(() => {
      this.swiper.controller.control = this.swiperThumbs
      this.swiperThumbs.controller.control = this.swiper
      setTimeout(() => this.$store.commit("changeAnimateStatus", false), 500)
    });

    this.swiper.on('slideChangeTransitionEnd', this.slideChange);
    this.swiper.slideToLoop(this.$store.state.swiperPos, 1000, false)
    this.swiperThumbs.slideToLoop(this.$store.state.swiperPos, 1000, false)

    // this.swiper.allowTouchMove = false;
    // this.swiperThumbs.allowTouchMove = false;

    this.height = window.innerHeight;
    let h = document.getElementById('container');
    h.style.height = this.height + 'px';
    window.addEventListener('resize', this.handleResize);

    setTimeout(() => this.$store.commit("changeLoadingStatus"), 3000)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}

</script>

<style scoped lang="stylus">
.white
  background white

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

.container
  width 100%
  height 100vh
  transition background .4s main-transition
  .main-gallery
    height 86%
  .project-nav
    height 14%

.swiper
  .swiper-slide 
    background-size cover
    background-position center
  &.gallery-top 
    width 100%
    height 90%
    display block
    top 10%
  &.gallery-thumbs 
    height 100%
    width 50%
    box-sizing border-box
    text-align center
    letter-spacing .2em
    font-size 1.2em
    font-weight bold
    cursor pointer
    &::before 
      content ''
      position absolute
      top 0
      left 0
      right 0
      width 1px
      height 12px
      margin auto
      background-color txt-color
  &.gallery-thumbs .swiper-slide 
    {flex-center}
    transition all .6s main-transition
    svg
      transition transform .6s main-transition
      fill txt-color
      padding 4px
    &:hover
      svg
        fill lightgray
  &.gallery-thumbs .swiper-slide-active 
    .ttt
      fill bg-color
      background txt-color
    for num in (0..5)
      .{array[num]}
        fill colors[num]

+tb()
  .container
    .main-gallery
      height 90%
    .project-nav
      height 10%
  .swiper 
    &.gallery-thumbs 
      width 100%

+sp()
  .swiper 
    &.gallery-thumbs 
      font-size .8em
      &::before 
        height 8px
    &.gallery-thumbs .swiper-slide 
      &:hover
        font-size 1em

</style>