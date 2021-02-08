<template>
  <Layout class="sysytem1">
    <Content> <router-view /></Content>
  </Layout>
</template>

<script>
export default {
  name: "Sysytem1",
  methods: {},
};
</script>

<style lang="less" scoped>
.back-system {
  height: 100%;
  width: 100%;
  .ivu-layout-content {
    padding: @back-system1-content-padding;
    padding-bottom: 0;
    height: @back-body-height;
    overflow-y: auto;
    background-color: #f2f2f2;
  }
}
</style>