<template>
  <div class="integration">
    <MyHeader />

    <router-view class="integration-body" />

    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "./components/header";
import MyFooter from "./components/footer";

export default {
  name: "Integration",
  components: {
    MyHeader,
    MyFooter,
  },
  mounted() {
    document.title = "徐州水务信息管理系统";
  },
};
</script>

<style lang="less" scoped>
// 不可省略
.integration {
  height: 100%;
  width: 100%;

  .integration-body {
    margin: 0 auto;
    min-height: @integration-body-min-height;
  }
  // 从小到大
  @media (min-width: 1200px) {
    .integration-body {
      width: @integration-1200px-body-width;
    }
  }
  @media (min-width: 1600px) {
    .integration-body {
      width: @integration-1600px-body-width;
    }
  }
}
</style>