<template>
  <Layout class="sysytem2">
    <Sider> <MySider /></Sider>

    <Layout>
      <Header><MyMenuCards /></Header>
      <Content> <router-view /></Content>
    </Layout>
  </Layout>
</template>

<script>
import MySider from "../components/sider";
import MyMenuCards from "../components/menu-crads";

export default {
  name: "Sysytem2",
  components: {
    MySider,
    MyMenuCards,
  },

  methods: {},
};
</script>

<style lang="less" scoped>
@media (min-width: 1200px) {
  .ivu-layout-sider {
    width: @integration-1200px-aside-width !important;
    min-width: @integration-1200px-aside-width !important;
    flex: unset !important;
  }
}
@media (min-width: 1600px) {
  .ivu-layout-sider {
    width: @integration-1600px-aside-width !important;
    min-width: @integration-1600px-aside-width !important;
    flex: unset !important;
  }
}

.sysytem2 {
  height: 100%;
  width: 100%;

  .ivu-layout-content {
    padding: @back-system2-content-padding;
    padding-bottom: 0;
    height: @back-body-height;
    overflow-y: auto;
    background-color: #f2f2f2;
  }
}
</style>