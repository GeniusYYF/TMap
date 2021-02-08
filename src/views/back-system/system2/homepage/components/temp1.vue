<template>
  <Card>
    <div slot="title">{{ title }}</div>
    <Row>
      <Col span="12" class="left">
        <div>
          <img
            class="img"
            :src="require('@/assets/back-system/system2/homepage/矩形.png')"
          />
          <span class="num">3455</span>
          <span class="unit">项</span>
        </div>
        <div class="sum">总数量：4，500项</div>
      </Col>
      <Col span="12" class="right">
        <i-circle
          class="circle"
          :percent="percent"
          dashboard
          stroke-linecap="square"
          :stroke-width="10"
          :stroke-color="['#4CA0F0', '#8BCDF2']"
          :trail-width="9"
        >
          <span class="circle-inner">
            <div class="text">使用率</div>
            <Button
              class="btn"
              type="info"
              ghost
              shape="circle"
              size="small"
              @click="percent !== 100 ? percent++ : ''"
              >{{ percent }}%
            </Button>
          </span>
        </i-circle>
      </Col>
    </Row>
  </Card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "XXX" },
  },
  data() {
    return {
      percent: 24,
    };
  },
};
</script>

<style lang="less" scoped>
.left {
  .img {
  }

  .num {
    font-size: 4vh;
    margin: 0 10px;
    vertical-align: middle;
  }

  .unit,
  .sum {
    font-size: 1.5vh;
    color: #9b9eac;
  }
  .sum {
    margin-left: 30px;
  }
}
.right {
  .circle {
    position: absolute;
    left: 0;
    right: 0;
    margin: -20px auto;
    height: 15vh !important;
    width: 15vh !important;

    .circle-inner {
      font-size: 2vh;

      .text {
        line-height: 6vh;
      }

      .btn {
      }
    }
  }
}
</style>