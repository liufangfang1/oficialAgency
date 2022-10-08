import request from '@/utils/request'
// const prefix = '/api/au'
// const prefix2 = '/api/sys'
const prefix = ''
const prefix2 = ''
// 登录方法
export function login(grant_type, client_id, username, password) {
  const data = {
    // grant_type,
    // client_id,
    username,
    password
  }
  return request({
    //url: '/oauth2/token?grant_type='+grant_type+'&client_id='+client_id+'&username='+username+'&password='+password,
    url: prefix + '/login?userName=' + username + '&password=' + password,
    headers: {
      isToken: false
    },
    method: 'post',
    //data: data
  })
}

export function login2(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: prefix + '/login',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 注册方法
export function register(data) {
  return request({
    url: prefix + '/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: prefix2 + '/system/user/getinfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: prefix + '/logout',
    method: 'post'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: prefix + '/captchaImage',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}
