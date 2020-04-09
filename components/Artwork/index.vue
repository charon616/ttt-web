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

    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('resize', this.onResize);

  },
  methods: {
    onResize: function() {
      this.artworkGL.changeSize(window.innerWidth, window.innerHeight, window.devicePixelRatio)
    },
    onMouseMove: function(e){
      this.artworkGL.mouseMoved(e.clientX, e.clientY);
      if(this.$store.state.swiperPos != 0){
        return;
      }
      let lighting = document.getElementById('lighting');
      lighting.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    }
  },
  destroyed() {
    window.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('resize', this.onResize)
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

</style>