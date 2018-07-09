<template>
  <div class="contactUs">
    <div class="banner_wrap">
      <div class="banner"></div>
    </div>
    <div class="info_wrap">
      <div class="info">
        <div class="address">
          <h3>公司地址</h3>
          <p>北京市朝阳区建国路93号万达广场8号楼808</p>
        </div>
        <div class="line"></div>
        <div class="consult">
          <h3>合作咨询</h3>
          <p>咨询电话：010 - 58205388</p>
          <p>合作邮箱：dan.luo.bj@cnlaunch.com</p>
        </div>
        <div class="line"></div>
        <div class="support">
          <h3>技术支持</h3>
          <p>咨询电话：010 - 58205388</p>
          <p>合作邮箱：dan.luo.bj@cnlaunch.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contactUs",
    data() {
      return {}
    },
    created() {
    },
    mounted() {
    },
    methods: {},
    watch: {},
    computed: {},
    components: {},
  }
</script>

<style scoped lang="stylus">
.contactUs{
  width 100%
  .banner_wrap{
    margin 0 auto
    height 500px
    box-sizing border-box
    background-image: url('./images/banner.png');
    background-position: top center;
    background-repeat: no-repeat;
    background-size:cover
    .banner{}
  }
  .info_wrap{
    background-color: #ffffff;
    .info{
      box-sizing border-box
      height 420px
      padding-top 80px
      font-size 0
      text-align center
      div{
        display inline-block
        font-size: 18px;
        color: #666666;
        vertical-align top
        text-align center
        h3{
          font-size: 22px;
          color: #333333;
          padding-top 128px
          padding-bottom 37px
        }
        p{
          line-height 24px
        }
      }
      .address{
        width 210px
        height 228px
        margin-right 94px
        h3{
          background-image: url('./images/address.png');
          background-position: top center;
          background-repeat: no-repeat;
        }
      }
      .line{
        box-sizing border-box
        width 1px
        height 176px
        margin-top 40px
        border-left 1px dashed #bfbfbf;
      }
      .consult{
        width 324px
        height 228px
        margin-left 80px
        margin-right 80px
        h3{
          background-image: url('./images/cooperation.png');
          background-position: top center;
          background-repeat: no-repeat;
        }
      }
      .support{
        width 324px
        height 228px
        margin-left 32px
        h3{
          background-image: url('./images/Support.png');
          background-position: top center;
          background-repeat: no-repeat;
        }
      }
    }
  }
}
</style>
