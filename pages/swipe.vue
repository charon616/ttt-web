<template>
  <div>
    <swiper :options="swiperOption" class="mySwiper" ref="mySwiper" @slide-change="slideChanged">
      <swiper-slide style="background: green;">
        <h1>スライド1</h1>  
      </swiper-slide>
      <swiper-slide style="background: orange;">
        <h1>スライド2</h1>  
      </swiper-slide>
      <swiper-slide style="background: blue;">
        <h1>スライド3</h1>  
      </swiper-slide>
      <swiper-slide style="background: red;">
        <h1>スライド4</h1>  
      </swiper-slide>
      <swiper-slide style="background: pink;">
        <h1>スライド5</h1>  
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </div>
</template>
<script>

export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        loop: true,
        loopedSlides: 7, // looped slides should be the same
        spaceBetween: 0,
        mousewheel: true,
        speed: 600,
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination'
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(2, 1000, false)
  },
  methods: {
    slideChanged: function() {
      console.log('slide changed')
      // console.log(self.selectedPos)
      // this.$store.commit("increment")
      // this.selectedProject = this.jsondata.projects_real_title[mySwiper.realIndex-1]
      // this.selectedPos = mySwiper.realIndex
    }
  }

}
</script>
<style scoped lang="stylus">
.mySwiper
  width 100vw
  height 90vh
  text-align center
</style>