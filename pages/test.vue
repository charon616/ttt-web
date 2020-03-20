<template lang="pug">
.container
  ._render(v-if="target == 'ttt'") 
    TTT
  ._render(v-else)
    ProjectSlider.main(:title="target" v-slot:detail)
      nuxt-link.link-button(:to="{ name: 'project', params: { project:target  } }") DETAIL

  .nav(style="text-align: center;")
    button(v-for="(ttl, index) in jsondata.projects_title" :key="index" @click="movePosition(ttl)")
      component.isActive(v-bind:is="projects[index]")

  swiper.swiper.gallery(:options="swiperOptionThumbs")
    swiper-slide(v-for="(ttl, index) in jsondata.projects_title" :key="index")
      component(v-bind:is="projects[index]")

</template>
<script>
import TTT from "~/components/ttt.vue";
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
    TTT,
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
      target: "harvestx",
      projects: ["Pro0", "Pro1", "Pro2", "Pro3", "Pro4", "Pro5", "Pro6"],
      swiperOptionThumbs: 
      {
        loop: true,
        loopedSlides: 7, // looped slides should be the same
        spaceBetween: 0,
        mousewheel: true,
        centeredSlides: true,
        slidesPerView: 6,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      }
      
    }
  },
  asyncData (ctx) {
    return { 
      jsondata: jsonfile
    }
  },
  methods: {
    movePosition(pro){
      this.target = pro
    },
  }

}

</script>

<style scoped lang="stylus">

button
  background-color transparent
  border none
  cursor pointer
  outline none
  padding 0
  appearance none

.container
  width 100%
  height 100vh
  ._render
    height 90%
    .main
      height 100%
  .nav
    display flex
    justify-content center
    align-items center
    button
      margin 8px 16px
      svg
        padding 4px
      .isActive
        fill pink

.swiper 
  background white
  .swiper-slide 
    background-size cover
    background-position center

  &.gallery 
    // position fixed
    // bottom 8px
    // left 50%
    // transform translateX(-50%)
    width 100%
    height 10%
    box-sizing border-box
    padding 10px 0
    text-align center
    letter-spacing .2em
    font-size 1.2em
    font-weight bold
    cursor pointer
    +sp()
      font-size .8em
  &.gallery .swiper-slide 
    display flex
    justify-content center
    align-items center
    height 100%
    transition all 2s main-transition
    svg
      fill gray
    img 
      padding 4px
      width 64px
      +sp()
        width 50px
    &:hover
      font-size 1.3em
      +sp()
        font-size 1em
  &.gallery .swiper-slide-active 
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