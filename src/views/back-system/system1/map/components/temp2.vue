<template>
  <Card class="temp2">
    <div slot="title">{{ title }}</div>
    <a href="#" slot="extra"> 更多 </a>
    <span class="select-date-font">时间选择：</span>
    <Select v-model="selectVal" style="width: 50%" size="small">
      <Option value="0">2020年12月</Option>
      <Option value="1">2020年11月</Option>
      <Option value="2">2020年10月</Option>
    </Select>
    <RadioGroup class="radio" v-model="radioVal" size="small">
      <Radio label="已选中项"></Radio>
      <Radio label="未选中项"></Radio>
      <Radio label="其他"></Radio>
    </RadioGroup>

    <Tabs class="tabs" :value="tabsVal">
      <TabPane label="选中文本" name="0">
        <span>山洪站：准备转移<span class="num num-yellow">39</span> </span>
        <span>立即转移： <span class="num num-red">36</span></span>

        <div class="row title">
          <span class="col1">量级</span>
          <span class="col2">量级范围</span>
          <span class="col3">站点数</span>
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
      selectVal: "0",
      radioVal: "其他",
      tabsVal: "0",
      list: [
        { col1: "特大暴雨", col2: "250mm以上", col3: "0" },
        { col1: "大暴雨", col2: "150mm-250mm", col3: "0" },
        { col1: "暴雨", col2: "50m-100mm", col3: "0" },
        { col1: "大雨", col2: "25mm-50mm", col3: "0" },
        { col1: "中雨", col2: "10mm-25mm", col3: "0" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.temp2 {
  .select-date-font {
    font-size: 1vh;
  }

  .radio {
    width: 100%;
    margin: 5px 0;
    .ivu-radio-group-item {
      font-size: 1vh;
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