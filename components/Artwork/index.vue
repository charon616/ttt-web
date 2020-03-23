<template>
  <section class="artwork">
    <canvas class="artwork__canvas" ref="canvas"></canvas>
    <div v-if="this.$store.state.swiperPos == 0" class="lighting" id="lighting" ref="lighting"></div>
  </section>
</template>

<script>
import ArtworkGL from "./js/ArtworkGL";
import { mapState } from 'vuex';
export default {
  name: 'artwork',
  components: {},
  props: [],
  data () {
    // 基本的にはここにthree.jsのオブジェクトを追加しない。
    return {
    }
  },
  computed: mapState({
    page: state => state.page,
  }),
  watch: {
    page: function(newVal, oldVal){
      console.log(newVal)

      if(newVal == "index"){
        this.artworkGL.resume;
      }else{
        this.artworkGL.pause;
      }
    }
  },
  mounted () {
    // canvas要素を渡す。
    this.artworkGL = new ArtworkGL({
      $canvas: this.$refs.canvas
    });

    window.addEventListener('mousemove', e => {
      this.artworkGL.mouseMoved(e.clientX, e.clientY);
      let lighting = document.getElementById('lighting');
      lighting.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });

    window.addEventListener('resize', this.onResize);

  },
  destroyed() {
    // canvasを作ったり壊したりする前提の場合はここに処理停止する処理を書く（今回省略）。
  },
  methods: {
    // この中にthree.jsの処理をばりばり書かない。
    onResize: function() {
      this.artworkGL.changeSize(window.innerWidth, window.innerHeight, window.devicePixelRatio)
    }
  }
}
</script>

<style scoped lang="stylus">
/* スタイルなどお好みで　*/
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
  // background-image: -webkit-radial-gradient(#ddd, #333);
  // background-image: radial-gradient(#ddd, #333);

</style>