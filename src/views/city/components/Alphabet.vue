<template>
  <div>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'CityAlphabet',
  data () {
    return {
    }
  },
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column // 垂直排布
  justify-content center // 垂直方向居中
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width 0.4rem
  .item
    line-height 0.4rem
    text-aling center
    color $bgColor
</style>