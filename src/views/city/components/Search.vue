<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="search-input">
  </div>
</template>

<script>
//import x from ''
export default {
  name: 'CitySearch',
  data () {
    return {
    }
  },
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height 0.72rem
  padding 0 0.1rem
  background-color $bgColor
  .search-input
    box-sizing border-box
    height 0.62rem
    padding 0 0.14rem
    line-height 0.62rem
    width 100%
    text-align center
    border-radius 0.08rem
    color #666
</style>