<template lang="pug">
.container
    img.main-img(:src="jsondata[$route.params.project].main_img")
    .detail
        h1.detail__title {{jsondata[$route.params.project].title}}
        p.detail__msg {{jsondata[$route.params.project].msg_en}}
        p.detail__msg {{jsondata[$route.params.project].msg_jp}}


        //- video on PC and tablet
        .detail__videobutton.link-button#link-button(v-on:click = "vbuttonClicked" v-if="videotrue") VIDEO

        .detail__modal-wrapper#modal-wrapper(v-on:click = "modalClicked" v-if="active")
            youtube(:video-id="jsondata[$route.params.project].videoID")

        //- video on mobile
        .detail__video(v-if="videotrue")
            iframe(width="100%" height="100%" :src="jsondata[$route.params.project].video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        p.detail__desc {{jsondata[$route.params.project].desc_en}}
        p.detail__desc {{jsondata[$route.params.project].desc_jp}}

        .detail__picwrapper
            img.detail__pic(v-for="(url, index) in jsondata[$route.params.project].img" :key="index" :src="url")
                //- img(:src="url")

        a.detail__link.link-button-wh(v-for="(link, index) in jsondata[$route.params.project].link" :key="index" :href="link" target="_blank" rel="noopener noreferrer") VISIT WEBSITE

        nuxt-link.detail__back-button.link-button(to="/") ←BACK

</template>
<script>
import jsonfile from '~/assets/projects.json';

export default {
    data(){
        return{
            jsondata: jsonfile,
            active: false,
            videotrue: false,
            videoId: 'cB7Il-HaLpY'
        }
    },
    mounted(){
        this.$store.commit("updatePage","detail")
        this.checkvideo()
    },

    methods:{
        vbuttonClicked: function(){
            this.active = true;
        },
        modalClicked: function(){
            this.active = false;
        },
        checkvideo: function(){
            if (this.jsondata[this.$route.params.project].video){
                this.videotrue = true;
            }
        }
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
        &__videobutton
            display block
            text-align center

        &__modal
            &-wrapper
                display flex
                position fixed
                z-index 1
                left 0
                top 0
                height 100vh
                width 100vw
                overflow auto
                background-color rgba(0 0 0 0.7)
                align-items center
                justify-content center

            &-video
                display block
                position relative
                width 70vw
                margin 24px 0
                padding calc( 100vw * 0.7 * 9 / 16 ) 0 0
                iframe
                    position absolute
                    top 0
                    left 0
                    width 100%
                    height 100%
        
        &__video
            display none
        &__desc
            padding 16px 0 
        &__picwrapper
            display flex
            justify-content space-between
        &__pic
            width 48%
            height auto
            object-fit cover
        &__link
            text-align center
            border 3px solid txt-color
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
            &__picwrapper
                flex-direction column
            &__pic
                margin-bottom 16px
            &__link
                margin 0
            &__videobutton
                display none
            &__video
                display block
                position relative
                width 100%
                margin 24px 0
                padding calc( (100vw - 32px) * 9 / 16 ) 0 0
                iframe
                    position absolute
                    top 0
                    left 0
                    width 100%
                    height 100%

</style>