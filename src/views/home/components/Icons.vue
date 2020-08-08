<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(pageItem,index) in getPages" :key="index">
        <div class="icon" v-for="item of pageItem" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      // 禁止自动轮播
      swiperOptions: { autoplay: false }
    }
  },
  computed: {
    getPages () {
      // 定义一个每页构成的数组
      const pages = []
      this.list.forEach((item, index) => {
        // 每一项该显示在第几页
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          // 二维数组初始化
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
// swiper-container 的原有高度不足以占满icons的高度，利用样式穿透重新设置其高度，这样在整个icons高度区内都可以左右拖动轮播
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons
  margin-top 0.1rem
  .icon
    overflow hidden
    position relative
    float left
    height 0
    width 25% // 宽度是父级宽度的25%
    padding-bottom 25% // 高度是负极宽度的25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      box-sizing border-box
      padding 0.1rem
      .icon-img-content
        // img  是行内元素，转换为块级元素并设置居中
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      bottom 0
      right 0
      left 0
      line-height 0.44rem
      text-align center
      color $darkTextColor
      // 封装
      ellipsis()
</style>