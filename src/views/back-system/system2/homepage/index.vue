<template>
  <Row>
    <Col span="16">
      <Row>
        <Col span="12">
          <Temp1
            class="scroll-middle"
            title="未完成项目数"
            str1="3455 项"
            str2="4,500"
        /></Col>
        <Col span="12">
          <Temp2
            class="scroll-middle"
            title="未拨付经费"
            str1="345"
            str2="7,500"
        /></Col>

        <Col span="24"
          ><Temp4 class="scroll-middle" title="按建设单位分"
        /></Col>
        <Col span="24"
          ><Temp4 class="scroll-middle" title="按项目类别分"
        /></Col>
        <Col span="24"
          ><Temp4 class="scroll-middle" title="按承研单位分"
        /></Col>
      </Row>
    </Col>

    <Col span="8">
      <Row>
        <Col span="24"><Temp3 class="scroll-middle" title="XXXX倒计时" /></Col>
        <Col span="24"><Temp5 class="scroll-middle" title="工作动态" /></Col>
      </Row>
    </Col>
  </Row>
</template>

<script>
import Temp1 from "./components/temp1";
import Temp2 from "./components/temp2";
import Temp3 from "./components/temp3";
import Temp4 from "./components/temp4";
import Temp5 from "./components/temp5";

export default {
  components: { Temp1, Temp2, Temp3, Temp4, Temp5 },
};
</script>

<style lang="less" scoped>
.ivu-row {
  margin: -@back-system2-content-box-space;
  .ivu-col {
    padding: @back-system2-content-box-space;

    /deep/ .ivu-card {
      height: @back-system2-content-box-height;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      border: none;

      .ivu-card-head {
        text-align: left;
        padding-bottom: 0;
        border: none;
        font-size: 2vh;
        // font-weight: 700;
        font-family: "PingFangTeCuTi";
      }
    }
  }
}
</style>