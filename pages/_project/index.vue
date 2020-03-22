<template lang="pug">
.container
    img.main-img(:src="jsondata[$route.params.project].main_img")
    .detail
        h1.detail__title {{jsondata[$route.params.project].title}}
        p.detail__msg {{jsondata[$route.params.project].msg_en}}
        p.detail__msg {{jsondata[$route.params.project].msg_jp}}

        iframe.detail__video(width="100%" height="60%" :src="jsondata[$route.params.project].video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        p.detail__desc {{jsondata[$route.params.project].desc_en}}
        p.detail__desc {{jsondata[$route.params.project].desc_jp}}

        .flex
            img.detail__pic(v-for="(url, index) in jsondata[$route.params.project].img" :key="index" :src="url")
                //- img(:src="url")

        a.detail__link(v-for="(link, index) in jsondata[$route.params.project].link" :key="index" :href="link" target="_blank" rel="noopener noreferrer") {{ link }}

        nuxt-link.detail__back-button.link-button(to="/") ←BACK

</template>
<script>
import jsonfile from '~/assets/projects.json';

export default {
    data(){
        return{
            jsondata: jsonfile,
        }
    },
    mounted(){
        this.$store.commit("updatePage","detail")
    }
}
</script>

<style lang="stylus" scoped>
.container
    width 100vw
    padding-bottom 80px
    .main-img
        width 100%
        height 400px
        object-fit cover
    .detail
        width 80%
        margin 0 auto
        padding 16px
        // h1 
        //     text-align center
        &__title, &__msg, &__video
            text-align center
        &__desc
            padding 16px 
        .flex
            display flex
        &__pic
            width 50%
            height auto
            object-fit cover
            margin 0 16px
        &__link
            border 1px solid txt-color
            padding 16px
            margin 8px 0
            text-decoration none
            display block
        &__back-button
            text-align center
            display block

+sp()
    .container
        .detail
            width 100%
            &__pic
                width 100%
                margin 0
            .flex
                flex-direction column
            &__link
                margin 0

</style>