<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-09 17:19:57
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-10 20:37:14
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
 
  </div>
</template>
<script>
import TitleCom from './title.vue'
import TitleDetail from './titleDetail.vue'
import tendencyChartNixins from "@/mixins/tendencyChart";
export default {
  components: { TitleCom ,TitleDetail},
  mixins:[tendencyChartNixins],
  data() {
    return {
      tendencyChart:null
    }
  },
  created() {
    this.$nextTick(() => {
      this.tendencyChartShow()
    })

  },
  beforeDestroy() {
    if (!this.tendencyChart) {
      return
    }
    this.tendencyChart.dispose()
    this.tendencyChart = null
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
  color: #F5F5F5;
  font-family: "hemi";

}
.electricitytext>div:nth-child(2){
    margin-left: 10px;
}
.span1{
    font-size: 25px;
}
.span2{
    font-size: 16px;
    margin-left:8px;
    font-family: "ysbth";
}
.span3{
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
  animation: breathe 1000ms ease infinite;
}
.round1{
    background-color: #7ad5ff;
}
.tendency{
    width: 100%;
    height: 300px;
}
#tendency{
    width: 100%;
    height: 100%;
}

@-webkit-keyframes breathe {
  0% {
    // opacity: 1;
    box-shadow: 0 1px 10px #73eeab;
  }
  50% {
    // opacity: 1;
    box-shadow: 0 1px 15px #06e76c;
  }
  100% {
    // opacity: 1;
    box-shadow: 0 1px 20px #81e7b1;
  }

}

@media screen and (width: 3840px) {
  .round {
    height: 15px;
    width: 15px;
  }
  @-webkit-keyframes breathe {
    0% {
      opacity: 0.2;
      box-shadow: 0 1px 15px #c9f0da;
    }
    100% {
      opacity: 1;
      box-shadow: 0 1px 40px #7de9ad;
    }
    50% {
      opacity: 1;
      box-shadow: 0 1px 20px #65eaa1;
    }
  }
  .span1{
    font-size:50px;
  }
.span2{
    font-size: 33px;
}
.span3{
    font-size: 24px;
    font-family: "ysbth";

}
}
</style>