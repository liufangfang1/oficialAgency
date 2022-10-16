<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-12 20:05:03
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-15 16:14:17
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\views\monitoring\component\left.vue
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
    <!-- part2 -->
    <div class="partTwo">
      <div class="playVideo">
      </div>
      <el-row class="videoName">
        <el-col :span="10">
          实时入口监测
        </el-col>
        <el-col :span="10">
          Num 0982
        </el-col>
        <el-col :span="4" class="location">
          选择位置
        </el-col>
      </el-row>
      <el-row class="originbox">
        <el-col :span="4" class="origin">
        </el-col>
        <el-col :span="20" class="originstyle">
          位置: 入口
        </el-col>
      </el-row>
      <el-row class="originbox">
        <el-col :span="4" class="origin">
        </el-col>
        <el-col :span="20" class="originstyle">
          当前画面总人数：: 15人
        </el-col>
      </el-row>
    </div>
    <TitleCom style="margin-top:8%">
      <p>疫情防控<span>Prevention </span></p>
    </TitleCom>
    <!-- part3 -->
    <div class="partThree">
      <img v-show="securityLevel==1" src="../../../assets/images/monitor/partThree.png" alt="">
      <img v-show="securityLevel==2" src="../../../assets/images/monitor/partThree2.png" alt="">
      <img v-show="securityLevel==3" src="../../../assets/images/monitor/partThree3.png" alt="">
      <div class="partThreeText">
        <div class="partThreeTexttitle">空间人数</div>
        <div class="partThreename">
          200 <span>人</span>
          <img v-show="securityLevel==3" src="../../../assets/images/monitor/baojing.png" alt="">
        </div>
        <div class="salf" style="margin-top:23%">
          <div style=" background: #5efd8f"></div>
          <div>安全域值</div>
        </div>
        <div class="salf">
          <div  style=" background: #fda55e"></div>
          <div>临界域值</div>
        </div>
        <div class="salf">
          <div  style=" background: #fb0300"></div>
          <div>饱和状态</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import TitleCom from '../../component/title.vue'
export default {
  components: { TitleCom },
  data() {
    return {
      securityLevel:3//-安全域值  2-临界域值 3-饱和状态
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
.partTwo {
  width: 92%;
  height: 325px;
  margin: 6% 0 0 5%;
  background-image: url("../../../assets/images/monitor/tabimg.png");
  background-size: 100% 100%;
  padding: 3%;
  box-sizing: border-box;
  .playVideo {
    width: 100%;
    height: 208px;
    background: black;
    background-image: url("../../../assets/images/monitor/videoimg.png");
    background-size: 100% 100%;
  }
  .videoName {
    font-size: 19px;
    color: #f3fdff;
    font-family: "ysbth";
    margin-top: 2%;
    border-bottom: 2px solid #19504e;
    letter-spacing: 1px;
  }
  .location {
    height: 20px;
    font-size: 12px;
    background: #19504e;
    text-align: center;
    line-height: 20px;
    letter-spacing: 1px;
  }
  .origin {
    width: 7px;
    height: 7px;
    border: 2px solid #7cfaff;
    background: linear-gradient(
      90deg,
      rgba(3, 0, 0, 0.56),
      rgba(255, 255, 255, 0.56)
    );
    border-radius: 50%;
    margin-top: 3px;
  }
  .originstyle {
    color: #d9effd;
    font-size: 12px;
    font-family: "ysbth";
    margin-left: 2.5%;
  }
  .originbox {
    margin-top: 3%;
  }
}
.partThree {
  width: 92%;
  height: 171px;
  padding: 3%;
  margin: 8% 0 0 5%;
  display: flex;
  img {
    width: 185px;
    height: 171px;
  }
  .partThreeText {
    width: 171px;
    height: 100%;
    .partThreeTexttitle {
      font-size: 12px;
      font-family: "ysbth";
      color: #ffffff;
      margin-left: 24%;
      letter-spacing: 2px;
    }
    .partThreename {
      width: 191px;
      height: 29px;
      background-image: url("../../../assets/images/monitor/monitorR.png");
      background-size: 100% 100%;
      margin-top: 2%;
      text-align: center;
      line-height: 29px;
      color: white;
      font-size: 31px;
      font-family: "hemi";
      span {
        font-size: 12px;
        font-family: "ysbth";
      }
      img {
        width: 23px;
        height: 26px;
        float: right;
        margin-right: 13%;
      }
    }
  }
}
.salf{
  display: flex;
  margin: 8% 0 0 22%
}
.salf > div:nth-child(1) {
  width: 12px;
  height: 12px;
  margin-top: 2px;
}
.salf > div:nth-child(2) {
  font-size: 14px;
  font-family: "ysbth";
  color: #c9efff;
  margin-left: 8%;

}
@media screen and (width: 3840px) {
  .partone {
    height: 364px;
    .Monitorimg {
      width: 355px;
      height: 365px;
    }
    .Monitorname {
      width: 383px;
      height: 58px;
      font-size: 34px;
      line-height: 58px;
    }
  }
  .partTwo {
    width: 92%;
    height: 650px;
    margin: 2% 0 0 6%;
    .playVideo {
      height: 417px;
    }
    .videoName {
      font-size: 38px;
      border-bottom: 3px solid #19504e;
    }
    .location {
      height: 40px;
      font-size: 24px;
      line-height: 40px;
    }
    .origin {
      width: 14px;
      height: 14px;
      border: 3px solid #7cfaff;
      background: linear-gradient(
        90deg,
        rgba(3, 0, 0, 0.56),
        rgba(255, 255, 255, 0.56)
      );
      border-radius: 50%;
      margin-top: 9px;
    }

    .originstyle {
      font-size: 23px;
    }
  }
  .partThree {
    height: 342px;
    img {
      width: 371px;
      height: 342px;
    }
    .partThreeText {
      width: 351px;
      height: 100%;
      .partThreeTexttitle {
        font-size: 24px;
      }
      .partThreename {
        width: 383px;
        height: 58px;
        line-height: 58px;
        font-size: 63px;
        span {
          font-size: 24px;
          font-family: "ysbth";
        }
        img {
          width: 47px;
          height: 52px;
        }
      }
    }
  }
  .salf > div:nth-child(1) {
  width: 24px;
  height: 24px;
  margin-top: 4px;
}
.salf > div:nth-child(2) {
  font-size: 28px;

}
}
</style>

