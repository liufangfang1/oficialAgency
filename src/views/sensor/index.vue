<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-12 20:10:28
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-13 17:55:58
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\views\sensor\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>

  <div id="data-view">
    <dv-full-screen-container>
      <!-- <CenterCom class="CenterCom"></CenterCom> -->
      <header class="animate__animated animate__bounceInDown">
        工务署智慧展馆综合管理平台
      </header>
      <!-- 左右区域 animate__animated animate__bounceInLeft-->
      <div class="content">
        <div class="left ">
          <LeftCom> </LeftCom>
        </div>
        <!-- animate__animated animate__bounceInRight -->
        <div class="right ">
          <RightCom></RightCom>
        </div>
      </div>
      <!-- 中部按钮 -->
      <div class="centerBottomChi" v-show="showChild"> 
      <div class="centerBottomChidiv" v-for="(item,index) in tabChild" :key="index" :class="tabcurrentIndex==index?'chiactive_bgimg ':'chibgimg'" @click="handleTabChildClick(item,index)">
          <span>{{item}}</span>
        </div>
     </div>
      <div class="centerBottom animate__animated animate__bounceInUp">
        <div class="centerBottomdiv" v-for="(item,index) in tab" :key="index" :class="currentIndex==index?'active_bgimg ':'bgimg'" @click="handleTabClick(item,index)">
          <p>{{item}}</p>
        </div>

      </div>
      <!-- 智能巡检 -->
      <div class="inspection">
        <InspectionCom></InspectionCom>
      </div>
      <!-- log0 -->
      <img class="logo" src="../../assets/images/homepage/logo.png" alt="">
      <!-- 底部 -->
      <FooterCom></FooterCom>
    </dv-full-screen-container>

  </div>

</template>
    
    <script>

import CenterCom from '../monitoring/component/center.vue'
import LeftCom from './component/left.vue'
import RightCom from './component/right.vue'
import FooterCom from '../component/footer.vue'
import tabClickMixins from "@/mixins/tabClick";
import InspectionCom from '../component/inspection.vue'
export default {
  name: "",
  components: { CenterCom, LeftCom, RightCom, FooterCom, InspectionCom },
  mixins: [tabClickMixins],
  data() {
    return {
      currentIndex: 3,
      tabcurrentIndex:0,
    }
  },
  methods: {

  }



};
    </script>
    
    <style scoped lang="scss">
@import url("../../assets/styles/homePage.css");
.inspection {
    width: 15%;
    position: absolute;
    right: 16.8%;
    top: 32%;
  }
</style>