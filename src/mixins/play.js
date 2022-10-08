import { dataScose } from "../views/videoMonitoring/realTimeMonitori/dataScose"

  export default {
    data() {
      return {
        splitNum: 1,
        mseSupport: false,
        tabActive: 'decoder',
        labelCol: {
          span: 5
        },
        wrapperCol: {
          span: 18
        },
        urls: {
          realplay: 'ws://192.168.100.171:559/openUrl/FnzDe3S',
          talk: 'wss://10.41.163.126:6014/proxy/10.41.163.126:559/EUrl/6gFx47S',
          playback: 'wss://10.41.163.126:6014/proxy/10.41.163.126:559/EUrl/6gFx47S'
        },
        playback: {
          startTime: '2021-07-26T00:00:00',
          endTime: '2021-07-26T23:59:59',
          valueFormat:null,
          seekStart: '2021-07-26T12:00:00',
          rate: ''
        },
        muted: true,
        volume: 50,
        volumeOnSvg: {
          template: '<svg t="1624453273744" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1421" width="200" height="200"><path d="M597.994667 138.005333q130.005333 28.010667 213.994667 132.992t84.010667 241.002667-84.010667 241.002667-213.994667 132.992l0-88q93.994667-28.010667 153.002667-106.005333t59.008-180.010667-59.008-180.010667-153.002667-106.005333l0-88zM704 512q0 120-106.005333 172.010667l0-344q106.005333 52.010667 106.005333 172.010667zM128 384l170.005333 0 213.994667-213.994667 0 684.010667-213.994667-213.994667-170.005333 0 0-256z" p-id="1422"></path></svg>'
        },
        volumeOffSvg: {
          template: '<svg t="1624453193279" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9147" width="200" height="200"><path d="M512 170.005333l0 180.010667-90.005333-90.005333zM181.994667 128l714.005333 714.005333-53.994667 53.994667-88-88q-74.005333 58.005333-156.010667 77.994667l0-88q50.005333-13.994667 96-50.005333l-181.994667-181.994667 0 288-213.994667-213.994667-170.005333 0 0-256 202.005333 0-202.005333-202.005333zM810.005333 512q0-101.994667-59.008-180.010667t-153.002667-106.005333l0-88q130.005333 28.010667 213.994667 132.992t84.010667 241.002667q0 96-44.010667 178.005333l-64-66.005333q21.994667-53.994667 21.994667-112zM704 512q0 18.005333-2.005333 26.005333l-104-104 0-93.994667q106.005333 52.010667 106.005333 172.010667z" p-id="9148"></path></svg>'
        },
        cellCountArrNew:dataScose(),
        currentindex:0
      }
    },
    computed: {
        mode: function () {
          return this.tabActive === 'mse' ? 0 : 1
        }
      },
    created() {
    
    },
    mounted() {
     
  
    },
    methods: {
        init() {
          // 设置播放容器的宽高并监听窗口大小变化
          window.addEventListener('resize', () => {
            this.cellCountArrNew[this.currentindex].player.JS_Resize()
          })
        },
        createPlayer(ele,currentindex) {
          this.currentindex=currentindex
          this.cellCountArrNew[this.currentindex].player = new window.JSPlugin({
            szId:ele,
            szBasePath: "./",
            iMaxSplit: 1,
            iCurrentSplit: 1,
            openDebug: true,
            oStyle: {
              borderSelect:  '#FFCC00',
            }
          })
         

          // 事件回调绑定
          this.cellCountArrNew[this.currentindex].player.JS_SetWindowControlCallback({
            windowEventSelect: function (iWndIndex) { //插件选中窗口回调
              console.log('windowSelect callback: ', iWndIndex);
            },
            pluginErrorHandler: function (iWndIndex, iErrorCode, oError) { //插件错误回调
              console.log('pluginError callback: ', iWndIndex, iErrorCode, oError);
            },
            windowEventOver: function (iWndIndex) { //鼠标移过回调
              //console.log(iWndIndex);
            },
            windowEventOut: function (iWndIndex) { //鼠标移出回调
              //console.log(iWndIndex);
            },
            windowEventUp: function (iWndIndex) { //鼠标mouseup事件回调
              //console.log(iWndIndex);
            },
            windowFullCcreenChange: function (bFull) { //全屏切换回调
              console.log('fullScreen callback: ', bFull);
            },
            firstFrameDisplay: function (iWndIndex, iWidth, iHeight) { //首帧显示回调
              console.log('firstFrame loaded callback: ', iWndIndex, iWidth, iHeight);
            },
            performanceLack: function () { //性能不足回调
              console.log('performanceLack callback: ');
            }
          });
        },
        arrangeWindow() {
          let splitNum = this.splitNum
          this.player.JS_ArrangeWindow(splitNum).then(
            () => {
              console.log(`arrangeWindow to ${splitNum}x${splitNum} success`)
            },
            e => {
              console.error(e)
            }
          )
        },
        wholeFullScreen() {
          this.player.JS_FullScreenDisplay(true).then(
            () => {
              console.log(`wholeFullScreen success`)
            },
            e => {
              console.error(e)
            }
          )
        },
        /* 预览&对讲 */
        realplay() {
          let {
            player,
            mode,
            urls
          } = this,
          index = this.cellCountArrNew[this.currentindex].player.currentWindowIndex,
            playURL = urls.realplay


            this.cellCountArrNew[this.currentindex].player.JS_Play(playURL, {
            playURL,
            mode
          }, index).then(
            () => {
              console.log('realplay success')
            },
            e => {
              console.error(e)
            }
          )
        },
        stopPlay(index) {
          this.cellCountArrNew[index].player.JS_Stop().then(
            () => {
              this.playback.rate = 0;
              console.log('stop realplay success')
            },
            e => {
              console.error(e)
            }
          )
        },
        talkStart() {
          let url = this.urls.talk
          this.player.JS_StartTalk(url).then(
            () => {
              console.log('talkStart success')
            },
            e => {
              console.error(e)
            }
          )
        },
        talkStop() {
          this.player.JS_StopTalk().then(
            () => {
              console.log('talkStop success')
            },
            e => {
              console.error(e)
            }
          )
        },
        stopAllPlay() {
          this.player.JS_StopRealPlayAll().then(
            () => {
              this.playback.rate = 0;
              console.log('stopAllPlay success')
            },
            e => {
              console.error(e)
            }
          )
        },
        /* 回放 */
        playbackStart() {
          let {
            player,
            mode,
            urls,
            playback
          } = this,
          index = player.currentWindowIndex,
            playURL = urls.playback, {
              startTime,
              endTime
            } = playback

          startTime += 'Z'
          endTime += 'Z'

          player.JS_Play(playURL, {
            playURL,
            mode
          }, index, startTime, endTime).then(
            () => {
              console.log('playbackStart success')
              this.playback.rate = 1
            },
            e => {
              console.error(e)
            }
          )
        },
        playbackPause() {
          this.player.JS_Pause().then(
            () => {
              console.log('playbackPause success')
            },
            e => {
              console.error(e)
            }
          )
        },
        playbackResume() {
          this.player.JS_Resume().then(
            () => {
              console.log('playbackResume success')
            },
            e => {
              console.error(e)
            }
          )
        },
        seekTo() {
          let {
            seekStart,
            endTime
          } = this.playback
          seekStart += 'Z'
          endTime += 'Z'
          this.player.JS_Seek(this.player.currentWindowIndex, seekStart, endTime).then(
            () => {
              console.log('seekTo success')
            },
            e => {
              console.error(e)
            }
          )
        },
        playbackSlow() {
          this.player.JS_Slow().then(
            rate => {
              this.playback.rate = rate
            },
            e => {
              console.error(e)
            }
          )
        },
        playbackFast() {
          this.player.JS_Fast().then(
            rate => {
              this.playback.rate = rate
            },
            e => {
              console.error(e)
            }
          )
        },
        frameForward() {
          this.player.JS_FrameForward(this.player.currentWindowIndex).then(
            () => {
              this.playback.rate = 1;
              console.log('frameForward success')
            },
            e => {
              console.error(e)
            }
          )
        },
        /* 声音、抓图、录像 */
        openSound() {
          this.player.JS_OpenSound().then(
            () => {
              console.log('openSound success')
              this.muted = false
            },
            e => {
              console.error(e)
            }
          )
        },
        closeSound() {
          this.player.JS_CloseSound().then(
            () => {
              console.log('closeSound success')
              this.muted = true
            },
            e => {
              console.error(e)
            }
          )
        },
        setVolume(value) {
          let player = this.player,
            index = player.currentWindowIndex
          this.player.JS_SetVolume(index, value).then(
            () => {
              console.log('setVolume success', value)
            },
            e => {
              console.error(e)
            }
          )
        },
        capture(imageType) {
          let player = this.player,
            index = player.currentWindowIndex

          player.JS_CapturePicture(index, 'img', imageType).then(
            () => {
              console.log('capture success', imageType)
            },
            e => {
              console.error(e)
            }
          )
          
this.time_stop()

        },
        time_start() {
       
          document.getElementById("btn-capture-jpeg").disabled = "true"; //开始后使开始按钮失效，防止多次点击计时加快的bug
          ms2++; //只需百分秒最后一位自加，前面依次进位
          if (ms2 > 9) {
            ms2 = 0;
            ms1++;
          }
          if (ms1 > 9) {
            ms1 = 0;
            s2++;
          }
          if (s2 > 9) {
            s2 = 0;
            s1++;
          }
          if (s1 > 5) {
            s1 = 0;
            i2++;
          }
          if (i2 > 9) {
            i2 = 0;
            i1++;
          }
          if (i1 > 5) {
            //超出秒表计数范围
            clearTimeout(t);
            return false;
          }
          document.getElementById("second_watch").innerHTML = "" + i1 + i2 + ":" + s1 + s2 + ":" + ms1 + ms2 + "";
          document.getElementById("second_watch").style.color = "black";
          t = setTimeout(this.time_start, 10); //百分秒百分之一秒执行一次
          document.getElementById("btn-capture-jpeg").disabled = "";

        },
        time_stop() {
          clearTimeout(t);
          document.getElementById("second_watch").style.color = "red";
          document.getElementById("btn-capture-jpeg").disabled = ""; //停止时恢复按钮功能
        },
        time_reset() {
          clearTimeout(t);
          i1 = 0;
          i2 = 0;
          s1 = 0;
          s2 = 0;
          ms1 = 0;
          ms2 = 0;
          document.getElementById("second_watch").innerHTML = "" + i1 + i2 + ":" + s1 + s2 + ":" + ms1 + ms2 + "";
          document.getElementById("second_watch").style.color = "black";
          document.getElementById("btn-capture-jpeg").disabled = "";
        },
        recordStart(type) {
          const codeMap = {
            MP4: 5,
            PS: 2
          }
          let player = this.player,
            index = player.currentWindowIndex,
            fileName = `${moment().format('YYYYMMDDHHmm')}.mp4`
          typeCode = codeMap[type]

          player.JS_StartSaveEx(index, fileName, typeCode).then(
            () => {
              console.log('record start ...')
            },
            e => {
              console.error(e)
            }
          )
        },
        recordStop() {
          let player = this.player
          index = player.currentWindowIndex

          player.JS_StopSave(index).then(
            () => {
              console.log('record stoped, saving ...')
            },
            e => {
              console.error(e)
            }
          )
        },
        /* 电子放大、智能信息 */
        enlarge() {
          let player = this.player,
            index = player.currentWindowIndex

          player.JS_EnableZoom(index).then(
            () => {
              console.log('enlarge start..., select range...')
            },
            e => {
              console.error(e)
            }
          )
        },
        enlargeClose() {
          let player = this.player,
            index = player.currentWindowIndex

          player.JS_DisableZoom(index).then(
            () => {
              console.log('enlargeClose success')
            },
            e => {
              console.error(e)
            }
          )
        },
        intellectTrigger(openFlag) {
          let player = this.player,
            index = player.currentWindowIndex

          let result = player.JS_RenderALLPrivateData(index, openFlag)
          console.log(`${openFlag ? 'open' : 'close'} intellect ${result === 1 ? 'success': 'failed'}`)
        },
        getvideoInfo() {
          let player = this.player,
            index = player.currentWindowIndex

          player.JS_GetVideoInfo(index).then(function (videoInfo) {
            console.log("videoInfo:", videoInfo);
          });
        },
        getOSDTime() {
          let player = this.player,
            index = player.currentWindowIndex

          player.JS_GetOSDTime(index).then(function (time) {
            console.log("osdTime:", new Date(time));
          });
        },
        handleCell() {
          this.cellCountArrNew.forEach((item, index) => {
            if (item.player) {
              this.cellCountArrNew[index].player.JS_Resize();
            }
          });
        },
     
       
      },
     
  
  }
  