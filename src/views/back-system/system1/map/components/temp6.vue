<template>
  <Card>
    <div slot="title">{{ title }}</div>
    <a href="#" slot="extra"> 更多 </a>

    <Tabs class="tabs" :value="tabsVal">
      <TabPane label="选中文本" name="0">
        <div class="text">
          <div>
            预警村庄数:危险 <span class="num num-yellow">0</span> 警戒<span
              class="num num-red"
              >0</span
            >关注<span class="num num-green">0</span>
          </div>
          <div>
            预警水库数:危险 <span class="num num-yellow">0</span> 警戒<span
              class="num num-red"
              >0</span
            >关注<span class="num num-green">0</span>
          </div>
          <div>
            预警河道数:危险 <span class="num num-yellow">0</span> 警戒<span
              class="num num-red"
              >0</span
            >关注<span class="num num-green">0</span>
          </div>
          <div>
            预警河道数:危险 <span class="num num-yellow">0</span> 警戒<span
              class="num num-red"
              >0</span
            >关注<span class="num num-green">0</span>
          </div>
        </div>

        <Table :columns="columns" :data="tableData" border size="small"></Table>
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
      columns: [
        {
          title: "市名称",
          key: "shiMingCheng",
          align: "center",
        },
        {
          title: "村庄数（个）",
          align: "center",
          children: [
            {
              title: "危险",
              key: "weiXian",
              align: "center",
            },
            {
              title: "警戒",
              key: "jingJie",
              align: "center",
            },
            {
              title: "关注",
              key: "guanZhu",
              align: "center",
            },
          ],
        },
      ],
      tableData: [
        { shiMingCheng: "XXX市", weiXian: "0", jingJie: "0", guanZhu: "0" },
        { shiMingCheng: "XXX市", weiXian: "0", jingJie: "0", guanZhu: "0" },
        { shiMingCheng: "XXX市", weiXian: "0", jingJie: "0", guanZhu: "0" },
        { shiMingCheng: "XXX市", weiXian: "0", jingJie: "0", guanZhu: "0" },
        { shiMingCheng: "XXX市", weiXian: "0", jingJie: "0", guanZhu: "0" },
        { shiMingCheng: "XXX市", weiXian: "0", jingJie: "0", guanZhu: "0" },
        { shiMingCheng: "XXX市", weiXian: "0", jingJie: "0", guanZhu: "0" },
        { shiMingCheng: "XXX市", weiXian: "0", jingJie: "0", guanZhu: "0" },
        { shiMingCheng: "XXX市", weiXian: "0", jingJie: "0", guanZhu: "0" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
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

  .text {
    font-size: 1vh;
    line-height: 1;
    margin: 1vh 0;

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
      &.num-green {
        color: @back-system1-green;
      }
    }
  }

  /deep/ .ivu-table {
    .ivu-table-header thead tr th {
      padding: 1vh 0;
      .ivu-table-cell {
        padding: 0;
      }
    }
    .ivu-table-row td {
      height: 4vh;
      .ivu-table-cell {
        padding: 0;
      }
    }
  }
}
</style>