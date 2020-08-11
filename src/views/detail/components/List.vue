<template>
  <div>
    <div class="item" v-for="(item,index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="iconfont iconpiaofang item-title-icon"></span>{{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <!--  递归组件，使用自身作为组件 -->
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  name: 'DetailList',
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
@import '~styles/varibles.styl'
.item-title
  line-height 0.8rem
  font-size 0.32rem
  padding 0 0.2rem
  .item-title-icon
    display inline-block
    width 0.36rem
    height 0.36rem
    padding 0 0.1rem 0 0
    color $bgColor
.item-children
  padding 0 0.2rem
</style>