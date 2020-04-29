<template lang="pug">
.container(:style="{ height: this.height + 'px'}")
  .main-gallery 
    swiper.swiper.gallery-top(:options="swiperOptionTop" ref="swiperTop" @slide-change="slideChanged")
      swiper-slide
        MainPage
      swiper-slide(v-for="(ttl, index) in titles" :key="index")
        ProjectSlider(:title="ttl" v-slot:detail v-if="$device.isDesktop")
        ProjectSlider_mobile(:title="ttl" v-slot:detail v-else)

  .project-nav
    swiper.swiper.gallery-thumbs(:options="swiperOptionThumbs" ref="swiperThumbs")
      swiper-slide
        Pro0
      swiper-slide(v-for="(ttl, index) in titles" :key="index")
        component(v-bind:is="projects[index]")

</template>
<script>
import MainPage from '~/components/Main.vue';
import ProjectSlider from '~/components/ProjectSlider.vue';
import ProjectSlider_mobile from '~/components/ProjectSlider_mobile.vue';
import Pro0 from '~/components/Logo/ttt.vue';
import Pro1 from '~/components/Logo/harvestx.vue';
import Pro2 from '~/components/Logo/grubin.vue';
import Pro3 from '~/components/Logo/syrinx.vue';
import Pro4 from '~/components/Logo/genkan.vue';
import Pro5 from '~/components/Logo/roboxer.vue';
import Pro6 from '~/components/Logo/wearbo.vue';

import jsonfile from '~/assets/projects.json';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    MainPage,
    ProjectSlider,
    ProjectSlider_mobile,
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
        loopedSlides: 7, 
        spaceBetween: 100,
        mousewheel: true,
        speed: 600,
        slidesPerView: 1,
        centeredSlides: true,
        direction: 'vertical',
        parallax: true,
        passiveListeners: false,
        preloadImages: false,
        lazy: {
          loadPrevNext: true
        },
        breakpoints: {
          1024: {
            spaceBetween: 200,
            speed: 800,
            touchAngle: 90,
            preloadImages: false,
            passiveListeners: true,
          }
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 7, 
        spaceBetween: 0,
        speed: 600,
        mousewheel: true,
        centeredSlides: true,
        slidesPerView: 7,
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        passiveListeners: false,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            passiveListeners: true
          }
        }
      },
      height: window.innerHeight,
      projects: ["Pro1", "Pro2", "Pro3", "Pro4", "Pro5", "Pro6"],
      selectedProject: "",
      selectedPos: "",
      titles: jsonfile.projects_title
    }
  },
  methods: {
    ...mapMutations([
      "updateSwiperPos",
      "updatePage",
      "changeAnimateStatus",
    ]),
    handleResize: function() {
      this.height = window.innerHeight;
      this.swiper.update()
      this.swiperThumbs.update()
    },
    slideChanged: function() {
      let id = this.swiper.realIndex
      this.selectedProject = this.titles[id-1]
      this.selectedPos = id
      this.updateSwiperPos(id)
    },
    returnToDefault: function() {
      this.swiper.slideToLoop(0, 1000, false)
    }
  },
  watch: {
    isSlideToDefault: function(val){
      this.returnToDefault()
    }
  },
  computed: {
    ...mapState([
      "isSlideToDefault", 
      "swiperPos"
    ]),
    swiper(){
      return this.$refs.swiperTop.swiper
    },
    swiperThumbs(){
      return this.$refs.swiperThumbs.swiper
    }
  },
  created() {
    this.updatePage("index")
  },
  mounted() {
    this.$nextTick(() => {
      this.swiper.controller.control = this.swiperThumbs
      this.swiperThumbs.controller.control = this.swiper
      setTimeout(() => this.changeAnimateStatus(false), 500)
    });

    this.swiper.slideToLoop(this.swiperPos, 1000, false)
    this.swiperThumbs.slideToLoop(this.swiperPos, 1000, false)

    this.height = window.innerHeight;
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}

</script>

<style scoped lang="stylus">
.container
  width 100%
  height 100vh
  transition background .4s main-transition
  .main-gallery
    height 86%
  .project-nav
    height 14%

.swiper
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
    .swiper-slide 
      {flex-center}
      transition all .6s main-transition
      svg
        transition transform .6s main-transition
        fill txt-color
        padding 4px
      &:hover
        cursor pointer
        svg
          fill lightgray
    .swiper-slide-active 
      .ttt
        fill bg-color
        background txt-color
      for num in (0..5)
        .{array[num]}
          fill colors[num]
      &:hover
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
    &.gallery-top 
      top nav-height
    &.gallery-thumbs 
      width 100%

+sp()
  .swiper 
    &.gallery-top 
      top nav-height-sp
    &.gallery-thumbs 
      font-size .8em
      &::before 
        height 8px
      .swiper-slide 
        &:hover
          font-size 1em

</style>