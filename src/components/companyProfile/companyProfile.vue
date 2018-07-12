<template>
  <div>
    <div class="contact-bg"></div>
    <div class="title">
      <p>COMPANY PROFILE</p>
      <p>公司简介</p>
    </div>
    <section class="sec-text">
      <p>元征成立于1992年，是国内最早致力于汽车诊断、检测、养护产品研发、生产和销售的高科技企业之一。深圳市元征科技股份有限公司于2002年10月在香港创业板上市（股票代码：02488 ），是国内行业最先在香港上市的企业之一。</p>
      <br>
      <p>元征率先在中国汽车行业提出“汽车后市场”概念，以先进的汽车电子检测和诊断产品为基础，综合运用自动控制、信息技术、机电一体化等技术，发展了涵盖汽车诊断、检测、养护、机械、电子、工具等产品线。目前，元征的诊断、检测和机械产品在全球市场拥有相当高的占有率，其中“电眼睛”品牌已成为汽车诊断电脑的代名词，代表着当今世界汽车诊断技术的高水平，是中国汽车诊断电脑在全世界的骄傲。</p>
      <br>
      <p>元征坚持科技创新，拥有数百项自主知识产权，在海内外设有多家研发试验基地，拥有全球最大的汽车诊断技术研发团队之一，产品研发已经形成公司的核心竞争优势，高科技产品多次获得国内外权威行业杂志的颁奖。</p>
      <br>
      <p>元征拥有完善的市场网络。在国内拥有10家分公司，几十家办事处，数百家经销商和授权培训中心。以“为汽车领域提供***产品、技术和服务”为使命，元征与国内几乎所有的汽车制造厂家建立了业务合作伙伴关系，成为这些汽车制造厂全面的维修设备及技术供应商。</p>
    </section>

    <div class="title target">
      <p>O U R&nbsp;&nbsp;&nbsp;G O A</p>
      <p>我们的目标</p>
    </div>
    <section class="sec-text">
      <p>元征成立于1992年，是国内最早致力于汽车诊断、检测、养护产品研发、生产和销售的高科技企业之一。深圳市元征科技股份有限公司于2002年10月在香港创业板上市（股票代码：02488 ），是国内行业最先在香港上市的企业之一。</p>
      <br>
      <p>元征率先在中国汽车行业提出“汽车后市场”概念，以先进的汽车电子检测和诊断产品为基础，综合运用自动控制、信息技术、机电一体化等技术，发展了涵盖汽车诊断、检测、养护、机械、电子、工具等产品线。目前，元征的诊断、检测和机械产品在全球市场拥有相当高的占有率，其中“电眼睛”品牌已成为汽车诊断电脑的代名词，代表着当今世界汽车诊断技术的高水平，是中国汽车诊断电脑在全世界的骄傲。</p>
      <br>
      <p>元征坚持科技创新，拥有数百项自主知识产权，在海内外设有多家研发试验基地，拥有全球最大的汽车诊断技术研发团队之一，产品研发已经形成公司的核心竞争优势，高科技产品多次获得国内外权威行业杂志的颁奖。</p>
      <br>
      <p>元征拥有完善的市场网络。在国内拥有10家分公司，几十家办事处，数百家经销商和授权培训中心。以“为汽车领域提供***产品、技术和服务”为使命，元征与国内几乎所有的汽车制造厂家建立了业务合作伙伴关系，成为这些汽车制造厂全面的维修设备及技术供应商。</p>
    </section>

    <div class="title office">
      <p>OFFICE ENVIRONMENT</p>
      <p>办公环境</p>
    </div>
    <section class="sec-pic">
      <div class="pic-left">
        <img src="./images/test.png" alt="">
        <img src="./images/test.png" alt="">
        <img src="./images/test.png" alt="">
        <img src="./images/test.png" alt="">
      </div>
      <div class="pic-middle">
        <img src="./images/test.png" alt="">
      </div>
      <div class="pic-right">
        <img src="./images/test.png" alt="">
        <img src="./images/test.png" alt="">
        <div class="next" @click="changePic">
          <img src="./images/change.png" alt="">
          <p>换一批</p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      changePic(){
        console.log(666)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .contact-bg{
    width: 100%;
    height: 600px;
    background: url("./images/banner.png") no-repeat center;
    background-size: 100% 100%;
  }
  .title{
    margin: 30px auto;
    width: 174px;
    line-height: 24px;
    font-size: 18px;
    color: #48b4e9;
    text-align: center;
  }
  .title p:first-child{
    border-bottom: 1px solid #dcdcdc;
  }
  .title p:last-child{
    font-size: 20px;
    color: #222222;
    margin-top: 10px;
  }
  .target{
    width: 125px;
  }
  .office{
    width: 210px;
  }
  .sec-text{
    width: 896px;
    margin: 0 auto;
    font-size: 16px;
    color: #444444;
    line-height: 20px;
  }
  .sec-pic{
    width: 1200px;
    margin: 0 auto;
    height: 460px;
    margin-bottom: 40px;
  }
  .pic-left{
    width:460px;
    height: 460px;
    float: left;
    margin-right: 12px;
  }
  .pic-left img{
    width: 224px;
    height: 224px;
    float: left;
    margin-bottom: 12px;
  }
  .pic-left img:nth-child(odd){
    margin-right: 12px;
  }
  .pic-middle img{
    width:460px;
    height: 460px;
    float: left;
    margin-right: 12px;
  }
  .pic-right img{
    width: 247px;
    height: 224px;
  }
  .pic-right img:first-child{
    margin-bottom: 10px;
  }
  .next{
    position: relative;
    text-align: center;
    width: 100px;
    bottom: 142px;
    left: 1018px;
    cursor: pointer;
  }
  .next img{
    width: 29px;
    height: 29px;
  }
  .next p{
    font-size: 18px;
    color: #ffffff;
  }
</style>
