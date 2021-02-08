<template>
  <Tabs value="1" class="tabs">
    <TabPane label="选中文本" name="1">
      <Form class="form" :model="form" :label-width="80" inline>
        <FormItem label="时间">
          <DatePicker
            class="date-range"
            type="daterange"
            transfer
            separator=" 至 "
            v-model="form.dateRange"
          ></DatePicker>
        </FormItem>
        <FormItem label="报警等级">
          <Select v-model="form.select" transfer class="select">
            <Option value="beijing">一级</Option>
            <Option value="shanghai">二级</Option>
            <Option value="shenzhen">三级</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary">搜索</Button>
          <Button style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
    </TabPane>

    <TabPane label="标准文本" name="2">标准文本</TabPane>
  </Tabs>
</template>

<script>
export default {
  data() {
    return {
      form: {
        dateRange: [],
        select: "",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.tabs {
  background-color: @theme-white;
  padding: 0 @back-system2-content-padding;
  .form {
    text-align: left;

    .select {
      width: @form-item-long-width;
    }
  }
}
</style>