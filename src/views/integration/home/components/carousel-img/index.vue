<template>
  <Carousel class="carousel" v-model="value" autoplay :autoplay-speed="12000">
    <CarouselItem v-for="(item, i) in imgList" :key="i">
      <img
        class="img"
        :src="require(`@/assets/integration/home/${item.name}.jpg`)"
      />
    </CarouselItem>
  </Carousel>
</template>

<script>
export default {
  name: "CarouselImg",
  data() {
    return {
      value: 0,
      imgList: [
        { name: "img1" },
        { name: "img2" },
        { name: "img3" },
        { name: "img4" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.carousel {
  .img {
    height: inherit;
    width: 100%;
  }
  /deep/ .ivu-carousel-item {
    height: @integration-carousel-height !important;
  }
  // 更改组件内部dots
  /deep/ .ivu-carousel-dots {
    // top: 5vh;
    top: 0;
    bottom: 0;
    right: 5vw;
    margin: auto;
    width: 16px;
    height: fit-content;

    li {
      padding: 7px 0;
      margin: 0;
      button {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        opacity: 0.8;
        background-color: #f1f1f6;
      }
      &.ivu-carousel-active {
        button {
          border-radius: 50%;
          width: 16px;
          height: 16px;
          background-color: #fff;
          opacity: 1;
        }
      }
    }
  }
}
</style>