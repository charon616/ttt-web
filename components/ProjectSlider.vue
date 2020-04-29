<template lang="pug">
kinesis-container.slider-container
    .all
        nuxt-link.box(:to="{ name: 'project', params: { project:title } }" @click.native="changeAnimateStatus(true)")
            .box-outer
                kinesis-element(:strength="8" type="depth" v-if="$device.isDesktop").box-inner
                    picture
                        source(:srcset="webpimage" type="image/webp")
                        img(:src="image" :key="title" data-swiper-parallax-scale="0.8" :alt="info.main_img")
                .box-inner(v-else)
                    picture
                        source(:srcset="webpimage" type="image/webp" data-swiper-parallax-scale="0.8")
                        img(:src="image" :key="title" data-swiper-parallax-scale="0.8" :alt="info.main_img")

                .color(v-bg="info.color" v-bind:key="title" data-swiper-parallax-scale="0.8")
        .textarea
            h1.textarea__title(:key="title" data-swiper-parallax-x="-200" data-swiper-parallax-duration="500" v-html="info.title")
            p.textarea__msg.textarea__msg-en(data-swiper-parallax-x="-200" data-swiper-parallax-duration="550" v-html="info.msg_en")
            p.textarea__msg.textarea__msg-jp(lang="ja" data-swiper-parallax-x="-200" data-swiper-parallax-duration="600" v-html="info.msg_jp")
            .textarea__button(data-swiper-parallax-x="-200" data-swiper-parallax-duration="650")
                nuxt-link.link-button(@click.native="changeAnimateStatus(true)" :to="{ name: 'project', params: { project:title } }") DETAIL
</template>
<script>
import jsonfile from '~/assets/projects.json';
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import { mapMutations } from 'vuex';

export default{
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
        image: function(){
            return require("~/assets/project" + this.info.main_img)
        },  
        webpimage: function(){
            return require("~/assets/project/webp/" + this.title + ".webp")
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
