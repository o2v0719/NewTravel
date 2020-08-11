<template>
  <div>
    <div class="recom-title">
      热销推荐
    </div>
    <ul>
      <router-link tag="li" :to="'/detail/'+item.id" class="item border-bottom" v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
//import x from ''
export default {
  name: 'HomeRecommend',
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
.recom-title
  margin-top 0.2rem
  line-height 0.8rem
  background-color #eee
  text-indent 0.2rem
.item
  // overflow hidden
  display flex
  height 1.9rem
  // background-color red
  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem
  .item-info
    flex 1
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
    .item-button
      line-height 0.44rem
      margin-top 0.16rem
      padding 0 0.2rem
      border-radius 0.08rem
      background-color #ff9300
      color #ffffff
</style>