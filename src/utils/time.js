//时间函数
export default function timeFormat(d) {
    let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    let year1 = d.getFullYear() + '/';
    let mouth = d.getMonth() + 1 + '月';
    let mouth1 = d.getMonth() + 1 + '/';
    let day = d.getDate() + '日';
    let day1 = d.getDate() < 10 ? "0" + d.getDate() : +d.getDate();
    let hour = d.getHours() < 10 ? '0' + d.getHours() + ':' : d.getHours() + ':';
    let minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() + ':' : d.getMinutes() + ':';
    let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() + ':' : d.getMinutes();
    let second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
    let weekIndex = d.getDay();
    let week = weeks[weekIndex];
    //  日期
    let nowDate = mouth + day;
    // 当前时间
    let nowTime = hour + minutes + second;
    //当前分钟
    let nowTimes = hour + minute;

    //星期
    let nowWeek = week;
    // 年月日
    let nowyear = year1 + mouth1 + day1;

    let obj = {
        'nowYear': nowyear,
        'nowDate': nowDate,
        'nowTime': nowTime,
        'nowWeek': nowWeek,
        "nowMinutes": nowTimes
    };
    return obj
}



/**
 * 获取当前年份的第一天和最后一天
 * @returns {string} 例如 2019-01-01~2019-12-31
 */
export function getYearFirstLastDay() {
    var firstDay = new Date();
    firstDay.setDate(1);
    firstDay.setMonth(0);
    var lastDay = new Date();
    lastDay.setFullYear(lastDay.getFullYear() + 1);
    lastDay.setDate(0);
    lastDay.setMonth(-1);
    firstDay = timeFormat(firstDay).nowYear;
    lastDay = timeFormat(lastDay).nowYear;
    return {
        firstDay,
        lastDay
    }
}