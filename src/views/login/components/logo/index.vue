<template>
  <div
    class="logo"
    :style="{
      background: `url(${require('@/assets/login/logo.png')}) no-repeat`,
      'background-size': '100% 100%',
    }"
  ></div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
// 公共组件用尽可能少的样式达到低耦合，使用时可加入、更改所需样式
.logo {
  // background: url(../../../../assets/login/logo.png) no-repeat;
  // background-size: 100% 100%;
  width: 3.2vw;
  height: 4.4vh;
}
</style>
