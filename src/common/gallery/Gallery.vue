<template>
  <!-- 注意阻止事件继续传播 -->
  <div class="container" @click.stop="handleGalleryClick">
    <div class="wrapper">
      <!-- 使用vue-awesome-swiper实现轮播 -->
      <!-- v-if="list.length": 当list数组还是空的时候，不要渲染，以防干扰轮播图的原始顺序 -->
      <swiper :options="swiperOptions" v-if="showSwiper">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img :src="item" class="swiper-img gallery-img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        // observeParents,observer 当swiper插件监听到，我这个元素或父元素发生了dom结构变化的时候，就会自动自我刷新一次。通过自我刷新，可以解决swiper宽度计算的问题
        observeParents: true,
        observer: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.imgs.length
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
// swiper-container 组件默认overflow hidden 使用样式穿透，重新调整overflow inherit
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #000
  .wrapper
    width 100%
    .gallery-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>