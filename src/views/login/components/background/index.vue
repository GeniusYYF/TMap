<template>
  <div>
    <!-- 尽量用绝对路径 -->
    <div
      class="login-bg1"
      :style="{
        background: `url(${require('@/assets/login/bj.jpg')}) no-repeat`,
        'background-size': '100% 100%',
      }"
    ></div>
    <div class="login-bg2"></div>
    <div
      class="login-bg3"
      :style="{
        background: `url(${require('@/assets/login/bj2.png')}) no-repeat`,
        'background-size': '100% 100%',
      }"
    ></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.login-bg1,
.login-bg2,
.login-bg3 {
  // 自动撑大
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background参数
  // background:bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
}

// .login-bg1 {
// background: url(../../../../assets/login/bj.jpg) no-repeat;
// background-size: 100% 100%;
// }

.login-bg2 {
  top: 2px;
  opacity: 0.28;
  transform: scaleX(-1);
  background-image: linear-gradient(
    180deg,
    rgba(1, 164, 216, 1) 14%,
    rgba(9, 115, 160, 1) 59%,
    rgba(5, 18, 31, 1) 100%
  );
}
// .login-bg3 {
//   background: url(../../../../assets/login/bj2.png) no-repeat;
//   background-size: 100% 100%;
// }
</style>