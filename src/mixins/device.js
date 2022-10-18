/*
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-17 11:05:33
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-17 15:30:00
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\mixins\device.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  getPlaceInfo,
  getcameraInfo
} from '@/api/monitoring'
import {
  getSensorInfo
} from '@/api/sensor'
import flvjs from "flv.js";
export default {
  data() {
    return {
      sensorId: null,
      camerasId: null,
      flvPlayer: null,
      cameratimer: null,
      sensortimer: null

    }
  },
  created() {
    // this.getPlaceInfo()

  },
  methods: {
    getPlaceInfo() {
      getPlaceInfo().then(res => {
        this.cameraList = res.data.cameras
        this.sensorList = res.data.sensors
        // 默认获取第一个传感器数据
        if (res.data.sensors.length && res.data.sensors.length > 0) {
          this.sensorId = res.data.sensors[0].id
          this.getSensor()
        }

        // 默认获取第一个监控数据
        if (res.data.cameras.length && res.data.cameras.length > 0) {
          this.camerasId = res.data.cameras[0].id
          this.getcamera()
          //循环播放所有监控
          res.data.cameras.forEach((item, index) => {
            let ele = "video" + index;
            this.start_play(ele, item.playurl2);
          });
        }


      })
    },
    getSensor() { //单个传感器数据
      getSensorInfo(this.sensorId).then(res => {
        this.delection = res.data
        // this.sensortimer = setInterval(() => { //一分钟更新一次
        //   this.getcameraInfo()
        // }, 1000 * 60 * 1);

      })
    },
    getSensorInfo() { //单个传感器数据
      getSensorInfo(this.sensorId).then(res => {
        this.delection = res.data
      })
    },
    getcamera() { //单个摄像头信息播放视频
      getcameraInfo(this.camerasId).then(res => {
        this.cameraInfo = res.data
        let ele = 'playVideo'
        this.start_play(ele, res.data.playurl2)

        // this.cameratimer = setInterval(() => { //单个摄像头信息--3秒更新（考虑实时人数）
        //   this.getcameraInfo()
        // }, 1000 * 3);

      })
    },

    //单个摄像头信息--3秒更新（考虑实时人数）
    getcameraInfo() {
      getcameraInfo(this.camerasId).then(res => {
        this.cameraInfo = res.data
      })
    },
    // 视频播放
    start_play(ele, url) {
      if (flvjs.isSupported()) {
        var videoElement = document.getElementById(ele);
        this.flvPlayer = flvjs.createPlayer({
          type: "flv",
          url: url,
          enableWorker: true, //浏览器端开启flv.js的worker,多进程运行flv.js
          isLive: true, //直播模式
          hasAudio: false, //关闭音频
          hasVideo: true,
          stashInitialSize: 128,
          enableStashBuffer: false, //播放flv时，设置是否启用播放缓存，只在直播起作用。
          autoCleanupSourceBuffer: true, //自动清理缓存
          // lazyLoad: true, //懒加载，如果缓存到足够的秒数，则停止下载
        });
        this.flvPlayer.attachMediaElement(videoElement);
        this.flvPlayer.load();
        this.flvPlayer.play();
      }

    },
    stop() {
      //关闭当前视频流
      if (this.flvPlayer) {
        this.flvPlayer.pause();
        this.flvPlayer.unload();
        this.flvPlayer.detachMediaElement();
        this.flvPlayer.destroy();
        this.flvPlayer = null
      }
    },

  },
  beforeDestroy() {
    this.stop()
    clearInterval(this.cameratimer)
    clearInterval(this.sensortimer)
  }

}
