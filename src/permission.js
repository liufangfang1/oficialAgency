/*
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-06 17:38:28
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-06 19:38:20
 * @FilePath: \relytosoft-mizar-media-uie:\project\egProject\src\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import { isRelogin } from '@/utils/request'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/auth-redirect', '/bind', '/register','/homePage']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    to.meta.title && store.dispatch('settings/setTitle', to.meta.title)
    /* has token*/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // if (store.getters.roles.length === 0) {
      //   isRelogin.show = true
      //   // 判断当前用户是否已拉取完user_info信息
      //   store.dispatch('GetInfo').then(() => {
      //     isRelogin.show = false
      //     store.dispatch('GenerateRoutes').then(accessRoutes => {
      //       // 根据roles权限生成可访问的路由表
      //       console.log(accessRoutes,'accessRoutes')
      //       router.addRoutes(accessRoutes) // 动态添加可访问路由表
      //       next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
      //     })
      //   }).catch(err => {
      //       store.dispatch('LogOut').then(() => {
      //         Message.error(err)
      //         next({ path: '/' })
      //       })
      //     })
      // } else {
        next()
      // }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
