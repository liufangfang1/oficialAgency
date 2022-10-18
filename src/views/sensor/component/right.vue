<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-12 20:10:28
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-17 15:27:47
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\views\sensor\component\right.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
      <TitleCom>
        <p>安防监测<span>Monitor</span></p>
      </TitleCom>
      <TitleDetail style="margin-left:6%">
      <p>传感器状态<span>Sensor Status</span></p>
      <img src="../../../assets/images/monitor/Sensordet.png" alt="">
    </TitleDetail>
      <!-- 列表 -->
      <div class="playList" >
      <el-row class="playListRow" v-for="(item,index) in sensorList" :key="index" >
        <el-col class="playListCol1" :span="4">
        </el-col>
        <el-col :span="4">
          <img class="listplay" v-if="item.status=='normal'" src="../../../assets/images/monitor/sensor.png" alt="">
          <img class="listplay" v-else src="../../../assets/images/monitor/sensor1.png" alt="">
        </el-col>
        <el-col :span="14">
          {{item.name}}
        </el-col>
        <el-col :span="3" >
          {{item.status=='normal'?'运行正常':'异常预警'}}
        </el-col>
        <img class="playbg" v-if="item.status=='normal'" src="../../../assets/images/monitor/playbg.png" alt="" @click="handleClick(item)">
        <img class="playbg" v-else src="../../../assets/images/monitor/playbg1.png" alt="" @click="handleClick(item)">
      </el-row>

    </div>
    </div>
  </template>
  <script>
  import TitleCom from '../../component/title.vue'
  import TitleDetail from '../../component/titleDetail.vue'
  import deviceMixins from "@/mixins/device";
  export default {
      components: { TitleCom,TitleDetail },
      mixins:[deviceMixins],
    data() {
        return{
         sensorList: [
        {
          id: null,
          name: '烟感 EOS 2562-HGY1',
          status: "normal" //1正常  0故障
        },
        {
          id: null,
          name: '烟感 EOS 2562-HGY2',
          status: "normal" //1正常  0故障
        },
        {
          id: null,
          name: '湿度传感器 EOS 2562-HGY',
          status: "normal" //1正常  0故障
        },
        {
          id: null,
          name: '二氧化碳传感器 EOS 2562-HGY',
          status: "normal" //1正常  0故障
        },
        {
          id: null,
          name: 'tvoc传感器 EOS 2562-HGY',
          status: 'exception' //1正常  0故障
        },
      ]
            
        }
  
    },
    methods: {
      handleClick(item){
        this.sensorId=item.id
        this.getSensor()//获取单个传感器数据
      },
    
      
  
    }
  }
  </script>
  <style scoped lang="scss">
  .playList {
  width: 90%;
  height: 430px;
  overflow-y: auto;
  margin: auto;
  margin-top: 5%;
}
.playListRow {
  width: 100%;
  height: 38px;
  /* background-image: url('../../../assets/images/monitor/playbg.png');
  background-size: 100% 100%; */
  color: #c9efff;
  font-family: "ysbth";
  font-size: 12px;
  line-height: 38px;
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
    margin-top: 8%;
  }
}
.playListCol1 {
  width: 2px;
  height: 100%;
  background: #60fea8;
}
@media screen and (width: 3840px) {

  .playList {
    height: 860px;
  }
  .playListRow {
    height:76px;
    font-size: 21px;
    line-height: 76px;
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