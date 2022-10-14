<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-12 20:05:11
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-14 15:41:48
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\views\monitoring\component\right.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <TitleCom>
      <p>安防监测<span>Monitor</span></p>
    </TitleCom>
    <TitleDetail style="margin-left:6%">
      <p>摄像头状态<span>Camera status</span></p>
      <img src="../../../assets/images/homepage/titleDetail3.png" alt="">
    </TitleDetail>
    <!-- 监控 -->
    <div class="player">
      <div ref="video" :class="cellClass(index2)" v-for="(i,index2) in cellCountArrNew" :key="index2" @click="handleVideo(i,index2)">
        <video muted autoplay :id="'video'+index2" :class="currentVedio==index2?'activeplayVideo':'playVideo'">player{{index2+1}}</video>
      </div>
    </div>
    <!-- 列表 -->
    <div class="playList">
      <el-row class="playListRow" v-for="(item,index) in playList" :key="index">
        <el-col class="playListCol1" :span="4">
        </el-col>
        <el-col :span="4">
          <img class="listplay" v-if="item.status" src="../../../assets/images/monitor/listplay.png" alt="">
          <img class="listplay" v-else src="../../../assets/images/monitor/listplay1.png" alt="">
        </el-col>
        <el-col :span="14">
          {{item.cameraName}}
        </el-col>
        <el-col :span="3" >
          {{item.status?'运行正常':'异常预警'}}
        </el-col>
        <img class="playbg" v-if="item.status" src="../../../assets/images/monitor/playbg.png" alt="">
        <img class="playbg" v-else src="../../../assets/images/monitor/playbg1.png" alt="">
      </el-row>

    </div>
  </div>
</template>
  <script>
import TitleCom from '../../component/title.vue'
import TitleDetail from '../../component/titleDetail.vue'
export default {
  components: { TitleCom, TitleDetail },
  data() {
    return {
      currentVedio: 0,
      cellCount: 4, //默认从4开始
      cellCountArrNew: [{
        id: null,
        channelId: null,
        index: 1,
        data: null,
        platformChannelCode: null,
        playStreamUrl: null,
      },
      {
        id: null,
        channelId: null,
        index: 2,
        data: null,
        platformChannelCode: null,
        playStreamUrl: null,
      },
      {
        id: null,
        channelId: null,
        index: 3,
        data: null,
        platformChannelCode: null,
        playStreamUrl: null,
      },
      {
        id: null,
        channelId: null,
        index: 4,
        data: null,
        platformChannelCode: null,
        playStreamUrl: null,
      }],
      playList: [
        {
          cameraId: null,
          cameraName: '摄像头 EOS 2562-HGY1',
          status: 1 //1正常  0故障
        },
        {
          cameraId: null,
          cameraName: '摄像头 EOS 2562-HGY2',
          status: 1 //1正常  0故障
        },
        {
          cameraId: null,
          cameraName: '摄像头 EOS 2562-HGY3',
          status: 1 //1正常  0故障
        },
        {
          cameraId: null,
          cameraName: '摄像头 EOS 2562-HGY4',
          status: 1 //1正常  0故障
        },
        {
          cameraId: null,
          cameraName: '摄像头 EOS 2562-HGY5',
          status: 0 //1正常  0故障
        },
      ]
    }

  },
  computed: {
    // 计算类样式属性
    cellClass() {
      return function (index) {
        switch (this.cellCount) {
          case 1:
            return ["player-w1"];
          case 2:
            return ["player-w2"];
          case 3:
            if (index == 0) return ["player-w3-1"];
            return ["player-w3-2"];
          case 4:
            return ["player-w4"];
          case 6:
            if (index == 0) return ["player-w6-1"];
            return ["player-w6-2"];

          default:
            break;
        }
      };
    },
  },
  methods: {
    handleVideo(item, index) {
      this.currentVedio = index;
    }

  }
}
  </script>
<style scoped lang="scss">
.player {
  width: 90%;
  height: 260px;
  margin: auto;
  margin-top: 10%;
  .playVideo {
    width: 100%;
    background-color: black;
    height: 100%;
    border: 1px solid #555555;
    color: white;
    text-align: center;
    background-image: url("../../../assets/images/monitor/play.png");
    background-size: 100% 100%;
  }
  .activeplayVideo {
    width: 100%;
    background-color: black;
    height: 100%;
    border: 1px solid yellow;
    color: white;
    text-align: center;
    background-image: url("../../../assets/images/monitor/play.png");
    background-size: 100% 100%;
  }
  /* 1-6宫格布局 */
  .player-w1 {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }

  .player-w2 {
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    float: left;
    position: relative;
  }

  .player-w3-1 {
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    float: left;
    position: relative;
  }
  .player-w3-2 {
    width: 50%;
    height: 50%;
    box-sizing: border-box;
    float: left;
    position: relative;
  }

  .player-w4 {
    width: 50%;
    height: 50% !important;
    box-sizing: border-box; /**可有可无 */
    float: left;
    position: relative;
  }

  .player-w6-1 {
    width: 66.66%;
    height: 66.6% !important; /*这里小一点 注意点 */
    box-sizing: border-box;
    float: left;
    position: relative;
  }
  .player-w6-2 {
    width: 33.33%;
    height: 33.33% !important;
    box-sizing: border-box;
    /* display: inline-table; *可有可无 */
    float: left;
    position: relative;
  }
}

.playList {
  width: 90%;
  height: 430px;
  overflow-y: auto;
  margin: auto;
  margin-top: 10%;
}
.playListRow {
  width: 100%;
  height: 31px;
  /* background-image: url('../../../assets/images/monitor/playbg.png');
  background-size: 100% 100%; */
  color: #c9efff;
  font-family: "ysbth";
  font-size: 12px;
  line-height: 31px;
  margin-top: 3%;
  position: relative;
  .playbg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .listplay {
    width: 28px;
    height: 28px;
    margin-left: 13%;
  }
}
.playListCol1 {
  width: 2px;
  height: 100%;
  background: #60fea8;
}
@media screen and (width: 3840px) {
  .player {
    height: 520px;
  }
  .playList {
    height: 860px;
  }
  .playListRow {
    height: 62px;
    font-size: 21px;
    line-height: 62px;
    .listplay {
    width:57px;
    height: 57px;
  }
  }
  .playListCol1 {
    width: 3px;
    height: 100%;
  }
 
}
</style>