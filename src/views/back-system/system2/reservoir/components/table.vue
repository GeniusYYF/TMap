<template>
  <div class="table-wrapper">
    <Table class="table" :columns="columns" :data="tableData"> </Table>
    <Page class="page" :total="100" show-elevator show-sizer transfer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "序号",
          key: "0",
          align: "center",
          render: (h, params) => {
            return h("div", params.index + 1);
          },
        },
        {
          title: "工作名称",
          key: "1",
          align: "center",
        },
        {
          title: "设备类型",
          key: "2",
          align: "center",
        },
        {
          title: "设备编号",
          key: "3",
          align: "center",
        },
        {
          title: "报警时间",
          key: "4",
          align: "center",
        },
        {
          title: "报警类型",
          key: "5",
          align: "center",
        },
        {
          title: "报警等级",
          key: "6",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("Badge", {
                props: {
                  status: "error",
                },
              }),
              h("strong", params.row["6"]),
            ]);
          },
        },
        {
          title: "操作",
          key: "7",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "a",
                {
                  props: {},
                  style: {
                    marginRight: "20px",
                  },
                  on: {
                    click: () => {
                      this.show(params.index,params);
                    },
                  },
                },
                "查看"
              ),
              h(
                "a",
                {
                  props: {},
                  on: {
                    click: () => {
                      this.remove(params.index);
                    },
                  },
                },
                "处理"
              ),
            ]);
          },
        },
      ],
      tableData: [
        {
          1: "xx淤地坝",
          2: "雨量计",
          3: "xxxxxx",
          4: "2020-09-15",
          5: "设备异常",
          6: "红色预警",
        },
        {
          1: "xx淤地坝",
          2: "雨量计",
          3: "xxxxxx",
          4: "2020-09-15",
          5: "设备异常",
          6: "红色预警",
        },
        {
          1: "xx淤地坝",
          2: "雨量计",
          3: "xxxxxx",
          4: "2020-09-15",
          5: "设备异常",
          6: "红色预警",
        },
        {
          1: "xx淤地坝",
          2: "雨量计",
          3: "xxxxxx",
          4: "2020-09-15",
          5: "设备异常",
          6: "红色预警",
        },
        {
          1: "xx淤地坝",
          2: "雨量计",
          3: "xxxxxx",
          4: "2020-09-15",
          5: "设备异常",
          6: "红色预警",
        },
        {
          1: "xx淤地坝",
          2: "雨量计",
          3: "xxxxxx",
          4: "2020-09-15",
          5: "设备异常",
          6: "红色预警",
        },
        {
          1: "xx淤地坝",
          2: "雨量计",
          3: "xxxxxx",
          4: "2020-09-15",
          5: "设备异常",
          6: "红色预警",
        },
        {
          1: "xx淤地坝",
          2: "雨量计",
          3: "xxxxxx",
          4: "2020-09-15",
          5: "设备异常",
          6: "红色预警",
        },
        {
          1: "xx淤地坝",
          2: "雨量计",
          3: "xxxxxx",
          4: "2020-09-15",
          5: "设备异常",
          6: "红色预警",
        },
        {
          1: "xx淤地坝",
          2: "雨量计",
          3: "xxxxxx",
          4: "2020-09-15",
          5: "设备异常",
          6: "红色预警",
        },
      ],
    };
  },
  methods: {
    show(i,row) {
      console.log(i,row);
    },
    remove(i) {
      console.log(i);
    },
  },
};
</script>

<style lang="less" scoped>
.table-wrapper {
  padding: @back-system2-content-padding;
  background-color: @theme-white;
  margin: @back-system2-content-padding 0;

  .page {
    margin-top: @back-system2-content-padding;
    text-align: right;
  }
}
</style>