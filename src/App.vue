<template>
  <div id="app">
    <!-- 特别地，如果针对某一页面Detail，如果想要去掉keep-alive的影响，可以给keep alive添加exclude属性 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>
