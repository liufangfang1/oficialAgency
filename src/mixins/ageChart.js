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

    // ageChartShow() {
    //   let yAxisData = ['>60', '50-60', '41-50', '31-40', '21-30', '<20'];
    //   // let data1 = [5, 19, 23, 43, 34, 53];
    //   let data1 = [53, 34, 43, 23, 19, 5];
    //   let data2 = [5, 12, 10, 7, 32, 40];

    //   var option = {
    //     tooltip: {
    //       show: true,
    //       trigger: 'axis',
    //       axisPointer: {
    //         type: 'shadow'
    //       }
    //     },
    //     backgroundColor: '',
    //     legend: {
    //       show: false
    //     },
    //     grid: [{
    //       show: false,
    //       left: '5%',
    //       top: '2%',
    //       width: '45%',
    //       containLabel: true,
    //       bottom: '8%'
    //     }, {
    //       show: false,
    //       left: '6%',
    //       top: '2%',
    //       bottom: '11%',
    //       width: '0%',
    //     }, {
    //       show: false,
    //       right: '2%',
    //       top: '2%',
    //       bottom: '8%',
    //       containLabel: true,
    //       width: '45%'
    //     }],
    //     xAxis: [{
    //       type: 'value',
    //       inverse: true,
    //       position: 'bottom',
    //       axisLabel: {
    //         show: true,
    //         formatter: function (value,index) {
    //           if(index%2==0){
    //             return value + '%'
    //           }

    //         },
    //         textStyle: {
    //           color: 'white',
    //           fontSize: this.isBigShow ? 18 : 12,
    //           fontFamily: "hemi",
    //         },
    //       },
    //       axisLine: {
    //         show: false
    //       },
    //       axisTick: {
    //         show: false
    //       },
    //       splitLine: {
    //         show: false
    //       }
    //     }, {
    //       gridIndex: 1,
    //       show: false,

    //     }, { //横坐标字体颜色
    //       gridIndex: 2,
    //       type: 'value',
    //       axisLabel: {
    //         show: true,
    //         formatter: function (value,index) {
    //           if(index%2==0){
    //             return value + '%'
    //           }
    //         },
    //         textStyle: {
    //           color: 'white',
    //           fontSize: this.isBigShow ? 18 : 12,
    //           fontFamily: "hemi",
    //         },

    //         interval: 0,
    //       },
    //       axisLine: {
    //         show: false
    //       },
    //       axisTick: {
    //         show: false
    //       },
    //       splitLine: {
    //         show: false
    //       }
    //     }],
    //     yAxis: [{
    //         type: 'category',
    //         inverse: true,
    //         position: 'right',
    //         axisLabel: {
    //           show: false
    //         },
    //         axisLine: { //中间分界线
    //           show: false,

    //         },
    //         axisTick: {
    //           show: false
    //         },
    //         data: yAxisData
    //       },
    //       {
    //         type: 'category',
    //         inverse: true,
    //         gridIndex: 1,
    //         position: 'left',
    //         axisLabel: { //y轴字体样式
    //           show: true,
    //           textStyle: {
    //             color: '#ffffff',
    //             fontSize: this.isBigShow ? 18 : 12,
    //             fontFamily: "hemi",
    //           }
    //         },
    //         axisLine: {
    //           show: false,
    //           lineStyle: {
    //             color: '#979797'
    //           }
    //         },
    //         axisTick: {
    //           show: false
    //         },
    //         // data: yAxisData
    //         data: yAxisData.map(function (value) {
    //           return {
    //             value: value,
    //             textStyle: {
    //               align: 'center'
    //             }
    //           }
    //         })
    //       },
    //       {
    //         type: 'category',
    //         inverse: false,
    //         gridIndex: 2,
    //         position: 'left',
    //         axisLabel: {
    //           show: false
    //         },
    //         axisLine: {
    //           show: false, //右边柱状图线
    //           lineStyle: {
    //             color: '#979797'
    //           }
    //         },
    //         axisTick: {
    //           show: false
    //         },
    //         data: yAxisData
    //       }
    //     ],
    //     series: [{
    //         type: 'bar',
    //         xAxisIndex: 0,
    //         yAxisIndex: 0,
    //         barWidth: this.isBigShow ? 16 : 7, //左边柱状图大小
    //         name: '男性年龄',
    //         label: {
    //           normal: {
    //             show: false,
    //           },
    //         },
    //         itemStyle: {
    //           normal: {
    //             // barBorderRadius: 5,
    //             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    //                 offset: 0,
    //                 color: '#69a5f9'
    //               },
    //               {
    //                 offset: 0.5,
    //                 color: 'rgba(168, 204, 255,0.6)'
    //               },
    //               {
    //                 offset: 1,
    //                 color: 'rgba(179, 211, 253,0.1)'
    //               }
    //             ])
    //           }
    //         },
    //         data: data1,

    //       },
    //       {
    //         type: 'bar',
    //         barWidth: this.isBigShow ? 16 : 7,
    //         xAxisIndex: 2,
    //         yAxisIndex: 2,
    //         name: '女性年龄',
    //         label: {
    //           normal: {
    //             show: false,
    //           },
    //         },
    //         itemStyle: {
    //           normal: {
    //             // barBorderRadius: 5,
    //             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    //                 offset: 0,
    //                 color: 'rgba(213, 251, 231, 0.1)'
    //               },
    //               {
    //                 offset: 0.5,
    //                 color: 'rgba(156, 239, 200,0.6)'
    //               },

    //               {
    //                 offset: 1,
    //                 color: '#60eda4'
    //               }
    //             ])
    //           }
    //         },
    //         data: data2
    //       }
    //     ],
    //   };
    //   // echarts.dispose(document.getElemsentById('ageChart')); // 销毁之前的实例
    //   this.agechart = echarts.init(document.getElementById('ageChart'), null, {
    //     devicePixelRatio: 2.5
    //   }); // 重新创建新的实例
    //   this.agechart.setOption(option);
    // },
    ageChartShow() {
      var myData = ['>60', '50-60', '41-50', '31-40', '21-30', '<20']
      var lineData = [100, 100, 100, 100, 100, 100]
     
      var timeLineData = [1]
      let option = {
        baseOption: {
          timeline: {
            show: false,
            top: 0,
            data: []
          },

          grid: [{
            show: false,
            left: '4%',
            top: '0%',
            bottom: '8%',
            containLabel: true,
            width: '40%'
          }, {
            show: false,
            left: '51%',
            top: '0%',
            bottom: '20%',
            width: '0%'
          }, {
            show: false,
            right: '5%',
            top: '0%',
            bottom: '8%',
            containLabel: true,
            width: '40%'
          }],
          xAxis: [{
            type: 'value',
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            position: 'bottom',
            axisLabel: {
              show: true,
              formatter: function (value) {
                //return '\n\n\n\n' + value;
                // return '\n' + value
                return value + '%'
                // return value + 'virus'
                // return value.split("").join("\n");  
              },
              textStyle: { //x坐标样式
                color: 'white',
                fontSize: this.isBigShow ? 18 : 12,
                fontFamily: "hemi",
              },
            },
            splitLine: {
              show: false
            }
          }, {
            gridIndex: 1,
            show: false,
          }, {
            gridIndex: 2,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            position: 'bottom',
            axisLabel: {
              show: true,
              interval: 0,
              formatter: function (value) {
                //return '\n\n\n\n' + value;
                //  return '\n' + value
                return value + '%'
                // return value + 'virus'
                // return value.split("").join("\n");  
              },
              textStyle: { //x坐标样式
                color: 'white',
                fontSize: this.isBigShow ? 18 : 12,
                fontFamily: "hemi",
              },
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
              data: myData
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
                  fontSize: this.isBigShow ? 18 : 12,
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
              data: myData.map(function (value) {
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
              data: myData
            }
          ],
          series: []

        },
        options: []
      }

      option.baseOption.timeline.data.push(timeLineData[0])
      option.options.push({
        series: [{ //左边总数
            type: 'pictorialBar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            // symbol: 'rect',
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0)'
              }
            },
            barWidth: this.isBigShow ? 16 : 7, //左边柱状图大小

            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
              normal: {
                show: false, //控制是否显示左边百分比
                formatter: (series) => {
                  return this.lastYearData[series.dataIndex] + '%'
                },
                position: 'insideTopLeft',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                },
                offset: [0, -10],
              }
            },
            z: -100,
            animationEasing: 'elasticOut',
            animationDelay: function (dataIndex, params) {
              return params.index * 30;
            }
          }, {
            name: '男',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            //  symbol: 'rect',
            barWidth: this.isBigShow ? 16 : 7, //左边柱状图大小
            itemStyle: {
              normal: {
                // barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#69a5f9'
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(168, 204, 255,0.6)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(179, 211, 253,0.1)'
                  }
                ])
              }
            },
            // symbolRepeat: true,
            // symbolSize: 14,
            data: this.lastYearData,
            // animationEasing: 'elasticOut',
            // animationDelay: function (dataIndex, params) {
            //     return params.index * 30 * 1.1;
            // }
          },
          { //右边柱状图总数
            type: 'pictorialBar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            symbol: 'rect',
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0)'
              }
            },

            barWidth: 10,
            symbolRepeat: true,
            symbolSize: 14,
            data: lineData,
            barGap: '-100%',
            barCategoryGap: 0,
            label: {
              normal: {
                show: false, //控制是否显示百分比
                formatter: (series) => {
                  return this.thisYearData[series.dataIndex] + '%'
                },
                position: 'insideTopRight',
                textStyle: {
                  color: '#ffffff',
                  fontSize: 20,
                },
                offset: [0, -10],
              }
            },
            z: -100,
            animationEasing: 'elasticOut',
            animationDelay: function (dataIndex, params) {
              return params.index * 30;
            }
          }, {
            name: '女',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            //   symbol: 'rect',
            barWidth: this.isBigShow ? 16 : 7,
            itemStyle: {
              normal: {
                // barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(213, 251, 231, 0.1)'
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(156, 239, 200,0.6)'
                  },

                  {
                    offset: 1,
                    color: '#60eda4'
                  }
                ])
              }
            },
            // symbolRepeat: true,
            // symbolSize: 14,
            data: this.thisYearData,
            // animationEasing: 'elasticOut',
            // animationDelay: function (dataIndex, params) {
            //     return params.index * 30 * 1.1;
            // }
          }
        ]
      });
      this.agechart = echarts.init(document.getElementById('ageChart'), null, {
        devicePixelRatio: 2.5
      }); // 重新创建新的实例
      this.agechart.setOption(option);
    },

    peopleChartShow() {
      let category = [{
          name: "展厅",
          value: "50"
        },
        {
          name: "会议室",
          value: "25"
        },
        {
          name: "其他",
          value: "25"
        }
      ]; // 类别
      let total = 100; // 数据总数
      var datas = [];
      category.forEach(value => {
        datas.push(value.value);
      });
      let option = {
        backgroundColor: "",
        grid: {
          left: '20%',
          top: '10%', // 设置条形图的边距
          right: '20%',
          bottom: '10%',
        },
        xAxis: {
          max: total,
          show: false,
        },
        yAxis: [{
            //名称
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              textStyle: {
                color: '#C8EFFD',
              },
              formatter: (val, i) => {
                return `{num|}{name|${val}}`;
              },
              rich: {
                num: {
                  width: 16,
                  fontSize: this.isBigShow ? 22 : 12,

                  fontFamily: 'ysbth'
                },
                name: {
                  width: 60, //进度条名称宽度 
                  fontSize: this.isBigShow ? 22 : 12,

                  fontFamily: 'ysbth'
                },
              },
            },
            data: ['展厅', '会议室', '其他'], //进度条名称
          },
          {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              textStyle: {
                color: '#C8EFFD',
                fontSize: this.isBigShow ? 33 : 16,
                fontFamily: 'hemi'
              },
              formatter: (val) => {
                return `{num|${val}}{unit| %}`;
              },
              rich: {
                num: {
                  fontSize: this.isBigShow ? 33 : 16,
                  fontFamily: 'hemi'
                },
                unit: {
                  fontSize: this.isBigShow ? 33 : 16,
                },
              },
            },
            data: [50, 25, 25], //进度条数值
          },
        ],
        series: [{
            // 内
            type: "bar",
            barWidth: this.isBigShow ? 20 : 10,
            legendHoverLink: false,
            silent: true,
            itemStyle: {
              normal: {
                color: function (params) {
                  var color;
                  if (params.dataIndex == 19) {
                    color = {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [{
                          offset: 0,
                          color: "#EB5118" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#F21F02" // 100% 处的颜色
                        }
                      ]
                    }
                  } else if (params.dataIndex == 18) {
                    color = {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [{
                          offset: 0,
                          color: "#FFA048" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#B25E14" // 100% 处的颜色
                        }
                      ]
                    }
                  } else if (params.dataIndex == 17) {
                    color = {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [{
                          offset: 0,
                          color: "#F8E972" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#5aeb9f" // 100% 处的颜色
                        }
                      ]
                    }
                  } else {
                    color = {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 1,
                      y2: 0,
                      colorStops: [{
                          offset: 0,
                          color: "rgba(21, 56, 65,0.2)" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "rgba(40, 110, 93,0.8)" // 100% 处的颜色
                        }
                      ]
                    }
                  }
                  return color;
                },
              }
            },
            data: category,
            z: 1,
            animationEasing: "elasticOut"
          },

          //   {
          //     // 分隔
          //     type: 'pictorialBar',
          //     symbolRotate: '-15',//倾斜度
          //     itemStyle: {
          //         normal: {
          //             color: '#297260',
          //         },
          //     },
          //     symbolRepeat: 'fixed',
          //     symbolMargin: 5,//分割线间隔
          //     symbol: 'rect',
          //     symbolClip: true,
          //     symbolSize: [2, 9],
          //     symbolPosition: "start",
          //     symbolOffset: [0, -1],
          //     data: category,
          //     z: 2,
          //     animationEasing: 'elasticOut',
          // },


        ]
      };
      this.peopleChart = echarts.init(document.getElementById('peopleChart'), null, {
        devicePixelRatio: 2.5
      }); // 重新创建新的实例
      this.peopleChart.setOption(option);
    },

  }



}
