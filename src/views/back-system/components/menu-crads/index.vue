<template>
  <div class="cards-wrapper scroll-middle">
    <div class="cards">
      <CardItem
        v-for="(item, i) in openMenus"
        :key="i"
        :i="i"
        :title="item.title"
        :icon="item.icon"
        :name="item.name"
        :path="item.path"
        :activeName="activeName"
      />
    </div>
  </div>
</template>

<script>
import CardItem from "./components/card-item";

export default {
  components: { CardItem },
  computed: {
    openMenus() {
      return this.$store.getters["back/getOpenMenus"];
    },
    activeName() {
      return this.$store.getters["back/getActiveName"];
    },
  },
  watch: {
    $route(to) {
      // 更新menu-cards
      this.$store.dispatch("back/addOpenMenusAction", to.query);
    },
  },
  mounted() {
    setTimeout(() => {
      // 确保路由、侧边栏、选项卡激活状态一致
      if (this.$route.name !== "Empty")
        this.$store.dispatch("back/unifyRefreshMenu", this.$route.query);
      // this.$router.push("homepage")
    });
  },
};
</script>

<style lang="less" scoped>
.cards-wrapper {
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #fff;
  border-bottom: 1px solid #ced4d5;
}
.cards {
  position: relative;
  width: max-content;
  height: @back-system2-menu-cards-height;
  line-height: @back-system2-menu-cards-height;
  padding: 0 10px;
  text-align: left;
  color: #666;
}
</style>