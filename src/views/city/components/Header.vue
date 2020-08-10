<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont iconarrow-left-bold header-back"></div>
    </router-link>
    城市选择

  </div>
</template>

<script>
//import x from ''
export default {
  name: 'CityHeader',
  data () {
    return {
    }
  },
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  overflow hidden
  position relative
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #ffffff
  background-color $bgColor
  font-size 0.32rem
  .header-back
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #ffffff
</style>