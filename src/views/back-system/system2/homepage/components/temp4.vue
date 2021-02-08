<template>
  <Card>
    <div slot="title">{{ title }}</div>
    <div ref="bar" class="bar" :style="{ width }"></div>
  </Card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "XXX" },
  },
  data() {
    return {
      width: false,
      options: {
        tooltip: {
          trigger: "axis",
          // formatter:"{a}，{b},{c}",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          //  confine:true, // 将提示框固定在本div内
          appendToBody: true, // 将提示框插入body中，不会被hidden
        },
        legend: {
          data: ["未完成项目", "未拨付经费"],
          top: 10,
          itemWidth: 15,
          itemHeight: 8,
          textStyle: { fontSize: 10 },
        },
        grid: {
          left: "3%",
          right: "2%",
          top: "30%",
          // bottom: "3%",
          height: "inherit",
          width: "inherit",
          containLabel: true,
        },
        // 保存图片
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        xAxis: {
          type: "category",
          data: ["陆", "海", "空", "天", "火"],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: [
          {
            // type: "value",
            // name: "",
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            // axisLabel: {
            //   formatter: "{value}\n",
            // },
            min: 0,
            max: 30,
            // interval: 50,
          },
          {
            type: "value",
            name: "金额（亿）",
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            min: 0,
            max: 30,
          },
        ],
        series: [
          {
            type: "bar",
            name: "未完成项目",
            showBackground: false,
            barWidth: 15,
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#78BFF1" },
                // { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#4CA0F0" },
              ]),
            },
            // stack: "bar",
            // emphasis: {
            //   focus: "series",
            // },
            data: [18, 16, 13, 22, 20],
          },
          {
            type: "line",
            name: "未拨付经费",
            // stack: "bar",
            // smooth: true,
            // symbol: "circle",
            // symbolSize: 5,
            itemStyle: {
              color: "rgba(90, 210, 167,.5)",
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(90, 210, 167,.3)",
                },
                {
                  offset: 0.5,
                  color: "rgba(90, 210, 167,.1)",
                },
                {
                  offset: 1,
                  color: "rgba(255, 255, 255,.1)",
                },
              ]),
            },
            // emphasis: {
            //   focus: "series",
            // },
            data: [16, 22, 10, 20, 25],
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      // 在初始化echarts前（尺寸未被改变前），设定具体容器的px（将之前不能确定的100%设置为具体像素值）
      this.width = this.$refs.bar.offsetWidth + "px";
      console.log(this.width);
      this.$echarts.init(this.$refs.bar).setOption(this.options);
    });
  },
};
</script>

<style lang="less" scoped>
.bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 99%; // 设置100%会出现滚动条
  width: 100%;
}
</style>