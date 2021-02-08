<template>
  <Menu
    class="header"
    mode="horizontal"
    theme="dark"
    :active-name="activeHeaderName"
    :style="{
      background: `url(${require('@/assets/back-system/header/background.png')}) no-repeat`,
      'background-size': '100% 100%',
    }"
    @on-select="itemClick"
  >
    <Row>
      <Col :xl="{ span: 9 }" :xxl="{ span: 9 }" class="title">
        <li class="title-wrapper">
          <img
            class="logo"
            :src="require(`@/assets/back-system/header/title.png`)"
          />
        </li>
      </Col>
      <Col :xl="{ span: 11 }" :xxl="{ span: 11 }">
        <MenuItem
          v-for="(item, i) in MenuItems"
          :key="i"
          :name="item.name"
          class="header-item"
        >
          <!-- :to="{
            path: item.path,
            query: { ...$route.query, toSystem: i + 1 },
          }" -->
          <!-- 因下划线需要被span包裹 -->
          <span>{{ item.title }}</span>
        </MenuItem>
      </Col>
      <Col :xl="{ span: 4 }" :xxl="{ span: 4 }" class="tool">
        <li class="tool-wrapper">
          <span class="tool-item">
            <img :src="require(`@/assets/back-system/header/search.png`)" />
          </span>
          <span class="tool-item">
            <Badge class="badge" dot>
              <img :src="require(`@/assets/back-system/header/msg.png`)" />
            </Badge>
          </span>
          <span class="tool-item">
            <img
              :src="require(`@/assets/back-system/header/share.png`)"
              @click="$router.push($store.getters.getHonePage)"
            />
          </span>
          |
          <Avatar :src="require(`@/assets/back-system/header/avatar.png`)" />
        </li>
      </Col>
    </Row>
  </Menu>
</template>

<script>
import { getSiderDatas } from "@/api/back-system/sider.js";

export default {
  computed: {
    activeHeaderName() {
      return this.$store.getters["back/getActiveHeaderName"];
    },
  },
  data() {
    return {
      MenuItems: [
        { title: "首页", path: "/back-system/system1", name: "System1" },
        {
          title: "公共基础服务",
          path: "/back-system/system2",
          name: "System2",
        },
        {
          title: "应用支撑服务",
          path: "/back-system/system3",
          name: "System3",
        },
        {
          title: "资源服务管理",
          path: "/back-system/system4",
          name: "System4",
        },
      ],
    };
  },
  methods: {
    itemClick(name) {
      if (name !== this.$store.getters["back/getActiveHeaderName"]) {
        getSiderDatas(name)
          .then(({ data }) => {
            console.log(data);
            this.$store.commit("back/setSiderDatas", data.data);
            this.updateHeaderName(name);
            this.$router.push({
              name,
              query: { toSystem: name },
            });
          })
          .catch((error) => {
            // 错误分为 status-请求错误 和 code-账号密码错误
            console.log(error);
            error ? this.$Message.error(error.msg) : "";
          });
      }
    },
    updateHeaderName(name) {
      this.$store.commit("back/setActiveHeaderName", name);
    },
  },
  mounted() {
    this.updateHeaderName(this.$route.query.toSystem);
  },
};
</script>

<style lang="less" scoped>
.header {
  height: @back-header-height;

  .ivu-col {
    height: 100%;
    overflow: hidden;
    text-align: left;
    &.title {
      .logo {
        height: 4vh;
        // width: 30.5vw;
        vertical-align: middle;
        margin-left: 1vw;
      }
    }

    .title-wrapper,
    .header-item,
    .tool-wrapper {
      line-height: @back-header-height;
    }

    .header-item {
      margin: 0 1.5vw;
      padding: 0;
      display: inline-block;
      position: relative;
      color: @theme-grey;
      // 因需求需要隐藏自带下划线
      &.ivu-menu-item-active,
      &:hover {
        color: @theme-white;
        border-bottom-color: transparent;
      }
      // 因需求需要自制下划线
      &.ivu-menu-item-active::after,
      &:hover::after {
        border-bottom: 3px solid @theme-white;
      }
      &::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 100%;
        bottom: 2.2vh;
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

      .tool-item {
        margin-right: 1.7vw;
      }
      .badge {
        line-height: 1;
      }
      img {
        vertical-align: middle;
        height: 2.5vh;
        width: 2.5vh;

        &:hover {
          cursor: pointer;
          // color: rgba(@theme-grey, 0.7);
        }
      }
      .ivu-avatar {
        margin-left: 1.7vw;
        height: 4vh;
        width: 4vh;
      }
    }
  }
}
</style>