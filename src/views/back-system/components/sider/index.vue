<template>
  <Menu
    class="menu scroll-small"
    theme="light"
    width="200px"
    :active-name="activeName"
    :open-names="openNames"
    ref="menu"
  >
    <MenuItemSelf
      v-for="(item, i) in siderDatas"
      :key="i"
      :item="item"
      :i="i"
      :name="i + 1 + ''"
    ></MenuItemSelf>
  </Menu>
</template>

<script>
import MenuItemSelf from "./components/menu-item";
import { getSiderDatas } from "@/api/back-system/sider.js";

export default {
  components: { MenuItemSelf },
  computed: {
    siderDatas() {
      return this.$store.getters["back/getSiderDatas"];
    },
    activeName() {
      return this.$store.getters["back/getActiveName"];
    },
    openNames() {
      return this.$store.getters["back/getOpenNames"];
    },
  },
  watch: {
    openNames() {
      // 等待store数据变更完再执行
      this.$nextTick(() => {
        this.$refs.menu.updateOpened();
      });
    },
  },
  mounted() {
    getSiderDatas(this.$route.query.toSystem)
      .then(({ data }) => {
        console.log(data);
        this.$store.commit("back/initSiderDatas", data.data);
        this.$nextTick(() => {
          this.$refs.menu.updateActiveName();
          this.$refs.menu.updateOpened();
        });
      })
      .catch((error) => {
        // 错误分为 status-请求错误 和 code-账号密码错误
        console.log(error);
        error ? this.$Message.error(error.msg) : "";
      });
  },
};
</script>

<style lang="less" scoped>
@space: 10px;

// 从小到大
@media (min-width: 1200px) {
  .menu {
    width: @integration-1200px-aside-width !important;
  }
}
@media (min-width: 1600px) {
  .menu {
    width: @integration-1600px-aside-width !important;
  }
}

.menu {
  height: @back-body-height;
  // width: @back-system2-aside-width !important;
  text-align: left;
  overflow-x: hidden;
  overflow-y: auto;

  /deep/ .ivu-menu-submenu-title,
  /deep/ .ivu-menu-item {
    font-size: 1.8vh;
    // font-family: "PingFangBold";
    // font-weight: 700;
    padding-top: @space;
    padding-bottom: @space;
    // 左icon
    /deep/ .ivu-icon {
      font-size: 2.5vh;
    }
    // 右icon
    .ivu-menu-submenu-title-icon {
      right: @space;
    }
    // 子集样式
    // & .ivu-menu-submenu-title,
    // & .ivu-menu-item {
    //   padding-top: @space;
    //   padding-bottom: @space;
    // }
  }

  // /deep/ .ivu-menu-submenu,
  // /deep/ .ivu-menu-item {
  // 子集无icon - 即末项字体样式
  // & .ivu-menu-item {
  // font-family: "PingFangJianChangGuiTi";
  // font-weight: 400;
  // font-size: 1.4vh;
  // }
  // }
}
</style>