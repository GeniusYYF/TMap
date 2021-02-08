<template>
  <Card>
    <div slot="title">{{ title }}</div>
    <div class="content">
      <img class="img" :src="require('@/assets/back-system/system2/homepage/0.png')" />
      <img class="img" :src="require('@/assets/back-system/system2/homepage/1.png')" />
      <img class="img" :src="require('@/assets/back-system/system2/homepage/2.png')" />
      <img class="img" :src="require('@/assets/back-system/system2/homepage/7.png')" />
      <span class="unit">天</span>
    </div>
  </Card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "XXX" },
  },
};
</script>

<style lang="less" scoped>
.content {
  img {
    margin: 3px 10px;
    padding: 10px;
    height: 8vh;
    background: #f7f7f7;
  }
  .unit {
    vertical-align: text-bottom;
    color: #999999;
    font-size: 2.2vh;
  }
}
</style>