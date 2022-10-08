import request from '@/utils/request'
// const prefix = '/api/sys'
const prefix =''
// 获取路由
export const getUserRouters = () => {
  return request({
    url: prefix + '/system/permission/getUserRouters',
    method: 'get'
  })
}
