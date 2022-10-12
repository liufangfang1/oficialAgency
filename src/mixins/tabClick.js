/*
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-12 20:15:26
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-12 20:16:20
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\mixins\tabClick.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export default {
  data() {
    return {
     
    }
  },
 
  methods:{
    handleTabClick(item,index){
      this.currentIndex=index
      if(item=='基地概括'){
        this.$router.push({
          path:'/homePage'
        })
      }
     else if(item=='安防态势'){
        this.$router.push({
          path:'/monitoring'
        })
      }else{
        this.$message('该模块待建设，敬请期待');
      }
    }
  }



}
