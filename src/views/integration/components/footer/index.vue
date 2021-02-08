<template>
  <div class="footer">
    <div>
      主办单位：徐州市水务局 | 联系方式：0516-80802017 | 邮政编码：221000
    </div>
    <div>版权所有：徐州市水务局 网站识别码：3203000033</div>
    <div>
      苏ICP备200003771号-1
      <span class="icon"
        ><img :src="require('@/assets/integration/footer/foot-icon.png')" />
      </span>
      苏公安网安备 32030302000772号
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  height: @integration-foot-height;
  width: 100%;
  padding: 5px 0 0;
  background-color: rgb(51, 71, 80);
  color: rgba(228, 227, 227, 0.7);
  font-size: 1.5vh;
  div {
    line-height: 2;
  }

  .icon {
    width: 18px;
    height: 20px;
    display: inline-block;
    vertical-align: top;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>