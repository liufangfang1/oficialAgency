/*
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-16 15:24:09
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-17 10:39:32
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\api\homePage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'
//获取天气
const proxy='/api'

export function getWeatherInfo() {
  return request({
    url:proxy+`/web_server/weather/info`,
    method: 'get',
  })
}
//访客统计
export function getContrastive() {
    return request({
      url:proxy+`/web_server/statistic/people/contrastive`,
      method: 'get',
    })
  }
  //获取空间状况
  
  export function getdetection() {
    return request({
      url:proxy+`/web_server/statistic/environment/detection`,
      method: 'get',
    })
  }
//当日耗电时段预警

export function deviceAlarm() {
    return request({
      url:proxy+`/web_server/statistic/device/alarm`,
      method: 'get',
    })
  }
  //同比去年当月能耗
  export function getCompare() {
    return request({
      url:proxy+`/web_server/statistic/device/compare`,
      method: 'get',
    })
  }
  //设备耗电类型
  export function getenergy() {
    return request({
      url:proxy+`/web_server/statistic/device/energy`,
      method: 'get',
    })
  }
//今日耗电统计 能耗检测
export function getstatistics() {
  return request({
    url:proxy+`/web_server/statistic/device/statistics`,
    method: 'get',
  })
}

