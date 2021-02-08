<template>
  <div class="box">
    <div class="title">
      <span class="h2" @click="$store.commit('login/updateSelectBox', 1)"
        >账号登录</span
      >
      <span class="divide">︱</span>
      <span class="h1" @click="$store.commit('login/updateSelectBox', 2)"
        >验证码登录</span
      >
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
        <FormItem prop="tel" class="form-item">
          <Input
            class="tel"
            type="text"
            v-model="form.tel"
            placeholder=" 请输入手机号"
          />
        </FormItem>
        <FormItem prop="yzm" class="form-item">
          <Input class="yzm" v-model="form.yzm" placeholder=" 请输入验证码" />
          <Button class="update-botton" type="info">点击获取验证码</Button>
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
        tel: "",
        password: "",
        yzm: "",
      },
      rules: {
        tel: [
          {
            required: true,
            message: "请输入用户名",
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
            name: this.form.tel,
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
          this.$Message.error("请输入正确的验证码");
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
      .yzm {
        width: 50%;
        text-align: left;
      }
      .yzm /deep/ .ivu-input {
        border-radius: 4px;
      }
      .update-botton {
        width: 40%;
        margin-left: 10%;
        font-size: 1.4vh;
        line-height: 3.8vh;
        color: #f6f6f6;
        padding: 0;
        margin-top: -1px;
        height: 3.8vh;
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