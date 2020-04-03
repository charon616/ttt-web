<template lang="pug">
.loading-page(v-if="loading")
  .spinner
  img(src="~assets/logo_bl.png")
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 999;
}

.spinner {
  position: fixed;
  top: 50%;
  left: 50%;

  width: 100px;
  height: 100px;
  margin: 200px auto;
  background-color: txt-color;
  border-radius: 100%;
  animation: sk-scaleout 1.0s infinite ease-in-out;
}

img{
  width: 200px;
  height: auto;
}
/* ローディングアニメーション */
@keyframes sk-scaleout {
  0% {
    transform: scale(0);
  } 100% {
    transform: scale(1.0);
    opacity: 0;
  }
}
</style>