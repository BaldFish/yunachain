<template>
  <div class="home">
  <!--  <section class="banner_wrap">
      <a name="banner"></a>
      <div class="banner">
        <p>元<img src="./images/yuan.png" alt="">链</p>
        <p>关 注 于 区 块 链 基 础 框 架 及 产 业 落 地 的 专 业 团 队</p>
      </div>
    </section>-->

    <div class="carousel">
      <el-carousel :interval="3000" arrow="always">
        <el-carousel-item v-for="item in bannerList" :key="item.link_url">
          <a :href="item.link_url" target="_blank"><img :src="item.picture_url" alt=""></a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <section class="baas_wrap">
      <div class="baas">
        <a name="baas" class="anchor-point"></a>
        <div class="title">
          <p>
            <span class="left-span"></span>
            BAAS产品
            <span class="right-span"></span>
          </p>
          <p>B A A S&nbsp;&nbsp;&nbsp;P R O D U C T</p>
        </div>
        <ul>
          <li>
            <img src="./images/bass_01.png" alt="">
            <p>通过BAAS服务，您可根据模板一键建立专属的区块链服务</p>
          </li>
          <li>
            <img src="./images/bass_02.png" alt="">
            <p>BAAS将 丰富的区块链接口服务，实现您的业务逻辑</p>
          </li>
          <li>
            <img src="./images/bass_03.png" alt="">
            <p>降低开发者成本，简化应用开发流程，让开发者只需专注于具体业务和逻辑的实现，无需关心后端基础设施构建、运维、服务器托管、网络、性能调优等工作。</p>
          </li>
          <li>
            <img src="./images/bass_04.png" alt="">
            <p>为用户的业务逻辑量身定制智能合约</p>
          </li>
        </ul>
      </div>
    </section>
    <div style="clear: both"></div>
    <section class="fabric_wrap">
      <div class="fabric">
        <a name="fabric" class="anchor-point"></a>
        <div class="title">
          <p>
            <span class="left-span"></span>
            以太坊/FABRIC基础平台
            <span class="right-span"></span>
          </p>
          <p>F A B R I C&nbsp;&nbsp;&nbsp;B A S I C&nbsp;&nbsp;&nbsp;P L A T F O R M</p>
        </div>
        <ul>
          <li>
            <img src="./images/fabric_01.png" alt="">
            <p class="fabric-text">区块链技术使得案例不可篡改，解决存证业务面临的客观性、公平性、隐私性等问题，增加了平台的可信度</p>
            <div class="fabric-num">
              <p>A</p>
              <p>案例存证</p>
            </div>
          </li>
          <li>
            <img src="./images/fabric_02.png" alt="">
            <p class="fabric-text">通过区块链技术，让生产商、运输方、经销商等环节在链上进行信息登记，物品在链上可查可验证。</p>
            <div class="fabric-num">
              <p>B</p>
              <p>积分系统</p>
            </div>
          </li>
          <li>
            <img src="./images/fabric_03.png" alt="">
            <p class="fabric-text">通过区块链技术，让生产商运输方、经销商等环节在链上进行信息登记，物品在链上可查可验证</p>
            <div class="fabric-num">
              <p>C</p>
              <p>追踪溯源</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div style="clear: both"></div>
    <section class="system_wrap">
      <div class="system">
        <a name="system" class="anchor-point"></a>
        <div class="title">
          <p>
            <span class="left-span"></span>
            区块链业务系统
            <span class="right-span"></span>
          <p>B U S I N E S S&nbsp;&nbsp;&nbsp;S Y S T E M</p>
        </div>
        <ul>
          <li>
            <img src="./images/system_01.png" alt="">
            <p class="p-top">存取证平台的目标是为金融、政府等行业客户提供商品溯源、互助保险、资产交易、个人身份信息的存入与查询系统，多行业、多角色参与者共同存入的数据，构建诚信区块链生态,使信任在互联网上不断自我生长。</p>
            <div class="system-num system-num1">
              <p>01</p>
              <p>存取证方案</p>
            </div>
          </li>
          <li>
            <img src="./images/system_02.png" alt="">
            <p class="p-top">积分平台可以有很多应用场景。该平台关注点不仅在于多平台的积分通兑，更在于产品或服务的预售。其典型的应用场景包括:</p>
            <P>（1）游戏开发商。核心目的是为商家募集研发资金。用户提前购买的游戏币（积分），可在游戏上线后，直接购买其中的商品、增值服务或游戏道具等。</P>
            <P>（2）产品预售。手机制造商可以用该平台预售手机。用户可以很方便的扫一下产品推介会上的二维码而购买优购码（积分）。等产品上线后，用优购码去换取产品。在产品上线之前，还可以通过平台交易优购码。</P>
            <div class="system-num system-num2">
              <p>02</p>
              <p>虚拟积分方案</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div style="clear: both"></div>
    <section class="wallet_wrap">
      <a name="wallet"></a>
      <div class="wallet">
        <p>数字货币钱包</p>
        <p>用户可以随时通过钱包查看其存储在区块链的资产，可以通过区块链自由地在数字世界中进行投资获利以及转入转出，确切地享受到区块链到来的好处。从而提升数字资产流通效率，真正达到“多方发行、自由流通”的效果。</p>
      </div>
    </section>
    <section class="fabric_wrap">
      <div class="fabric">
        <a name="ipfs" class="anchor-point"></a>
        <div class="title ipfs-title">
          <p>
            <span class="left-span"></span>
            IPFS 技术
            <span class="right-span"></span>
          </p>
          <p>I P F S&nbsp;&nbsp;&nbsp;T E C H N O L O G Y</p>
        </div>
        <ul>
          <li>
            <img src="./images/IPFS_01.png" alt="">
            <p class="fabric-text">IPFS 是永久的、去中心化保存和共享文件的方法，这是一种内容可寻址、版本化、点对点超媒体的分布式协议</p>
          </li>
          <li>
            <img src="./images/IPFS_02.png" alt="">
            <p class="fabric-text">我们可以用它来存取文件，数据永不丢失</p>
          </li>
          <li>
            <img src="./images/IPFS_03.png" alt="">
            <p class="fabric-text">应用可以用它来做数据库，自动拥有版本化、缓存及分布式特性</p>
          </li>
        </ul>
      </div>
    </section>
    <div style="clear: both"></div>
    <section class="wallet_wrap browser_wrap">
      <a name="browser"></a>
      <div class="wallet">
        <p>区块链浏览器</p>
        <p>在不涉及隐私的情况下，区块链浏览器可实时查看整个区块链存储的数据信息</p>
      </div>
    </section>
    <section class="service_wrap">
      <a name="service" class="anchor-point"></a>
      <div class="service">
        <div class="title">
          <p>
            <span class="left-span"></span>
            咨询服务
            <span class="right-span"></span>
          <p>C O N S U L T I N G&nbsp;&nbsp;&nbsp;S E R V I C E</p>
        </div>
        <ul>
          <li>
            <img src="./images/service_01.png" alt="">
            <div class="service-num1">
              <p>元链的专业区块链技术专家还可以为客户提供全面的区块链应用落地方案、行业解决方案设计、海外区块链业务拓展等咨询服务</p>
              <button>立即咨询</button>
            </div>
          </li>
          <li>
            <img src="./images/service_02.png" alt="">
            <div class="service-num2">
              <p>SERVICE</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div style="clear: both"></div>
    <section class="technology_wrap">
      <div class="technology">
        <a name="technology" class="anchor-point"></a>
        <div class="title">
          <p>
            <span class="left-span"></span>
            技术优势
            <span class="right-span"></span>
          <p>T E C H N I C A L&nbsp;&nbsp;&nbsp;A D V A N T A G E</p>
        </div>
        <ul>
          <li>
            <img src="./images/Technical_01.png" alt="">
            <div class="technology-num">
              <p>每秒交易数 1000+</p>
            </div>
          </li>
          <li>
            <img src="./images/Technical_02.png" alt="">
            <div class="technology-num">
              <p>交易确认时间 1S</p>
            </div>
          </li>
          <li>
            <img src="./images/Technical_03.png" alt="">
            <div class="technology-num">
              <p>IPFS分布式存储+ POS 解决方案</p>
            </div>
          </li>
          <li>
            <img src="./images/Technical_04.png" alt="">
            <div class="technology-num">
              <p>ERC721标准化且高拓展性的虚拟资产确权</p>
            </div>
          </li>
          <li>
            <img src="./images/Technical_05.png" alt="">
            <div class="technology-num">
              <p>每个区块支持10w条记录</p>
            </div>
          </li>
          <li>
            <img src="./images/Technical_06.png" alt="">
            <div class="technology-num">
              <p>SE+TEE的可信硬件上链解决方案</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div style="clear: both"></div>
    <section class="patent_wrap">
      <div class="patent">
        <a name="patent" class="anchor-point"></a>
        <div class="title">
          <p>
            <span class="left-span"></span>
            专利领先
            <span class="right-span"></span>
          <p>P A T E N T&nbsp;&nbsp;&nbsp;A D V A N T A G E</p>
        </div>
        <div class="patent-content">
          <div class="patent-details">
            <p>已公开<span>11</span>件</p>
            <p>已申请<span>68</span>件</p>
            <p>共申请<span>130</span>件</p>
            <p>年底计划申请<span>200</span>件</p>
          </div>
          <img src="./images/patent.png" alt="">
        </div>
      </div>
    </section>
    <div style="clear: both"></div>
    <section class="partner_wrap">
      <div class="partner">
        <a name="partner" class="anchor-point"></a>
        <div class="title">
          <p>
            <span class="left-span"></span>
            合作伙伴
            <span class="right-span"></span>
          <p>C O O P E R A T I V E&nbsp;&nbsp;&nbsp;P A R T N E R</p>
        </div>
        <ul>
          <li>
            <img src="./images/partner_01.png" alt="">
          </li>
          <li>
            <img src="./images/partner_02.png" alt="">
          </li>
          <li>
            <img src="./images/partner_03.png" alt="">
          </li>
          <li>
            <img src="./images/partner_04.png" alt="">
          </li>
          <li>
            <img src="./images/partner_05.png" alt="">
          </li>
          <li>
            <img src="./images/partner_06.png" alt="">
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from "axios";
  import {baseURL} from '@/common/js/public.js';

  export default {
    name: "home",
    data() {
      return {
        //用webpack搭建的项目不能直接使用绝对路径，要用require，如果不使用这个，必须是线上图片。http类型的
        bannerList:[
          {link_url:'javascript:void(0)',picture_url:require('./images/banner.png')},
          {link_url:'javascript:void(0)',picture_url:require('./images/banner.png')},
        ],
      }
    },
    mounted() {
      //获取banner图
      axios({
        method: 'get',
        url: `${baseURL}/v1/broadcast/s?type_id=5b572f90a4cc0d6ea8ba5482`
      }).then(res => {
        this.bannerList = res.data
      }).catch(error => {
        console.log(error)
      });
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus">
  /*banner图*/
  .home{
    width:100%;
  }
  .banner_wrap{
    width:100%;
    height:1080px;
    background: url("./images/banner.png") no-repeat center;
    background-size: 100% 100%;
  }
  .banner{
    width: 800px;
    text-align: center;
    margin: 0 auto;
    padding-top: 590px;
  }
  .banner img{
    margin: 0 15px;
  }
  .banner p:first-child{
    font-size: 52px;
    color: #ffffff;
  }
  .banner p:last-child{
    font-size: 26px;
    color: #ffffff;
    margin-top: 36px;
  }
  /*BAAS产品*/
  .baas{
    width: 1200px;
    margin:0 auto;
    text-align: center;
  }
  .title{
    /*margin-top: 40px;*/
    margin-bottom: 60px;
  }
  .title p:first-child{
    font-size: 26px;
    color: #00baff;
    margin-bottom: 12px;
  }
  .title p:first-child span{
    width: 12px;
    height: 12px;
    background-color: #48b4e9;
    display: inline-block;
    margin-bottom: 3px;
  }
  .left-span{
    margin-right: 62px;
  }
  .right-span{
    margin-left: 62px;
  }
  .title p:last-child{
    font-size: 26px;
    color: #4fcaf8;
  }
  .baas ul li{
    width: 580px;
    float: left;
  }
  .baas ul li:nth-child(odd){
    margin-right: 40px;
  }
  .baas ul li p{
    font-size: 18px;
    color: #222222;
    margin-top: 25px;
    margin-bottom: 48px;
    line-height: normal;
  }
  .baas ul li:nth-child(3) p{
    text-align: left;
  }
  /*以太坊/FABRIC基础平台*/
  .fabric{
    width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  .fabric .left-span{
    margin-right: 74px;
  }
  .fabric .right-span{
    margin-left: 74px;
  }
  .fabric ul li {
    width:380px;
    height: 520px;
    float: left;
    margin-right: 30px;
  }
  .fabric ul li:last-child{
    margin-right: 0;
  }
  .fabric ul li p{
    font-size: 20px;
    color: #222222;
    text-align: left;
    margin-top: 30px;
  }
  .fabric ul li .fabric-text{
    line-height: normal;
  }
  .fabric-num{
    position: relative;
    bottom: 386px;
    width: 112px;
    margin: 0 auto;
  }
  .fabric-num p{
    text-align: center !important;
    color: #ffffff !important;
  }
  .fabric-num p:first-child{
    font-size: 46px;
  }
  .fabric-num p:last-child{
    font-size: 28px;
    border-bottom: 2px solid #fff;
    border-top: 2px solid #fff;
    padding: 8px 0;
    margin-top: 20px;
  }
  /*区块链业务系统*/
  .system{
    width: 1200px;
    text-align: center;
    margin: 0 auto;
  }
  .system .left-span{
    margin-right: 58px;
  }
  .system .right-span{
    margin-left: 58px;
  }
  .system ul li{
    float: left;
    width: 570px;
    height: 900px;
  }
  .system ul li:first-child{
    margin-right: 60px;
  }
  .system ul li p{
    text-align: left;
    font-size: 20px;
    color: #666666;
    line-height: normal;
  }
  .p-top{
    margin-top: 30px;
  }
  .system-num{
    position: relative;
    margin: 0 auto;
  }
  .system-num1{
    bottom: 570px;
    width: 160px;
  }
  .system-num2{
    bottom: 634px;
    width: 193px;
  }
  .system-num p{
    color: #ffffff !important;
    text-align: center !important;
  }
  .system-num p:first-child{
    font-size: 60px;
  }
  .system-num p:last-child{
    font-size: 32px;
    border-bottom: 2px solid #ffffff;
    border-top: 2px solid #ffffff;
    padding: 8px 0;
    margin-top: 36px;
  }
  /*数字货币钱包*/
  .wallet_wrap{
    width:100%;
    height: 800px;
    background: url("./images/shuzi_bj.png") no-repeat center;
    background-size: 100% 100%;
  }
  .wallet{
    margin:0 auto;
    width: 740px;
    color: #ffffff;
    padding-top: 272px;
  }
  .wallet p:first-child{
    font-size: 30px;
    border: 1px solid #ffffff;
    padding: 12px;
    text-align: center;
    width:200px;
    margin: 0 auto;
    margin-bottom: 60px;
  }
  .wallet p:last-child{
    font-size: 24px;
    line-height: normal;
  }
  /*IPFS 技术*/
  .ipfs-title .left-span{
    margin-right: 98px;
  }
  .ipfs-title .right-span{
    margin-left: 98px;
  }
  /*区块链浏览器*/
  .browser_wrap{
    margin-top: 46px;
  }
  .browser_wrap .wallet{
    padding-top: 310px;
  }
  /*咨询服务*/
  .service{
    width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  .service .left-span{
    margin-right: 134px;
  }
  .service .right-span{
    margin-left: 134px;
  }
  .service ul li {
    float: left;
    width: 600px;
    height: 650px;
  }
  .service-num1{
    width: 480px;
    margin: 0 auto;
    position: relative;
    bottom: 395px;
  }
  .service-num1 p{
    font-size: 24px;
    color: #ffffff;
    text-align: left;
    line-height: normal;
  }
  .service-num1 button{
    width: 113px;
    height: 48px;
    background-color: #ffffff;
    border-radius: 10px;
    color: #48b4e9;
    outline: none;
    border:none;
    font-size: 20px;
    margin-top: 46px;
  }
  .service-num2{
    font-size: 60px;
    color: #ffffff;
    position: relative;
    bottom: 336px;
  }
  /*技术优势*/
  .technology_wrap{
    width:100%;
    height: 600px;
    background-color: #e5f4fc;
  }
  .technology{
    width: 1200px;
    text-align: center;
    margin:0 auto;
  }
  .technology .left-span{
    margin-right: 155px;
  }
  .technology .right-span{
    margin-left: 155px;
  }
  .technology ul li{
    float: left;
    width: 200px;
    margin-top: 20px;
  }
  .technology ul li p{
    position: relative;
    bottom: 178px;
    font-size: 18px;
    color: #fff;
    line-height: normal;
    margin: 0 20px;
  }
  /*专利领先*/
  .patent{
    width: 1200px;
    text-align: center;
    margin:0 auto;
  }
  .patent .left-span{
    margin-right: 120px;
  }
  .patent .right-span{
    margin-left: 122px;
  }
  .patent-content{
    height:357px;
    width: 940px;
    margin:0 auto;
    margin-bottom: 60px;
  }
  .patent-details{
    width: 673px;
    float: left;
    font-size: 24px;
    margin-top: 100px;
    color: #666666;
  }
  .patent-details p{
    float: left;
    margin-right: 95px;
    margin-top: 30px;
  }
  .patent-details p:nth-child(1) {
    margin-right: 124px;
  }
  .patent-details p:nth-child(2) {
    margin-top: 29px;
  }
  .patent-details p:nth-child(4) {
    margin-top: 24px
  }
  .patent-details p:nth-child(1) span{
    font-size: 36px;
    color: #8799ca;
    font-weight: bold;
    margin: 0 10px;
  }
  .patent-details p:nth-child(2) span{
    font-size: 38px;
    color: #efb357;
    font-weight: bold;
    margin: 0 10px;
  }
  .patent-details p:nth-child(3) span{
    font-size: 40px;
    color: #df643b;
    font-weight: bold;
    margin: 0 10px;
  }
  .patent-details p:nth-child(4) span{
    font-size: 47px;
    color: #75287b;
    font-weight: bold;
    margin: 0 10px;
  }
  /*合作伙伴*/
  .partner_wrap{
    width:100%;
    height: 600px;
    background-color: #e5f4fc;
  }
  .partner{
    width:1200px;
    text-align: center;
    margin: 0 auto;
  }
  .partner .left-span{
    margin-right: 150px;
  }
  .partner .right-span{
    margin-left: 150px;
  }
  .partner ul{
    width: 592px;
    margin:0 auto;
    margin-top: 100px;
  }
  .partner ul li{
    float: left;
    margin-right: 11px;
    margin-bottom: 15px;
  }
  .partner ul li:nth-child(3){
    margin-right: 0;
  }
  .partner ul li:nth-child(6){
    margin-right: 0;
  }
  .anchor-point{
    display: inline-block;
    width: 200px;
    height: 70px;
  }
</style>
<style lang="stylus">
  .carousel{
  max-width 1920px
  //min-width 1212px
  height 1080px
  margin 0 auto
  .el-carousel{
  width 100%
  height 100%
  .el-carousel__container{
  width 100%
  height 100%
  .el-carousel__arrow{
    width:50px;
    height: 50px;
    font-size: 30px;
  }
  .el-carousel__item{
  width 100%
  height 100%
  text-align center
  a{
    img{
      width:1920px;
      height 1080px
      /*Firefox*/
      margin:0 -moz-calc(50% - 1212px);
      /*chrome safari*/
      margin:0 -webkit-calc(50% - 1212px);
      /*Standard */
      margin:0 calc(50% - 1212px);
    }
  }
  }
  }
  .el-carousel__indicators{
  .el-carousel__indicator{
    padding: 20px 6px;
  .el-carousel__button{
    width:36px;
  }
  }
  }
  }
  }
</style>
