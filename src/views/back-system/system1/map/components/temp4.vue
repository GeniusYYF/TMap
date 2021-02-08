<template>
  <Card class="card">
    <div id="system1-map">
      <div ref="markModal">
        <div class="map-modal">
          <div class="title">{{ ofcusIconName }}(同步更新)</div>
          <div class="text">
            危险
            <span class="num num-yellow">
              {{ dangerNum }}<Icon type="md-add" @click="dangerNum++" />
            </span>
          </div>
        </div>
      </div>

      <div ref="copyright">
        <div class="cr">
          <span class="name">GeniusXYt:</span>
          <a href="https://blog.csdn.net/GeniusXYT" target="_blank">
            https://blog.csdn.net/GeniusXYT
          </a>
        </div>
      </div>

      <div
        ref="selfControl1"
        class="self-control1"
        @click="
          (e) => {
            e.stopPropagation();
          }
        "
      >
        <Icon
          class="icon"
          :class="{ active: showC1 }"
          @click="showC1 = !showC1"
          type="logo-freebsd-devil"
        />
        <div class="row-wrapper">
          <div class="row" :class="{ active: showC1 }">
            <span class="col">
              <span class="title">经度：</span>
              <span class="text">{{ $store.state.map.cX }}</span>
            </span>
            <span class="col">
              <span class="title">纬度：</span>
              <span class="text">{{ $store.state.map.cY }}</span>
            </span>
            <span class="col">
              <span class="title">中心点：</span>
              <Input
                v-if="cActive === 3"
                class="text active"
                style="width: 300px"
                :border="false"
                v-model="$store.state.map.centerPoint"
                @on-blur="updateCenter()"
              />
              <span v-else class="text may-active" @click="cActive = 3">
                {{ $store.state.map.centerPoint }}
              </span>
            </span>
            <span class="col">
              <span class="title">级别：</span>
              <InputNumber
                v-if="cActive === 4"
                class="text active"
                style="width: 70px"
                :max="18"
                :min="4"
                :border="false"
                v-model="$store.state.map.zoom"
                @on-change="$store.commit('map/updateMap')"
                @on-blur="cActive = 0"
              />
              <span
                v-else
                class="text may-active"
                :class="{ active: cActive === 4 }"
                @click="cActive = 4"
                >{{ $store.state.map.zoom }}
              </span>
            </span>
            <span class="col">
              <span class="title">画/测线：</span>
              <span
                class="text may-active"
                :class="{ active: cActive === 5 }"
                @click="
                  cActive = 5;
                  $store.state.map.polygonTool.close();
                  $store.state.map.lineTool.open();
                "
                >{{ $store.state.map.drawLine }}
              </span>
            </span>
            <span class="col">
              <span class="title">画/测面：</span>
              <span
                class="text may-active"
                :class="{ active: cActive === 6 }"
                @click="
                  cActive = 6;
                  $store.state.map.polygonTool.open();
                  $store.state.map.lineTool.close();
                "
                >{{ $store.state.map.drawArea }}
              </span>
            </span>
            <span class="col">
              <span class="title">单击标注：</span>
              <span
                class="text may-active"
                @click="
                  $store.state.map.startClickMark = !$store.state.map
                    .startClickMark
                "
                >{{ $store.state.map.startClickMark }}</span
              >
            </span>
          </div>
        </div>
      </div>

      <Spin class="spin" size="large" fix v-if="!loaded"></Spin>
    </div>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      loaded: false, // 是否加载完成，显示加载状态
      selectVal: "0",
      legends: [
        {
          title: "山洪风险-村庄",
          list: [
            { data: "危险", img: "danger" },
            { data: "警戒", img: "warning" },
            { data: "关注", img: "focus" },
          ],
        },
        {
          title: "雨量站",
          list: [
            { data: "正常", img: "icon-blue1" },
            { data: "准备转移", img: "icon-yellow1" },
            { data: "立即转移", img: "icon-red1" },
          ],
        },
        {
          title: "河道水位",
          list: [
            { data: "正常", img: "icon-blue2" },
            { data: "超警戒", img: "icon-red2" },
            { data: "超保证", img: "icon-yellow2" },
          ],
        },
        {
          title: "水库水位",
          list: [
            { data: "正常", img: "icon-blue3" },
            { data: "超汛限", img: "icon-red3" },
          ],
        },
        {
          title: "视频图像",
          list: [
            { data: "视频", img: "video" },
            { data: "图像", img: "image" },
          ],
        },
      ],
      dangerNum: 0,
      ofcusIconName: "",

      // 自定义控件变量
      cActive: 0,
      showC1: false,
    };
  },
  methods: {
    initMap() {
      /**
       * @module 地图配置
       */
      let id,
        zoom,
        centerPoint,
        icons,
        // markRandomRange,
        controls,
        menuItems,
        menuWidth;
      // map
      id = "system1-map";
      zoom = 12;
      centerPoint = [117.3, 34.18];
      // marks
      icons = [
        {
          name: "danger",
          iconName: "危险",
          size: [24, 24],
          url:
            "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
          noClick: true,
        },
        {
          name: "warning",
          iconName: "警戒",
          size: [30, 30],
          url:
            "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
          text: `<strong>我是自定义内容</strong>`,
        },
        {
          name: "focus",
          iconName: "关注",
          size: [24, 24],
          url:
            "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
          cb: (item) => {
            this.ofcusIconName = item.iconName;
          },
          el: this.$refs.markModal, // 可动态更新,优先级最高
        },
      ];
      // markRandomRange = { X: [117.27, 117.36], Y: [34.18, 34.27] };
      // controls 1 2 3 4 = 左上 右上 右下 左下
      controls = {
        Zoom: { position: 2 },
        Scale: { position: 3 },
        Copyright: { position: 4, text: this.$refs.copyright.innerHTML },
        OverviewMap: { position: 4 },
        MapType: { position: 2 },
        militarySymbols: { position: 2 },
        selfControls: [{ el: this.$refs.selfControl1, position: 1 }],
      };
      menuItems = [
        {
          name: "去看呼和浩特新城区",
          cb: (e) => {
            console.log(e);
            this.$store.commit("map/goTo", { X: 111.66554, Y: 40.85828 });
          },
        },
        {
          name: "去利客",
          cb: (e) => {
            console.log(e);
            this.$store.commit("map/goTo", {
              X: 111.67839,
              Y: 40.83099,
              zoom: 18,
            });
          },
        },
        { name: null, cb: () => {} }, // 分割线
      ];
      menuWidth = 150;

      /**
       * @module 初始化地图
       */
      this.$store.dispatch("map/initMap", {
        id,
        centerPoint,
        zoom,
      });

      /**
       * @module 加载marks
       */
      this.$store.dispatch("map/tLoadMarks", {
        icons,
        // markRandomRange,
        text: this.$refs.markModal.innerHTML, // icon统一html 优先级低于内部设置
        cb: (mark) => {
          console.log(mark); // 统一优先级低于内部设置
        },
      });

      /**
       * @module 加载controls
       */
      this.$store.dispatch("map/tLoadControl", controls);

      /**
       * @module 加载右键菜单
       */
      this.$store.dispatch("map/tLoadMenu", { menuItems, menuWidth });

      /**
       * @module 添加自定义事件
       */
      this.$store.dispatch("map/tSelfEvent");

      /**
       * @module 加载结束
       */
      this.loaded = true;
      // setTimeout(() => {
      //   this.loaded = true
      // }, 1000);
    },
    updateCenter() {
      this.$store.state.map.centerPoint = this.$store.state.map.centerPoint.split(
        ","
      );
      this.$store.commit("map/updateMap");
    },

    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style lang="less" scoped>
.card {
  position: relative;
  /deep/ .ivu-card-body {
    height: 100%;
    padding: 0;
  }
}

/deep/ .ivu-modal {
  width: 700px !important;
  .ivu-radio-group {
    vertical-align: top;
    padding: 0 20px;
  }
}

#system1-map {
  height: 100%;

  .map-modal {
    height: 50px;
    width: 150px;
    background-color: #fff;

    .title {
      font-family: "PingFangTeCuTi";
    }

    .text {
      padding: 0.5vh 0;
      font-size: 1vh;
      line-height: 1;
      margin: 1vh 0;

      .num {
        font-size: @back-system1-num-size;
        font-family: "YouSheBiaoTiHei";
        margin: 0 2%;
        &.num-yellow {
          color: @back-system1-yellow;
        }
        &.num-red {
          color: @back-system1-red;
        }
        &.num-green {
          color: @back-system1-green;
        }
      }
    }
  }

  .cr {
    color: #ec5122;
    font-weight: 700;
    font-size: 3vh;
  }

  .self-control1 {
    position: relative;
    .icon {
      position: absolute;
      left: 0;
      top: 0;
      font-size: 4vh;
      width: 4vh;
      transition: transform 500ms ease;
      &.active {
        color: rgb(31, 40, 56);
        transform: rotateY(180deg);
        text-shadow: 0 0 10px cornflowerblue;
      }
      &:hover {
        color: rgb(56, 85, 138);
        cursor: pointer;
      }
    }

    .row-wrapper {
      position: absolute;
      left: 4vh;
      overflow: hidden;

      .row {
        font-size: 3vh;
        background-color: rgb(255, 255, 255);
        box-shadow: 1px 1px 5px rgb(153, 164, 230);
        border-radius: 5px;
        width: max-content;
        padding: 0 10px;

        transition: all 500ms ease;
        transform: translate(-101%, 0);

        &.active {
          transform: translate(0, 0);
        }

        .col {
          &::after {
            content: "|";
            color: #e3e7e7;
            font-size: 3vh;
            margin: 0 1vw;
          }
          &:last-child::after {
            content: "";
            margin: 0;
          }
          .title {
            color: blueviolet;
          }
          .text {
            color: #ec5122;
            padding-left: 7px;
            &.may-active:hover {
              cursor: pointer;
              box-shadow: 3px 3px 5px rgb(250, 149, 149);
            }
            &.active {
              box-shadow: 0px 0px 10px rgb(250, 149, 149);
            }

            /deep/ input {
              padding: 0;
              font-size: 3vh;
              color: #ec5122;
            }
          }
        }
      }
    }
  }

  .spin {
    z-index: 1000; // 大于legend和tools
  }
}
</style>