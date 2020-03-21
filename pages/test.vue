<template lang="pug">
.container
  ._render(v-if="target == 'ttt'") 
    TTT
  ._render(v-else)
    ProjectSlider.main(:title="target" v-slot:detail)
      nuxt-link.link-button(:to="{ name: 'project', params: { project:target  } }") DETAIL

  .nav(style="text-align: center;")
    //- button(v-for="(ttl, index) in jsondata.projects_titleForTest" :key="index" @click="movePosition(ttl, index)")
    //-   component(v-bind:is="projects[index]")
    //- span.slide-line(v-bind:class="classObject")
    ._test(v-for="(ttl, index) in jsondata.projects_titleForTest" :key="index" @click="movePosition(ttl, index)")
      input(type="radio" name="nav" v-bind:id="['hoge-' + index]")
      label(v-bind:for="['hoge-' + index]") 
        component(v-bind:is="projects[index]" v-bind:id="ttl")
    span.slide-line(v-bind:class="classObject")
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex';
import {TweenMax, Expo, Elastic} from 'gsap'
import jsonfile from '~/assets/projects.json';

import TTT from "~/components/Main.vue";
import ProjectSlider from '~/components/ProjectSlider.vue';
import Pro0 from '~/components/Logo/ttt.vue';
import Pro1 from '~/components/Logo/harvestx.vue';
import Pro2 from '~/components/Logo/grubin.vue';
import Pro3 from '~/components/Logo/syrinx.vue';
import Pro4 from '~/components/Logo/genkan.vue';
import Pro5 from '~/components/Logo/roboxer.vue';
import Pro6 from '~/components/Logo/wearbo.vue';

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
      classObject: ""
    }
  },
  asyncData (ctx) {
    return { 
      jsondata: jsonfile
    }
  },
  methods: {
    movePosition(pro, index){
      this.target = pro

      this.classObject = "navItem" + index

      this.$store.commit("increment")
      this.$store.commit('updatePage', "navItem" + index)

    },
    flash(){
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.animation, 0.05, { 
          color: 'red',
          scale: 1.3,
          ease: Expo.easeIn,
          repeat: 19,
          yoyo: true
        })
      })
    },
    enter () { // `entered`が`true`になったとき発火
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.animation, 1, {
          scaleX: 1,
          ease: Expo.easeOut
        })
      })
    },
    leave () { // `entered`が`false`になったとき発火
      requestAnimationFrame(() => {
        TweenMax.to(this.$refs.animation, 1, {
          scaleX: 0,
          ease: Expo.easeOut
        })
      })
    },
    click(){
      this.$store.commit("increment")
      this.$store.commit('updatePage', this.$nuxt.$route.name)
      console.log(this.$nuxt.$route.name)
    }
  },
  watch: {
    entered (val) { 
      this.flash() 
      val ? this.enter() : this.leave() 
      console.log("animation")
    }
  }

}

</script>

<style scoped lang="stylus">

.box
  width 100px
  heigth 100px
  background orange
  padding 32px

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
    align-items center
    justify-content space-between
    width 80%
    margin 0 auto
    position relative
    button
      // margin 8px 16px
      svg
        padding 4px
    .slide-line
      display block
      position absolute
      margin 0 auto
      bottom 0
      left 400px
      width 64px
      height 1px
      background-color black
      transition all .3s main-transition
      &.navItem0
        left 0%
      &.navItem1
        left 14.3%
        background-color color1
      &.navItem2
        left 31%
        background-color color2
      &.navItem3
        left 42.8%
        background-color color3
      &.navItem4
        left 57.1%
        background-color color4
      &.navItem5
        left 71.4%
        background-color color5
      &.navItem6
        left 85.7%
        background-color color6
input
  display none
  &:checked + label
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