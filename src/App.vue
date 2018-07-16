<template>
  <div id="app">
    <div class="head-wrap">
      <div class="head">
        <router-link to="/home">
          <img class="logo" src="./common/images/logo.png" alt="">
        </router-link>
        <ul>
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/home">产品及解决方案</router-link>
            <div>
              <section>
                <ul class="anchor-list">
                  <li><a href="#banner">产品及解决方案</a></li>
                  <li><a href="#baas">BAAS产品</a></li>
                  <li><a href="#fabric">以太坊/FABRIC基础平台</a></li>
                  <li><a href="#system">区块链业务系统</a></li>
                  <li><a href="#wallet">数字货币钱包</a></li>
                  <li><a href="#ipfs">PFS技术</a></li>
                  <li><a href="#browser">区块链浏览器</a></li>
                  <li><a href="#service">咨询服务</a></li>
                  <li><a href="#technology">技术优势</a></li>
                  <li><a href="#patent">专利领先</a></li>
                  <li><a href="#partner">合作伙伴</a></li>
                </ul>
              </section>
            </div>
          </li>
          <li class="no_login">
            <router-link to="/companyProfile">关于我们</router-link>
            <div>
              <section>
                <ul class="anchor-list about-us">
                  <li><router-link to="/companyProfile">公司简介</router-link></li>
                  <li><router-link to="/joinUs">加入我们</router-link></li>
                  <li><router-link to="/contactUs">联系我们</router-link></li>
                </ul>
              </section>
            </div>
          </li>
        </ul>
      </div>



    </div>

    <div class="main_wrap">
      <router-view class="main" v-if="isRouterAlive"></router-view>
    </div>

    <div class="footer-wrap">
      <div class="footer">
        <div class="footer-box">
          <h3>
            <span class="icon-product"></span>
            产品及解决方案
          </h3>
          <ul>
            <li>Baas产品</li>
            <li>以太坊/fabric基础平台</li>
            <li>区块链业务系统</li>
            <li>数字货币钱包</li>
            <li>IPFS技术</li>
            <li>区块链浏览器</li>
          </ul>
        </div>
        <div class="footer-box footer-box2">
          <h3>
            <span class="icon-head"></span>
            咨询服务
          </h3>
          <ul>
            <li>区块链应用落地</li>
            <li>行业解决方案咨询</li>
          </ul>
        </div>
        <div class="footer-code">
          <img src="./common/images/gongzhonghao.png" alt="">
          <img src="./common/images/weibo.png" alt="">
        </div>
        <div class="footer-box footer-box3">
          <h3>深圳市元征科技股份有限公司北京研发中心</h3>
          <br><br>
          <ul>
            <li>工作时间：08：30-18:30</li>
            <li>服务电话：010-58205388</li>
            <li>联系地址：北京市朝阳区建国路93号万达广场8号楼808</li>
          </ul>
        </div>
        <div style="clear: both"></div>
        <p>Copyright © 2018 深圳市元征科技股份有限公司北京研发中心    京ICP备************</p>
      </div>
    </div>
  </div>
</template>

<script>
  import "./common/stylus/index.styl";
  import {baseURL, cardURL} from '@/common/js/public.js';
  import axios from "axios";

  export default {
    name: 'App',
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true,
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(() => {
          this.isRouterAlive = true
        })
      },

    }
  }
</script>


<style scoped lang="stylus">
  #app {
    /*min-height: 100vh;*/
    display: flex;
    flex-direction: column;
  }
  /*顶部header*/
  .head-wrap{
    width: 100%;
    min-width: 1274px;
    height: 70px;
    /*background-color: #02a1de;*/
    background-color: rgba(0, 186, 255, 0.85);
    position: fixed;
    z-index: 9999;
  }
  .head-wrap .head {
    box-sizing: border-box;
    width: 1200px;
    height:70px;
    line-height: 70px;
    margin: 0 auto;
  }
  .logo{
    margin-top: 16px;
    float: left;
  }
  .head ul{
    float: left;
  }
  .head ul li:first-child{
    margin-left: 300px;
  }
  .head ul li{
    display: inline-block;
    font-size: 16px;
    vertical-align: top;
    width: 200px;
    text-align: center;
  }
  .head ul li a{
    transition: 0.1s all linear;
    color: #ffffff;
    padding-bottom: 23px;
  }
  .head ul li div{
    display: none;
    width: 100%;
    height: 100px;
    background-color: rgba(0, 186, 255, 0.7);
    color: #ffffff;
    position: fixed;
    left: 0;
    margin-top: 3px;
  }
  .head ul li:hover a{
    border-bottom: 2px solid #ffffff;
    transition-delay: 0.1s;
  }
  .head ul li:hover div{
    display: block;
    /*调用动画效果*/
    -webkit-animation-name: fadeIn; /*动画名称*/
    -webkit-animation-duration: 0.2s; /*动画持续时间*/
    -webkit-animation-iteration-count: 1; /*动画次数*/
    -webkit-animation-delay: 0s; /*延迟时间*/
  }
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0; /*初始状态 透明度为0*/
    }
    20%{
      opacity: .2;
    }
    50% {
      opacity: .5; /*中间状态 透明度为0.5*/
    }
    70%{
      opacity: .7;
    }
    100% {
      opacity: 1; /*结尾状态 透明度为1*/
    }
  }
  .anchor-list a{
    font-size: 16px;
    padding-bottom: 0 !important;
  }
  .head ul li:hover .anchor-list a{
    border-bottom: none;
  }
  .anchor-list{
    margin-left: 142px;
  }
  .anchor-list li{
    margin-left: 0 !important;
    height: 30px;
    line-height: 30px;
    float: left;
    margin-top: 12px;
    text-align: left !important;
    width: 176px !important;
  }
  .anchor-list li:nth-child(4){
    text-align: center !important;margin-left: 30px
  }
  .anchor-list li:nth-child(4) a{
    margin-left: 30px
  }
  .anchor-list li:nth-child(5){
    text-align: center !important;
  }
  .anchor-list li:nth-child(10){
    text-align: center !important;
  }
  .anchor-list li:nth-child(11){
    text-align: center !important;
  }
  .anchor-list li:nth-child(10) a{
    margin-right: 20px;
  }
  .anchor-list li:nth-child(11) a{
    margin-right: 32px;
  }
  .head section{
    width: 1200px;
    height: 100px;
    margin: 0 auto;
  }
  .about-us{
    margin-left: 400px;
  }
  .about-us li {
    margin-top: 34px;
  }

  /*中间middle*/
  .main_wrap {
    flex: 1;
    box-sizing: border-box;
    margin: 0 auto;
    width: 100%;
    min-width: 1274px;
    background-color: #ffffff
  }
  /*底部footer*/
  .footer-wrap {
    width:100%;
    min-width: 1274px;
    background-color: #434343;
  }
  .footer {
    box-sizing: border-box;
    width: 1200px;
    height: 300px;
    margin: 0 auto;
    color: #ffffff;
    font-size: 14px;
    padding-top: 50px;
  }
  .icon-product{
    width: 18px;
    height: 18px;
    display: inline-block;
    background: url("./common/images/product.png") no-repeat center;
    background-size: 100% 100%;
    position: relative;
    top: 2px;
  }
  .icon-head{
    width: 19px;
    height: 21px;
    display: inline-block;
    background: url("./common/images/consultation.png") no-repeat center;
    background-size: 100% 100%;
    position: relative;
    top: 4px;
  }
  .footer-box{
    height: 200px;
    width: 220px;
    float: left;
  }
  .footer-box h3{
    font-size: 18px;
    margin-bottom: 20px;
  }
  .footer-box ul {
    line-height: 24px;
    margin-left: 24px;
  }
  .footer-box2 ul{
    margin-left: 26px;
  }
  .footer-code{
    width: 300px;
    height: 194px;
    float: left;
    padding-top: 16px;
  }
  .footer-code img{
    margin-left: 16px;
  }
  .footer-box3{
    float: right;
    width: 368px;
    text-align: right;
  }
  .footer p{
    text-align: center;
  }
</style>
