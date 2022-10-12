
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
            <!-- <LeftCom> </LeftCom> -->
          </div>
          <!-- animate__animated animate__bounceInRight -->
          <div class="right ">
            <!-- <RightCom></RightCom> -->
          </div>
        </div>
        <!-- 中部按钮 -->
        <div class="centerBottom animate__animated animate__bounceInUp">
          <div v-for="(item,index) in tab" :key="index" :class="currentIndex==index?'active_bgimg ':'bgimg'" @click="handleTabClick(item,index)">
            <p>{{item}}</p>
          </div>
  
        </div>
        <!-- log0 -->
        <img class="logo" src="../../assets/images/homepage/logo.png" alt="">
        <!-- 底部 -->
        <FooterCom></FooterCom>
      </dv-full-screen-container>
  
    </div>
  
  </template>
    
    <script>
  
//   import CenterCom from './component/center.vue'
  import LeftCom from './component/left.vue'
  import RightCom from './component/right.vue'
  import FooterCom from '../component/footer.vue'
  import tabClickMixins from "@/mixins/tabClick";
  export default {
    name: "",
    components: {  LeftCom, RightCom, FooterCom },
    mixins:[tabClickMixins],
    data() {
      return {
        currentIndex:3,
        tab: ['基地概括', '展示中心', '预约中心', '安防态势', '智慧管理', '工务署']
      }
    },
    methods:{
     
    }
  
  
  
  };
    </script>
    
    <style scoped lang="scss">
  /* @import url('../../assets/styles/homePage.css'); */
  #data-view {
    width: 100%;
    height: 100%;
    position: relative;
    background: radial-gradient(#444f6d, #112557, #040d2b);
  }
  #dv-full-screen-container {
    background-image: url("../../assets/images/oneborderbg.png");
    background-size: 100% 100%;
    /* display: flex; */
    flex-direction: column;
  }
  .CenterCom {
    width: 100%;
    height: calc(100% - 5%);
    margin-top: 5%;
    margin: auto;
  }
  header {
    width: 100%;
    height: 100px;
    line-height: 50px;
    text-align: center;
    font-size: 30px;
    color: white;
    font-family: "ysbth";
    position: absolute;
    top: 0;
    letter-spacing: 2px;
  }
  .content {
    display: flex;
    justify-content: space-between;
  }
  .left {
    position: absolute;
    left: 1.38%;
    top: 7.22%;
    width: 21%;
    height: 87.7%;
    /* background: yellow; */
  
    background-image: url("../../assets/images/homepage/leftborder.png");
    background-size: 100% 100%;
  }
  .right {
    position: absolute;
    right: 1.38%;
    top: 7.22%;
    width: 21%;
    height: 87.7%;
    background-image: url("../../assets/images/homepage/rightborder.png");
    background-size: 100% 100%;
  }
  .centerBottom {
    width: 47.34%;
    height: 2.87%;
    position: absolute;
    bottom: 10.28%;
    left: 26.35%;
    display: flex;
    font-size: 17px;
    color: white;
    font-family: "ysbth";
  
    div {
      width: 15%;
      height: 100%;
      margin-left: 2%;
      // background-image: url("../../assets/images/homepage/butbg.png");
      background-size: 100% 100%;
      text-align: center;
      line-height: 2%;
      letter-spacing: 3px;
     
    }
  }
  .bgimg{
    background-image: url("../../assets/images/homepage/butbg.png");
  }
  .active_bgimg{
    background-image: url("../../assets/images/homepage/butbg_active.png");
  }
  .logo {
    width: 12.16%;
    height: 2.59vh;
    position: absolute;
    bottom: 3%;
    left: 44.35%;
  }
  @media screen and (width: 3840px) {
    header {
      font-size: 52px;
      line-height: 100px;
      letter-spacing: 5px;
    }
    .centerBottom {
      font-size: 34px;
    }
  }
  </style>