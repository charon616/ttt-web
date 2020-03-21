<template lang="pug">
.container
    .box-outer
        .box-inner
            img(:src="jsondata[title].main_img" v-bind:key="title" data-swiper-parallax-scale="0.1")

        //- .box-inner.color(v-bg="jsondata[title].color" v-bind:key="title")
        .box-inner.color(v-border="jsondata[title].color" v-bind:key="title")

    .textarea
        h1.textarea__title(v-bind:key="title" style="background: rgba(0, 0, 0, 0)" data-swiper-parallax-x="-200" data-swiper-parallax-duration="500") {{jsondata[title].title}}
        p.textarea__msg.textarea__msg-en(data-swiper-parallax-x="-200" data-swiper-parallax-duration="550") {{jsondata[title].msg_en}}
        p.textarea__msg.textarea__msg-jp(data-swiper-parallax-x="-200" data-swiper-parallax-duration="600") {{jsondata[title].msg_jp}}

        .textarea__button(data-swiper-parallax-x="-200" data-swiper-parallax-duration="650")
            slot(name="detail")

</template>
<script>
import jsonfile from '~/assets/projects.json';

export default{
    props: ['title'],
    data() {
        return{
            jsondata: jsonfile, 
        }  
    }
}

</script>
<style scoped lang="stylus">
.container
    background bg-color
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
            margin 6% 8% 
            width 50%
            height 60%
            transform skewY(-5deg)
            position relative
            z-index 1
            overflow hidden
            img
                width 100%
                height auto
                object-fit cover
                transform skewY(5deg) scale(1.2)
            &:nth-child(2)
                position absolute
                margin-left 40%
                z-index 0
                border 4px solid txt-color
            +tb()
                width 80%
                height 80%
                img
                    height 100%
                    width auto
                &:nth-child(2)
                    margin-left 14%
                    margin-top 10%

    .textarea
        z-index 1
        width 42%
        margin-left 58%
        padding 140px 180px 40px 40px
        // background blue

        &__title, &__msg
            color txt-color
        &__title
            font-weight 800
            font-size 2.4rem
            letter-spacing .1rem
        &__msg
            font-weight 400
            font-size 1.2rem
            // text-align: justify;
        &__msg-en
            margin 16px 0 0 0
        &__msg-jp
            margin 12px 0 8px 0
            font-size 1rem
            margin-bottom 30px
        &__button
            margin 36px 0
        +tb()
            width 100%
            height 24%
            margin 80% 0 0 0
            text-align center
            &__title
                color txt-color
                font-size 1.6rem
            &__msg
                color txt-color
                font-size .8rem
            &__msg-jp
                display none

</style>
