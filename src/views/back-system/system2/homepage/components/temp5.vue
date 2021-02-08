<template>
  <Card class="card">
    <div slot="title">{{ title }}</div>

    <div class="list">
      <div class="list-item" v-for="(item, i) in list" :key="i">
        <span class="icon"
          ><img :src="require('@/assets/back-system/system2/homepage/矩形.png')" />
        </span>
        <span class="title">{{ item.title }}</span>
        <span class="date">{{ item.date }}</span>

        <div>
          <span class="desc">{{ item.desc }}</span>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "XXX" },
  },
  data() {
    return {
      list: [
        {
          title:
            "【预研】XXXXXXXXXXXXX保障技术保障技术保障技术保障技术保障技术保障技术",
          date: "2020/7/21",
          desc: "完成合同签订。",
        },
        {
          title:
            "【预研】XXXXXXXXXXXXX保障技术保障技术保障技术保障技术保障技术保障技术",
          date: "2020/7/21",
          desc: "完成合同签订。",
        },
        {
          title:
            "【预研】XXXXXXXXXXXXX保障技术保障技术保障技术保障技术保障技术保障技术",
          date: "2020/7/21",
          desc: "完成合同签订。",
        },
        {
          title:
            "【预研】XXXXXXXXXXXXX保障技术保障技术保障技术保障技术保障技术保障技术",
          date: "2020/7/21",
          desc: "完成合同签订。",
        },
        {
          title:
            "【预研】XXXXXXXXXXXXX保障技术保障技术保障技术保障技术保障技术保障技术",
          date: "2020/7/21",
          desc: "完成合同签订。",
        },
        {
          title:
            "【预研】XXXXXXXXXXXXX保障技术保障技术保障技术保障技术保障技术保障技术",
          date: "2020/7/21",
          desc: "完成合同签订。",
        },
        {
          title:
            "【预研】XXXXXXXXXXXXX保障技术保障技术保障技术保障技术保障技术保障技术",
          date: "2020/7/21",
          desc: "完成合同签订。",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.card {
  height: @back-system2-content-box3-height !important;
  /deep/ .ivu-card-body {
    padding: 10px 16px;
  }
}

.list {
  text-align: left;

  .list-item {
    padding: 10px 0;
    .icon {
      width: 5%;
    }

    .title {
      width: 75%;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 1.8vh;
      color: #282d30;
      vertical-align: middle;

      &:hover {
        color: @theme-blue;
        cursor: pointer;
      }
    }
    .date {
      width: 15%;
      margin-left: 5%;
      display: inline-block;
      font-size: 1.5vh;
      color: #999999;
      text-align: right;
    }
    .desc {
      padding-left: 20%;
      font-size: 1.5vh;
      color: #999999;
    }
  }
}
</style>