<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-06 19:36:59
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-08 16:28:54
 * @FilePath: \relytosoft-mizar-media-uie:\project\egProject\src\views\homePage\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>

  <div id="data-view">
    <dv-full-screen-container>
      <CenterCom class="CenterCom"></CenterCom>
      <!-- 左右区域 -->
      <div class="content">
        <div class="left">
          left
        </div>
        <div class="right">
          right
        </div>
      </div>
      <!-- 中部按钮 -->
      <div class="centerBottom">

      </div>
<!-- 底部 -->
<footer>
<div>

</div>
<div>
  
</div>
</footer>

    </dv-full-screen-container>

  </div>

</template>
  
  <script>

import CenterCom from './component/center.vue'

export default {
  name: "",
  components: { CenterCom },
  created() {
  },

};
  </script>
  
  <style scoped>
#data-view {
  width: 100%;
  height: 100%;
  position: relative;
 background: radial-gradient(#444f6d, #112557, #040d2b);
}
#dv-full-screen-container {
  background-image: url("../../assets/images/oneborderbg.png");
  background-size: 100% 100%;
  /* display: flex; */
  flex-direction: column;
}
.CenterCom {
  width: 100%;
  height: calc(100% - 5%);
  margin-top: 5%;
  margin: auto;
 
  
}
.content {
  display: flex;
  justify-content: space-between;
}
.left {
  position: absolute;
  left: 1.38%;
  top: 7.22%;
  width: 21%;
  height: 87.7%;
  background: pink;
}
.right {
  position: absolute;
  right: 1.38%;
  top: 7.22%;
  width: 21%;
  height: 87.7%;
  background: pink;
}
.centerBottom{
  width: 47.34%;
  height: 62px;
  background: yellow;
  position: absolute;
  bottom: 10.28%;
  left: 26.35%;

}
footer{
  display: flex;
  justify-content: space-between;

}
footer>div:nth-child(1){
  position: absolute;
  bottom: 0;
  left: 1.38%;
  width: 21%;
  height: 5%;
  background: yellow;

}
footer>div:nth-child(2){
  position: absolute;
  bottom: 0;
  right: 1.38%;
  width: 21%;
  height: 5%;
  background: yellow;

}
</style>