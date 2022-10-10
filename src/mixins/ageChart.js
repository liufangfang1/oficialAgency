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
   
    ageChartShow() {
      let yAxisData = ['>60', '50-60', '41-50', '31-40', '21-30', '<20'];
      // let data1 = [5, 19, 23, 43, 34, 53];
      let data1 = [53, 34, 43, 23, 19,5];
      let data2 = [5, 12, 10, 7, 32, 40];

      var option = {
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        backgroundColor: '',
        legend: {
          show: false
        },
        grid: [{
          show: false,
          left: '5%',
          top: '2%',
          width: '45%',
          containLabel: true,
          bottom: '8%'
        }, {
          show: false,
          left: '6%',
          top: '2%',
          bottom: '11%',
          width: '0%',
        }, {
          show: false,
          right: '2%',
          top: '2%',
          bottom: '8%',
          containLabel: true,
          width: '45%'
        }],
        xAxis: [{
          type: 'value',
          inverse: true,
          position: 'bottom',
          axisLabel: {
            show: true,
            formatter: function (value) {
              return value + '%'
            },
            textStyle: {
              color: 'white',
              fontSize: this.isBigShow?18:12,
              fontFamily: "hemi",
            },
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        }, {
          gridIndex: 1,
          show: false,

        }, { //横坐标字体颜色
          gridIndex: 2,
          type: 'value',
          axisLabel: {
            show: true,
            formatter: function (value) {
              return value + '%'
            },
            textStyle: {
              color: 'white',
              fontSize: this.isBigShow?18:12,
              fontFamily: "hemi",
            },

            interval: 0,
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLabel: {
              show: false
            },
            axisLine: { //中间分界线
              show: false,

            },
            axisTick: {
              show: false
            },
            data: yAxisData
          },
          {
            type: 'category',
            inverse: true,
            gridIndex: 1,
            position: 'left',
            axisLabel: { //y轴字体样式
              show: true,
              textStyle: {
                color: '#ffffff',
                fontSize: this.isBigShow?18:12,
                fontFamily: "hemi",
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#979797'
              }
            },
            axisTick: {
              show: false
            },
            // data: yAxisData
            data: yAxisData.map(function (value) {
              return {
                value: value,
                textStyle: {
                  align: 'center'
                }
              }
            })
          },
          {
            type: 'category',
            inverse: false,
            gridIndex: 2,
            position: 'left',
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false, //右边柱状图线
              lineStyle: {
                color: '#979797'
              }
            },
            axisTick: {
              show: false
            },
            data: yAxisData
          }
        ],
        series: [{
            type: 'bar',
             xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: this.isBigShow?16:8, //左边柱状图大小
            name: '男性年龄',
            label: {
              normal: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                // barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(99, 160, 247, 0.8)'
                  },
                  {
                    offset: 0.5,
                    color: '#425a7f'
                  },
                  {
                    offset: 1,
                    color: '#2a3b5b'
                  }
                ])
              }
            },
            data: data1,
          
          },
          {
            type: 'bar',
            barWidth: this.isBigShow?16:8,
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: '女性年龄',
            label: {
              normal: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                // barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(21, 61, 67, 0.8)'
                  },
                  {
                    offset: 0.5,
                    color: '#296e5d'
                  },
                  
                  {
                    offset: 1,
                    color: 'rgba(86, 225, 154, 0.8)'
                  }
                ])
              }
            },
            data: data2
          }
        ],
      };
      // echarts.dispose(document.getElemsentById('ageChart')); // 销毁之前的实例
      this.agechart = echarts.init(document.getElementById('ageChart'), null, {devicePixelRatio: 2.5}); // 重新创建新的实例
      this.agechart.setOption(option);
    }
  }



}
