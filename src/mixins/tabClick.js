/*
 * @Author: liufang 1164457816@qq.com
 * @Date: 2022-10-12 20:15:26
 * @LastEditors: liufang 1164457816@qq.com
 * @LastEditTime: 2022-10-17 10:44:33
 * @FilePath: \relytosoft-mizar-media-uie:\project\oficialAgency\src\mixins\tabClick.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export default {
  data() {
    return {
      tab: ['基地概括', '展示中心', '预约中心', '安防态势', '智慧管理', '工务署'],
      tabChild:['环境指数','实时监控'],
      showChild:false
    }
  },
  mounted() {
    
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
      this.showChild=!this.showChild
      }else if(item=='安防态势'){
       

      }else{
        this.$message('该模块待建设，敬请期待');
      }
    },
    handleTabChildClick(item,index){
      this.tabcurrentIndex=index
      if(item=='环境指数'){
        this.$router.push({
          path:'/sensor'
        })
      }else if(item=='实时监控'){
        this.$router.push({
          path:'/monitoring'
        })

      }

    },
   
  
  }



}
