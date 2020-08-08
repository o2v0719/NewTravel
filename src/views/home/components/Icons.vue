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
  data () {
    return {
      // 禁止自动轮播
      swiperOptions: { autoplay: false },
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        desc: '滑雪季'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        desc: '泡温泉'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植物园'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
        desc: '景点门票'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
        desc: '滑雪季'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
        desc: '泡温泉'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植物园'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
        desc: '动植物园9'
      }

      ]
    }
  },
  computed: {
    getPages () {
      // 定义一个每页构成的数组
      const pages = []
      this.iconList.forEach((item, index) => {
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