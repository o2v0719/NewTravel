<template>
  <div class="wrapper">
    <!-- v-if="list.length": 当list数组还是空的时候，不要渲染，以防干扰轮播图的原始顺序 -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
//import x from ''
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
// 样式穿透
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  // 父级高度随子级高度内容自适应
  overflow hidden
  height 0
  width 100%
  padding-bottom 30.475%
  background #eee
  .swiper-img
    width 100%
</style>