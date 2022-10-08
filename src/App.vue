<!--
 * @Author: liufang
 * @Date: 2022-04-07 15:08:58
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-06-22 11:36:25
 * @FilePath: \visualizationd:\relytosoft-mizar-media-ui\src\App.vue
 * @Description: 
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default  {
  name:  'App',
    metaInfo() {
        return {
            title: this.$store.state.settings.dynamicTitle && this.$store.state.settings.title,
            titleTemplate: title => {
                return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
            }
        }
    }
}
</script>
<style >
/* .el-dialog__title{
    color: #1890ff !important;
    font-weight: 600;
}
.el-drawer__header{
     color: #1890ff !important;
    font-weight: 600;
} */
</style>
