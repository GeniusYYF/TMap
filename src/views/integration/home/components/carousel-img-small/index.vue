<template>
  <Carousel
    class="carousel-small"
    v-model="value"
    autoplay
    :autoplay-speed="5000"
  >
    <CarouselItem v-for="(item, i) in imgList" :key="i">
      <img
        class="img"
        :src="require(`@/assets/integration/home/${item.name}.jpg`)"
      />
      <div class="title">
        <span>{{ item.title }}</span>
      </div>
    </CarouselItem>
  </Carousel>
</template>

<script>
export default {
  name: "CarouselImgSamll",
  data() {
    return {
      value: 0,
      imgList: [
        {
          name: "img-small1",
          title: "丰县大沙河国家级水利风景区 再添1个国家级、3个省级水利风景区",
        },
        {
          name: "img-small2",
          title: "新建成的丰县付庄水厂 全市城乡供水一体化新格局基本形成",
        },
        {
          name: "img-small3",
          title: "荆马河污水处理厂 《徐州市排水与污水处理条例》通过审议",
        },
        {
          name: "img-small4",
          title: "新城区大龙湖 最严格水资源管理进入全省优秀方阵",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.carousel-small {
  // 让走马灯尺寸自适应
  &,
  /deep/ .ivu-carousel-list,
  /deep/ .ivu-carousel-track {
    height: 100%;
  }

  /deep/ .ivu-carousel-item {
    height: 100% !important;
  }

  .img {
    height: inherit;
    width: inherit;
  }

  .title {
    // 走马灯有的时候会底部会留5px空白
    margin-top: -55px;
    height: 50px;
    line-height: 50px;
    position: relative;
    color: rgb(255, 255, 255);
    font-size: 15px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 1vw;

    span:hover {
      cursor: pointer;
      color: @theme-blue;
    }
  }

  // 更改组件内部dots
  /deep/ .ivu-carousel-dots {
    bottom: 0;
    right: 1vw;
    width: auto;
    height: auto;

    li {
      margin: 7px;
      vertical-align: middle;

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