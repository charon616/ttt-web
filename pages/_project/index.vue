<template lang="pug">
.container
    img.main-img(:src="image")
    .detail
        h1.detail__title {{jsondata[$route.params.project].title}}
        p.detail__msg(v-html="jsondata[$route.params.project].msg_en")
        p.detail__msg(v-html="jsondata[$route.params.project].msg_jp")


        //- video on PC and tablet
        .detail__videobutton.link-button#link-button(v-on:click = "vbuttonClicked" v-if="videotrue") VIDEO

        .detail__modal-wrapper#modal-wrapper(v-on:click = "modalClicked" v-if="active")
            youtube(:video-id="jsondata[$route.params.project].videoID")

        //- video on mobile
        .detail__video(v-if="videotrue")
            iframe(width="100%" height="100%" :src="jsondata[$route.params.project].video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        p.detail__desc(v-html="jsondata[$route.params.project].desc_en")
        p.detail__desc(v-html="jsondata[$route.params.project].desc_jp")
        
        h3.detail__picheader Gallery
        .detail__picwrapper

            img.detail__pic(v-for="(url, index) in jsondata[$route.params.project].img" :key="index" :src="url")
                //- img(:src="url")

        a.detail__link.link-button(v-for="(link, index) in jsondata[$route.params.project].link" :key="index" :href="link" target="_blank" rel="noopener noreferrer") VISIT WEBSITE

        nuxt-link.detail__back-button(@click.native="animateOn" to="/") ← BACK TO TOP

</template>
<script>
import jsonfile from '~/assets/projects.json';

export default {
    data(){
        return{
            jsondata: jsonfile,
            active: false,
            videotrue: false,
        }
    },
    computed: {
        image: function(){
            return require("~/assets/project/detail" + this.jsondata[this.$route.params.project].main_img)
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
        },
        animateOn: function(){
            this.$store.commit("changeAnimateStatus");
        }
    } 
}

</script>

<style lang="stylus" scoped>
.container
    width 100%
    padding-bottom 80px
    background bg-color
    .main-img
        width 100%
        height 320px
        object-fit cover
        text-align center
    .detail
        width 80%
        max-width 960px
        margin 0 auto
        padding 16px
        // h1 
        //     text-align center
        &__title, &__msg, &__video
            text-align center
        &__title
            font-size 40px
            margin-top 16px
            letter-spacing .05em
            margin-bottom 32px
            line-height 40px
        &__msg
            font-size 16px
            margin-bottom 24px
            line-height 30px
        &__videobutton
            text-align center
            display block
            width 240px
            margin 48px auto 32px
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
            letter-spacing .1em
            line-height 24px
        &__picheader
            text-align center
            margin 24px 0 32px
            letter-spacing .05em
        &__picwrapper
            display grid
            grid-template-columns 1fr 1fr
            column-gap 48px
            row-gap 48px
        &__pic
            padding 32px
            width 100%
            object-fit contain
        &__link
            text-align center
            display block
            width 240px
            margin 48px auto 0
        &__back-button
            transition all .4s main-transition
            margin-top 32px
            text-align center
            display block
            color txt-color
            text-text-decoration none
            font-weight bold
            font-size 1.2em
            letter-spacing .1em

            &:hover
                color lightgray
                letter-spacing .15em

+tb()
    .container
        .detail
            width 90%
            max-width 700px
            &__picwrapper
                gap 32px
            &__pic
                padding 0

+sp()
    .container
        .detail
            width 100%
            padding 16px 24px
            &__pic
                width 100%
                margin 0
            &__picwrapper
                grid-template-columns 1fr
            // &__link
            //     margin 0 auto
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