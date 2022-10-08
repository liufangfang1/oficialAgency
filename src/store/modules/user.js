/*
 * @Author: liufang
 * @Date: 2022-08-24 11:09:51
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-08-26 15:34:25
 * @FilePath: \Relyto.FireFightingd:\relytosoft-mizar-media-ui\src\store\modules\user.js
 * @Description: 
 */
import {
  login,
  logout,
  getInfo
} from '@/api/login'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  encryptByAES
} from "@/utils/util"

const user = {
  state: {
    token: getToken(),
    name: '',
    userid: 0,
    realname: '',
    avatar: '',
    roles: [],
    permissions: [],
    userNo:null
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
    SET_REALNAME: (state, realname) => {
      state.realname = realname
    },
    SET_USERID: (state, userid) => {
      state.userid = userid
    },
    SET_USERNO: (state, userNo) => {
      state.userNo = userNo
    },
  },

  actions: {
    // 登录
    Login({
      commit
    }, userInfo) {
      // const code = userInfo.code
      // const uuid = userInfo.uuid
      const username = userInfo.username.trim()
      const password = encryptByAES(userInfo.password, '12345678900000001234567897895412')
      const grant_type = userInfo.grant_type
      const client_id = userInfo.client_id
      return new Promise((resolve, reject) => {
        login(grant_type, client_id, username, password).then(res => {
          // if(res.data.access_token){
          //   setToken(res.data.access_token)
          //   commit('SET_TOKEN', res.data.access_token)
          // }
          if(res.data){
            setToken(res.data)
            commit('SET_TOKEN', res.data)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          const user = res.data
          const avatar = user.avatar ? require("@/assets/images/profile.jpg") : user.avatar;
          commit('SET_ROLES', user.roles)
          commit('SET_NAME', user.userName)
          // commit('SET_REALNAME', user.RealName)
          commit('SET_USERID', user.userId)
          commit('SET_PERMISSIONS', user.permissions)
          commit('SET_AVATAR', avatar)
          commit('SET_USERNO', user.userNo)//人脸实时抓拍 后台需要字段
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 退出系统
    LogOut({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('SET_PERMISSIONS', [])
          commit('SET_REALNAME', '')
          commit('SET_USERID', 0)
          commit('SET_NAME', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
