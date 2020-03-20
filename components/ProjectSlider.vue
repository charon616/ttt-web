<template lang="pug">
.container
    .box-outer
        //- transition-group(name="fade" mode="out-in")
        .box-inner
            img(:src="jsondata[title].main_img" v-bind:key="title" data-swiper-parallax-scale="0.1")

        .box-inner.color(v-bg="jsondata[title].color" v-bind:key="title")

    .textarea(data-swiper-parallax-y="-50")
        transition(name="custom-classes-transition" enter-active-class="animated slideInUp" leave-active-class="animated slideOutUp" mode="out-in")
            h1.textarea__title(v-bind:key="title" style="background: rgba(0, 0, 0, 0)") {{jsondata[title].title}}
        p.textarea__msg.textarea__msg-en {{jsondata[title].msg_en}}
        p.textarea__msg.textarea__msg-jp {{jsondata[title].msg_jp}}

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
    display flex
    background bg-color
    width 100vw
    height 100vh
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
            margin 8% 
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
                background pink
                position absolute
                margin-left 40%
                z-index 0
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
        width 50%
        margin 80px 80px 80px 50%
        padding 80px 40px
        &__title, &__msg
            color white
        +tb()
            width 100%
            height 24%
            margin 80% 0 0 0
            text-align center
            &__title
                color txt-color
                font-size 1.6em
            &__msg
                color txt-color
                font-size .8em
            &__msg-jp
                display none

</style>
