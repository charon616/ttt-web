<template lang="pug">
kinesis-container.container
    .all
        nuxt-link(:to="{ name: 'project', params: { project:title } }" @click.native="animateOn")
            .box-outer
                kinesis-element(:strength="8" type="depth" v-if="$device.isDesktop").box-inner
                    img(:src="image" v-bind:key="title" data-swiper-parallax-scale="0.8")
                .box-inner(v-else)
                    img(:src="image" v-bind:key="title" data-swiper-parallax-scale="0.8")
                .color(v-bg="jsondata[title].color" v-bind:key="title" data-swiper-parallax-scale="0.8")
        .textarea
            h1.textarea__title(v-bind:key="title" data-swiper-parallax-x="-200" data-swiper-parallax-duration="500" v-html="jsondata[title].title")
            p.textarea__msg.textarea__msg-en(data-swiper-parallax-x="-200" data-swiper-parallax-duration="550" v-html="jsondata[title].msg_en")
            p.textarea__msg.textarea__msg-jp(data-swiper-parallax-x="-200" data-swiper-parallax-duration="600" v-html="jsondata[title].msg_jp")
            .textarea__button(data-swiper-parallax-x="-200" data-swiper-parallax-duration="650")
                nuxt-link.link-button(@click.native="animateOn" :to="{ name: 'project', params: { project:title } }") DETAIL


</template>
<script>
import jsonfile from '~/assets/projects.json';
import { KinesisContainer, KinesisElement } from 'vue-kinesis';

export default{
    props: ['title'],
    components: {
        KinesisContainer,
        KinesisElement
    },
    data() {
        return{
            jsondata: jsonfile, 
        }  
    },
    computed: {
        image: function(){
            return require("~/assets/project" + this.jsondata[this.title].main_img)
        }   
    },
    methods: {
        animateOn: function(){
            this.$store.commit("changeAnimateStatus");
        }
    }
}

</script>
<style scoped lang="stylus">
border = 8px

.container
    position relative
    color txt-color
    // backdrop-filter blur(8px) brightness(200%)
    .all
        width content-width
        height calc(86% * 0.9)
        margin 0 auto
        display flex
        align-items center
        justify-content center
        .box-outer
            z-index 0
            width 60%
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
    .container
        .all
            display block
            width 100%
            height 100%
            .box-outer
                width 100%
                height 60%
                padding 16px 80px
                margin-bottom 16px
                .box-inner
                    width 100%
                    height 100%
                    img
                        height 100%
                .color
                    width 'calc(100% - %s)' % 160px
                    height 'calc(100% - %s)' % 32px
                    left 'calc(80px + %s)' % 16px
                    top 'calc(16px + %s)' % 16px
            .textarea
                height 'calc(40% - %s)' % 16px
                width 100%
                padding 0 80px
                text-align center
                line-height initial
                &__title
                    letter-spacing 0
                    font-size 2rem
                    display none
                &__msg
                    letter-spacing 0
                    text-align center
                    font-size 16px
                &__msg-en
                    font-weight 800
                    margin 8px 0 0 0
                    font-family: aktiv-grotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                &__msg-jp
                    margin 8px 0 

+sp()
    .container
        .all
            .box-outer
                padding 0 32px
                height 40%
                .color
                    width 'calc(100% - %s)' % 64px
                    height 100%
                    left 'calc(32px + %s)' % 16px
                    top 16px
            .textarea
                padding 32px
                height 60%
                &__msg-en
                    margin 0
                &__msg-jp
                    margin 4px 0


</style>
