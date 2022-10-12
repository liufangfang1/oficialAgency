var echarts = require("echarts"); //全部引入
export default {
  data() {
    return {
      isBigShow: true //判断是否是3840
    }
  },
  created() {
    this.isBigShow = document.body.clientHeight > 1080 ? true : false
  },
  mounted() {

    window.onresize = () => {
      this.isBigShow = document.body.clientHeight > 1080 ? true : false
    }
  },
  methods: {
    //    能耗
    tendencyChartShow() {
      var getname = ['01', '02', '03', '04', '05', '06', '07'];
      var getvalue = [120, 100, 95, 150, 170, 155, 130];
      var getvalue1 = [150, 130, 105, 155, 106, 135, 110];
      let option = {
        grid: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0,
          top: '20%',
          left: '5%',
          right: '3%',
          bottom: '0%',
          containLabel: true,
        },
      
        legend: {
            align: "left",
        right: '6%',
        top:'2%',
            textStyle: {
                color: '#C8EFFD',
                margin: '8',
                fontFamily:'ysbth',
                fontSize:this.isBigShow?22:12
            },
        },


        xAxis: [{
          data: getname,
          axisLabel: {
            textStyle: { //x坐标样式
              color: 'white',
              fontSize: this.isBigShow ? 18 : 12,
              fontFamily: "hemi",
            },
          },
        
          axisLine: {///x轴线的颜色以及宽度
            lineStyle: {
              color: '#0e1b3b',
            }
          },
          axisTick: {
            show: false
          },
        }],
        yAxis: [{
            name: "kWh",
            triggerEvent: true,
            nameTextStyle: {
                color: '#C8EFFD',
                fontSize: this.isBigShow ? 18 : 12,
                padding: [0,0,0,-30],
                fontFamily:'ysbth'
            },
          type: 'value',
         
          axisLabel: {
            textStyle: { //x坐标样式
              color: 'white',
              fontSize: this.isBigShow ? 18 : 12,
              fontFamily: "hemi",
            },
          },
          //坐标轴线样式
          splitLine: {
            show: true,
            lineStyle: {
              type: 'solid', //solid实线;dashed虚线
              color: '#0e1b3b'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {//y轴线的颜色以及宽度
            lineStyle: {
                color: "#0e1b3b",
            },
        }


        }],
        series: [{
            name: '今年耗电量',

            type: "line",
            smooth: true, //true曲线; false折线
            data: getvalue,
            itemStyle: {
              normal: {
                borderWidth: this.isBigShow?4:2,
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
                  offset: 0,
                  color: 'rgba(37, 158, 105, 0.5)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(82,118,112, 0.1)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          },
          {
            name: '去年耗电量',
            smooth: true, //true曲线; false折线

            type: "line",
            data: getvalue1,
            itemStyle: {
              normal: {
                borderWidth: this.isBigShow?4:2,
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
                  offset: 0,
                  color: 'rgba(140,178,233, 0.1)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(25, 70, 134, 0.5)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          }
        ]
      };
      // echarts.dispose(document.getElemsentById('ageChart')); // 销毁之前的实例
      this.tendencyChart = echarts.init(document.getElementById('tendency'), null, {
        devicePixelRatio: 2.5
      }); // 重新创建新的实例
      this.tendencyChart.setOption(option);
    },
    // 灯光照明
    equipmentChar1() {
      var option = {
        color: ['#61fc91', '#5d8ab9'],
        series: [{
            name: '',
            type: 'pie',
            radius: '95%',
            center: ['50%', '50%'],
            itemStyle: {
              normal: {
                labelLine: {
                  show: false,
                },
                color: 'rgba(141, 187, 236,0.4)',
              },
            },
            data: [{
              name: '',
              value: 0,
            }, ],
          },
          {
            name: '告警',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            data: [{
                value: 10,
                name: '信息中心机房'
              },
              {
                value: 5,
                name: '数据中心机房'
              },
            ],
            label: {
              show: false,
            },

          },
        ],
      };
      this.equipmentchart1 = echarts.init(document.getElementById('equipment1'), null, {
        devicePixelRatio: 2.5
      }); // 重新创建新的实例
      this.equipmentchart1.setOption(option);
    },
    // 空调新风
    equipmentChar2() {
      var option = {
        color: ['#61fc91', '#5d8ab9'],
        series: [{
            name: '',
            type: 'pie',
            radius: '95%',
            center: ['50%', '50%'],
            itemStyle: {
              normal: {
                labelLine: {
                  show: false,
                },
                color: 'rgba(141, 187, 236,0.4)'
              },
            },
            data: [{
              name: '',
              value: 0,
            }, ],
          },
          {
            name: '告警',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            data: [{
                value: 10,
                name: '信息中心机房'
              },
              {
                value: 5,
                name: '数据中心机房'
              },
            ],
            label: {
              show: false,
            },

          },
        ],
      };
      this.equipmentchart2 = echarts.init(document.getElementById('equipment2'), null, {
        devicePixelRatio: 2.5
      }); // 重新创建新的实例
      this.equipmentchart2.setOption(option);
    },
    // 展示设备
    equipmentChar3() {
      var option = {
        color: ['#61fc91', '#5d8ab9'],
        series: [{
            name: '',
            type: 'pie',
            radius: '95%',
            center: ['50%', '50%'],
            itemStyle: {
              normal: {
                labelLine: {
                  show: false,
                },
                color: 'rgba(141, 187, 236,0.4)'
              },
            },
            data: [{
              name: '',
              value: 0,
            }, ],
          },
          {
            name: '告警',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            data: [{
                value: 10,
                name: '信息中心机房'
              },
              {
                value: 5,
                name: '数据中心机房'
              },
            ],
            label: {
              show: false,
            },

          },
        ],
      };
      this.equipmentchart3 = echarts.init(document.getElementById('equipment3'), null, {
        devicePixelRatio: 2.5
      }); // 重新创建新的实例
      this.equipmentchart3.setOption(option);
    },
    // 其他设备
    equipmentChar4() {
      var option = {
        color: ['#61fc91', '#5d8ab9'],
        series: [{
            name: '',
            type: 'pie',
            radius: '95%',
            center: ['50%', '50%'],
            itemStyle: {
              normal: {
                labelLine: {
                  show: false,
                },
                color: 'rgba(141, 187, 236,0.4)'
              },
            },
            data: [{
              name: '',
              value: 0,
            }, ],
          },
          {
            name: '告警',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            data: [{
                value: 10,
                name: '信息中心机房'
              },
              {
                value: 5,
                name: '数据中心机房'
              },
            ],
            label: {
              show: false,
            },

          },
        ],
      };
      this.equipmentchart4 = echarts.init(document.getElementById('equipment4'), null, {
        devicePixelRatio: 2.5
      }); // 重新创建新的实例
      this.equipmentchart4.setOption(option);
    }

  }



}
