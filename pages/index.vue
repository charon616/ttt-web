<template lang="pug">
.container
  .main-gallery
    .pos.pos__top
      .no(v-if="selectedPos != 0")
        p.main-font(:key="selectedPos") Project No.
        transition(name="slide-fade" mode="out-in")
          span.main-font(:key="selectedPos") {{ selectedPos }} 
      .name(v-if="selectedPos != 0")
        transition(name="slide-fade2" mode="out-in")
          p.main-font(:key="selectedPos") {{ selectedProject }}
    swiper.swiper.gallery-top(:options="swiperOptionTop" ref="swiperTop" @slide-change="slideChanged")
      swiper-slide
        MainPage
      swiper-slide(v-for="(ttl, index) in jsondata.projects_title" :key="index")
        nuxt-link(:to="{ name: 'project', params: { project:ttl } }") 
          ProjectSlider(:title="ttl" v-slot:detail)
            nuxt-link.link-button(:to="{ name: 'project', params: { project:ttl } }") DETAIL
  .project-nav
    swiper.swiper.gallery-thumbs(:options="swiperOptionThumbs" ref="swiperThumbs")
      swiper-slide
        Pro0
      swiper-slide(v-for="(ttl, index) in jsondata.projects_title" :key="index")
        component(v-bind:is="projects[index]")

</template>
<script>
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

export default {
  components: {
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
        spaceBetween: 200,
        mousewheel: true,
        speed: 600,
        slidesPerView: 1,
        centeredSlides: true,
        // effect: 'fade',
        direction: 'vertical',
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
    slideChanged: function() {
      console.log('slide changed')
      console.log(self.selectedPos)
      var mySwiper = document.querySelector('.swiper-container').swiper
      // this.$store.commit("increment")
      this.selectedProject = this.jsondata.projects_real_title[mySwiper.realIndex-1]
      this.selectedPos = mySwiper.realIndex
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
  // overflow hidden
  .main-gallery
    height 86%
  .project-nav
    height 14%
  .pos
    text-align center
    font-weight 800
    .no
      display flex
    .name
      font-size 1.4em
    &__top
      display flex
      justify-content center
      align-items center
      flex-direction column
      height 10%
      font-size .7rem

.swiper 
  .swiper-slide 
    background-size cover
    background-position center
  &.gallery-top 
    height 90%
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
      width 2px
      height 12px
      margin auto
      background-color #000
  &.gallery-thumbs .swiper-slide 
    display flex
    justify-content center
    align-items center
    transition all .6s main-transition
    svg
      transition all .6s main-transition
      fill txt-color
      padding 4px
    &:hover
      transition all .3s main-transition
      transform scale(1.1)
      +sp()
        font-size 1em
  &.gallery-thumbs .swiper-slide-active 
    svg
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