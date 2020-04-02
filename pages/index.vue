<template lang="pug">
.container(v-bind:class="{ white: this.$store.state.swiperPos != 0 }")
  .main-gallery
    .pos
      .no(v-if="selectedPos != 0")
        p.main-font(:key="selectedPos") Project 
        .number
          p.main-font(:key="selectedPos") No.
          transition(name="slide-fade" mode="out-in")
            span.main-font(:key="selectedPos") {{ selectedPos }} 
      .name(v-if="selectedPos != 0 && $device.isDesktop")
        transition(name="slide-fade2" mode="out-in")
          p.main-font(:key="selectedPos") {{ selectedProject }}
    
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
      },
      swiperOptionThumbs: {
      },
      width: window.innerWidth,
      height: window.innerHeight,
      projects: ["Pro1", "Pro2", "Pro3", "Pro4", "Pro5", "Pro6"],
      selected: "",
      selectedProject: "",
      selectedPos: ""
    }
  },
  asyncData (ctx) {
    return { 
      swiperOptionTop: (ctx.isMobile) ? {
        loop: true,
        loopedSlides: 7, // looped slides should be the same
        spaceBetween: 200,
        resistanceRatio: 0.3,
        // freeMode: true,
        // effect: 'fade',
        mousewheel: true,
        speed: 800,
        slidesPerView: 1,
        centeredSlides: true,
        touchAngle: 90,
        direction: 'vertical',
        lazyLoading: true,
        preloadImages: false
      } : {
        loop: true,
        loopedSlides: 7, // looped slides should be the same
        spaceBetween: 200,
        mousewheel: true,
        speed: 600,
        slidesPerView: 1,
        centeredSlides: true,
        direction: 'vertical',
        parallax: true
      },
      swiperOptionThumbs: (ctx.isMobile) ? 
      {
        loop: true,
        loopedSlides: 7, // looped slides should be the same
        spaceBetween: 0,
        speed: 600,
        mousewheel: true,
        centeredSlides: true,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true
      } : {
        loop: true,
        loopedSlides: 7, // looped slides should be the same
        spaceBetween: 0,
        speed: 600,
        mousewheel: true,
        centeredSlides: true,
        slidesPerView: 6,
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      jsondata: jsonfile
    }
  },
  methods: {
    handleResize: function() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      const h = document.getElementById('container');
      h.style.height = this.height;
    },
    slideChanged: function() {
      this.selected = this.jsondata.projects_title[this.swiper.realIndex-1]
      this.selectedProject = this.jsondata.projects_real_title[this.swiper.realIndex-1]
      this.selectedPos = this.swiper.realIndex
      this.$store.commit("updateSwiperPos", this.swiper.realIndex)
    },
    returnToDefault: function() {
      this.swiper.slideToLoop(0, 1000, false)
    },
    selectColor: function() {

    }
  },
  watch: {
    isSlideToDefault: function(val){
      this.returnToDefault()
    }
  },
  computed: mapState({
    isSlideToDefault: state => state.isSlideToDefault,
    swiper(){
      return this.$refs.swiperTop.swiper
    }
  }),
  mounted() {
    this.$store.commit("updatePage","index")
    const swiperThumbs = this.$refs.swiperThumbs.swiper
    this.$nextTick(() => {
      this.swiper.controller.control = swiperThumbs
      swiperThumbs.controller.control = this.swiper
    });
    this.swiper.on('slideChange', this.slideChange);
    this.swiper.slideToLoop(this.$store.state.swiperPos, 1000, false)
    swiperThumbs.slideToLoop(this.$store.state.swiperPos, 1000, false)
  },
}

</script>

<style scoped lang="stylus">
.white
  background white

.container
  width 100%
  height 100vh
  transition background .4s main-transition
  // background rgba(0, 0, 0, 0)

  .main-gallery
    height 86%
    +tb()
      height 90%
  .project-nav
    height 14%
    +tb()
      height 10%
  .pos
    text-align center
    font-weight 800
    width 100%
    height 10%
    display flex
    justify-content center
    align-items center
    flex-direction column
    // font-size .7rem
    +tb()
      height 8%
    .no
      text-align right
      position fixed
      right 0
      top 50%
      padding 20px
      transform translateY(-50%)
      +tb()
        text-align center
        position initial
        padding 0
        transform initial
        display flex
      & > p
        display none
        +tb()
          display initial

      .number
        display flex
        justify-content flex-end
        align-items center
        flex-direction column
        +tb()
          justify-content center
          flex-direction row
          margin-left 8px
        span
          border 1px solid txt-color
          width 36px
          height 36px
          text-align center
          line-height 34px
          +tb()
            border none
            width initial
            height initial
            line-height initial
    .name
      font-size 1.4em
      display none
    p, span
      // color bg-color


.swiper 
  .swiper-slide 
    background-size cover
    background-position center
  &.gallery-top 
    width 100%
    height 90%
    display block
    +tb()
      height 92%
  &.gallery-thumbs 
    height 100%
    box-sizing border-box
    text-align center
    letter-spacing .2em
    font-size 1.2em
    font-weight bold
    cursor pointer
    +sp()
      font-size .8em
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
      +sp()
        height 8px

  &.gallery-thumbs .swiper-slide 
    display flex
    justify-content center
    align-items center
    transition all .6s main-transition
    svg
      transition all .6s main-transition
      fill txt-color
      padding 4px
      +tb()
        fill txt-color
    &:hover
      transition all .3s main-transition
      transform scale(1.1)
      +sp()
        font-size 1em
  &.gallery-thumbs .swiper-slide-active 
    svg
      transition all .6s main-transition
      transform scale(1.4)
    .ttt
      fill #231815
    .harvestx
      fill color1
    .grubin
      fill color2
    .syrinx
      fill color3
    .genkan
      fill color4
    .roboxer
      fill color5
    .wearbo
      fill color6

</style>