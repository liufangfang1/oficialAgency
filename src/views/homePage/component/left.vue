<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-09 15:38:27
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-10 19:57:22
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
            <div class="Statisticsp">200</div>
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
        </div>
        <div class="receptionimg1">
          <img class="receptionimg " src="../../../assets/images/homepage/man.png" alt="">
          <span class="receptionspan1 receptionspan2">50%</span>
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
    </section>

  </div>
</template>
<script>
import TitleCom from './title.vue'
import TitleDetail from './titleDetail.vue'
import ageChartNixins from "@/mixins/ageChart";

export default {
  components: { TitleCom, TitleDetail },
  mixins:[ageChartNixins],
  data() {
    return {
      agechart: null
    }
  },
  created() {
    this.$nextTick(() => {
      this.ageChartShow()
    })

  },
  methods: {
    
  },
  beforeDestroy() {
    if (!this.agechart) {
      return
    }
    this.agechart.dispose()
    this.agechart = null
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
  height: 6.16vh;
  margin-top: 2vh;
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
    }
  }
}
</style>