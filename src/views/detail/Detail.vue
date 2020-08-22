<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="galleryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      list: []
    }
  },
  methods: {
    // 1. ajax请求数据
    getDetailInfo () {
      // axios.get(`/api/detail.json?id=${this.$route.params.id}`)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    //2. 分配数据
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  // 如果本页面也被keep-alive ,那么每次进入页面不会再重复执行mounted钩子函数，进而也不会重新发送ajax请求。
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
.content
  height 20rem
</style>