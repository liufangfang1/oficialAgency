/*
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-08 17:08:12
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-12 11:45:28
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\api\menu.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'
const prefix =''
// 获取路由
export const getUserRouters = () => {
  return request({
    url: prefix + '/system/permission/getUserRouters',
    method: 'get'
  })
}
