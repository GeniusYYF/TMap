<template>
  <Tabs value="1" class="msg-tabs" :animated="false">
    <TabPane label="水务要闻" name="1">
      <div class="line"></div>
      <div class="row" v-for="(item, i) in ShuiWuList" :key="i">
        <div class="col-0"><div class="circle"></div></div>
        <div class="col-1">{{ item.title }}</div>
        <div class="col-2">{{ item.date }}</div>
      </div>
    </TabPane>
    <TabPane label="地方水事" name="2">标签二的内容</TabPane>
    <TabPane label="基层工作" name="3">标签三的内容</TabPane>
    <TabPane label="热点导读" name="4">标签四的内容</TabPane>
  </Tabs>
</template>

<script>
export default {
  data() {
    return {
      ShuiWuList: [
        {
          title:
            "徐州市区奎河综合治理工程（苏堤路~袁桥闸）施工6标段（市区泵站）啦啦啦啦啦",
          date: "2020-12-23",
        },
        {
          title: "邳州市2021年度国家水土保持重点工程黄楼水库小流域综合治理..",
          date: "2020-12-23",
        },
        {
          title: "市河长办赴济宁协调推进南四湖水环境治理保护工作",
          date: "2020-12-23",
        },
        {
          title: "市河长办赴济宁协调推 进南四湖水环境治理保护工作",
          date: "2020-12-23",
        },
        { title: "2020年XXXXXXXX项目应急防控", date: "2020-12-23" },
        { title: "2020年XXXXXXXX项目应急防控", date: "2020-12-23" },
        { title: "2020年XXXXXXXX项目应急防控", date: "2020-12-23" },
        { title: "2020年XXXXXXXX项目应急防控", date: "2020-12-23" },
        { title: "2020年XXXXXXXX项目应急防控", date: "2020-12-23" },
        { title: "2020年XXXXXXXX项目应急防控", date: "2020-12-23" },
        { title: "2020年XXXXXXXX项目应急防控", date: "2020-12-23" },
        { title: "2020年XXXXXXXX项目应急防控", date: "2020-12-23" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.msg-tabs {
  height: 100%;

  /deep/ .ivu-tabs-bar {
    // navbar与content距离
    // margin-bottom: 0;

    .ivu-tabs-nav {
      font-size: 2vh;
      color: @theme-black;
      width: 100%;

      .ivu-tabs-tab {
        width: 25%;
        margin: 0;
        &.ivu-tabs-tab-active,
        &:hover {
          color: @theme-blue;
        }
      }
      .ivu-tabs-ink-bar {
        background-color: @theme-blue;
        bottom: 0;
        height: 3px;
      }
    }
  }

  /deep/ .ivu-tabs-content {
    height: calc(100% - 61px); // 100% - 45px - 16px 自带margin-top:16px
    overflow-y: auto;
    .ivu-tabs-tabpane {
      position: relative;
    }
  }
  // 圆圈的竖线
  .line {
    position: absolute;
    left: 6px;
    border-right: 1px solid rgb(235, 235, 235);
    width: 0px;
    height: calc(100% - 50px); // 50是一行row的高度
    top: 25px; // 50/2
  }

  .row {
    line-height: 50px;
    color: @theme-black;
    height: 50px;

    &:hover {
      color: @theme-blue;
      cursor: pointer;
      & .col-0 .circle::after {
        background-color: @theme-blue;
      }
    }
    .col-1,
    .col-2,
    .col-0 {
      display: inline-block;
      vertical-align: middle;
    }
    // 圆圈
    .col-0 {
      position: absolute;
      width: 0px;
      .circle {
        display: inline-block;
        width: 12px;
        height: 12px;
        background-color: #fff;
        line-height: 0;
        vertical-align: middle;

        &::after {
          content: "";
          display: inline-block;
          background-color: rgb(216, 216, 216);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 2px;
        }
      }
    }
    .col-1 {
      font-size: 2vh;
      width: 75%;
      margin-left: 5%;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-bottom: 1px dashed rgb(216, 216, 216);
    }
    .col-2 {
      font-size: 1.8vh;
      width: 20%;
      text-align: center;
      border-bottom: 1px dashed rgb(216, 216, 216);
    }
  }
}
</style>