<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-12 20:10:28
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-16 10:11:40
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\views\sensor\component\left.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-12 20:10:28
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-15 10:06:35
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
      <img class="Monitorimg" src="../../../assets/images/monitor/cgq.png" alt="">
      <div class="Monitorname">
        Num 0982
      </div>
    </div>
    <TitleCom>
      <p>环境实时数据<span>Data</span></p>
    </TitleCom>
    <TitleDetail style="margin-left:6%">
      <p>实时温湿度<span>Detailed</span></p>
      <img src="../../../assets/images/monitor/templater.png" alt="">
    </TitleDetail>
  
    <ShowCom :round="true" :styleBackground="'#65eaa1'" :span1="'温 度'" :span2="'22~28℃'" :imgType="1">
      <img slot="part2bg" class="part2bg" src="../../../assets/images/monitor/bgGreen.png" alt="">
    </ShowCom>
    <ShowCom  :round="false" :styleBackground="'#77c0ff'" :span1="'相对湿度'" :span2="'40-80%'" :imgType="2">
      <img slot="part2bg" class="part2bg" src="../../../assets/images/monitor/bgBlue.png" alt="">
    </ShowCom>
  

    <TitleDetail style="margin-left:6%">
      <p>实时空气指标<span>Index</span></p>
      <img src="../../../assets/images/monitor/air.png" alt="">
    </TitleDetail>
    <ShowCom :round="true" :styleBackground="'#77c0ff'" :span1="'CO2'" :span2="'1.0%'" :imgType="3">
      <img slot="part2bg" class="part2bg" src="../../../assets/images/monitor/part2bg.png" alt="">
    </ShowCom>
    <ShowCom :round="true" :styleBackground="'#77c0ff'" :span1="'甲 醛'" :span2="'0.06mg/m3'" :imgType="3">
      <img slot="part2bg" class="part2bg" src="../../../assets/images/monitor/part2bg.png" alt="">
    </ShowCom>
    <ShowCom :round="true" :styleBackground="'#77c0ff'" :span1="'臭 氧'" :span2="'0.10mg/m3'" :imgType="3">
      <img slot="part2bg" class="part2bg" src="../../../assets/images/monitor/part2bg.png" alt="">
    </ShowCom>
    <ShowCom :round="true" :styleBackground="'#77c0ff'" :span1="'pm2.5'" :span2="'0.06mg/m3'" :imgType="3">
      <img slot="part2bg" class="part2bg" src="../../../assets/images/monitor/part2bg.png" alt="">
    </ShowCom>
    <ShowCom :round="true" :styleBackground="'#77c0ff'" :span1="'pm10'" :span2="'0.08mg/m3'" :imgType="3">
      <img slot="part2bg" class="part2bg" src="../../../assets/images/monitor/part2bg.png" alt="">
    </ShowCom>
  </div>

</template>
  <script>
import TitleCom from '../../component/title.vue'
import TitleDetail from '../../component/titleDetail.vue'
import ShowCom from './showCom.vue'
export default {
  components: { TitleCom, TitleDetail,ShowCom },
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


@media screen and (width: 3840px) {
  
}
</style>