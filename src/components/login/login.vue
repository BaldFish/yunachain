<template>
  <div class="container">
    <div class="login-box">

      <div class="login-content">
        <div class="title">
          <p>用户登录</p>
          <ul class="nav-bar">
            <li></li>
            <li></li>
          </ul>
        </div>
        <section class="account-login">
          <ul>
            <li>
              <i></i>
              <input type="text" placeholder="请输入手机号" v-model="phoneRight" v-validate="'required|mobileRight'" name='mobileRight'>
              <span v-show="errors.has('mobileRight')" class="error error_bot">{{errors.first('mobileRight')}}</span>
            </li>
            <li>
              <i></i>
              <input type="text" placeholder="请输入验证码" v-model="captcha_number_right" v-validate="'required'" name='captcha_number_right'
                     @blur="captchaErrorRight">
              <img class="img_change_img" @click="getCaptcha" :src="captcha">
              <span v-show="errors.has('captcha_number_right')" class="error error_top">{{errors.first('captcha_number_right')}}</span>
              <span v-show="captchaNoticeRight" class="error error_top">图形验证码错误</span>
            </li>
            <li>
              <i></i>
              <input type="text" placeholder="请输入手机验证码" v-model="code" v-validate="'required'" name='code' @blur="codeError"
                     :disabled="isDisabled">
              <div class="img_change_img get_code" @click="getCode" v-if="codeValue">获取验证码</div>
              <div class="img_change_img count_down" v-else>倒计时（{{second}}）</div>
              <span v-show="errors.has('code')" class="error">{{errors.first('code')}}</span>
              <span v-show="codeNotice" class="error">短信验证码错误</span>
            </li>
          </ul>
        </section>

        <router-link to="" class="to_login"><span @click="login">登录</span></router-link>
        <!--<p class="notice">登录即表示您同意并愿意遵守可信盾用户协议和隐私声明</p>-->

      </div>


    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import {baseURL} from '@/common/js/public.js';
  const querystring = require('querystring');

  export default {
    data() {
      return {
        loginWay: true,
        codeValue: true,
        isDisabled: true,
        captchaNoticeRight: false,//校验图形码是否正确
        codeNotice: false,//校验短信码是否正确
        second: 60,// 发送验证码倒计时
        phoneRight: "", //手机号
        captcha_number_right: "", //图形验证码
        captcha_id: "", //图形验证码--ID
        captcha: "./images/code.png", //图形验证码--图片
        code: "", //短信验证码
        userId: "",
      };
    },
    computed: {
      uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
      }
    },
    mounted: function () {
      //这个是钩子函数
      //如果getCaptcha函数要执行，必须先执行钩子函数
      //这个钩子函数完成了对getCaptcha函数的调用
      //应该注意的是，使用mounted 并不能保证钩子函数中的 this.$el 在 document 中。为此还应该引入Vue.nextTick/vm.$nextTick
      this.$nextTick(() => {
        this.getCaptcha()
      })
    },

    methods: {
      //获取图片验证码--图片
      getCaptcha() {
        axios({
          method: 'post',
          url: `${baseURL}/v1/captcha`,
          data: querystring.stringify({})
        }).then(res => {
          this.captcha = `data:image/png;base64,${res.data.png}`;
          this.captcha_id = res.data.captcha_id;
          //校验图形验证码
          this.captchaErrorRight();
        }).catch(error => {
          console.log(error);
        });
      },
      //获取短信验证码
      getCode() {
        this.$validator.validateAll({
          mobileRight: this.phoneRight,
          captcha_number_right: this.captcha_number_right,
        }).then((result) => {
          //校验是否正确：图形验证码
          if (this.captchaNoticeRight) {
            this.isDisabled = true;
            return false
          } else {
            //校验input输入值
            if (result) {
              this.isDisabled = false;

              //倒计时
              let me = this;
              me.codeValue = false;
              let interval = window.setInterval(function () {
                if ((me.second--) <= 0) {
                  me.second = 60;
                  me.codeValue = true;
                  window.clearInterval(interval);
                }
              }, 1000);
              //get短信验证码
              axios({
                method: 'post',
                url: `${baseURL}/exchange/v1/sms/code`,
                data: querystring.stringify({
                  phone: "+86" + this.phoneRight, //手机号
                  type: 3 //1-注册，2-修改密码, 3-登录
                })
              }).then(res => {
              }).catch(error => {
                console.log(error);
              })

            } else {
              this.isDisabled = true;
            }
          }
        })

      },
      //校验图形验证码
      captchaErrorRight() {
        if (this.captcha_number_right) {
          axios({
            method: 'get',
            url: `${baseURL}/v1/captcha/${this.captcha_id}/code/${this.captcha_number_right}`
          }).then(res => {
            this.captchaNoticeRight = false
          }).catch(error => {
            console.log(error);
            this.captchaNoticeRight = true
          });
        } else {
          this.captchaNoticeRight = false
        }
      },
      //校验短信验证码
      codeError() {
        if (this.code) {
          axios({
            method: 'get',
            url: `${baseURL}/exchange/v1/sms/+86${this.phoneRight}/code/${this.code}`
          }).then(res => {
            this.codeNotice = false
          }).catch(error => {
            console.log(error);
            this.codeNotice = true
          });
        } else {
          this.codeNotice = false
        }
      },
      login() {
        let loginFormData = {
          phone: "+86" + this.phoneRight, //手机号
          device_id: this.uuid, //设备ID
          platform: 1,
          code: this.code, //短信验证码
          captcha_id: this.captcha_id, //图片验证码ID
          captcha_number: this.captcha_number_right //图片验证码--图片
        };

        this.$validator.validateAll({
          mobileRight: this.phoneRight,
          captcha_number_right: this.captcha_number_right,
          code: this.code
        }).then((result) => {
          //校验是否正确：图形验证码、短信验证码
          if (this.captchaNoticeRight || this.codeNotice) {
            return false
          } else {
            //校验input输入值
            if (result) {
              axios({
                method: 'post',
                url: `${baseURL}/presell/v1/user`,
                data: querystring.stringify(loginFormData)
              }).then(res => {
                window.sessionStorage.setItem("loginInfo", JSON.stringify(res.data));
                this.userId = res.data.user.id;
                this.acquireUserInfo();
              }).catch(error => {
                console.log(error);
              })
            }
          }
        })
      },
      acquireUserInfo() {
        axios({
          method: "GET",
          url: `${baseURL}/presell/v1/user/${this.userId}`,
          headers: {
            "Content-Type": "application/json",
          }
        }).then((res) => {
          window.sessionStorage.setItem("userInfo", JSON.stringify(res.data));
          window.location.href = "#/home"
        }).catch((err) => {
          console.log(err);
        });
      },
    }
  }

</script>

<style scoped lang="stylus">
  .container{
    width:100%;
    background: url("./images/bj.png") no-repeat center;
    background-size: 100% 100%;
    height:870px;
  }
  .login-box{
    width: 506px;
    height: 414px;
    background-color: #ffffff;
    box-shadow: -1px -2px 27px 4px;
    margin:0 auto;
    top: 260px;
    position: relative;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  .login-content{
    padding-top: 26px;
    margin: 0 64px;
    font-size: 20px;
    color: #222222;
    text-align: center;
  }
  .nav-bar{
    margin-top: 20px;
    height: 4px;
  }
  .nav-bar li{
    width: 189px;
    height: 4px;
  }
  .nav-bar li:first-child{
    background-color: #313131;
    float: left;
  }
  .nav-bar li:last-child{
    background-color: #519bff;
    float: right;
  }
  .account-login ul li{
    width: 378px;
    height: 40px;
    background-color: #f3f3f3;
    margin-top: 24px;
    font-size: 14px;
    color: #999999;
  }
  .account-login ul li input{
    height: 40px;
    background-color: #f3f3f3;
    float: left;
    margin-left: 10px;
    outline: none;
    width: 210px;
    -webkit-box-shadow: 0 0 0px 1000px #f3f3f3 inset !important;
  }
  .account-login ul li:nth-child(1){
    margin-top: 32px;
  }
  .account-login ul li:nth-child(1) input{
    margin-left: 11px;
    width: 330px;
  }
  .account-login ul li:nth-child(1) i{
    width: 19px;
    height: 28px;
    display: inline-block;
    background: url("./images/phone.png") no-repeat center;
    background-size: 100% 100%;
    margin: 6px;
    float: left;
  }
  .account-login ul li:nth-child(2) i{
    width: 20px;
    height: 20px;
    display: inline-block;
    background: url("./images/yanzheng.png") no-repeat center;
    background-size: 100% 100%;
    margin: 10px 6px;
    float: left;
  }
  .account-login ul li:nth-child(3) i{
    width: 20px;
    height: 20px;
    display: inline-block;
    background: url("./images/yanzheng.png") no-repeat center;
    background-size: 100% 100%;
    margin: 10px 6px;
    float: left;
  }
  .img_change_img {
    width: 100px !important;
    height: 33px !important;
    float: right !important;
    margin: 3px 10px;
    cursor: pointer;
  }
  .error {
    position: relative;
    color: #c6351e;
    display: inline-block;
    width: 200px;
    top: 5px;
    text-align: left;
    left:-90px;
  }
  .get_code {
    border: solid 1px #519bff;
    font-size: 14px;
    color: #519bff;
    text-align: center;
    line-height: 35px;
  }
  .count_down {
    background-color: #7d7d7d;
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    line-height: 33px;
  }
  .to_login span {
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    width: 378px;
    height: 40px;
    line-height: 40px;
    background-color: #519bff;
    display: inline-block;
    margin-bottom: 12px;
    border-radius: 20px;
    margin-top: 48px;
  }
  .notice{
    font-size: 14px;
    color: #666666;
  }
</style>
