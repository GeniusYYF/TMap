<template>
  <Row>
    <Col span="24"> <Temp4 class="temp4 scroll-middle" /> </Col>
  </Row>
</template>

<script>
import Temp4 from "./components/temp4";


export default {
  components: { Temp4 },
};
</script>

<style lang="less" scoped>
.ivu-row {
  margin: -@back-system1-content-box-space;
  .ivu-col {
    padding: @back-system1-content-box-space;

    /deep/ .ivu-card {
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      border: none;
      text-align: left;

      .ivu-card-head {
        text-align: left;
        padding-bottom: 0;
        border: none;
        font-size: 2vh;
        // font-weight: 700;
        font-family: "PingFangTeCuTi";
      }
      .ivu-card-extra {
        line-height: 1;
        a {
          color: #86888c;
          font-size: 1vh;
        }
      }
    }

    .temp1 {
      height: @back-system1-box1-height;
    }
    .temp2 {
      height: @back-system1-box2-height;
    }
    .temp3 {
      height: @back-system1-box3-height;
    }
    .temp4 {
      height: @back-system1-box4-height;
    }
    .temp5 {
      height: @back-system1-box5-height;
    }
    .temp6 {
      height: @back-system1-box6-height;
    }
    .temp7 {
      height: @back-system1-box7-height;
    }
  }
}
</style>