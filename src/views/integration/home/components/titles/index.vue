<template>
  <Row class="titles">
    <Col class="item" v-for="(item, i) in sysList" :key="i" span="2">
      <img
        class="img"
        :src="require(`@/assets/integration/home/${item.icon}.png`)"
      />
      <div class="title">{{ item.title }}</div>
    </Col>
  </Row>
</template>

<script>
export default {
  data() {
    return {
      sysList: [
        { title: "防汛抗旱", icon: "5" },
        { title: "供水管理", icon: "6" },
        { title: "排水管理", icon: "7" },
        { title: "南水北调", icon: "8" },
        { title: "工程管理", icon: "9" },
        { title: "水资源管理", icon: "10" },
        { title: "农村水利管理", icon: "11" },
        { title: "城镇排水", icon: "1" },
        { title: "河长监督", icon: "2" },
        { title: "河湖管理", icon: "3" },
        { title: "水土保持", icon: "4" },
        { title: "协同办公", icon: "12" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.titles {
  margin-top: -100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 12px 10px;
  position: relative; // 防止被图片的relative覆盖背景色

  .item {
    line-height: 1;

    &:hover {
      cursor: pointer;
      .img {
        // background-color:rgba(@theme-blue, .3);
        box-shadow: inset 0 5px 10px rgba(@theme-blue, 0.5);
        border-radius: 50%;
      }
      .title {
        color: @theme-blue;
      }
    }

    .title {
      color: rgb(255, 255, 255);
      font-size: 16px; // 与图片一齐固定大小
    }
  }
}
</style>