/*
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-06 17:38:28
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-07 16:07:51
 * @FilePath: \relytosoft-mizar-media-uie:\project\egProject\src\main.js
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
import directive from './directive' // directive
import plugins from './plugins' // plugins
import { download } from '@/utils/request'
import '@/iconfont/iconfont.css'



import './assets/icons' // icon
import './permission' // permission control
import { parseTime, resetForm, addDateRange, handleTree,errorNotify } from "@/utils/util";
// // 分页组件
// import Pagination from "@/components/Pagination";
// // 自定义表格工具组件
// import RightToolbar from "@/components/RightToolbar"
// // 富文本组件
// import Editor from "@/components/Editor"
// // 文件上传组件
// import FileUpload from "@/components/FileUpload"
// // 图片上传组件
// import ImageUpload from "@/components/ImageUpload"
// // 图片预览组件
// import ImagePreview from "@/components/ImagePreview"
// // 头部标签组件
// import VueMeta from 'vue-meta'
// import * as filters from './filters' // 全局过滤器



// 全局方法挂载
// Vue.prototype.parseTime = parseTime
// Vue.prototype.resetForm = resetForm
// Vue.prototype.addDateRange = addDateRange
// Vue.prototype.download = download
// Vue.prototype.handleTree = handleTree
Vue.prototype.$baseUrl = document.querySelector('body').getAttribute('baseUrl')
// 全局组件挂载
// Vue.component('Pagination', Pagination)
// Vue.component('RightToolbar', RightToolbar)
// Vue.component('Editor', Editor)
// Vue.component('FileUpload', FileUpload)
// Vue.component('ImageUpload', ImageUpload)
// Vue.component('ImagePreview', ImagePreview)

Vue.use(directive)
// Vue.use(plugins)
// Vue.use(VueMeta)
// 循环注册全部全局过滤器.
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

import { fullScreenContainer } from '@jiaminghi/data-view'

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
