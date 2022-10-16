<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-09 15:38:27
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-15 15:24:46
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\views\homePage\component\left.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 访客统计 -->
    <TitleCom>
      <p>访客统计<span>Statistics</span></p>
    </TitleCom>
    <section>
      <div class="Statistics">
        <div class="Statisticsdiv">
          <img src="./../../../assets/images/homepage/Statistics1.png" alt="">
          <div>
            <div class="Statisticsp">
              <!-- <dv-digital-flop :config="config" /> -->
              200
            </div>
            <div class="yuyue">今日预约</div>
          </div>
        </div>
        <div class="Statisticsdiv">
          <img src="./../../../assets/images/homepage/Statistics2.png" alt="">
          <div>
            <div class="Statisticsp">100</div>
            <div class="yuyue">运营时间<span>（天）</span></div>
          </div>
        </div>
      </div>
      <TitleDetail>
        <p>访客详细<span>Detailed</span></p>
        <img src="../../../assets/images/homepage/titleDetail.png" alt="">
      </TitleDetail>
      <!-- 全年接待量 -->
      <div class="reception">
        <div class='round'></div>
        <div>
          <div class="receptionnum">全年接待量<span>（人）</span></div>
          <div class="receptionp">3570</div>
         
        </div>
        <div>
          <img class="receptionimg" src="../../../assets/images/homepage/muman.png" alt="">
          <span class="receptionspan1">50%</span>
          <div class="receptionpMan">
            男性
          </div>
        </div>
        <div class="receptionimg1">
          <img class="receptionimg " src="../../../assets/images/homepage/man.png" alt="">
          <span class="receptionspan1 receptionspan2">50%</span>
          <div class="receptionpWuman">
            女性
          </div>
        </div>
      </div>
      <!-- 年龄分布 -->
      <div class="age">
        <div class='round'></div>
        <span>年龄分布</span>
      </div>
      <!-- 图 -->
      <div class="ageChart">
        <div id="ageChart"></div>
      </div>
      <!-- 人流分布 -->
      <div class="age">
        <div class='round'></div>
        <span>人流分布</span>
      </div>
      <div class="people">
        <img src="../../../assets/images/homepage/map.png" alt="">
        <div id="peopleChart"> </div>
      </div>

    </section>
    <TitleCom>
      <p>空间总况<span>Air Quality</span></p>
    </TitleCom>
    <div class="airQuality" v-if="isBigShow">
      <span class="airQualityspan1">空气质量指标</span>
      <span style="margin-left:2%">优：</span>
      <div class="airQualitycolor" style="background:#5ffd8f"></div>
      <span>良：</span>
      <div class="airQualitycolor" style="background:#feff0c"></div>
      <span>轻度污染：</span>
      <div class="airQualitycolor" style="background:#ff760b"></div>
      <span>中度污染：</span>
      <div class="airQualitycolor" style="background:#fb0400"></div>
      <span>重度污染：</span>
      <div class="airQualitycolor" style="background:#9f014e"></div>
      <span>严重污染：</span>
      <div class="airQualitycolor" style="background:#740415"></div>
    </div>
    <div class="airQuality" v-if="!isBigShow">
      <div class="airQualityspan1 airQualityspan1small">空气质量指标</div>
      <div class="airQualitycolor airQualitycolorsmall" style="background:#5ffd8f"></div>
      <div class="airQualitycolor airQualitycolorsmall" style="background:#feff0c;margin-left: 12px;"></div>
      <div class="airQualitycolor airQualitycolorsmall" style="background:#ff760b;margin-left: 15px;"></div>
      <div class="airQualitycolor airQualitycolorsmall" style="background:#fb0400;"></div>
      <div class="airQualitycolor airQualitycolorsmall" style="background:#9f014e"></div>
      <div class="airQualitycolor airQualitycolorsmall" style="background:#740415"></div>
    </div>
    <div class="airQuality" v-if="!isBigShow">
      <span style="margin-left:25%"> 优 </span>
      <span style="margin-left:6%"> 良 </span>
      <span style="margin-left:5%"> 轻度污染 </span>
      <span style="margin-left:2%"> 中度污染 </span>
      <span style="margin-left:2%"> 重度污染 </span>
      <span style="margin-left:2%"> 严重污染 </span>
    </div>
    <div class="airQuality">
      <span class="airQualityspan1">温湿度指标</span>
      <div class="indicators" style="background:#42ccff"></div>
      <div class="indicators" style="background:#62e389;margin-left: 6px;"></div>
      <div class="indicators" style="background:#eaa500;margin-left: 6px;"></div>
    </div>
    <!-- 空气指标 -->
    <div class="air" style="margin-top:5%">

      <div class="airbox">
        <span class="humiditysapn"></span>
        <img class="humidityimg" src="../../../assets/images/homepage/chart1.png" alt="">
        <div class="airchangecolor" v-for="(item,index) in amarr" :key="index" :style="{'background':indicators.time==item?humidityColor:''}"></div>
      </div>
    </div>
    <span class="airspan"> 空间湿度</span>
    <div class="air">
      <div class="airbox">
        <span class="humiditysapn"></span>
        <img class="humidityimg" src="../../../assets/images/homepage/chart2.png" alt="">
        <div class="airchangecolor" v-for="(item,index) in amarr" :key="index" :style="{'background':indicators.time==item?temperatureColor:''}"></div>
      </div>
    </div>
    <span class="airspan">&ensp;空间温度</span>
    <div class="air">
      <div class="airbox">
        <span class="humiditysapn"></span>
        <img class="humidityimg" src="../../../assets/images/homepage/chart3.png" alt="">
        <div class="airchangecolor" v-for="(item,index) in amarr" :key="index" :style="{'background':indicators.time==item?carbonDioxideColor:''}"></div>
      </div>
    </div>
    <span class="airspan">二氧化碳</span>
    <div class="air">
      <div class="airbox">
        <span class="humiditysapn"></span>
        <img class="humidityimg" src="../../../assets/images/homepage/chart4.png" alt="">
        <div class="airchangecolor" v-for="(item,index) in amarr" :key="index" :style="{'background':indicators.time==item?tvocColor:''}"></div>
      </div>
    </div>
    <span class="airspan"> tvoc</span>
    <div class="airspan">AM
      <span v-for="(item,index) in amarr" :key="index">{{item}}</span>
    </div>

  </div>
</template>
<script>
import TitleCom from '../../component/title.vue'
import TitleDetail from '../../component/titleDetail.vue'
import ageChartNixins from "@/mixins/ageChart";

export default {
  components: { TitleCom, TitleDetail },
  mixins: [ageChartNixins],
  data() {
    return {
      agechart: null,
      peopleChart: null,
      amarr: ['0', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      indicators://空气指标
      {
        time: '09',//时刻
        humidity: 3,//湿度3个值 1~3 良好 舒适 稍差
        temperature: 2,//温度3个值 1~3 良好 舒适 稍差
        carbonDioxide: 4,//二氧化碳 1~6 优~严重污染
        tvoc: 2//tvoc  1~6 优~严重污染
      },
      statisticsTimer: null,//今日预约定时器
      // config: {
      //   number: [100],
      //   style: {
      //     //这里可以修改默认样式
      //     fontSize: 32,//字体大小
      //     fill: '#FFFFFF',//字体颜色
      //     fontFamily: "hemi"
      //   }
      // }

    }
  },
  created() {
    this.$nextTick(() => {
      this.ageChartShow()
      this.peopleChartShow()//进度条
    })

  },
  mounted() {
    // this.statisticsTimer = setInterval(() => {
    //   this.statisticspower();
    // }, 5000);
  },
  computed: {

    humidityColor() {//湿度
      let classClolr = ''
      classClolr = this.indicators.humidity == 1 ? '#42ccff' : this.indicators.humidity == 2 ? '#62e389' : '#eaa500'
      return classClolr
    },
    temperatureColor() {//温度
      let classClolr = ''
      classClolr = this.indicators.temperature == 1 ? '#42ccff' : this.indicators.temperature == 2 ? '#62e389' : '#eaa500'
      return classClolr
    },
    carbonDioxideColor() {//二氧化碳
      switch (this.indicators.carbonDioxide) {
        case 1:
          return '#5ffd8f'
        case 2:
          return '#feff0c'
        case 3:
          return '#ff760b'
        case 4:
          return '#fb0400'
        case 5:
          return '#9f004e'
        case 6:
          return '#750414'

        default:
          break;
      }
    },
    tvocColor() {//tvoc
      switch (this.indicators.tvoc) {
        case 1:
          return '#5ffd8f'
        case 2:
          return '#feff0c'
        case 3:
          return '#ff760b'
        case 4:
          return '#fb0400'
        case 5:
          return '#9f004e'
        case 6:
          return '#750414'

        default:
          break;
      }
    },
  },
  methods: {
    // statisticspower() {
    //   this.config.number[0] = 200;
    //   this.config = { ...this.config };//对象解构，更新props
    // }

  },
  beforeDestroy() {
    if (!this.agechart || !this.peopleChart) {
      return
    }
    this.agechart.dispose()
    this.agechart = null
    this.peopleChart.dispose()
    this.peopleChart = null
  },
}
</script>
<style scoped lang="scss">
@import url("../../../assets/styles/left.css");
section {
  padding-left: 6%;
}
.Statistics {
  width: 100%;
  height: 6.16%;
  margin-top: 5%;
  display: flex;

  img {
    width: 43%;
    height: 100%;
  }
}
.Statisticsdiv {
  width: 50%;
  display: flex;
  letter-spacing: 2px;
  img {
    width: 43.52%;
    height: 100%;
  }
}
.Statisticsp {
  font-family: "hemi";
  font-size: 32px;
  color: white;
}
.yuyue {
  font-family: "ysbth";
  font-size: 12px;
  color: white;
  span {
    font-size: 13px;
    transform: scale(0.5);
  }
}

@media screen and (width: 3840px) {
  .Statisticsdiv {
    width: 48%;
    // margin-left: 4%;
    margin-top: 10px;
    margin-left: 19px;
  }
  .Statisticsp {
    font-size: 64px;
  }
  .yuyue {
    font-size: 24px;
    span {
      font-size: 13px;
      color: rgb(140, 178, 233);
    }
  }
}
</style>