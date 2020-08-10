<template>
  <div>
    <ul class="list">
      <!-- 注意移动端触摸事件：touchstart，touchmove，touchend -->
      <li class="item" v-for="item in letters" :key="item" :ref="item" @click="handleLetterClick" @touchstart="handleTouchStart"
        @touchmove.prevent="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  // 当向alphabet组件传入的数据发生变化的时候，alphabet组件就会重新渲染，重新渲染后就会执行updated这个生命周期函数
  // 官方：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      // console.log(e.target.innerText)
      // 兄弟组件之间传值：先由子组件传给父组件，再由父组件传递给另一个子组件
      // 子传父：使用$emit 自定义一个事件，同时携带参数信息，传值给父组件
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 函数节流: 在timer存在值的以后 又触发了事件，则清除该事件。直到8ms周期以后
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            // 同样，拖动引起的列表页面改变，一并提交到change事件
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
      // console.log(startY) // A元素顶部到绿色底部距离
      // console.log(touchY) // 触摸到的元素到绿色底部的距离
      // console.log(index)  // 触摸到的元素到A元素的距离除以每个元素的高度并向下取整，得到触摸到的元素的序号
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
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