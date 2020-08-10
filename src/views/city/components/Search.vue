<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="search-input" v-model="keyword">
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="showFlag">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
// 把集中的vuex中的状态管理函数映射过来
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null,
      showFlag: false
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')// 编程式导航实现页面跳转
    },
    ...mapMutations(['changeCity'])
  },
  // 性能开销大，使用watch侦听器
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
        this.showFlag = false
      }
      //输入后删除，要相应地清除屏幕上的内容
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            // 搜索的时候可能是拼音也可能是汉字
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
        if (!this.list.length) {
          this.showFlag = true //显示“没有找到匹配数据”
        }
      }, 200)
    }
  },
  mounted () {
    // 确保在输入框输入字符后，下面的content区仍然可以滚动
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    })
  }
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
.search-content
  z-index 1
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background-color #eeeeee
  .search-item
    line-height 0.62rem
    padding-left 0.2rem
    background-color #fff
    color #666666
</style>