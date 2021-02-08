<!--
 * @Author: 杨云峰
 * @Date: 2021-01-06 18:18:28
 * @LastEditTime: 2021-02-04 15:26:36
 * @LastEditors: 杨云峰
 * @Description: 
-->
<template>
  <div class="box">
    <Button
      class="back"
      type="default"
      ghost
      @click="$store.dispatch('login/backBoxAction')"
      >返 回</Button
    >
    <div
      class="QR"
      :style="{
        background: `url(${require('@/assets/login/QR2.png')}) no-repeat`,
        'background-size': '100% 100%',
      }"
    ></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.box {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 100%;
  //   padding: 8vh;
  width: 28vw;
  height: 35vh;
  position: relative;

  .QR {
    width: 10vw;
    height: 15vh;
    position: absolute;
    left: 0;
    right: 0;
    top: 10vh;
    margin: auto;
    // background: url(../../../../assets/login/QR2.png) no-repeat;
    // background-size: 100% 100%;
  }

  .back {
    position: absolute;
    top: 1vh;
    right: 1vw;
  }
}
</style>