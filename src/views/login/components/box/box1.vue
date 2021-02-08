<template>
  <div class="box">
    <div class="title">
      <span class="h1" @click="$store.commit('login/updateSelectBox', 1)"
        >账号登录
      </span>
      <span class="divide">︱</span>
      <span class="h2" @click="$store.commit('login/updateSelectBox', 2)"
        >验证码登录
      </span>
    </div>

    <div
      class="QR"
      @click="$store.commit('login/updateSelectBox', 3)"
      :style="{
        background: `url(${require('@/assets/login/QR.png')}) no-repeat`,
        'background-size': '100% 100%',
      }"
    ></div>

    <div class="form">
      <Form ref="form" :model="form" :rules="rules">
        <FormItem prop="user" class="form-item">
          <Input
            class="user"
            type="text"
            v-model="form.user"
            placeholder=" 请输入用户名"
          />
        </FormItem>
        <FormItem prop="password" class="form-item">
          <Input
            class="password"
            type="password"
            password
            v-model="form.password"
            placeholder=" 请输入密码"
          />
        </FormItem>
        <FormItem prop="yzm" class="form-item">
          <Input class="yzm" v-model="form.yzm" placeholder=" 请输入验证码" />
          <div
            class="img"
            :style="{
              background: `url(${require('@/assets/login/yzm.png')}) no-repeat`,
              'background-size': '100% 100%',
            }"
          />
          <a class="update-botton">换一张</a>
        </FormItem>
        <FormItem class="form-item">
          <Button class="form-button" @click="handleSubmit('form')"
            >登录
          </Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { postLogin } from "@/api/login";

export default {
  data() {
    return {
      form: {
        user: "",
        password: "",
        yzm: "",
      },
      rules: {
        user: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            type: "string",
            min: 1,
            message: "密码不小于6位",
            trigger: "blur",
          },
        ],
        yzm: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          postLogin({
            name: this.form.user,
            password: this.form.password,
            yzm: this.form.yzm,
          })
            .then(({ data }) => {
              console.log(data);
              this.$store.dispatch("saveUserAction", data.data);
              this.$Message.success(data.msg);
              setTimeout(() => {
                let redirect = this.$route.query.redirect;
                console.log(this.$route, "redirect:", redirect);
                // 此时要判断/login后面的参数，若无参数，进入主页；
                this.$router.push(redirect || this.$store.getters.getHonePage);
              }, 1000);
            })
            .catch((error) => {
              // 错误分为 status-请求错误 和 code-账号密码错误
              console.log(error);
              error ? this.$Message.error(error.msg) : "";
            });
        } else {
          this.$Message.error("请输入用户名和密码");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: rgba(255, 255, 255, 0.5);
  padding: 4.5vh 2.8vw 5vh;
  width: 28vw;

  .title {
    height: 4.2vh;
    text-align: left;

    .h1 {
      font-size: 3.4vh;
      color: #333333;
      line-height: 1;
      cursor: pointer;
    }

    .divide {
      font-size: 3vh;
      color: #e5e5e7;
      margin: 0.65vh 1vw;
    }

    .h2 {
      font-size: 2.4vh;
      color: #747373;
      cursor: pointer;
    }
  }

  .QR {
    width: 4.2vw;
    height: 8.1vh;
    // background: url(../../../../assets/login/QR.png) no-repeat;
    // background-size: 100% 100%;
    position: absolute;
    top: 1.8vh;
    right: 0.5vw;
    cursor: pointer;
  }

  .form {
    margin-top: 2.3vh;

    .form-item {
      margin-bottom: 2.3vh;

      &:last-child {
        margin-bottom: 0;
      }

      /deep/ .ivu-input {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #e5e5e7;
        caret-color: #08d8c3; // 输入时光标颜色
        height: 3.8vh;
        font-size: 1.4vh;
        background: rgba(255, 255, 255, 0.6);
      }
      /deep/ .ivu-form-item-error-tip {
        font-size: 1.4vh;
        padding-top: 3px;
      }
      .password {
        /deep/ .ivu-input-suffix {
          width: 1.5vw;
          .ivu-icon {
            font-size: 2vh;
            line-height: 3.8vh;
          }
        }
      }
      .yzm {
        width: 50%;
      }
      .yzm /deep/ .ivu-input {
        border-radius: 4px;
      }
      .img {
        width: 25%;
        margin: 0 2.5%;
        height: 3.8vh;
        // background: url(../../../../assets/login/yzm.png) no-repeat;
        // background-size: 100% 100%;
        display: inline-block;
        vertical-align: middle;
      }
      .update-botton {
        display: inline-block;
        width: 20%;
        padding: 0;
        height: auto;
        font-size: 1.4vh;
        color: #666666;
      }
      .form-button {
        margin-top: 1vh;
        background: #0054da;
        border-radius: 3vh;
        width: 100%;
        height: 5vh;
        color: #ffffff;
        font-size: 1.4vh;
      }
    }
  }
}
</style>