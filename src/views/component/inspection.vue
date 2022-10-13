<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-13 11:10:25
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-13 15:13:44
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\views\component\inspection.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 动画效果 -->
    <div class="animation" :style="{'visibility':showxj?'inherit':'hidden'}">
      <div class="radar">
        <div class="fan"></div>
      </div>
    </div>
    <div class="inspection">
      <span>{{showDirection?'智能巡检':'告警中心'}}</span>
      <img class="xj" src="../../assets/images/homepage/xj.png" alt="" @click="handleShowxj">
      <img v-show="!showDirection" class="inspectionjt" src="../../assets/images/homepage/jiantou.png" alt="">
      <img v-show="showDirection" class="inspectionjt" src="../../assets/images/homepage/rightjiantou.png" alt="" @click="showDirection=false">
    </div>

    <!-- 告警中心 -->
    <div class="warm" :style="{'visibility':showDirection?'inherit':'hidden'}">

      <div :label="i.item" v-for="(i,index) in checkboxData" :key="index">
        <img :style="{'visibility':checkList.includes(i.item)?'inherit':'hidden'}" class="warmimg" src="../../assets/images/homepage/warm.png" alt="">
        <span class="font_family" :class="checkList.includes(i.item)?i.activeIcon:i.icon">
          <span :class="checkList.includes(i.item)?'warmSpan warmSpan1':'warmSpan'"> {{i.item}}</span>
        </span>
      </div>

    </div>

  </div>

</template>
  <script>

export default {
  components: {},
  data() {
    return {
      timer: null,
      showDirection: false,
      showxj: false,
      checkList: ['消防风机'],
      checkboxData: [
        {
          item: '消防栓水压',
          icon: 'icon-shuiya noactive',
          activeIcon: 'icon-shuiya active'
        },
        {
          item: '消防水池',
          icon: 'icon-icon-xiaofangshuichi noactive',
          activeIcon: 'icon-icon-xiaofangshuichi active'
        },
        {
          item: '消防泵水压',
          icon: 'icon-shuiya noactive',
          activeIcon: 'icon-shuiya active'
        },
        {
          item: '变压器',
          icon: 'icon-transformer-fill noactive',
          activeIcon: 'icon-transformer-fill active'
        },
        {
          item: '火灾报警器',
          icon: 'icon-shengguangbaojingqi noactive',
          activeIcon: 'icon-shengguangbaojingqi active'
        },
        {
          item: '消防风机',
          icon: 'icon-fengji noactive',
          activeIcon: 'icon-fengji active'
        },
        {
          item: '消防泵',
          icon: 'icon-xiaofangshuibeng noactive',
          activeIcon: 'icon-xiaofangshuibeng active'
        }]
    }
  },
  created() {

  },
  mounted() {
    document.addEventListener("click", this.HiddenViewStyle);
  },
  methods: {
    handleShowxj() {
      this.showxj = !this.showxj
      this.showDirection = false
      this.timer = setTimeout(() => {
        this.showDirection = true
        this.showxj = false
      }, 5000);
    },
    HiddenViewStyle() {
      this.showDirection = false
    }


  },
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
  </script>
  <style lang="scss" scoped>
.inspection {
  color: white;
  font-size: 12px;
  font-family: "ysbth";
  letter-spacing: 1px;
  display: flex;
  line-height: 26px;
  margin-left: 27%;

  .xj {
    width: 26px;
    height: 26px;
  }
  .inspectionjt {
    width: 23px;
    height: 14px;
    margin-top: 6px;
  }
}
.animation {
  width: 162.15px;
  height: 162.15px;
  background-image: url(../../assets/images/homepage/inspection.png);
  background-size: 100% 100%;
  .radar {
    overflow: hidden;
    position: relative;
    left: 11%;
    top: 9%;
    width: 68%;
    height: 68%;
    border-radius: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .fan::after {
    content: "";
    width: 60px;
    height: 60px;
    display: block;
    box-sizing: border-box;
    position: relative;
    top: -50%;
    right: -50%;
    transform-origin: 0% 100%;
    border-bottom: 3px solid transparent;
    border-image: linear-gradient(to right, transparent, #45b987);
    border-image-slice: 3;
    background: transparent;
    background-image: linear-gradient(to right, transparent, #46bb88);
    animation: rotateAnimate 2s linear infinite;
  }

  @keyframes rotateAnimate {
    from {
      transform: rotate(0deg) skew(-10deg);
    }
    to {
      transform: rotate(360deg) skew(-10deg);
    }
  }
}
.warm {
  width: 147px;
  height: 320px;
  background-image: url(../../assets/images/homepage/table_area.png);
  background-size: 100% 100%;
  margin-left: 4%;
  padding: 5%;
  div {
    margin-top: 10px;
  }
  .warmimg {
    width: 16px;
    height: 16px;
    margin-top: 5px;
  }
  .warmSpan {
    font-size: 12px;
    opacity: 0.7;
    color: #bef0ff;
    font-family: "ysbth";
    letter-spacing: 2px;
  }
  .warmSpan1 {
    opacity: 1;
    color: white;
  }
  .noactive {
    color: #61ffa9;
    font-size: 17px;
    font-weight: bold;
    margin-left: 8%;
  }
  .active {
    color: #fffa93;
    font-size: 17px;
    font-weight: bold;
    margin-left: 8%;
  }
}

@media screen and (width: 3840px) {
  .inspection {
    font-size: 24px;
    line-height: 53px;
    .xj {
      width: 53px;
      height: 53px;
    }
    .inspectionjt {
      width: 46px;
      height: 29px;
      margin-top: 8px;
    }
  }
  .animation {
    width: 325px;
    height: 325px;
    .fan::after {
      content: "";
      width: 120px;
      height: 120px;
      display: block;
      box-sizing: border-box;
      position: relative;
      top: -50%;
      right: -50%;
      transform-origin: 0% 100%;
      border-bottom: 3px solid transparent;
      border-image: linear-gradient(to right, transparent, #45b987);
      border-image-slice: 3;
      background: transparent;
      background-image: linear-gradient(to right, transparent, #46bb88);
      animation: rotateAnimate 2s linear infinite;
    }
  }
  .warm {
    width: 295px;
    height: 641px;
    background-image: url(../../assets/images/homepage/inspection.png);
    background-size: 100% 100%;
    div {
      margin-top: 20px;
    }
    .warmimg {
      width: 28px;
      height: 28px;
    }
    .warmSpan {
      font-size: 22px;
      color: #bef0ff;
      font-family: "ysbth";
    }

    .noactive {
      color: #61ffa9;
      font-size: 34px;
    }
    .active {
      font-size: 34px;
    }
  }
}
</style>