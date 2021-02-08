<template>
  <Card>
    <div class="left">
      <img
        :src="require('@/assets/back-system/system1/map/people-group.png')"
        alt=""
      />
      <br />
      <span><span class="num num-blue">14</span>人</span>
      <br />
      <span> <span class="circle circle-blue"></span>当前在线人数</span>
    </div>

    <div class="right">
      <img
        :src="require('@/assets/back-system/system1/map/history.png')"
        alt=""
      />
      <br />
      <span><span class="num num-green">27332</span>次</span>
      <br />
      <span><span class="circle circle-green"></span>历史在线人数</span>
    </div>
  </Card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
/deep/ .ivu-card-body {
  height: 100%;
}
.left,
.right {
  display: inline-block;
  height: 100%;
  width: 46%;
  margin: 0 2%;
  padding: 2vh 7px;
  background-color: #f8f8f8;
  text-align: center;

  span {
    font-size: 1vh;
    color: #5c6268;
    white-space: nowrap;
  }
  img {
    height: 3vh;
  }
  .num {
    font-size: @back-system1-num-size;
    line-height: 1;
    font-family: "YouSheBiaoTiHei";
    &.num-blue {
      color: @back-system1-blue;
    }
    &.num-green {
      color: @back-system1-green;
    }
  }

  .circle {
    display: inline-block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    margin: 0 5px 0 0;
    &.circle-blue {
      background-color: @back-system1-blue;
    }
    &.circle-green {
      background-color: @back-system1-green;
    }
  }
}
</style>