<template lang="pug">
header.menu
  nuxt-link.menu__logo(to="/")
    img(src="~assets/logo0.svg")
  .menu__sns
    font-awesome-icon.icon(:icon="['fab', 'facebook']")
    font-awesome-icon.icon(:icon="['fab', 'twitter']")

</template>

<script>
import jsonfile from '~/assets/projects.json';

export default {
  asyncData () {
    return{
      jsondata: jsonfile,
    }
  }
}

</script>

<style scoped lang="stylus">
.menu
  background white
  &__logo
    position fixed
    top 0
    left 0
    z-index 100
    // padding 20px
    background white
    img
      width 120px
      height auto
      +sp()
        width 96px
  &__sns
    z-index 100
    position fixed
    top 0
    right 0
    padding 20px
    background white
    .icon 
      margin 8px
</style>
