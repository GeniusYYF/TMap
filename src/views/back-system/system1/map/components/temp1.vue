<template>
  <Card>
    <div slot="title">{{ title }}</div>
    <a href="#" slot="extra"> 更多 </a>
    <div ref="pie1" class="pie1"></div>
    <div ref="pie2" class="pie2"></div>
  </Card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "XXX" },
  },
  data() {
    return {
      highPX: false, // 是否高分辨率
      HighStandard: 800, // 高分辨率标准
      options1: {
        color: ["#F7BE00", "#5A8EF8"],
        tooltip: {
          trigger: "item",
          confine: true,
          appendToBody: true,
          formatter: "{b} {c}%",
        },
        legend: {
          data: ["已使用", "未使用"],
          bottom: 18,
          itemWidth: 7,
          itemHeight: 7,
          icon: "circle",
          textStyle: { fontSize: "13vw" },
        },
        series: [
          {
            // name: "访问来源",
            type: "pie",
            radius: ["25%", "50%"],
            center: ["50%", "45%"],
            // avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 37, name: "已使用" },
              { value: 73, name: "未使用" },
            ],
          },
        ],
      },
      optionsHigh1: {
        color: ["#F7BE00", "#5A8EF8"],
        tooltip: {
          trigger: "item",
          confine: true,
          appendToBody: true,
          formatter: "{b} {c}%",
        },
        legend: {
          data: ["已使用", "未使用"],
          bottom: 30,
          itemWidth: 7,
          itemHeight: 7,
          icon: "circle",
          textStyle: { fontSize: "13vw" },
        },
        series: [
          {
            // name: "访问来源",
            type: "pie",
            radius: ["35%", "60%"],
            center: ["50%", "50%"],
            // avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 37, name: "已使用" },
              { value: 73, name: "未使用" },
            ],
          },
        ],
      },
      options2: {
        color: ["#F7BE00", "#5A8EF8", "#75CBED", "#FF8658", "#73DEB3"],
        tooltip: {
          trigger: "item",
          confine: true,
          appendToBody: true,
          formatter: "{b} {c}%",
        },
        legend: {
          data: ["已使用", "未使用", "未通过", "未验收", "未见明"],
          bottom: 0,
          itemWidth: 7,
          itemHeight: 10,
          icon: "circle",
          textStyle: { fontSize: 12 },
          // type: 'scroll',
          // pageIconSize:7,
          // pageButtonItemGap:3,
          // pageButtonGap:0,
        },
        series: [
          {
            // name: "访问来源",
            type: "pie",
            radius: ["25%", "50%"],
            center: ["50%", "45%"],
            // avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 37, name: "已使用" },
              { value: 10, name: "未使用" },
              { value: 25, name: "未通过" },
              { value: 23, name: "未验收" },
              { value: 5, name: "未见明" },
            ],
          },
        ],
      },
      optionsHigh2: {
        color: ["#F7BE00", "#5A8EF8", "#75CBED", "#FF8658", "#73DEB3"],
        tooltip: {
          trigger: "item",
          confine: true,
          appendToBody: true,
          formatter: "{b} {c}%",
        },
        legend: {
          data: ["已使用", "未使用", "未通过", "未验收", "未见明"],
          bottom: 10,
          itemWidth: 7,
          itemHeight: 10,
          icon: "circle",
          textStyle: { fontSize: 12 },
          // type: 'scroll',
          // pageIconSize:7,
          // pageButtonItemGap:3,
          // pageButtonGap:0,
        },
        series: [
          {
            // name: "访问来源",
            type: "pie",
           radius: ["35%", "60%"],
            center: ["50%", "50%"],
            // avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 37, name: "已使用" },
              { value: 10, name: "未使用" },
              { value: 25, name: "未通过" },
              { value: 23, name: "未验收" },
              { value: 5, name: "未见明" },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    this.highPX = document.body.clientHeight > this.HighStandard;
    this.$nextTick(() => {
      this.$echarts
        .init(this.$refs.pie1)
        .setOption(this.highPX ? this.optionsHigh1 : this.options1);
      this.$echarts
        .init(this.$refs.pie2)
        .setOption(this.highPX ? this.optionsHigh2 : this.options2);
    });
  },
};
</script>

<style lang="less" scoped>
.pie1,
.pie2 {
  position: absolute;
  top: 0;
  height: 99%; // 设置100%会出现滚动条
  width: 50%;
}
.pie1 {
  left: 0;
}
.pie2 {
  left: 50%;
}
</style>