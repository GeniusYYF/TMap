<template>
  <div class="home">
    <CarouselImg />
    <Titles />
    <Row class="content">
      <Col span="12" class="col-1">
        <CarouselImgSmall />
      </Col>
      <Col span="12" class="col-2">
        <MsgTabs />
      </Col>
    </Row>
  </div>
</template>

<script>
import CarouselImg from "./components/carousel-img";
import Titles from "./components/titles";
import CarouselImgSmall from "./components/carousel-img-small";
import MsgTabs from "./components/msg-tabs";

export default {
  name: "Home",
  components: { CarouselImg, Titles, CarouselImgSmall, MsgTabs },
};
</script>

<style lang="less" scoped>
.home {
  overflow-x: hidden;

  .content {
    height: @integration-content-height;

    .col-1,
    .col-2 {
      height: 100%;
    }
    .col-1 {
      padding: @integration-content-carousel-padding;
    }
    .col-2 {
      padding: @integration-content-msg-padding;
    }
  }
}
</style>
