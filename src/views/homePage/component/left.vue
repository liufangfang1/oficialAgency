<!--
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-09 15:38:27
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-09 18:14:48
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\views\homePage\component\left.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 访客统计 -->
    <TitleCom>
      <p>访客统计<span>Statistics</span></p>
    </TitleCom>
    <div class="Statistics">
      <div>
        <img src="./../../../assets/images/homepage/Statistics1.png" alt="">
        <div>
          <p class="Statisticsp">200</p>
          <p>今日预约</p>
        </div>
      </div>
      <div>
        <img src="./../../../assets/images/homepage/Statistics2.png" alt="">
        <div>
          <p>200</p>
          <p>今日预约</p>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import TitleCom from './title.vue'
export default {
  components: { TitleCom },
  data() {
    return {

    }
  }
}
</script>
<style scoped lang="scss">
.Statistics {
  width: 100%;
  height: 6.16vh;
  margin-top: 2vh;
  display: flex;
  div {
    width: 38.87%;

    display: flex;
    div {
      margin-left: 10px;
      
    }
  }
  img {
    width: 55.97%;
    height: 100%;
  }
}
.Statisticsp{
    font-family:'hemi';
    font-size: 64px;
    color: white;
}
</style>