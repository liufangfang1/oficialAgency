<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-09 15:42:00
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-10 14:30:31
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\views\homePage\component\title.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="title " >
    <slot></slot>
    <img src="../../../assets/images/homepage/title_light@2x.png" alt="">
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style scoped lang="scss">
.title {
  width: 100%;
  height: 3.47%;
  margin-top:4.48%;
//   position: absolute;
  font-size: 18px;
  color: #FFFFFF;
 
  img {
    width: 100%;
    height: 100%;
  }
  p{
    position: absolute;
    top: 0%;
    left: 9.96%;
    letter-spacing: 2px;
    font-family: "ysbth";
    span{
    font-family: 'avenir';
    margin-left: 3px;
    letter-spacing: 1px;
  }
  }


 
}
@media screen and (width: 3840px) {
    .title {
  p {
    font-size: 38px;
  }

 
}
}



</style>