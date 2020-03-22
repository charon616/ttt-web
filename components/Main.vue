<template lang="pug">
  .ttt
    Artwork.artwork
    .message
      h1 Todai To Texas 2020
      p There are 6 Awesome Projects.
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      p \ Get more details about 
        span(style="font-weight: bold;") Todai To Texas 
        | /
      a.link-button(href="http://todaitotexas.com/" target="_blank") TTT WEB

</template>
<script>
import Artwork from "~/components/Artwork";

export default {
  components: {
    Artwork
  }
}
</script>

<style lang="stylus" scoped>
.ttt
  // background white
  color white
  height 100%
  width 100%
  text-align center
  margin 16px
  .artwork
    z-index -1
  .message
    width 80%
    margin 0 auto
    z-index 0
    h1 
      margin-bottom 32px

.gradient 
  color white
  position: absolute;
  width: 100px;
  height: 100px;
  left: -50px;
  top: -50px;
  background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.9) 100%);
  opacity: 1;
  transition: opacity 1s cubic-bezier(0.39, 0.575, 0.565, 1);
</style>