<template>
  <div>
    <!-- Home父组件向下分发传递数据给各子组件 -->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('./api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      // console.log(res)
      // 将ajax返回的数据绑定到本组件,ret 表示后端正确返回了结果
      res = res.data
      if (res.ret && res.data) {
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    }
  },
  // 实例被挂载后调用，注意，mounte的不会保证所有的子组件一起被挂载
  mounted () {
    // 发起ajax请求
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 钩子函数：被keep-alive缓存的组件激活时调用
  activated () {
    // console.log("activated")
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      //  切换城市重新发送ajax请求
      this.getHomeInfo()
    }
  }

}
</script>
<style lang="stylus" scoped></style>