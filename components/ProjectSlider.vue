<template lang="pug">
kinesis-container.container
    .box-outer
        kinesis-element(:strength="5" type="depth").box-inner
            img(:src="jsondata[title].main_img" v-bind:key="title" data-swiper-parallax-scale="0.8")

        .box-inner.color(v-bg="jsondata[title].color" v-bind:key="title" data-swiper-parallax-scale="0.8")
            .clip    

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
txt-color = white

.container
    display flex
    position relative
    
    +sp()
        flex-direction column
    .box-outer
        display flex
        position absolute
        left 0 
        top 0
        width 100%
        height 100%
        z-index 0

        .box-inner
            margin 6% 10% 
            width 45%
            height 55%
            position relative
            z-index 1
            overflow hidden
            clip-path polygon(0 5%, 100% 0, 100% 95%, 0% 100%)
            img
                width 100%
                height auto
                object-fit cover
            &:nth-child(2)
                position absolute
                margin-left 45%
                z-index 0
                background txt-color
                opacity .6
                // clip-path: polygon(0 5%, 0% 100%, 3% 97%, 3% 8%, 97% 3%, 97% 92%, 3% 97%, 0 100%, 100% 95%, 100% 0%);
                // border 4px solid txt-color
                // .clip
                //     width 100%
                //     height 100%
                //     clip-path polygon(4px calc(5% + 4px), calc(100% - 4px) 4px, calc(100% - 4px) calc(95% - 4px), 4px calc(100% - 4px))
        +tb()
            .box-inner
                width 100%
                height 100%
                margin 0 10%
                &:nth-child(1)
                    height 60%
                img
                    width 100%
                    height 100%
                    overflow hidden
                &:nth-child(2)
                    height 60%
                    width 80%
                    margin 0 10% 0 10%
                    transform translateX(16px) translateY(16px) 
    .textarea
        z-index 1
        width 45%
        margin-left 55%
        padding 140px 180px 40px 40px

        &__title, &__msg
            color txt-color
        &__title
            font-weight 800
            font-size 2.4rem
            letter-spacing .1rem
        &__msg
            font-weight 400
            font-size 1.2rem
            line-height 1.4em
            letter-spacing .1em
            // text-align: justify;
        &__msg-en
            margin 16px 0 0 0
        &__msg-jp
            margin 12px 0 4px 0
            font-size 1rem
        +tb()
            // background pink
            width 100%
            height 100%
            text-align center
            padding 0 20%
            margin 100% 0 0 0
            padding 0 6%
            &__title
                margin-top 0%
                color black
                font-size 1.8rem
            &__msg
                color black
                font-size .9rem
                letter-spacing 0
            &__msg-en
                margin 0
            &__msg-jp
                display none
            &__button
                transform scale(0.8)

</style>
