<template>
  <Menu
    class="header"
    mode="horizontal"
    theme="light"
    active-name="1"
    @on-select="onSelect"
  >
    <Row>
      <Col :xl="{ span: 9 }" :xxl="{ span: 9 }" class="title">
        <li class="title-wrapper">
          <img
            v-if="useImg"
            class="logo-title"
            :src="require(`@/assets/integration/header/title@2x.png`)"
          />
          <template v-else>
            <img
              class="logo"
              :src="require(`@/assets/integration/header/logo2.png`)"
            />
            <span class="text">徐州水务信息管理系统</span>
          </template>
        </li>
      </Col>
      <Col :xl="{ span: 10 }" :xxl="{ span: 10 }">
        <MenuItem name="1" class="header-item" :to="'/integration/home'">
          <!-- 因下划线需要被span包裹 -->
          <span>首页</span>
        </MenuItem>
        <MenuItem name="2" class="header-item" :to="'/integration/eg1'">
          <span>政府信息公开</span>
        </MenuItem>
        <MenuItem name="3" class="header-item" :to="'/integration/eg2'">
          <span>政府服务</span>
        </MenuItem>
        <MenuItem name="4" class="header-item">
          <span>政务互动</span>
        </MenuItem>
      </Col>
      <Col :xl="{ span: 4 }" :xxl="{ span: 4 }" class="tool">
        <li class="tool-wrapper">
          <Icon class="header-icon" type="ios-search" />
          <Icon
            class="header-icon"
            type="md-settings"
            @click="$router.push('/back-system/system1/map')"
          />
          <Icon
            class="header-icon"
            type="md-exit"
            @click="$router.push('/login')"
          />
        </li>
      </Col>
    </Row>
  </Menu>
</template>

<script>
export default {
  computed: {
    activeRoute() {
      return this.$store.getters.getActiveRoute;
    },
  },
  data() {
    return {
      useImg: false, // 标题采用图片+文字或者纯图片
    };
  },
  watch: {
    $route(to, from) {
      console.log(from);
      this.$store.commit("setActiveRoute", to.path);
    },
  },
  methods: {
    onSelect(name) {
      console.log(name);
      if (name == 6) this.$store.dispatch("delUserAction");
    },
  },
  mounted() {
    console.log("当前时间：", this.$dateFormat());
    console.log(
      "activeRoute:",
      this.activeRoute,
      "所有缓存:",
      this.$storage.getAll()
    );
    this.$store.commit(
      "setActiveRoute",
      "/" + window.location.hash.split("/")[1]
    );
    console.log(this.$store.state.activeRoute);
  },
};
</script>

<style lang="less" scoped>
.header {
  height: @integration-header-height;
  width: 100%;

  .ivu-col {
    height: 100%;
    overflow: hidden;
    &.title {
      .logo-title {
        height: 5.5vh;
        vertical-align: middle;
      }

      .logo {
        height: 3.8vh;
        vertical-align: middle;
      }
      // 字体
      .text {
        font-family: "YouSheBiaoTiHei";
        font-size: 4.2vh;
        color: rgb(0, 146, 215);
        // vertical-align: 50%;
        vertical-align: middle;
        margin-left: 0.5vw;
        line-height: 1;
      }
    }

    .title-wrapper,
    .header-item,
    .tool-wrapper {
      line-height: @integration-header-height;
    }

    .header-item {
      margin: 0 2vw;
      padding: 0;
      display: inline-block;
      line-height: @integration-header-height;
      position: relative;
      color: @theme-black;
      // 因需求需要隐藏自带下划线
      &.ivu-menu-item-active,
      &:hover {
        color: @theme-blue;
        border-bottom-color: transparent;
      }
      // 因需求需要自制下划线
      &.ivu-menu-item-active::after,
      &:hover::after {
        border-bottom: 2px solid @theme-blue;
      }
      &::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: 1vh;
        display: block;
      }
      // 字体
      span {
        font-family: "PingFangBold";
        line-height: 1.5;
        font-size: 2vh;
        vertical-align: middle;
        display: inline-block;
      }
    }

    &.tool {
      height: inherit;
      text-align: center;
      .header-icon {
        color: @theme-blue;
        font-size: 3vh;
        // vertical-align: 50%;
        margin-right: 1vw;
        vertical-align: middle;

        &:hover {
          cursor: pointer;
          color: rgba(@theme-blue, 0.7);
        }
      }
    }
  }
}
</style>