<template lang="pug">
.container#container

  swiper.swiper.gallery-top(:options="swiperOptionTop" ref="swiperTop")
    swiper-slide
      //- Artwork
    swiper-slide(v-for="(ttl, index) in jsondata.projects_title" :key="index")
      ProjectSlider(:title="ttl" v-slot:detail)
        nuxt-link(:to="{ name: 'project', params: { project:ttl } }") DETAIL

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
        effect: 'fade'
      },
      swiperOptionThumbs: {
      },
      width: window.innerWidth,
      height: window.innerHeight,
      projects: ["Pro1", "Pro2", "Pro3", "Pro4", "Pro5", "Pro6"]
    }
  },
  asyncData (ctx) {
    if(ctx.isMobile){
      const slidesNum = 4
      console.log("mobile")
    }else{
      const slidesNum = 6
      console.log("nomobile")
    }
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
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    });
    // window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    // window.removeEventListener('resize', this.handleResize)
  }
}

</script>

<style scoped lang="stylus">
.container
  width 100%
  height 100vh

.swiper 
  background white
  .swiper-slide 
    background-size cover
    background-position center

  &.gallery-top 
    height 90%
    width 100%
  &.gallery-thumbs 
    // position fixed
    // bottom 8px
    // left 50%
    // transform translateX(-50%)
    width 100%
    height 10%
    box-sizing border-box
    padding 8px 0 24px
    text-align center
    letter-spacing .2em
    font-size 1.2em
    font-weight bold
    cursor pointer
    +sp()
      font-size .8em
  &.gallery-thumbs .swiper-slide 
    display flex
    justify-content center
    align-items center
    height 100%
    transition all 2s main-transition
    svg
      fill black
      padding 4px
    img 
      padding 4px
      width 64px
      +sp()
        width 50px
    &:hover
      font-size 1.3em
      +sp()
        font-size 1em
  &.gallery-thumbs .swiper-slide-active 
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