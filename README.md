> 最后提交的 master 分支为上线版本

```
new-travel
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── mock
│       ├── city.json
│       ├── detail.json
│       └── index.json
├── src
│   ├── App.vue
│   ├── assets
│   │   └── styles
│   │       ├── border.css
│   │       ├── mixins.styl
│   │       ├── reset.css
│   │       └── varibles.styl
│   ├── common
│   │   ├── fade
│   │   │   └── FadeAnimation.vue
│   │   └── gallery
│   │       └── Gallery.vue
│   ├── main.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   ├── index.js
│   │   ├── mutations.js
│   │   └── state.js
│   └── views
│       ├── city
│       │   ├── City.vue
│       │   └── components
│       ├── detail
│       │   ├── Detail.vue
│       │   └── components
│       └── home
│           ├── Home.vue
│           └── components
└── vue.config.js
```

# 去哪儿网移动端项目_学习开发记录

> 开发时间：2020.8.5
> 开发脚手架：Vue-cli4
> Vue 版本：2.6.11

## 1. 项目准备

### 1.1 Git 初始化项目

- 在 github 上新建一个仓库，命名为 NewTravel
- Description, 勾选 public
- **不勾选**使用 Readme 文件初始化项目

---

### 1.2 使用 vue-cli4 初始化项目

- 创建项目

```bash
vue create new-travel
```

- 勾选配置
  > Babel+vue-router+vuex+Stylus+ESlint

### 1.3 关联本地 vue 与远程仓库

> 已有仓库与远程关联

- 在本地项目目录下

```bash
git remote add origin git@github.com:o2v0719/newTravel.git
```

- 将本地仓库推送到远程

```bash
git push
```

## 2.梳理项目目录组织结构

> 使用 node 插件 tree ，全局安装可以梳理目录结构

```bash
tree -L 4 -I "node_modules" > README.md
```

```
new-travel
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── mock
│       ├── city.json
│       ├── detail.json
│       └── index.json
├── src
│   ├── App.vue
│   ├── assets
│   │   └── styles
│   │       ├── border.css
│   │       ├── mixins.styl
│   │       ├── reset.css
│   │       └── varibles.styl
│   ├── common
│   │   ├── fade
│   │   │   └── FadeAnimation.vue
│   │   └── gallery
│   │       └── Gallery.vue
│   ├── main.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   ├── index.js
│   │   ├── mutations.js
│   │   └── state.js
│   └── views
│       ├── city
│       │   ├── City.vue
│       │   └── components
│       ├── detail
│       │   ├── Detail.vue
│       │   └── components
│       └── home
│           ├── Home.vue
│           └── components
└── vue.config.js

```

- 2.1 组织静态资源目录 public>mock
- 2.2 使用标准的**.eslintrc.js** 配合 **.prettierrc.json**实现保存自动格式化
- 2.3 配置 vue.config.js
- 2.4 清理默认的 component
- 2.5 规划组件：单页面组件放在 views 文件夹下，局部组件放在相应组件的 components 文件夹下，公共组件放在 common 文件夹下
  > 文件关联关系（图片）

## 3. 开发准备

- 3.1 在 index.html 中设置针对移动端的视口限制,禁止画面缩放

```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
/>
```

- 3.2 引入初始化样式表 reset.css。在 src/assets/styles 目录下引入样式表。在 main.js 中引入
- 3.3 引入样式表 border.css。解决移动端 1 像素边框在多倍屏里面显示为多倍像素边框的问题。同样放入 src/assets/styles 目录下，并在 main.js 中引入。

- 3.4 引入阿里图标库，iconfont.cn。这里通过 CDN 引入。

- 3.5 将代码上传到 git

```bash
git add .
git commit -m 'project init'
git push
```

## 4. 项目开发

- 引入 path 模块。因为要配置关联模块的别名。

```bash
npm install path --save
```

- 配置引用路径别名，在 vue.config.js 中

```js
/* 别名设置*/
// ！！！！注意前面引用的时候要加波浪线！！！！！
chainWebpack: config => {
  config.resolve.alias
    .set('@', resolve('src'))
    .set('styles', resolve('src/assets/styles'))
    .set('components', resolve('src/components'))
}
```

### 4.1 首页开发

#### 4.1.1 首页 header 区域布局

- 新建 views/home/components/Header.vue
- 样式采用 stylus 语法
- 基于 rem 设置布局尺寸，reset.css 里面设置 font-size 为 50px，可以"百分之一"换算 rem
- header 区，采用 flex 布局，左侧宽度固定，右侧宽度以最小宽度限制，中间搜索框宽度自适应（flex：1）
- git push

#### 4.1.2 首页轮播区域布局

- github 新建分支，并 pull 到本地，切换 checkout 到新的分支
- 安装 vue-awesome-swiper 插件做轮播效果

```bash
npm install vue-awesome-swiper@2.6.7 --save
```

> 采用稳定 Vue-Awesome-Swiper @2.6.7 版本

- 入口文件 main.js 中引入

```js
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
```

- 新建 views/home/components/Swiper.vue
- 布局两张轮播图，固定图片宽度 100%
- 为了防止网速慢产生的图片载入抖动问题，采用一种固定的 css 样式写法。

```stylus
.wrapper
  // 父级高度随子级高度内容自适应
  overflow hidden
  height 0
  width 100%
  padding-bottom 30.475%
  background #eee
  .swiper-img
    width 100%
```

- 轮播小圆点的样式定义在别的组件中，如何定义它的样式？
  > 采用**样式穿透**

```stylus
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
```

- 把数据写入 data 中，循环遍历数组改造 model 结构
- git push

#### 4.1.3 首页图标区域布局

> 图片

#### 4.1.4 首页图标区域逻辑实现

- 如果图标超过 8 个要实现轮播：用 swiper 包裹内层图标，用 slider-slide 包裹每一页要显示的内容。绑定数据做循环。
- 如何实现**轮播页数**与**icons 图标数**之间的关联？利用**_计算属性_** ，计算得到二维数组，二维数组的每一项都是一个由 icons 构成的一维数组。在 swiper-slide 元素上循环遍历二维数组，以得到轮播页数，下一级元素循环遍历一维数组，以得到每一页的图标数。
- 提交代码。

#### 4.1.5 首页周末去哪区域布局和逻辑实现

- 在 4.1.4 的基础上更改，去掉 flex 布局，绑定新的数据源
- 提交代码

#### 4.1.6 首页使用 axios 发送 ajax 请求

- 在新的分支上启动项目
- 安装 axios

```bash
npm install axios --save
```

- ajax 请求逻辑，在 Home 根组件发送 ajax 请求。

  > axios.get('./api/index.json')

- 在 public/mock 文件夹下放好 json 文件。
- 在 vue.config.js 中，配置好 devServer

```js
/* webpack-dev-server 相关配置 */
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 8081,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://127.0.0.1:8081',
        /* 允许跨域 */
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
```

- 从 res.data 中解析后端返回的各项数据，并绑定到 Home 组件上，通过父子组件传值，向下分发给各子组件。
- 注意 swiper 获取的数据，默认轮播首页显示的是最后一页，这是因为一开始是没有从父组件中获取到数据的，给 swiper 绑定 v-if 指令：v-if="list.length"，只有当 list 数组不为空的时候才会渲染 swiper 组件。这样可以解决 swiper 组件首页显示的 bug。
- 提交代码

### 4.2 城市选择页面开发

#### 4.2.1 城市选择页面路由配置

- 在 router/index.js 下，routes 数组添加对应的路由项，并在开头导入 City 组件。
- 在 views/city 下，新建 City.vue。并构建初始结构。
- 实现从首页 Header 向 City 的页面跳转。在 home/Header.vue 中用 router-link 标签包裹要实现跳转的元素。元素属性 to="/city"表示要跳转的的目标页面。
- 提交该分支代码。

#### 4.2.2 布局城市选择页面

- 在新的分支上开发。
- 完成 Header 布局。新建 Header.vue。返回箭头给绝对定位，元素用 router-link 包裹，to 指向首页。
- 完成搜索框布局。新建 Search.vue。
- 完成列表布局。分三部分（area）。注意 list 区域整个要给绝对定位，配合 better-scroll 插件实现原生 app 滚动效果。
- 安装 better-scroll。

```bash
npm install better-scroll@1.8.1 --save
```

#### 4.2.3 城市选择页面获取 ajax 数据

- City.vue 组件引入 axios，获取 ajax 数据并向下分发给子组件。子组件按需循环渲染视图结构。

#### 4.2.4 兄弟组件之间数据传递

> 兄弟组件之间数据联动，点击字母跳转到某组城市

- 数据传递模型：子 1 => 父 => 子 2。在 Alphabet 组件中通过\$emit 自定义一个事件名（参数 1），同事携带参数内容（参数 2），传值给父组件。父组件对应元素上注册事件@事件名,并获取数据，通过属性绑定传递给子组件 2：List.vue。在 List.vue 组件中通过 props 接收父组件的传值。

> ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 \$refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例. 当 v-for 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组.

- 注意 List.vue 组件中绑定了两个 ref，打印出来的 this.\$refs 是一个包含所有 ref 指定的 dom 构成的对象。找到指定的 dom 并利用 scroll 插件提供的 API 实现点击跳转列表功能。注意 watch 侦听器。

> Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时**执行异步或开销较大的操作**时，这个方式是最有用的。
> 使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

```js
watch: {// 侦听器
    letter () {
      // console.log(this.letter)
      if (this.letter) {
        // console.log(this.$refs)
        // 【找到指定的dom元素】
        const element = this.$refs[this.letter][0]
        // console.log(element)
        // 【跳转到指定的dom:利用scroll插件提供的API】
        this.scroll.scrollToElement(element)
      }
    }
  }
```

- 实现字母表滚动监听事件.注意移动端触摸事件的三个函数：@touchstart，@touchmove，@touchend

#### 4.2.5 实现页面搜索逻辑

- 搜索出来的数据依赖于父组件 City.vue。所以首先要实现 City=>Search 的父传子数据传递。
- 双向绑定 keyword 到 input 元素上。
- 在 Search.vue 页面添加 search-content。这部分内容要在 keyword 有值的时候显示。
- 给 search-content 部分重新布局。确保输入框输入字符后，依然可以滚动：引入 Bscroll 插件，在 mounte 钩子上实例化 scroll 对象，注意给 div.search-content 元素一个 ref="search"的 dom 引用。

```js
 mounted () {
    // 确保在输入框输入字符后，下面的content区仍然可以滚动
    this.scroll = new Bscroll(this.$refs.search)
  }
```

- 实现搜索动态展示匹配到的列表。设置节流(防抖)函数，使用 indexOf 匹配搜索内容。将搜索出来的数组赋值给 list 数组。li 元素循环遍历 li 数组。
- 没有找到匹配数据的 li 元素，要在 list 数组为空的时候再显示，并且初始不显示。
- 搜索的时候开销较大，使用 watch 侦听器。

```js
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
```

- 提交代码。

#### 4.2.6 一级组件联动。利用 Vuex 实现数据共享。

- 新建分支。
- 在首页和城市选择页面实现数据共享。store/index.js 中。new 出来的 store 实例里面，state 中存放的数据，可以在子组件中通过 this.\$store.state 访问到。据此更改 home/components/Header.vue，home/Home.vue,city/components/list.vue。
- 在 store 实例对象里面的 mutations 中建立更改 state 对象数据的函数。在子组件中通过 this.\$store.commit 提交事件。
- 利用路由\$router 的编程式导航实现页面跳转。
- 解决 bug：刷新页面后，上次选择的地名丢失。使用 localStorage。
- 在子组件中把 vuex 中的状态管理函数映射引入，可以简化数据引用。注意：mapState 在 computed 中解构，而 mapMutations 在 methods 中解构。
- 提交代码。

#### 4.2.7 解决重复获取后端数据的问题。keep-alive

- 根组件 App.vue 中 使用 keep-alive 包裹 router-view。缓存机制。
- 发送后台请求的时候应该携带 city 的参数。

```js
methods: {
    getHomeInfo () {
      axios.get('./api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    ...
}
```

- 但是切换城市时首页应该重新获取后台数据。当使用 keep-alive 缓存机制时，子组件可以有钩子函数 activated。在 activated 中判断城市选择是否发生改变，如果改变就重新发送 ajax 请求。

```js
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
```

- 提交代码

### 4.3 构建详情页面

#### 4.3.1 配置路由

- 新建分支。
- 在 home/components/Recommend.vue 上改造 li 标签，用 router-link 替换 li，使用 to 指向动态路由。tag 指明替换 li 元素。

```vue
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
```

- router/index.js。routes 数组添加新路由，动态路由。

```js
{
    //动态路由
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
```

- 新建 views/detail/Detail.vue

#### 4.3.2 详情页面布局

- .banner-info 相对.banner 固定定位。.banner 高度使用 padding-bottom 给定，height0，占位高度，防止页面抖动。
- 设置 info 区域渐变背景。

```css
 // 从上到下背景色渐变
    background-image linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
```

#### 4.3.3 公用图片画廊组件拆分

> 组件嵌套关系： Detail.vue >Banner.vue > Gallery.vue

- 在 src/common/gallery 目录下新建 Gallery.vue 。在 Banner.vue 中引入 Gallery.vue，注册局部组件并使用。
- 在 Gallery.vue 中引入利用 vue-awesome-swiper 组件实现画廊轮播。注意在 data 中配置 swiperOptions。swiper-slide 元素遍历的数据 imgs 来自父组件。在 props 中引入 imgs。

```js
props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        // observeParents,observer 当swiper插件监听到，我这个元素或父元素发生了dom结构变化的时候，就会自动自我刷新一次。通过自我刷新，可以解决swiper宽度计算的问题
        observeParents: true,
        observer: true
      }
    }
  }
```

- 在 Banner.vue 中，尝试给定 data 数据 imgs。给 banner 元素绑定事件：点击展示 common-gallery。 给 common-gallery 元素绑定（接收来自 Gallery 子组件的响应点击关闭事件）。在 Gallery.vue 中通过子传父，this.\$emit('close') 把点击事件传递给父级 Banner.vue.
  > 注意：Gallery.vue 中，在 div.container 上绑定的@click 事件必须加上事件修饰符.stop 以阻止事件继续传播。

#### 4.3.4 实现 Header 的渐隐渐现效果

- 布局 Header. 绝对定位布局返回键 div.header-abs,用 router-link 替换 div，并指定路由返回首页 to="/"。固定定位布局 Header 条 div.header-fixed。
- 在 Detail.vue 给定一个可以滑动的高度，使触摸可以上下滑动。
- 业务逻辑：网上滑动，返回键消失前后，Header 渐隐渐现
- 给 div.header-fixed 动态样式绑定。:style="opacityStyle",在 data 中配置 opacityStyle 对象，给定 opacity 初始值为 0。
- 钩子函数绑定一个全局事件，监听 scoll 事件。在 methods 方法中实现 scroll 事件监听函数对应的业务逻辑。top 初始值为 60，然后向 140 过渡，逐渐不透明度变为 1。适时改变 showAbs 的布尔值。showAbs 通过指令 v-show 分别控制 div.header-abs 和 div.header-fixed。
- 最后注意给**全局事件解绑** ！！！

```js
 methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      // 以60为起点，向140过渡
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // 绑定了keep-alive产生的钩子activated和deactivated
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    // 给全局window解绑：当离开当前页面时，不再触发scroll事件
    // 【官方解释deactivated】:被 keep-alive 缓存的组件停用时调用
    window.removeEventListener('scroll', this.handleScroll)
  }
```

#### 4.3.5 使用递归组件构建 detai-list

- 在 detail/components 目录下，新建 List.vue,并在 Detail.vue 中引入

#### 4.3.6 使用 ajax 请求数据

- 在 Detail.vue 中引入 axios 库，使用 axios 发送 ajax 请求。获取到数据后分配数据，依次传值给各子组件。在各子组件中利用接收父组件中的传值。

```js
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
```

- 特别地，想针对详情 Detail 页面刷新不做缓存，可以在 App.vue 中，keep-alive 元素添加属性 exclude="Detail"，引号里面为组件的 name。由此带来 bug，header.vue 渐隐渐现效果丢失，修改钩子函数如下：

```js
 // activated () {
  mounted () {
    // scroll事件发生，就会执行handleScroll事件
    // 注意此处的window为全局对象
    window.addEventListener('scroll', this.handleScroll)
  },
  // deactivated () {
  destroyed () {
    // 给全局window解绑：当离开当前页面时，不再触发scroll事件
    window.removeEventListener('scroll', this.handleScroll)
  },
```

- 为了解决滑动某页，其他页面也一并被滑动。在 router/index.js 里面配置导出的 VueRouter 实例。

```js
const router = new VueRouter({
  routes,

  //为了解决滑动某页，其他页面也一并发生滑动：
  scrollBehavior(to, from, savedPosition) {
    // 页面切换时，显示出来的页面始终回到最顶部
    return { x: 0, y: 0 }
  }
})
```

#### 4.3.7 针对 Gallery 页面的进入和离开开发动画效果

- 在 commom 文件夹下新建 fade/FadeAnimation.vue。结构区留好插槽位置。样式区做好动画效果。

```html
<template>
  <transition>
    <slot></slot>
  </transition>
</template>
```

```css
<style lang="stylus" scoped>
// 动画效果: 进入离开渐隐渐现
.v-enter, .v-leave-to
  opacity 0
.v-enter-active, .v-leave-active
  transition opacity 0.5s
</style>
```

- 在 Banner.vue 中引入 fade-animation 组件，包裹 common-gallery。此时，common-allery 元素将作为插芯，插入到 fade-animation 组件中。

##5. 后续工作

### 5.1 前后端联调。

- 把 mock 文件夹备份后删除。
- 在 mac 电脑安装 xampp，一个可以联通后端接口的 app。
- 启动 xampp。https://blog.csdn.net/lxb1113220682/article/details/89642439。
- 把 3 个 json 文件放入 api 文件夹后，一并放入 htdoc 文件夹下。localhost:8080/api/index.json 可以访问到 json 文件。
- 修改 vue.config.js。（devServer 对象），port 端口改为 4040，proxy：

```js
 /* 使用代理 */
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://127.0.0.1:8088'
        /* 允许跨域 */
        // changeOrigin: true,
        /*  pathRewrite: {
          '^/api': '/api'
        } */
      }
    }
```

- npm run serve 启动项目后，项目请求的后端地址将会是 target:'http://127.0.0.1:8088'

### 5.2 真机测试

- 获取这台 mac 电脑的 ip 地址

```bash
ifconfig
```

得到 ip 地址为 192.168.0.102

> vue.config.js 是 vue 对 webpack.config.js 的扩展文件。最终编译时，vue.config.js 会被合并到 webpack.config.js 中。

- 确保 vue.config.js 中 devServe 对象下 host:0.0.0.0。

- 在手机端输入 192.168.0.102:4040 可以访问页面

### 5.3 打包上线

```bash
npm run build
```

- dist 目录下的代码就是要上线的代码
- 如何兼顾 npm run serve 和 npm run build 放到服务器中的页面？

```js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  publicPath: process.env.NODE_ENV === 'production' ? '../project/' : './',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: 'assets',

  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: true,
  /* 代码保存时进行eslint检测 */
  lintOnSave: true,
  /* webpack-dev-server 相关配置 */
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 4040,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://127.0.0.1:8088'
        /* 允许跨域 */
        /* changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        } */
      }
    }
  },

  /* 别名设置*/
  // ！！！！注意前面引用的时候要加波浪线！！！！！
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
  }
}
```

- 注意，需要请求后台数据的 axios 接口" 路径前面不能加."

```js
methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    //...
}
```

### 5.4 是否有必要实现异步加载组件？

> 将异步组件实现按需加载.
> router/index.js

```js
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home')
  },
  {
    path: '/city',
    name: 'City',
    // component: City
    component: () => import('@/views/city/City')
  },
  {
    //动态路由
    path: '/detail/:id',
    name: 'Detail',
    // component: Detail
    component: () => import('@/views/detail/Detail')
  }
]
```

- 访问哪个组件，再加载哪个组件对应的 js
- 当 app 项目较小的时候，没有必要根据组件拆分 js，因为多发起的 http 请求会影响性能
- 不使用异步加载组件

## 6. 部署到阿里云服务器

#### 6.1 购买阿里云 ECS 服务器，开启实例

#### 6.2 连接服务器

- <1> mac 电脑通过命令行 ssh 连接到阿里云服务器

```bash
~ ssh -p 22 root@47.101.40.159
```

- <2> mac 通过**finalshell**登陆。更方便的文件管理和内容修改。

- <3> 在服务器安装 nginx

#### 6.3 将项目挂载到服务器

> 阿里云服务器开启指定 80 端口
> 在同一个 IP 下面部署多个项目。此项目通过 IP/travel/ 访问。

- <1> 在 vue.config.js 中设置 publicPath:'/travel/'

```js
module.exports = {
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  publicPath:  '/travel/',
  ...
  }
```

- <2> 在路由 router/index.js 中设置"base:'/travel/'"

- <3> 在 index.html 中加入 <meta base="/travel/">

- <4> 修改 vue 文件中的 axios 请求地址，在前面加上'/travel/'

- <5> 修改服务器端 nginx.conf

```.conf
server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        # root         /home/workspace/travel/;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

       # 应用1
        location /travel {
		alias /home/project/travel;
		try_files $uri $uri/ /travel/index.html;
		index index.html index.htm;
        }

	# 应用2
	# location /new {
	# 此为应用2的index，static目录，同时注意这里是alias，不是root，还有以及new的后面有/结尾
	# 	alias  /home/project/new/;
	# 	try_files $uri $uri/ /new/index.html
	# 	index index.html index.htm;
      # }

	location @router {
			rewrite ^.*$ /index.html last;
	}
```

- <6> 服务器端重启 nginx

```bash
service nginx restart
```

- <7> 通过访问 47.101.40.159/travel/ 即可访问到当前项目
