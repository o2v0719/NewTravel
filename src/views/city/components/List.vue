<template>
  <!-- ref 获取dom -->
  <div class="list" ref="wrapper">
    <!-- better-scroll 插件要求的页面结构 -->
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    //实例被挂载后调用
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  },
  // 当需要在数据变化时执行异步或开销较大的操作时，用watch监听器。
  watch: {
    // 侦听器[letter 要和 props 中的letter保持一致]
    letter () {
      // console.log(this.letter)
      if (this.letter) {
        // console.log(this.$refs)
        // 【找到指定的dom元素】
        const element = this.$refs[this.letter][0]
        // console.log(element)
        // 【跳转到指定的dom:利用scroll插件提供的API】
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &::before, &::after
    border-color #ccc
.border-bottom
  &::before
    border-color #ccc
// 把list区域绝对定位，然后配合插件实现原生app的滚动效果
.list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  .title
    line-height 0.54rem
    background-color #eee
    padding-left 0.2rem
    color #666
    font-size 0.26rem
  .button-list
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        text-align center
        margin 0.1rem
        padding 0.1rem 0
        border 0.02rem solid #ccc
        border-radius 0.06rem
  .item-list
    .item
      line-height 0.76rem
      color #666666
      padding-left 0.2rem
</style>