<template>
  <div class="login">
    <dv-full-screen-container>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" status-icon>
        <p class="logintitle">欢迎登录<span class="span">Welcome to Login</span></p>
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="请输入用户名">
            <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="请输入密码" @keyup.enter.native="handleLogin">
            <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
          </el-input>
        </el-form-item>
        <el-form-item prop="code" v-if="captchaOnOff">
          <el-input v-model="loginForm.code" auto-complete="off" placeholder="验证码" style="width: 63%" @keyup.enter.native="handleLogin">
            <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
          </el-input>
          <div class="login-code" @click="refreshCode">
            <DentifyCom :identifyCode="identifyCode" :contentWidth="contentWidth" :contentHeight="contentHeight"></DentifyCom>
          </div>
        </el-form-item>
        <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">自动登录</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button class="butsub" :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
            <span>登陆</span>
          </el-button>
          <!-- <div style="float: right;" v-if="register">
          <router-link class="link-type" :to="'/register'">立即注册</router-link>
        </div> -->
        </el-form-item>
      </el-form>
    </dv-full-screen-container>
  </div>
</template>

<script>

import Cookies from "js-cookie";
import { encrypt, decrypt } from '@/utils/jsencrypt'
import DentifyCom from './component/dentify.vue'

export default {
  name: "Login",
  components: { DentifyCom },
  data() {
    return {
      codeUrl: "",
      loginForm: {
        username: "",
        password: "",
        rememberMe: false,
        code: "",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ],
        code: [{ required: true, trigger: "change", message: "请输入验证码" }]
      },
      loading: false,
      // 验证码开关
      captchaOnOff: true,
      // 注册开关
      register: true,
      redirect: undefined,
      identifyCodes: "1234567890abcdefjhijklinopqrsduvwxyz", //随机串内容,从这里随机抽几个显示验证码
      identifyCode: "", //验证码图片内容
      contentWidth: 112,
      contentHeight: 38,

    };
  },
  watch: {
    $route: {
      handler: function (route) {

        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  created() {
    if (document.body.clientHeight > 1080) {
      this.contentWidth=226
      this.contentHeight=87
    }
  
    // this.getCookie()
  },
  mounted() {
    window.onresize = () => {
      if (document.body.clientHeight > 1080) {
        this.contentWidth=226
      this.contentHeight=87

      }else{
        this.contentWidth=112
        this.contentHeight=38
      }
    }
    // 初始化验证码
    this.identifyCode = "";
    //参数：（1）随机串内容。（2）验证码显示位数
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    //获取验证码的值
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        //通过循环获取字符串内随机几位
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    },
    //随机数字：用于当角标拿字符串的值
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    // getCookie() {
    //   const username = Cookies.get("username");
    //   const password = Cookies.get("password");
    //   const rememberMe = Cookies.get('rememberMe')
    //   this.loginForm = {
    //     username: username === undefined ? this.loginForm.username : username,
    //     password: password === undefined ? this.loginForm.password : decrypt(password),
    //     rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
    //   };
    // },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          // if (this.loginForm.rememberMe) {
          //   Cookies.set("username", this.loginForm.username, { expires: 30 });
          //   Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 });
          //   Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
          // } else {
          //   Cookies.remove("username");
          //   Cookies.remove("password");
          //   Cookies.remove('rememberMe');
          // }
          if (this.identifyCode == this.loginForm.code) {
            this.$store.dispatch("Login", this.loginForm).then(() => {
              this.$router.push({ path: "/homePage" }).catch(() => { this.loading = false; });
            }).catch(() => {
              this.loading = false;
            });

          } else {
            this.loading = false;
            this.refreshCode()
            this.$message.error('验证码输入错误！');
          }

        }
      });
    }
  }
};
</script>

<style  lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("../assets/images/login-background.png");
  background-size: cover;
  position: relative;
}
.logintitle {
  //   width: 4.19%;
  // height: 1.43%;
  font-size: 21px;
  font-family: "ysbth";
  color: #ffffff;
  font-weight: normal;
}
.span {
  font-size: 20px;
  font-family: "avenir";
  margin-left: 10px;
}
.login-form {
  position: absolute;
  right: 5.3%;
  top: 25%;
  // border-radius: 6px;
  background-image: url("../assets/images/loginbg.png");
  background-size: cover;
  width: 27.84%;
  height: 50.2%;
  padding: 2% 2.68% 2% 2.68%;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }

  // 改变input框背景颜色
  ::v-deep.el-input__inner {
    background-color: transparent !important;
    border: 1px solid #61ffa9;
    color: #ffffff;
    font-family: "ysbth";
  }
  ::v-deep.el-checkbox__inner {
    background-color: transparent !important;
    border: 1px solid #61ffa9;
  }
  ::v-deep.el-checkbox__input.is-checked + .el-checkbox__label {
    color: #ffffff;
    font-family: "ysbth";
  }
  ::v-deep.el-input__inner {
    &::placeholder {
      color: #ffffff;
      opacity: 0.5;
      font-family: "ysbth";
    }
  }
  ::v-deep.el-checkbox {
    color: #ffffff;
    opacity: 0.5;
    font-family: "ysbth";
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 26.5%;
  height: 38px;
  float: right;
  border: 1px solid #61ffa9;
;
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
.login-code-img {
  height: 38px;
}
.input-icon {
  height: 39px;
  width: 14px;
  margin-left: 2px;
  color: #00fc8c;
}
.butsub {
  margin-top: 20px;
  span {
    font-family: "ysbth";
    font-size: 30px;
    letter-spacing: 5px;
    color: #ffffff;
  }
}
.el-button--primary {
  background: linear-gradient(
    270deg,
    rgba(97, 255, 169, 0.19) 0%,
    #61ffa9 47%,
    rgba(97, 255, 169, 0.19) 100%
  );
  opacity: 0.8;
  color: #ffffff;
  border: transparent;
}
@media screen and (width: 3840px) {
  .logintitle {
    font-size: 42px;
    .span {
      font-size: 38px;
      margin-left: 15px;
    }
  }
  .login-form {
    ::v-deep .el-input--medium .el-input__inner {
      height: 87px;
      margin-top: 55px;
      font-size: 32px;
      padding-left: 110px;
    }

    ::v-deep.el-input__prefix {
      top: 70px;
    }
    ::v-deep.el-input__inner {
      &::placeholder {
        //  padding-left:86px;
        padding-top: 10px;
        font-size: 32px;
      }
    }
    ::v-deep.el-checkbox__label {
      margin-top: 78px;
      font-size: 28px;
      padding-left: 28px;
      line-height: 32px;
    }
    ::v-deep .el-checkbox__inner::after {
      height: 24px;
      left: 14px;
      width: 11px;
    }
    ::v-deep.el-checkbox__inner {
      width: 39px;
      height: 39px;
    }
    ::v-deep .el-button--medium {
      height: 100px;
      font-size: 50px;
    }
    //检验文字
    ::v-deep.el-form-item__error {
      font-size: 28px;
      top: 130%;
    }
    //检验图标
    ::v-deep.el-input__suffix {
      right: 18px;
      top: 82px;
      font-size: 28px;
    }
  }
  .input-icon {
    height: 51px;
    width: 53px;
    margin-left: 36px;
  }
  .butsub {
    margin-top: 80px;

    span {
      font-size: 50px;
      letter-spacing: 10px;
    }
  }
  .login-code{
    width: 26.5%;
    height: 87px;
    float: right;
    border: 1px solid #61ffa9;
    margin: 6% 0 0 0;
}
}
</style>
