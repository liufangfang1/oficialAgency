/*
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-08 17:08:12
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-12 11:45:14
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\api\file.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import request from '@/utils/request'
// const prefix = '/api/fl'
const prefix =''


export function fileDelete(id) {
  return request({
    url: prefix + '/system/files/'+id,
    method: 'delete',
 
  })
}
export function uploadFile(form) {
  return request({
    url: prefix + '/system/files/upload/1000',
    method: 'post',
    headers:{'Content-Type':'multipart/form-data'},
    data:form
  })
}




