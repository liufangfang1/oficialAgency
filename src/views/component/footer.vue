<template>
  <div>
    <footer>
      <!-- 左边 -->
      <div>
        <img class="footerimg" src="../../assets/images/homepage/location.png" alt="">
        <p class="location">{{city}}</p>
        <img class="duoyunimg" src="../../assets/images/homepage/duoyun.png" alt="">
        <p class="wd" v-show="tem1">{{tem1}} ℃ ~ {{tem2}} ℃</p>
        <p class="week">{{wea}} {{week}}</p>
      </div>
      <!-- 右边 -->
      <div>
        <span class="nowYear">{{nowYear}}</span>
        <span class="timeNow">{{timeNow}}</span>
      </div>
    </footer>
  </div>
</template>
<script>
import axios from "axios";
import timeFormat from "@/utils/time.js";
export default {
  data() {
    return {
      city: '深圳市',
      tem2: "17",
      tem1: '11',
      wea: '多云',
      week: '周一',
      nowYear: "2022/08/07",
      timeNow: "12:26:01",
      timer: null,
    }
  },
  created() {
    // this.getInTheatersData()
    this.timer = setInterval(() => {
      this.nowTimeAndDate();
    }, 1000);
  },
  methods: {
    async getInTheatersData() {
      const res = await axios.get(
        "https://yiketianqi.com/api?unescape=1&version=v6&appid=69659768&appsecret=Q3W20NSX"
      );
      if (res.data) {
        this.city = res.data.city
        this.tem1 = res.data.tem1
        this.tem2 = res.data.tem2
        this.wea = res.data.wea
        this.week = res.data.week

      }

    },
    nowTimeAndDate() {
      //获取当前时间 日期 
      let time = timeFormat(new Date());
      //  日期
      this.nowYear = time.nowYear;
      // 当前时间
      this.timeNow = time.nowTime;
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>
<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-between;
}
footer > div:nth-child(1) {
  position: absolute;
  bottom: 0;
  left: 1.38%;
  width: 21%;
  height: 5%;
  display: flex;
  color: white;
}
.footerimg {
  width: 12px;
  height: 16px;
  margin-top: 4%;
}
.duoyunimg {
  width: 20px;
  height: 16px;
  margin: 4% 6%;
}
.location {
  font-size: 16px;
  font-family: "ysbth";
  margin-left: 13px;
  letter-spacing: 2px;
}
.wd {
  font-size: 15px;
  font-family: "hemi";
}
.week {
  font-size: 14px;
  font-family: "ysbth";
  letter-spacing: 3px;
  margin: 4.5% 8%;
}
footer > div:nth-child(2) {
  position: absolute;
  bottom: 0;
  right: 1.38%;
  width: 21%;
  height: 5%;
  font-family: "hemi";
  color: white;
  letter-spacing: 4px;
}
.nowYear {
  position: relative;
  left: 30%;
  top: 16%;
  font-size: 15px;
}
.timeNow {
  position: relative;
  left: 35%;
  top: 16%;
  font-size: 24px;
}
@media screen and (width: 3840px) {
  .location {
    font-size: 32px;
    margin-left: 16px;
  }
  .wd {
    font-size: 30px;
    margin-left: 1%;
  }
  .footerimg {
    width: 24px;
    height: 32px;
    margin-top: 5%;
  }
  .duoyunimg {
    width: 42px;
    height: 37px;
    margin: 4% 6%;
  }
  .week {
    font-size: 24px;
  }
  .nowYear {
    position: relative;
    left: 40%;
    top: 16%;
    font-size: 30px;
  }
  .timeNow {
    position: relative;
    left: 46%;
    font-size: 48px;
    top: 16%;
  }
}
</style>