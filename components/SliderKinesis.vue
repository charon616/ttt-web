<template lang="pug">
kinesis-container.container
    .all
        .box-outer
            kinesis-element(:strength="5" type="depth").box-inner
                img(:src="jsondata[title].main_img" v-bind:key="title" data-swiper-parallax-scale="0.8")
            .color(v-bg="jsondata[title].color" v-bind:key="title" data-swiper-parallax-scale="0.8")
        .textarea
            kinesis-element(:strength="6" type="depth")
                h1.textarea__title(v-bind:key="title" style="background: rgba(0, 0, 0, 0)" data-swiper-parallax-x="-200" data-swiper-parallax-duration="500") {{jsondata[title].title}}
            kinesis-element(:strength="4" type="depth")
                p.textarea__msg.textarea__msg-en(data-swiper-parallax-x="-200" data-swiper-parallax-duration="550") {{jsondata[title].msg_en}}
            kinesis-element(:strength="4" type="depth")
                p.textarea__msg.textarea__msg-jp(data-swiper-parallax-x="-200" data-swiper-parallax-duration="600") {{jsondata[title].msg_jp}}
            
            kinesis-element(:strength="5" type="depth")
                .textarea__button(data-swiper-parallax-x="-200" data-swiper-parallax-duration="650")
                    slot(name="detail")


        //- .box-outer
        //-     .box-inner
        //-         img(:src="jsondata[title].main_img" v-bind:key="title" data-swiper-parallax-scale="0.8")
        //-     .color(v-bg="jsondata[title].color" v-bind:key="title" data-swiper-parallax-scale="0.8")
        //- .textarea
        //-     h1.textarea__title(v-bind:key="title" style="background: rgba(0, 0, 0, 0)" data-swiper-parallax-x="-200" data-swiper-parallax-duration="500") {{jsondata[title].title}}
        //-         p.textarea__msg.textarea__msg-en(data-swiper-parallax-x="-200" data-swiper-parallax-duration="550") {{jsondata[title].msg_en}}
        //-         p.textarea__msg.textarea__msg-jp(data-swiper-parallax-x="-200" data-swiper-parallax-duration="600") {{jsondata[title].msg_jp}}
            
        //-         .textarea__button(data-swiper-parallax-x="-200" data-swiper-parallax-duration="650")
        //-             slot(name="detail")


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
    }
}

</script>
<style scoped lang="stylus">
border = 8px

.container
    position relative
    color txt-color
    .all
        width content-width
        height calc(86% * 0.9)
        margin 0 auto
        display flex
        align-items center
        justify-content center
        +tb()
            display block
            width 100%
            height 100%
        .box-outer
            z-index 0
            width 60%
            position relative
            z-index -1
            +tb()
                width 100%
                height 67%
                padding 16px 80px
            +sp()
                padding 0 32px
                height 50%
            .box-inner
                width 'calc(%s * 0.6)' % content-width
                height 'calc(%s * 0.6 * 0.67)' % content-width
                z-index 1
                clip-path polygon(0 5%, 100% 0, 100% 95%, 0% 100%)
                +tb()
                    width 100%
                    height 100%
                img
                    width 100%
                    height auto
                    object-fit cover
                    +tb()
                        height 100%
            .color
                width 'calc(%s * 0.6)' % content-width
                height 'calc(%s * 0.6 * 0.67)' % content-width
                z-index 1
                position absolute
                top 0 
                left 'calc(%s * 0.4)' % content-width
                z-index -1
                background txt-color
                clip-path polygon(0 5%, 0% 100%, border 'calc(100% - %s)' % border, border 'calc(5% + %s)' % border, 'calc(100% - %s)' % border border, 'calc(100% - %s)' % border 'calc(95% - %s)' % border, border 'calc(100% - %s)' % border, 0 100%, 100% 95%, 100% 0)
                +tb()
                    width 'calc(100% - %s)' % 160px
                    height 'calc(100% - %s)' % 32px
                    left 'calc(80px + %s)' % 16px
                    top 'calc(16px + %s)' % 16px
                    // opacity .2
                +sp()
                    width 'calc(100% - %s)' % 64px
                    height 100%
                    left 'calc(32px + %s)' % 16px
                    top 16px
                    
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
                height 33%
                width 100%
                padding 0 80px
                text-align center
                line-height initial
                &__title
                    letter-spacing 0
                    font-size 2rem
                &__msg
                    letter-spacing 0
                    text-align center
                    font-size .9rem
                    line-height 1.2rem
                &__msg-en
                    margin 8px 0 0 0
                &__msg-jp
                    margin 8px 0 
            +sp()
                padding 32px
                height 50%
                &__msg-en
                    margin 0
                &__msg-jp
                    margin 4px 0 
                &__button
                    transform scale(0.8)


</style>
