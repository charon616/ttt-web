<template lang="pug">
  .ttt
    //- Artwork 
    .message
      h1 Todai To Texas
      p 米国時間3月6日の発表で、アメリカ合衆国テキサス州オースティンにて開催予定でしたSXSW（サウス・バイ・サウスウエスト）2020が、新型コロナウイルスの影響により正式に中止となりました。
      p これに伴い、Todai To Texas2020の出展も中止となりました。
      p SXSW公式サイト
      p オースティン市の公式サイト
      p 今後に関しまして、Todai To Texasとしては、別途、お披露目の場などを設けられるように只今検討しております。
      p 関係者の皆様には多大なご迷惑をお掛けいたしますが、ご理解賜りますようお願い申し上げます。

</template>
<script>
import Artwork from "~/components/Artwork";

export default {
  components: {
    Artwork
  }
}
</script>

<style lang="stylus" scoped>
.ttt
  background white
  height 90%
  width 100%
  text-align center
  margin 16px
  .message
    width 80%
    margin 0 auto
    h1 
      margin-bottom 32px
</style>