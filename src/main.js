/*
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-08 17:08:12
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-09 16:16:43
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import Vue from 'vue'

import Cookies from 'js-cookie'

import Element from 'element-ui'
import './assets/styles/element-variables.scss'

import '@/assets/styles/index.scss' // global css
import '@/assets/styles/common.scss' // common css
import App from './App'
import store from './store'
import router from './router'
import '@/iconfont/iconfont.css'
import './assets/icons' // icon


// Vue.prototype.$baseUrl = document.querySelector('body').getAttribute('baseUrl')

import { fullScreenContainer} from '@jiaminghi/data-view'
import animated from 'animate.css'
Vue.use(animated)

Vue.use(fullScreenContainer)

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
