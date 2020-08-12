<template>
  <div class="banner" @click="handleBannerClick">
    <img :src="bannerImg" class="banner-img">
    <div class="banner-info">
      <div class="banner-title">{{this.sightName}})</div>
      <div class="banner-number"><span class="iconfont icontupian1 banner-icon"></span>
        {{this.bannerImgs.length}}</div>
    </div>
    <fade-animation>
      <!-- common-gallery 作为插芯，插入到fade-animation组件中 -->
      <common-gallery :imgs="bannerImgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      imgs: [],
      showGallery: false
    }
  },
  methods: {
    // 点击banner展示轮播图
    handleBannerClick () {
      this.showGallery = true
    },
    // 画廊被点击，隐藏画廊。【接收子组件响应】
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position relative
  // overflow hidden
  height 0 // 防止页面抖动
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    // 从上到下背景色渐变
    background-image linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 0.32rem
      padding 0 0.2rem
    .banner-number
      padding 0 0.4rem
      line-height 0.32rem
      height 0.32rem
      margin-top 0.14rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.24rem
      .banner-icon
        font-size 0.24rem
</style>