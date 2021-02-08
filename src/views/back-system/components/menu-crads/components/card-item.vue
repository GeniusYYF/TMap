<template>
  <div class="card-item">
    <router-link
      class="item"
      :class="{ active: name === activeName }"
      tag="div"
      :to="{
        path,
        query: { ...$route.query, title, icon, name },
      }"
    >
      <Icon v-if="icon" class="icon" :type="icon" />
      <span class="title">{{ title }}</span>
    </router-link>

    <span
      v-if="!noCloseNames.includes(name)"
      class="close"
      @click="$store.dispatch('back/delOpenMenusAction', { i, cb })"
      >×
    </span>
  </div>
</template>

<script>
export default {
  props: {
    i: {
      default: 0,
      type: Number,
    },
    title: {
      default: "",
      type: String,
    },
    icon: {
      default: "",
      type: String,
    },
    name: {
      default: "1",
      type: String,
    },
    path: {
      default: "1",
      type: String,
    },
    activeName: {
      default: "1",
      type: String,
    },
  },
  computed: {
    noCloseNames() {
      return this.$store.getters["back/getNoCloseNames"];
    },
  },
  methods: {
    cb(route) {
      if (route) {
        this.$router.push({
          path: route.path,
          query: {
            ...this.$route.query,
            title: route.title,
            icon: route.icon,
            name: route.name,
          },
        });
      } else {
        this.$router.push({
          path: "/back-system/system2/empty",
          // query: { ...this.$route.query },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.card-item {
  position: relative;
  display: inline-block;
  height: @back-system2-menu-cards-item-height;
  line-height: @back-system2-menu-cards-item-height;
  vertical-align: bottom;
  .item {
    display: inline-block;
    // height: inherit;
    // line-height: inherit;
    padding: 0 15px 0 10px;
    margin: 0 0.1vw;
    background-color: #fff;
    border: 1px solid #dadfe4;
    border-radius: 5px 5px 0px 0px;

    &.active {
      background-color: #e6f3fa; // #e6f3fa;
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(240, 250, 255, 0.9);
    }

    .title {
      font-size: 1.5vh;
      margin: 0 5px;
      vertical-align: middle;
    }

    .icon {
      font-size: 2.5vh;
      vertical-align: middle;
    }
  }
  .close {
    position: absolute;
    line-height: 1;
    right: 5px;
    top: 0;
    color: #bfc5ca;
    font-size: 2.5vh;
    &:hover {
      cursor: pointer;
      color: rgba(191, 197, 202, 0.3);
      font-weight: 700;
    }
  }
}
</style>