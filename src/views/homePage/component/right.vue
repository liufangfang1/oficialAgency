<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-09 17:19:57
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-11 19:46:54
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\views\homePage\component\right.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <TitleCom>
      <p>能耗监测<span>Monitor</span></p>
    </TitleCom>

    <div class="electricity">
      <img src="../../../assets/images/homepage/dianliang.png" alt="">
      <img src="../../../assets/images/homepage/shebei.png" alt="">
    </div>
    <div style="display:flex">
      <div class="electricitytext">
        <div class='round'></div>
        <div>
          <span class="span1">44831.2</span>
          <span class="span2">kw</span>
          <div class="span3">今日耗电总量</div>
        </div>
      </div>
      <div class="electricitytext">
        <div class='round round1'></div>
        <div>
          <span class="span1">499</span>
          <span class="span2">S</span>
          <div class="span3">接入能耗设备总台数</div>
        </div>
      </div>
    </div>
    <TitleDetail>
      <p>同比去年当月能耗<span>Tendency</span></p>
      <img src="../../../assets/images/homepage/titleDetail.png" alt="">
    </TitleDetail>
    <!-- 图 -->
    <div class="tendency">
      <div id="tendency"></div>
    </div>
    <TitleDetail>
      <p>设备耗电类型<span>Equipment type</span></p>
      <img src="../../../assets/images/homepage/titleDetail.png" alt="">
    </TitleDetail>
    <!-- 能耗图表 -->
    <div class="equipment">
      <div class="equipmentTitle">
        <span>单位：kwh</span>
        <div class="nh nh1">
          <div class="fk"></div>
          今年所用能耗
        </div>
        <div class="nh nh2">
          <div class="fk fk1"></div>
          去年总能耗
        </div>

      </div>
      <div class="equipments">
        <div id="equipment1">
          <!-- <div class="equipment1">
            <span>6456</span>
            <img src="../../../assets/images/homepage/Chart_lineg.png" alt="">
          </div> -->
        </div>
        <div id="equipment2">

        </div>
        <div id="equipment3">

        </div>
        <div id="equipment4">

        </div>
      </div>
      <img src="../../../assets/images/homepage/dk.png" alt="">
    </div>
    <div class="remark">
      <div class="light">
        <img src="../../../assets/images/homepage/light.png" alt="">
       <span> 灯光照明</span>
      </div>
      <div class="light">
        <img src="../../../assets/images/homepage/wind.png" alt="">
        <span>空调新风</span>
      </div>
      <div class="light"><img src="../../../assets/images/homepage/diplay.png" alt="">
        <span>展示设备</span>
      </div>
      <div class="light"><img src="../../../assets/images/homepage/other.png" alt="">
      <span>其他设备</span>
    </div>
    </div>
    <TitleDetail>
      <p>当日耗电时段预警<span>Warning</span></p>
      <img src="../../../assets/images/homepage/titleDetail.png" alt="">
    </TitleDetail>
    <div class="Warning">
      <div class="WarningTime WarningTimetop">
        <span>04:00~12:00</span>
        <span>12:00~12:00</span>
        <span>20:00~04:00</span>
      </div>
      <dv-decoration-2 style="width:100%;height:5px;color:#093a64;margin-top: 3%;"/>
      <div class="WarningTime WarningTimetop1">
        <span :class="warnTendency.isHeiht1?'WarningTimecolor':''">{{warnTendency.isHeiht1?'偏高':'正常'}}</span>
        <span :class="warnTendency.isHeiht2?'WarningTimecolor':''">{{warnTendency.isHeiht2?'偏高':'正常'}}</span>
        <span :class="warnTendency.isHeiht3?'WarningTimecolor':''">{{warnTendency.isHeiht3?'偏高':'正常'}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import TitleCom from './title.vue'
import TitleDetail from './titleDetail.vue'
import tendencyChartNixins from "@/mixins/tendencyChart";

export default {
  components: { TitleCom, TitleDetail },
  mixins: [tendencyChartNixins],
  data() {
    return {
      tendencyChart: null,
      equipmentchart1: null,
      equipmentchart2: null,
      equipmentchart3: null,
      equipmentchart4: null,
      warnTendency:{//耗电时段是否偏高
        isHeiht1:false,
        isHeiht2:true,
        isHeiht1:false,
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.tendencyChartShow()//能耗
      this.equipmentChar1()//耗电 灯光照明
      this.equipmentChar2()//耗电 空调新风
      this.equipmentChar3()//耗电 展示设备
      this.equipmentChar4()//耗电 其他设备
    })

  },
  beforeDestroy() {
    if (!this.tendencyChart || !this.equipmentchart1) {
      return
    }
    this.tendencyChart.dispose()
    this.tendencyChart = null
    this.equipmentchart1.dispose()
    this.equipmentchart1 = null
  },
}
</script>
<style scoped lang="scss">
.electricity {
  img {
    width: 19.19%;
    height: 8.29%;
  }
}
.electricity > img:nth-child(1) {
  margin: 4% 16% 0 20%;
}
.electricitytext {
  display: flex;
  margin-left: 12%;
  color: #f5f5f5;
  font-family: "hemi";
}
.electricitytext > div:nth-child(2) {
  margin-left: 10px;
}
.span1 {
  font-size: 25px;
}
.span2 {
  font-size: 16px;
  margin-left: 8px;
  font-family: "ysbth";
}
.span3 {
  font-size: 12px;
  font-family: "ysbth";
  letter-spacing: 2px;
}
.round {
  height: 6px;
  width: 6px;
  margin-top: 10px;
  background-color: #65eaa1;
  border-radius: 50%;
  // animation: breathe 1000ms ease infinite;
}
.round1 {
  background-color: #7ad5ff;
}
.tendency {
  width: 100%;
  height: 185px;
}
#tendency {
  width: 100%;
  height: 100%;
}
.equipment {
  width: 100%;
  height: 20.5%;
  position: relative;
  color: white;

  img {
    width: 85%;
    height: 85%;
    position: absolute;
    top: 26.5%;
    left: 7.5%;
  }
}
.equipments {
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding-top: 6%;
  position: relative;
}

.equipmentTitle {
  margin: 2.55% 0 0 6%;
  font-size: 12px;
  font-family: "ysbth";
  display: flex;
}
.nh {
  display: flex;
  margin-left: 3%;
  font-size: 13px;
  letter-spacing: 1px;
  .fk {
    width: 8px;
    height: 7px;
    margin: 5px 5px 0px 0px;
    background: #5ffd8f;
  }
  .fk1 {
    background: #3794ff;
  }
}
.nh1 {
  margin-left: 30%;
}
.nh2 {
  margin-left: 5%;
}

.equipments div {
  width: 65px;
  height: 65px;
  // background: yellow;
}


.remark {
  width: 95%;
  height: 4.81%;
  margin: -2% 0 0 2%;
  display: flex;
  font-family: "ysbth";
  div {
    width: 25%;
    height: 100%;
  }
  span{
    letter-spacing: 1px;
  }
  
}
.light {
  position: relative;
  font-size: 12px;
  color: #C8EFFD;;
  img {
    width: 54.5px;
    height: 54.5px;
    margin-top: 3px;
  }
  span{
    position: absolute;
    left: 41px;
    top: 23px;
  }
}
.Warning{
  width: 80%;
  height: 95.5px;
  margin: auto;
  font-size: 12px;
  color: white;
  

  .WarningTime{
    font-family: "hemi";
  
    display: flex;
    justify-content: space-around;
  }
  .WarningTimetop{
    margin-top: 9%;
  }
  .WarningTimetop1{
    margin-top: 3%;
    font-size: 12px;
    font-family: "ysbth";
  }
  .WarningTimecolor{
    color: #E94D27;
  }
}
@media screen and (width: 3840px) {
  .round {
    height: 15px;
    width: 15px;
  }

  .span1 {
    font-size: 50px;
  }
  .span2 {
    font-size: 33px;
  }
  .span3 {
    font-size: 24px;
    font-family: "ysbth";
  }
  .equipments {
    padding-top: 11%;
  }
  .equipment {
    img {
      height: 296px;
      top: 14.5%;
    }
  }
  .equipmentTitle {
    font-size: 18px;
  }
  .nh {
    font-size: 22px;
    .fk {
      width: 16px;
      height: 14px;
      margin: 7px 7px 0px 0px;
    }
  }
  .equipment {
    height: 11.5vh;
}
  .equipments div {
    width: 114px;
    height: 114px;
  }
  .tendency {
    height: 387px;
  }
  .light {
  font-size: 24px;
  img {
    width:109px;
    height: 109px;
  }
  span{
    position: absolute;
    left: 82px;
    top:46px;
  }
}
.remark {
  margin: 3% 0 0 2%;
}
.Warning{
  height: 191px;
  font-size: 24px;
}
.WarningTimetop1{
    margin-top: 3%;
    font-size: 22px;
  }

}
</style>