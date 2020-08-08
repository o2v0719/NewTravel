<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont iconarrow-left-bold"></span>
    </div>
    <div class="header-input">
      <span class="iconfont iconsearch"></span>
      输入城市/游玩/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span class="iconfont iconjiantou"></span>{{this.city}}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  },
  data () {
    return {
    }
  },
}
</script>

<style lang='stylus' scoped>
// 1rem = html font-size = 50px (在reset.css中设置保存)
// 在手机端2倍图。代码像素为真实像素的一半。
// vscode中使用cssrem插件自动转换rem，要先设置cssrem的fontsize，保存后重启vscode生效
@import '~styles/varibles.styl'
.header
  display flex
  background-color $bgColor
  line-height $headerHeight
  color #fff
  height $headerHeight
  .header-left
    width 0.64rem
    float left
    .iconarrow-left-bold
      margin-left 0.2rem
      font-size 0.36rem
  .header-input
    // flex布局 剩余宽度自然撑开，
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-left 0.2rem
    margin-top 0.12rem
    padding-left 0.2rem
    background-color #fff
    border-radius 0.1rem
    color #ccc
  .header-right
    min-width 1.1rem
    padding 0 0.2rem
    float right
    text-aglin center
    color #fff
    .iconjiantou
      font-size 0.2rem
      padding-right 0.08rem
</style>