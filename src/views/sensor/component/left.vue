<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-12 20:10:28
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-14 17:49:42
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\views\sensor\component\left.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <TitleCom>
      <p>入口监测<span>Monitor</span></p>
    </TitleCom>
    <!-- part1 -->
    <div class="partone">
      <img class="Monitorimg" src="../../../assets/images/monitor/monitor.png" alt="">
      <div class="Monitorname">
        Num 0982
      </div>
    </div>
    <TitleCom>
      <p>环境实时数据<span>Data</span></p>
    </TitleCom>
    <TitleDetail style="margin-left:6%">
      <p>实时温湿度<span>Detailed</span></p>
      <img src="../../../assets/images/homepage/titleDetail.png" alt="">
    </TitleDetail>

    <div class="part2">
      <div class='round' style="background:#65eaa1"></div>
      <span class="sapn1">温 度</span>
      <img src="" alt="">
      <img src="" alt="">
      <span>22~28 ℃</span>
      <!-- <img class="part2bg" src="../../../assets/images/monitor/part2bg.png" alt=""> -->

    </div>

    <TitleDetail style="margin-left:6%">
      <p>实时空气指标<span>Index</span></p>
      <img src="../../../assets/images/homepage/titleDetail.png" alt="">
    </TitleDetail>
  </div>

</template>
  <script>
import TitleCom from '../../component/title.vue'
import TitleDetail from '../../component/titleDetail.vue'
export default {
  components: { TitleCom, TitleDetail },
  data() {
    return {

    }

  },
  methods: {

  }
}
  </script>
  <style scoped lang="scss">
.partone {
  width: 92%;
  height: 182px;
  display: flex;
  margin: 6% 0 0 5%;
  justify-content: space-between;
  .Monitorimg {
    width: 177px;
    height: 100%;
  }
  .Monitorname {
    width: 191px;
    height: 29px;
    background-image: url("../../../assets/images/monitor/monitorR.png");
    background-size: 100% 100%;
    margin-top: 23%;
    text-align: center;
    line-height: 29px;
    color: #65eaa1;
    font-size: 17px;
    font-family: "hemi";
  }
}
.part2 {
  width: 90%;
  height: 58px;
  margin-left: 8%;
  color: #c9efff;
  font-size: 17px;
  font-family: "ysbth";
  display: flex;
  line-height: 58px;
  position: relative;
  .sapn1{
    margin-left: 2%;
  }
}
.round {
  height: 6px;
  width: 6px;
  margin-top: 10px;
  border-radius: 50%;
  margin-top: 25px;
  // animation: breathe 1000ms ease infinite;
}
.part2bg{

position: absolute;
right: 0;
top: 0;
}
@media screen and (width: 3840px) {
  .part2 {
    height: 117px;
    line-height: 117px;
    font-size: 34px;
  }
  .round {
    height:12px;
  width: 12px;
  margin-top: 47px;

  // animation: breathe 1000ms ease infinite;
  }

}
</style>