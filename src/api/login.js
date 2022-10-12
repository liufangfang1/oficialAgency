
import request from '@/utils/request'
// 登录方法
export function login( username, password) {
  const data = {
    username,
    password
  }
  return request({
    url:'/api/web_server/initial/login?userName=' + username + '&password=' + password,
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


