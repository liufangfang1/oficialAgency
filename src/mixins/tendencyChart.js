var echarts = require("echarts"); //全部引入
export default {
  data() {
    return {
      isBigShow: true //判断是否是3840
    }
  },
  mounted() {
    this.isBigShow = document.body.clientHeight > 1080 ? true : false
    window.onresize = () => {
      this.isBigShow = document.body.clientHeight > 1080 ? true : false
    }
  },
  methods: {
   
    tendencyChartShow() {
   

      let xData = ["01", "02", "03", "04"];
      let legendData = ["去年耗电量", "今年耗电量"]; //图例
      let firstIndustry = [72, 37, 4, 75]; //第一产业
      let thirdIndustry = [8, 15, 34, 31]; //第三产业
   var   option = {
          backgroundColor:"",
          grid: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 0,
              top: '15%',
              left: '3%',
              right: '3%',
              bottom: '20%',
              containLabel: true,
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  crossStyle: {
                      color: '#999'
                  }
              }
          },
          legend: {
              top: '2%',
              padding: [10, 0, 0, 0],
              data: legendData,
              //图例滚动
              // type: 'scroll',
              //图例文字样式
              textStyle: {
                  color: 'rgba(36, 173, 254, 1)',
                  fontSize:"1rem"
              }
          },
          xAxis: [
              {
                  type: 'category',
                  axisTick: {
                      show: false,
                  },
                  interval: 1,
                  axisLabel: {
                      color: 'rgba(36, 173, 254, 1)',
                      fontSize:"1rem"
                  },
                  axisLine: {
                      show: false
                  },
                  data: xData,
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  name: '',
                  min: 0,
                  max: 100,
                  interval: 20,
                  axisLabel: {
                      formatter: '{value} '
                  },
                  axisLabel: {
                      textStyle: {
                          //坐标轴颜色
                          color: 'rgba(36, 173, 254, 1)',
                          fontSize:"1rem"
                      }
                  },
                  //坐标轴线样式
                  splitLine: {
                      show: true,
                      lineStyle: {
                          type: 'solid', //solid实线;dashed虚线
                          color: 'rgba(36, 173, 254, 0.2)'
                      }
                  },
              },
              {
                  type: 'value',
                  name: '',
                  min: 0,
                  max: 100,
                  interval: 20,
                  axisLabel: {
                      formatter: '{value}'
                  },
                  axisLabel: {
                      textStyle: {
                          //坐标轴颜色
                          color: 'rgba(36, 173, 254, 1)',
                          fontSize:"1rem"
                      }
                  },
                  //坐标轴线样式
                  splitLine: {
                      show: true,
                      lineStyle: {
                          type: 'solid',
                          color: 'rgba(36, 173, 254, 0.2)'
                      }
                  },
              }
          ],
          series: [
              {
                  name: "去年耗电量",
                  data: firstIndustry,
                  type: 'line',
                  smooth: true, //true曲线; false折线
                  itemStyle: {
                      normal: {
                        borderWidth: 5,
                        shadowColor: '#7eb9ef',
                        shadowBlur: 10,
                          color: '#348cf1', //改变折线点的颜色
                          lineStyle: {
                              color: '#348cf1', //改变折线颜色
                              type: 'solid'
                          }
                      }
                  },
                  areaStyle: {
                      //折线图颜色半透明
                      color: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                              offset: 0, color: 'rgba(140,178,233, 0.1)' // 0% 处的颜色
                          }, {
                              offset: 1, color: 'rgba(25, 70, 134, 0.5)' // 100% 处的颜色
                          }],
                          global: false // 缺省为 false
                      }
                  }
              },
              {
                  name: "今年耗电量",
                  data: thirdIndustry,
                  type: 'line',
                  smooth: true, //true曲线; false折线
                  
                  itemStyle: {
                      normal: {
                        borderWidth: 5,
                        shadowColor: '#1ae496',
                        shadowBlur: 10,
                          color: '#34e685', //改变折线点的颜色
                          lineStyle: {
                              color: '#34e685', //改变折线颜色
                              type: 'solid'
                          }
                      }
                  },
                  areaStyle: {
                      //折线图颜色半透明
                      color: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                              offset: 0, color: 'rgba(37, 158, 105, 0.5)' // 0% 处的颜色
                          }, {
                              offset: 1,color: 'rgba(82,118,112, 0.1)'   // 100% 处的颜色
                          }],
                          global: false // 缺省为 false
                      }
                  }
              }
          ]
      };
      // echarts.dispose(document.getElemsentById('ageChart')); // 销毁之前的实例
      this.agechart = echarts.init(document.getElementById('tendency'), null, {devicePixelRatio: 2.5}); // 重新创建新的实例
      this.agechart.setOption(option);
    }
  }



}
