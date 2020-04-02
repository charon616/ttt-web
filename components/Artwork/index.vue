<template>
  <section class="artwork">
    <canvas class="artwork__canvas" ref="canvas" v-if="$device.isDesktop"></canvas>
    <div v-if="this.$store.state.swiperPos == 0 && $device.isDesktop" class="lighting" id="lighting" ref="lighting"></div>
  </section>
</template>

<script>
import ArtworkGL from "./js/ArtworkGL";
import { mapState } from 'vuex';
export default {
  name: 'artwork',
  components: {},
  props: [],
  computed: mapState({
    page: state => state.page,
  }),
  watch: {
    page: function(newVal, oldVal){
      if(newVal == "index"){
        this.artworkGL.resume;
      }else{
        this.artworkGL.pause;
      }
    }
  },
  mounted () {
    this.artworkGL = new ArtworkGL({
      $canvas: this.$refs.canvas
    });

    window.addEventListener('mousemove', e => {
      this.artworkGL.mouseMoved(e.clientX, e.clientY);
      if(this.$store.state.swiperPos != 0){
        return;
      }
      let lighting = document.getElementById('lighting');
      lighting.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });

    window.addEventListener('resize', this.onResize);

  },
  methods: {
    onResize: function() {
      this.artworkGL.changeSize(window.innerWidth, window.innerHeight, window.devicePixelRatio)
    }
  }
}
</script>

<style scoped lang="stylus">
.artwork
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  z-index -1
  // +tb()
  //   background linear-gradient(45deg, #00a460, #e45441, #00a7f1, #f4c550)
  //   background-size 800% 800%
  //   animation gradation 15s ease infinite
  &__canvas
    z-index -2

.lighting
  z-index 1
  width 240px
  height 240px
  background bg-color
  position fixed
  left -120px
  top -120px
  border-radius 50%
  background radial-gradient(rgba(255, 255, 255, 1), rgba(0, 0, 0, 0));
  mix-blend-mode overlay
  filter blur(16px)

// @keyframes gradation {
//   0%{background-position:0% 50%}
//   50%{background-position:100% 50%}
//   100%{background-position:0% 50%}
// }

</style>