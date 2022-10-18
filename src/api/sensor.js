/*
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-16 15:24:09
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-17 11:28:34
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\api\homePage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'
const proxy='/api'
  //传感器数据
  
  export function getSensorInfo(id) {
    return request({
      url:proxy+`/web_server/look/sensor/info?sensorid=`+id,
      method: 'get',
    })
  }

