<!--
 * @Author: 杨云峰
 * @Date: 2020-12-31 09:32:37
 * @LastEditTime: 2021-02-02 16:17:14
 * @LastEditors: 杨云峰
 * @Description: 
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
// @import url("../public/css/common.less"); 已在插件中引入 - 这也可以使用其全局变量

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @theme-black;
}
// 字体库放在common.less中会出问题
@font-face {
  font-family: "YouSheBiaoTiHei";
  src: url("../public/font/YouSheBiaoTiHei.ttf");
}
@font-face {
  font-family: "PingFangSCRegular";
  src: url("../public/font/PingFangSCRegular.ttf");
}
@font-face {
  font-family: "PingFangBold";
  src: url("../public/font/PingFangBold.ttf");
}
@font-face {
  font-family: "PingFangJianChangGuiTi";
  src: url("../public/font/PingFangJianChangGuiTi.ttf");
}
@font-face {
  font-family: "PingFangTeCuTi";
  src: url("../public/font/PingFangTeCuTi.ttf");
}
</style>
