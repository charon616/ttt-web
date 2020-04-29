<template lang="pug">
.container
    picture
        source.main-img(media="(max-width: 480px)" :srcset="spimage")
        source.main-img(media="(max-width: 1024px)" :srcset="tbimage")
        img.main-img(:src="image" alt="main-img")
    .detail
        h1.detail__title
            span(:class = "whichProject") {{info.title}}
        .detail__msg-wrapper
            p.detail__msg(v-html="info.msg_en")
            p.detail__msg(lang="ja" v-html="info.msg_jp")

        //- video on PC and tablet
        .detail__videobutton.link-button#link-button(v-on:click = "vbuttonClicked" v-if="videotrue") VIDEO

        .detail__modal-wrapper#modal-wrapper(v-on:click = "modalClicked" v-if="active")
            youtube(:video-id="info.videoID")

        //- video on mobile
        .detail__video(v-if="videotrue")
            iframe(width="100%" height="100%" :src="info.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        .detail__desc-wrapper
            p.detail__desc(v-html="info.desc_en")
            p.detail__desc(lang="ja" v-html="info.desc_jp")
        
        h3.detail__picheader Gallery
        .detail__picwrapper
            picture(v-for="(url, index) in galleryImagepc" :key="index")
                source(:srcset="`${webpGalleryImagetb[index]} 1024w, ${webpGalleryImagepc[index]}`" type="image/webp")
                img.detail__pic(:src="url" :srcset="`${galleryImagetb[index]} 1024w, ${galleryImagepc[index]}`" alt="detail-img")

        a.detail__link.link-button(v-for="(link, index) in info.link" :key="index" :href="link" target="_blank" rel="noopener noreferrer") VISIT WEBSITE

        nuxt-link.detail__back-button(@click.native="animateOn(true)" to="/") ← BACK TO TOP

</template>
<script>
import jsonfile from '~/assets/projects.json';
import { mapMutations } from "vuex";

export default {
    data(){
        return{
            active: false,
            videotrue: false,
            info: jsonfile[this.$route.params.project],
        }
    },
    computed: {
        image: function(){
            return require("~/assets/project/detail/top-pc" + this.info.main_img)
        },
        tbimage: function(){
            return require("~/assets/project/detail/top-tb" + this.info.main_img)
        },
        spimage: function(){
            return require("~/assets/project/detail/top-sp" + this.info.main_img)
        },
        galleryImagepc: function(){
            var array = new Array(this.info.img.length);
            for(let i=0; i< this.info.img.length; i++){
                array[i] = require("~/assets/project/detail" + this.info.img[i])
            }
            return array
        },
        galleryImagetb: function(){
            var array = new Array(this.info.img.length);
            for(let i=0; i< this.info.img.length; i++){
                let name = this.baseName(this.info.img[i])
                array[i] = require("~/assets/project/detail/tb" + this.info.img[i])
            }
            return array
        },
        webpGalleryImagepc: function(){
            var array = new Array(this.info.img.length);
            for(let i=0; i<this.info.img.length; i++){
                let name = this.baseName(this.info.img[i])
                array[i] = require("~/assets/project/detail/" + name + ".webp")
            }
            return array
        },
        webpGalleryImagetb: function(){
            var array = new Array(this.info.img.length);
            for(let i=0; i<this.info.img.length; i++){
                let name = this.baseName(this.info.img[i])
                array[i] = require("~/assets/project/detail/tb/" + name + ".webp")
            }
            return array
        },
        whichProject: function(){
            return this.info.title
        }
    },
    created(){
        this.updatePage("detail")
    },
    mounted(){
        this.checkvideo()
        this.$nextTick(() => {
            setTimeout(() => this.animateOn(false), 500)
        });
    },

    methods:{
        ...mapMutations({
            animateOn: "changeAnimateStatus",
            updatePage: "updatePage"
        }),
        vbuttonClicked: function(){
            this.active = true;
        },
        modalClicked: function(){
            this.active = false;
        },
        checkvideo: function(){
            if (this.info.video){
                this.videotrue = true;
            }
        },
        baseName: function(str){
            var base = new String(str).substring(str.lastIndexOf('/') + 1); 
            if(base.lastIndexOf(".") != -1)       
                base = base.substring(0, base.lastIndexOf("."));
            return base;
        }
    },

    head() {
        return {
            title: "TodaiToTexas2020 " + this.info.title,
            meta: [
                { hid: 'og:title', property: 'og:title', content: 'TodaiToTexas2020' + this.info.title }
            ]
        }
    }
}

</script>

<style lang="stylus" scoped>
.container
    width 100%
    padding-bottom 80px
    background #F0F0F0
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
            font-size 64px
            margin-top 16px
            letter-spacing .08em
            margin-bottom 48px
            line-height 64px
            position relative

        &__msg
            background bg-color
            font-size 16px
            margin-bottom 24px
            line-height 30px

            &-wrapper  
                margin-bottom 48px
        &__videobutton
            text-align center
            display block
            width 240px
            margin 48px auto 32px
            cursor pointer
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
            margin-bottom 24px
            letter-spacing .1em
            line-height 24px
            background bg-color
            &-wrapper
                margin-bottom 48px
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
    .HarvestX
        background: linear-gradient(transparent 60%, colors[0] 60%);
    .Grubin
        background: linear-gradient(transparent 60%, colors[1] 60%);
    .Syrinx
        background: linear-gradient(transparent 60%, colors[2] 60%);
    .GenKan
        background: linear-gradient(transparent 60%, colors[3] 60%);
    .ROBOXER
        background: linear-gradient(transparent 60%, colors[4] 60%);
    .wearbo
        background: linear-gradient(transparent 60%, colors[5] 60%);
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
        .main-img
            height 240px
        .detail
            width 100%
            padding 16px 24px
            &__title
                font-size 40px;
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