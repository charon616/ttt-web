<template lang="pug">
kinesis-container.slider-container
    .all
        nuxt-link.box(:to="{ name: 'project', params: { project:title } }" @click.native="changeAnimateStatus(true)" aria-label="go to detail")
            .box-outer
                kinesis-element(:strength="8" type="depth" v-if="$device.isDesktop").box-inner
                    picture
                        source(:data-srcset="`${webpimage1x} 1x, ${webpimage2x} 2x`" type="image/webp")
                        img.swiper-lazy(:data-src="image1x" :data-srcset="`${image1x} 1x, ${image2x} 2x`" :key="title" data-swiper-parallax-scale="0.8" alt="")
                        .custom-swiper-lazy-preloader
                            .sk-cube-grid
                                .sk-cube.sk-cube1
                                .sk-cube.sk-cube2
                                .sk-cube.sk-cube3
                                .sk-cube.sk-cube4
                                .sk-cube.sk-cube5
                                .sk-cube.sk-cube6
                                .sk-cube.sk-cube7
                                .sk-cube.sk-cube8
                                .sk-cube.sk-cube9
                .box-inner(v-else)
                    picture
                        source(:data-srcset="`${webpimage1x} 1x, ${webpimage2x} 2x`" type="image/webp")
                        img.swiper-lazy(:data-src="image1x" :data-srcset="`${image1x} 1x, ${image2x} 2x`" :key="title" data-swiper-parallax-scale="0.8" alt="")
                        .custom-swiper-lazy-preloader
                            .sk-cube-grid
                                .sk-cube.sk-cube1
                                .sk-cube.sk-cube2
                                .sk-cube.sk-cube3
                                .sk-cube.sk-cube4
                                .sk-cube.sk-cube5
                                .sk-cube.sk-cube6
                                .sk-cube.sk-cube7
                                .sk-cube.sk-cube8
                                .sk-cube.sk-cube9

                .color(v-bg="info.color" v-bind:key="title" data-swiper-parallax-scale="0.8")
        .textarea
            h1.textarea__title(:key="title" data-swiper-parallax-x="-200" data-swiper-parallax-duration="500" v-html="info.title")
            p.textarea__msg.textarea__msg-en(data-swiper-parallax-x="-200" data-swiper-parallax-duration="550" v-html="info.msg_en")
            p.textarea__msg.textarea__msg-jp(lang="ja" data-swiper-parallax-x="-200" data-swiper-parallax-duration="600" v-html="info.msg_jp")
            .textarea__button(data-swiper-parallax-x="-200" data-swiper-parallax-duration="650")
                nuxt-link.link-button(@click.native="changeAnimateStatus(true)" :to="{ name: 'project', params: { project:title } }" aria-label="go to detail") DETAIL
</template>
<script>
import jsonfile from '~/assets/projects.json';
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import { mapMutations } from 'vuex';

export default{
    name: "ProjectSlider",
    props: ['title'],
    components: {
        KinesisContainer,
        KinesisElement
    },
    data() {
        return{
            info: jsonfile[this.title]
        }  
    },
    computed: {
        image1x: function(){
            return require("~/assets/project/1x" + this.info.main_img)
        },  
        image2x: function(){
            return require("~/assets/project/2x" + this.info.main_img)
        },  
        webpimage1x: function(){
            return require("~/assets/project/1x/" + this.title + ".webp")
        },
        webpimage2x: function(){
            return require("~/assets/project/2x/" + this.title + ".webp")
        }
    },
    methods: {
        ...mapMutations(["changeAnimateStatus"])
    }
}

</script>
<style scoped lang="stylus">
border = 8px

.slider-container
    position relative
    color txt-color
    height 100%
    {flex-center}
    .all
        width content-width
        margin 0 auto
        {flex-center}
        .box
            width 60%
            .box-outer
                width 100%
                position relative
                z-index -1
                .box-inner
                    width 'calc(%s * 0.6)' % content-width
                    height 'calc(%s * 0.6 * 0.67)' % content-width
                    z-index 1
                    clip-path polygon(0 5%, 100% 0, 100% 95%, 0% 100%)
                    img
                        width 100%
                        height auto
                        object-fit cover
                .color
                    width 'calc(%s * 0.6)' % content-width
                    height 'calc(%s * 0.6 * 0.67)' % content-width
                    z-index 1
                    position absolute
                    top 0 
                    left 'calc(%s * 0.4)' % content-width
                    z-index -1
                    clip-path polygon(0 5%, 0% 100%, border 'calc(100% - %s)' % border, border 'calc(5% + %s)' % border, 'calc(100% - %s)' % border border, 'calc(100% - %s)' % border 'calc(95% - %s)' % border, border 'calc(100% - %s)' % border, 0 100%, 100% 95%, 100% 0)  
        .textarea
            z-index 1
            width 40%
            padding 32px 40px 32px 32px
            &__title
                font-weight 800
                font-size 2.6rem
                letter-spacing .1rem
            &__msg
                letter-spacing .05rem
                text-align justify
            &__msg-en
                margin 20px 0 0 0
            &__msg-jp
                margin 12px 0 4px 0

.custom-swiper-lazy-preloader
    background black
    width 100%
    height 100%
    {flex-center}

.sk-cube-grid 
    width 40px
    height 40px
    margin 100px auto
    .sk-cube 
        width 33%
        height 33%
        background-color white
        float left
        animation sk-cubeGridScaleDelay 1.3s infinite ease-in-out

    .sk-cube1 
        animation-delay 0.2s
    .sk-cube2
        animation-delay 0.3s
    .sk-cube3
        animation-delay 0.4s
    .sk-cube4
        animation-delay 0.1s
    .sk-cube5
        animation-delay 0.2s
    .sk-cube6
        animation-delay 0.3s
    .sk-cube7
        animation-delay 0s
    .sk-cube8
        animation-delay 0.1s
    .sk-cube9
        animation-delay 0.2s

@keyframes sk-cubeGridScaleDelay 
    0%, 70%, 100% 
        transform scale3D(1, 1, 1)
    35% 
        transform scale3D(0, 0, 1)

+tb()
    .slider-container
        .all
            display block
            width 100%
            height 100%
            .box
                .box-outer
                    width 100%
                    height 74%
                    padding 8px 80px 24px
                    .box-inner
                        width 100%
                        height 100%
                        img
                            height 100%
                    .color
                        width calc(100% - 160px)
                        height calc(100% - 32px)
                        left 96px
                        top 24px
            .textarea
                height 26%
                width 100%
                margin 0 
                padding 0 24px 32px 24px
                text-align center
                line-height initial
                position relative
                {flex-center}
                flex-flow column nowrap
                &__title
                    display none
                &__msg
                    letter-spacing 0
                    text-align center
                    font-size 16px
                    margin 0
                &__msg-en
                    font-weight 800
                    font-family aktiv-grotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
                    padding 0
                    margin 0
                &__msg-jp
                    margin 8px 0 

+sp()
    .slider-container
        .all
            .box
                .box-outer
                    padding 16px 32px 8px
                    height 52%
                    .color
                        width calc(100% - 64px)
                        height calc(100% - 16px)
                        left 48px
                        top 24px
            .textarea
                height 48%
                &__msg-en
                    margin 0
                &__msg-jp
                    margin 4px 0
                &__button
                    .link-button
                        font-size 1em
                        margin-top 8px
</style>
