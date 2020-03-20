<template lang="pug">
.container#container

  swiper.swiper.gallery-top(:options="swiperOptionTop" ref="swiperTop")
    swiper-slide
      //- Artwork
    swiper-slide(v-for="(ttl, index) in jsondata.projects_title" :key="index")
      ProjectSlider(:title="ttl" v-slot:detail)
        nuxt-link(:to="{ name: 'project', params: { project:ttl } }") DETAIL
  .position-display 
    button(@click="click") test
    p(:key="selectedPos") No. {{ selectedPos }}  {{ selectedProject }}
  swiper.swiper.gallery-thumbs(:options="swiperOptionThumbs" ref="swiperThumbs")
    swiper-slide
      img(src="~assets/logo.svg")
    swiper-slide(v-for="(ttl, index) in jsondata.projects_title" :key="index")
      component(v-bind:is="projects[index]")

</template>
<script>
import Artwork from "~/components/Artwork";
import ProjectSlider from '~/components/ProjectSlider.vue';

import Pro1 from '~/components/Logo/harvestx.vue';
import Pro2 from '~/components/Logo/grubin.vue';
import Pro3 from '~/components/Logo/syrinx.vue';
import Pro4 from '~/components/Logo/genkan.vue';
import Pro5 from '~/components/Logo/roboxer.vue';
import Pro6 from '~/components/Logo/wearbo.vue';

import jsonfile from '~/assets/projects.json';

export default {
  components: {
    Artwork,
    ProjectSlider,
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
        spaceBetween: 0,
        mousewheel: true,
        speed: 600,
        slidesPerView: 1,
        centeredSlides: true,
        effect: 'fade',
        parallax: true,
        passiveListeners: 'true',
        init: function() {console.log("initialized")}
      },
      swiperOptionThumbs: {
      },
      width: window.innerWidth,
      height: window.innerHeight,
      projects: ["Pro1", "Pro2", "Pro3", "Pro4", "Pro5", "Pro6"],
      selectedProject: "",
      selectedPos: "",
    }
  },
  asyncData (ctx) {
    return { 
      swiperOptionThumbs: (ctx.isMobile) ? 
      {
        loop: true,
        loopedSlides: 7, // looped slides should be the same
        spaceBetween: 0,
        mousewheel: true,
        centeredSlides: true,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true
      } : {
        loop: true,
        loopedSlides: 7, // looped slides should be the same
        spaceBetween: 0,
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
      console.log(h.style.height);
    },
    click: function() {
      var mySwiper = document.querySelector('.swiper-container').swiper
      this.selectedProject = this.jsondata.projects_real_title[mySwiper.realIndex-1]
      this.selectedPos = mySwiper.realIndex
      // mySwiper.slideToLoop(3)
    },
    slideChanged: function() {
      console.log('slide changed')
      // console.log(self.selectedPos)
      // this.$store.commit("increment")
      // this.selectedProject = this.jsondata.projects_real_title[mySwiper.realIndex-1]
      // this.selectedPos = mySwiper.realIndex
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    });

    const mySwiper = document.querySelector('.swiper-container').swiper
    mySwiper.on('slideChange', this.slideChange);
  },
}

</script>

<style scoped lang="stylus">
.container
  width 100%
  height 100vh

.position-display
  text-align center
  height 4%

.swiper 
  background white
  .swiper-slide 
    background-size cover
    background-position center
  &.gallery-top 
    height 80%
    width 100%
  &.gallery-thumbs 
    width 100%
    height 16%
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
      background-color #000
  &.gallery-thumbs .swiper-slide 
    display flex
    justify-content center
    align-items center
    height 100%
    transition all .6s main-transition
    svg
      transition all .6s main-transition
      fill black
      padding 4px
    img 
      transition all .6s main-transition
      padding 8px
      width 66px
      +sp()
        width 50px
    &:hover
      transition all .3s main-transition
      transform scale(1.1)
      +sp()
        font-size 1em
  &.gallery-thumbs .swiper-slide-active 
    // transform scale(1.4)
    svg, img
      transition all .6s main-transition
      transform scale(1.4)
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