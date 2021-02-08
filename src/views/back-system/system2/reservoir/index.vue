<template>
  <div>
    <MySearch />
    <MyTable />
  </div>
</template>

<script>
import MySearch from "./components/search";
import MyTable from "./components/table";

export default {
  components: { MySearch, MyTable },
};
</script>

<style lang="less" scoped>
</style>