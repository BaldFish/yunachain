<template>
  <div>
    <div class="contact-bg">
      <div class="bg-title">
        <p>CONTACT&nbsp;&nbsp;US</p>
        <p>联&nbsp;&nbsp;&nbsp;系&nbsp;&nbsp;&nbsp;我&nbsp;&nbsp;&nbsp;们</p>
      </div>
      <div class="bg-address">
        <img src="./images/icon_location.png" alt="">
        <p>建国路万达广场8号楼</p>
      </div>
    </div>
    <p class="address">北京市 朝阳区建国路93号万达广场8号楼808</p>
    <!--地图容器-->
    <div id="allmap"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted () {
      this.ready()
    },
    methods: {
      ready () {
        // 百度地图API功能
        // 创建Map实例
        var map = new BMap.Map("allmap");
        // 初始化地图,设置中心点坐标和地图级别
        map.centerAndZoom(new BMap.Point(116.331398,39.897445),16);
        // 开启鼠标滚轮缩放
        map.enableScrollWheelZoom(true);

        // 定位--大望路万达广场8号楼
        var new_point = new BMap.Point(116.477472,39.915897);
        // 创建标注
        var marker = new BMap.Marker(new_point);
        // 将标注添加到地图中
        map.addOverlay(marker);
        map.panTo(new_point);

        // 添加工具条、比例尺控件
        map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}));
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL}));

      }
    }
  }
</script>

<style scoped lang="stylus">
  #allmap{
    width: 100%;
    height: 680px;
  }
  .contact-bg{
    width: 100%;
    height: 736px;
    background: url("./images/banner.png") no-repeat center;
    background-size: 100% 100%;
    color: #ffffff;
    text-align: center;
    margin:0 auto;
  }
  .bg-title{
    line-height: normal;
  }
  .bg-title p:first-child{
    font-size: 52px;
    font-weight: bold;
    padding-top: 260px;
  }
  .bg-title p:last-child{
    font-size: 30px;
  }
  .bg-address{
    line-height: normal;
    margin-top: 145px;
    padding-right: 20px;
  }
  .bg-address p{
    font-size: 16px;
    margin-top: 5px;
  }
  .address{
    margin: 30px auto;
    width: 240px;
    line-height: 22px;
    font-size: 20px;
    color: #666;
    text-align: center;
  }
</style>
