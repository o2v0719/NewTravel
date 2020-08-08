<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
//import x from ''
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {

    }
  },
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  line-height 0.8rem
  background-color #eee
  text-indent 0.2rem
.img-wrapper
  height 0
  overflow hidden
  padding-bottom 37.09%
  .item-img
    width 100%
.item-info
  padding 0.1rem
  min-width 0 // 防止文字溢出，配合flex1使用
  .item-title
    line-height 0.54rem
    font-size 0.32rem
    ellipsis()
  .item-desc
    line-height 0.4rem
    color #bbbbbb
    ellipsis()
</style>