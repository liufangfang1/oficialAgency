<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-10 15:28:37
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-12 14:06:28
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\views\homePage\component\titleDetail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="title ">
    <slot></slot>
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
  // height: 3.47%;
  margin-top: 4.48%;
  position: relative;
  font-size: 14px;
  color: #ffffff;

  img {
    width: 286px;
    height: 53px;
  }
  p {
    position: absolute;
    top: 42%;
    left: 4.96%;
    letter-spacing: 1px;
    font-family: "ysbth";
    span {
      font-family: "avenir";
      margin-left: 3px;
      letter-spacing: 1px;
    }
  }
}
@media screen and (width: 3840px) {
  .title {
    font-size: 28px;
    img {
    width: 573px;
    height: 106px;
  }
  }
  
}
</style>