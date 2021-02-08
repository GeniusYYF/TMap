<template>
  <div class="login">
    <LoginBackground />
    <LoginTip />
    <Logo class="login-logo" />
    <Title class="login-title" />

    <div class="login-box">
      <Box1 v-show="$store.state.login.selectBox == 1"></Box1>
      <Box2 v-show="$store.state.login.selectBox == 2"></Box2>
      <Box3 v-show="$store.state.login.selectBox == 3"></Box3>
    </div>

    <LoginFoot />
  </div>
</template>

<script>
import Logo from "./components/logo";
import Title from "./components/title";
import LoginBackground from "./components/background";
import LoginTip from "./components/tip";
import Box1 from "./components/box/box1";
import Box2 from "./components/box/box2";
import Box3 from "./components/box/box3";
import LoginFoot from "./components/foot";

export default {
  components: {
    Logo,
    Title,
    LoginBackground,
    LoginTip,
    Box1,
    Box2,
    Box3,
    LoginFoot,
  },
  mounted() {
    document.title = "徐州水务信息管理系统-登录";
  },
};
</script>

<style lang="less" scoped>
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;

  .login-logo {
    position: absolute;
    left: 5.4vw;
    top: 7.8vh;
    width: 3.2vw;
    height: 4.4vh;
  }
  .login-title {
    position: absolute;
    left: 9.2vw;
    top: 6.7vh;
    height: 6.8vh;
    color: rgba(255, 255, 255, 0.95);
    font-size: 6vh;
  }
  .login-box {
    position: absolute;
    left: 61.6vw;
    top: 27.9vh;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    background-image: linear-gradient(
      90deg,
      rgba(178, 178, 209, 0.8) 0%,
      rgba(159, 203, 207, 0.8) 56%,
      rgba(159, 180, 202, 0.8) 100%
    );
    padding-top: 0.6vh;
  }
}
</style>>

