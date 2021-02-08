<template>
  <Layout class="back-system">
    <Header>
      <MyHeader />
    </Header>

    <Layout class="content">
      <router-view />
    </Layout>

    <Footer><MyFooter /></Footer>
  </Layout>
</template>

<script>
import MyHeader from "./components/header";
import MyFooter from "./components/footer";

export default {
  name: "BackSystem",
  components: {
    MyHeader,
    MyFooter,
  },
  mounted() {
    document.title = "徐州水务信息管理系统-应用支撑平台";
  },
};
</script>

<style lang="less" scoped>
.back-system {
  height: 100%;
  width: 100%;

  .content {
    height: @back-body-height;
  }
}
</style>