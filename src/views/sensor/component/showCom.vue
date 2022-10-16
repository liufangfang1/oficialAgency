<template>
  <div>
    <div class="part2">
      <slot name="round"></slot>
      <!-- 图标 -->
      <img v-show="round"  class='rounds' src="../../../assets/images/monitor/round.png" alt="">
      <img v-show="!round"  class='rounds' src="../../../assets/images/monitor/roundBlue.png" alt="">
      
      <span class="sapn1">{{span1}}</span>
      <!-- 图片 -->
      <img v-show="imgType==1"  class="img1" src="../../../assets/images/monitor/wendu.png" alt="">
      <img v-show="imgType==2"  class="img1" src="../../../assets/images/monitor/shidu.png" alt="">
      <img v-show="imgType==3"  class="img1" src="../../../assets/images/monitor/keli.png" alt="">
      <slot name="img1"></slot>
      <img class="img2" src="../../../assets/images/monitor/shidu1.png" alt="">
      <span class="sapn2">{{span2}}</span>
      <slot name="part2bg"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ['round','styleBackground', 'span1', 'span2','imgType'],
  data() {
    return {

    }
  }
}
</script>
<style scoped lang="scss">
.part2 {
  width: 90%;
  height: 58px;
  margin-left: 8%;
  color: #c9efff;
  font-size: 17px;
  font-family: "ysbth";
  display: flex;
  line-height: 58px;
  margin-top: 2%;
  position: relative;
  .sapn1 {
    width: 63px;
    margin-left: 2%;
    // height: 30px;
  }
  .img1 {
    width: 40px;
    height: 40px;
    margin: 3% 2% 0 5%;
  }
  .img2 {
    width: 36px;
    height: 32px;
    margin: 4% 2% 0 0%;
  }
  .sapn2 {
    margin-left: 2%;
  }
  .part2bg {
    width: 200px;
    height: 15px;
    position: absolute;
    top: 33%;
    right: 0px;
  }
}
.rounds {
  height: 22px;
  width: 22px;
  margin-top: 5%;
}
@media screen and (width: 3840px) {
  .part2 {
    height: 117px;
    line-height: 117px;
    font-size: 34px;
    margin-top: 4%;
    .sapn1 {
      width: 126px;
      // height: 30px;
    }
    .img1 {
      width: 80px;
      height: 80px;
    }
    .img2 {
      width: 72px;
      height: 64px;
    }
    .part2bg {
      width: 400px;
      height: 31px;
    }
  }
  .rounds {
    height: 44px;
    width: 44px;
    // animation: breathe 1000ms ease infinite;
  }
}
</style>

