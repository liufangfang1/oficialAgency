
import {
  login,
  logout,
} from '@/api/login'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import md5 from 'js-md5'
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
      const username = userInfo.username.trim()
      const password = md5(userInfo.password)
      return new Promise((resolve, reject) => {
        login(username, password).then(res => {
          if(res.data){
            setToken(res.data.token)
            commit('SET_TOKEN', res.data.token)
          }
          resolve()
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
