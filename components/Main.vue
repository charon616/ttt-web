<template lang="pug">
  .ttt
    //- Artwork 
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
  height 90%
  width 100%
  text-align center
  margin 16px
  .message
    width 80%
    margin 0 auto
    h1 
      margin-bottom 32px
</style>