<template>
  <Submenu v-if="item.children" :name="name">
    <template slot="title">
      <Icon v-if="item.icon" :type="item.icon" />
      <span>{{ item.title }}</span>
    </template>

    <MenuItemSelf
      v-for="(item2, j) in item.children"
      :key="j"
      :item="item2"
      :i="i"
      :name="name + '-' + (j + 1)"
    ></MenuItemSelf>
  </Submenu>

  <MenuItem
    v-else
    :name="name"
    :to="{
      path: item.path,
      query: {
        ...$route.query,
        title: item.title,
        icon: item.icon,
        name: name,
        path: item.path,
      },
    }"
  >
    <Icon v-if="item.icon" :type="item.icon" />
    <span>{{ item.title }}</span>
  </MenuItem>
</template>

<script>
export default {
  name: "MenuItemSelf",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    i: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: "1",
    },
  },
};
</script>

<style lang="less" scoped>
</style>