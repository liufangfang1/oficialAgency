/*
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-08 17:08:12
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-16 11:30:09
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\api\login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import request from '@/utils/request'
// 登录方法
export function login( username, password) {
  const data = {
    username,
    password
  }
  return request({
    url:'/api/web_server/initial/login?account=' + username + '&pwd=' + password,
    headers: {
      isToken: false
    },
    method: 'get',
    //data: data
  })
}

// 注册方法
export function register(data) {
  return request({
    url:'/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}


