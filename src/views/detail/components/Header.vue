<template>
  <div>
    <!-- 业务逻辑，返回键隐藏前后，header渐隐渐现 -->
    <!-- 返回键 -->
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont iconarrow-left-bold header-abs-back"></span>
    </router-link>
    <!-- ！！！样式动态绑定！！！ -->
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont iconarrow-left-bold header-fixed-back"></div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 移动端兼容
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      // 以60为起点，向140过渡
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // 绑定了keep-alive产生的钩子activated和deactivated
  // activated () {
  mounted () { // keep-alive 针对此页面做了exclude
    window.addEventListener('scroll', this.handleScroll)
  },
  // deactivated () {
  destroyed () {
    // 给全局window解绑：当离开当前页面时，不再触发scroll事件
    // 【官方解释deactivated】:被 keep-alive 缓存的组件停用时调用
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.8rem
  height 0.8rem
  line-height 0.8rem
  text-align center
  border-radius 0.4rem
  background rgba(0, 0, 0, 0.8)
  .header-abs-back
    color #ffffff
    font-size 0.42rem
.header-fixed
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background $bgColor
  font-size 0.32rem
  .header-fixed-back
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #fff
</style>