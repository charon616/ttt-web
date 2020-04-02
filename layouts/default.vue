<template lang="pug">
  .default
    Menu 
    //- Artwork.artwork(v-bind:class="{ blur: this.$store.state.swiperPos != 0 }" v-if="$device.isDesktop")
    nuxt 
</template>

<script>
import Menu from '~/components/TheMenu.vue';
import Artwork from "~/components/Artwork";
export default {
  components: {
    Menu,
    Artwork
  },
  watch: {
     // routeが変わるときにシーンを変えるなどなにか処理する
    '$route.name': function(_new, _old){
      // console.log(_new)
     }
  },
  mounted() {
    Typekit.load({async: true})
  }
}

</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  line-height: 21px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html.index, html.index>body {
  -ms-scroll-chaining: none;
  overscroll-behavior: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* body{
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
      background-position: 0% 50%;
  }
  50% {
      background-position: 100% 50%;
  }
  100% {
      background-position: 0% 50%;
  }
} */

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a{
  text-decoration: none;
}

h1, .main-font{
  font-family: aktiv-grotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}

p{
  font-family: a-otf-gothic-bbb-pr6n, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.artwork{
  transform: scale(1.1);
}

.blur{
  -ms-filter: blur(8px) brightness(80%);
  filter: blur(8px) brightness(80%);
}
</style>
