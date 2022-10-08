/*
 * @Author: liufang
 * @Date: 2022-04-08 17:59:19
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-06-21 10:05:41
 * @FilePath: \visualizationd:\relytosoft-mizar-media-ui\src\api\file.js
 * @Description: 
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




