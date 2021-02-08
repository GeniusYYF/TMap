<template>
  <Card class="temp3">
    <div slot="title">{{ title }}</div>
    <a href="#" slot="extra"> 更多 </a>

    <span class="text">
      <div>河道水位站：超警戒 <span class="num num-red">0</span></div>
      <div>河道水位站：超警戒<span class="num num-yellow">0</span></div>
      <div>河道水位站：超警戒 <span class="num num-red">0</span></div>
    </span>

    <Tabs class="tabs" :value="tabsVal">
      <TabPane label="选中文本" name="0">
        <div class="row title">
          <span class="col1">站名</span>
          <span class="col2">上报时间</span>
          <span class="col3">水位</span>
        </div>
        <div class="row" v-for="(item, i) in list" :key="i">
          <span class="col1">{{ item.col1 }}</span>
          <span class="col2">{{ item.col2 }}</span>
          <span class="col3">{{ item.col3 }}</span>
        </div>
      </TabPane>
      <TabPane label="标准文本" name="1">标准文本</TabPane>
    </Tabs>
  </Card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "XXX" },
  },
  data() {
    return {
      tabsVal: "0",
      list: [
        { col1: "**站", col2: "08：00", col3: "100" },
        { col1: "**站", col2: "08：00", col3: "100" },
        { col1: "**站", col2: "08：00", col3: "100" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.temp3 {
  .text {
    font-size: 1vh;
    line-height: 1;
    div {
      width: 50%;
      display: inline-block;
    }
    .num {
      font-size: @back-system1-num-size;
      font-family: "YouSheBiaoTiHei";
      margin: 0 2%;
      &.num-yellow {
        color: @back-system1-yellow;
      }
      &.num-red {
        color: @back-system1-red;
      }
    }
  }

  .tabs {
    /deep/ .ivu-tabs-bar {
      margin-bottom: 0;
      .ivu-tabs-nav {
        width: 100%;

        .ivu-tabs-tab {
          width: 50%;
          text-align: center;
          // font-size: 1vh;
        }
      }
    }
    .row {
      background-color: #f8f8f8;
      margin: 7px 0;
      padding: 5px 10px;
      &.title {
        font-weight: 700;
        line-height: 1;
        background-color: transparent;
      }
      .col1,
      .col2,
      .col3 {
        display: inline-block;
      }
      .col1 {
        font-weight: 700;
        width: 35%;
      }
      .col2 {
        width: 45%;
      }
      .col3 {
        width: 20%;
        text-align: right;
      }
    }
  }
}
</style>