function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/* 数字 格式化*/
export function nFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

export function toThousandslsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

export function statusFilter(status) {
  const statusMap = {
    1: 'success',
    0: 'danger'
  }
  return statusMap[status]
}

export function opLogTypeTextFilter(type) {
  const statusMap = {
    1: '新增',
    2: '修改',
    4: '设置',
    5: '查询',
    7: '导出',
    8: '导入',
  }
  return statusMap[type]
}

export function qrCodeStatusTextFilter(status) {
  const statusMap = {
    1: '已张贴',
    2: '未张贴'
  }
  return statusMap[status]
}

export function DeviceModeTextFilter(status) {
  const statusMap = {
    0: '正常模式',
    1: '采点模式',
    2: '人员纽模式'
  }
  return statusMap[status]
}

export function DeviceTypeTextFilter(status) {
  const statusMap = {
    1: '实时不带屏',
    2: '实时带屏',
    3: '不实时带屏',
    4: '不实时不带屏'
  }
  return statusMap[status]
}

export function tasktypeTextFilter(status) {
  const statusMap = {
    1: '按星期',
    2: '按天'
  }
  return statusMap[status]
}

export function isfixedTextFilter(status) {
  const statusMap = {
    1: '是',
    2: '否'
  }
  return statusMap[status]
}

export function ArriveTypeTextFilter(status) {
  const statusMap = {
    0: '准时',
    1: '早到',
    2: '晚到',
    3: '未到'
  }
  return statusMap[status]
}

export function mondayTextFilter(status) {
  const statusMap = {
    1: '是',
    0: '否'
  }
  return statusMap[status]
}

export function tuesdayTextFilter(status) {
  const statusMap = {
    1: '是',
    0: '否'
  }
  return statusMap[status]
}

export function wednesdayTextFilter(status) {
  const statusMap = {
    1: '是',
    0: '否'
  }
  return statusMap[status]
}

export function thursdayTextFilter(status) {
  const statusMap = {
    1: '是',
    0: '否'
  }
  return statusMap[status]
}

export function fridayTextFilter(status) {
  const statusMap = {
    1: '是',
    0: '否'
  }
  return statusMap[status]
}

export function saturdayTextFilter(status) {
  const statusMap = {
    1: '是',
    0: '否'
  }
  return statusMap[status]
}

export function sundayTextFilter(status) {
  const statusMap = {
    1: '是',
    0: '否'
  }
  return statusMap[status]
}

export function statusTextFilter(status) {
  const statusMap = {
    1: '启用',
    0: '禁止'
  }
  return statusMap[status]
}

export function boolFilter(status) {
  const statusMap = {
    1: 'success',
    0: 'danger'
  }
  return statusMap[status]
}
export function boolTextFilter(status) {
  const statusMap = {
    1: '是',
    0: '否'
  }
  return statusMap[status]
}
export function isLocalFilter(status) {
  const statusMap = {
    0: 'success',
    1: 'danger'
  }
  return statusMap[status]
}
export function isLocalTextFilter(status) {
  const statusMap = {
    1: '否',
    0: '是'
  }
  return statusMap[status]
}
export function receptionFilter(status) {
  const statusMap = {
    6: 'success',
    5: 'success',
    4: 'warning',
    3: 'danger',
    2: '',
    1: '',
    0: 'info'
  }
  return statusMap[status]
}
export function receptionTextFilter(status) {
  const statusMap = {
    6: '完成',
    5: '已发货',
    4: '补发货',
    3: '采购中',
    2: '已提交',
    1: '新建',
    0: '删除'
  }
  return statusMap[status]
}

export function fixedassetFilter(status) {
  const statusMap = {
    7: 'warning',
    6: 'danger',
    5: 'danger',
    4: 'primary',
    3: 'primary',
    2: 'warning',
    1: 'success',
    0: 'info'
  }
  return statusMap[status]
}

export function fixedassetTextFilter(status) {
  const statusMap = {
    0: '删除',
    1: '在用',
    2: '转科申请',
    3: '外调申请',
    4: '外调',
    5: '报废申请',
    6: '报废',
    7: '待科室确认'
  }
  return statusMap[status]
}

export function approveFilter(status) {
  const statusMap = {
    6: 'primary',
    5: 'primary',
    9: 'info',
    8: 'success',
    2: 'warning',
    1: 'primary',
    0: 'info'
  }
  return statusMap[status]
}

export function approveTextFilter(status) {
  const statusMap = {
    0: '删除',
    1: '新建',
    2: '审核中',
    8: '审核通过',
    9: '审核不通过',
    5: '鉴定中',
    6: '科室确认中'
  }
  return statusMap[status]
}

export function allotTypeFilter(status) {
  const statusMap = {
    2: 'warning',
    1: 'primary'
  }
  return statusMap[status]
}

export function allotTypeTextFilter(status) {
  const statusMap = {
    1: '转科',
    2: '外调'
  }
  return statusMap[status]
}

export function taskUrgencyFilter(status) {
  const statusMap = {
    1: 'success',
    2: 'Warning',
    3: 'danger'
  }
  return statusMap[status]
}
export function taskUrgencyTextFilter(status) {
  const statusMap = {
    1: '一般',
    2: '急迫',
    3: '加急'
  }
  return statusMap[status]
}
export function taskDifficultyTextFilter(status) {
  const statusMap = {
    1: '简单',
    2: '一般',
    3: '困难'
  }
  return statusMap[status]
}

export function typeTextFilter(type) {
  const typeMap = {
    1: '菜单',
    2: '动作'
  }
  return typeMap[type]
}

/* 日期格式化*/
export function formatDate(date, fmt) {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

export function purchaseFilter(status) {
  const statusMap = {
    5: 'success',
    4: 'danger',
    3: 'info',
    2: 'success',
    1: 'primary',
    0: 'info'
  }
  return statusMap[status]
}

export function purchaseTextFilter(status) {
  const statusMap = {
    0: '删除',
    1: '新建',
    2: '审核中',
    3: '审核不通过',
    4: '采购中',
    5: '完成'
  }
  return statusMap[status]
}

export function payStatusFilter(status) {
  const statusMap = {
    2: 'success',
    1: 'primary',
    0: 'info'
  }
  return statusMap[status]
}

export function payStatusTextFilter(status) {
  const statusMap = {
    0: '删除',
    1: '新建',
    2: '复核'
  }
  return statusMap[status]
}

export function changeStatusFilter(status) {
  const statusMap = {
    2: 'success',
    1: 'primary',
    0: 'info'
  }
  return statusMap[status]
}

export function changeStatusTextFilter(status) {
  const statusMap = {
    0: '删除',
    1: '新建',
    2: '已审核'
  }
  return statusMap[status]
}

export function contractStatusFilter(status) {
  const statusMap = {
    9: 'info',
    8: 'success',
    7: 'info',
    6: 'success',
    5: 'info',
    4: 'success',
    3: 'success',
    2: 'primary',
    1: 'primary',
    0: 'info'
  }
  return statusMap[status]
}

export function contractStatusTextFilter(status) {
  const statusMap = {
    0: '删除',
    1: '新建',
    2: '审核中',
    3: '预警中',
    4: '执行中',
    5: '已过期失效',
    6: '已验收',
    7: '终止',
    8: '归档',
    9: '审核不通过'
  }
  return statusMap[status]
}

export function contractExecuteStatusFilter(status) {
  const statusMap = {
    2: 'success',
    1: 'info',
    0: 'danger'
  }
  return statusMap[status]
}

export function contractExecuteStatusTextFilter(status) {
  const statusMap = {
    0: '预警中',
    1: '已逾期',
    2: '正常'
  }
  return statusMap[status]
}

export function templateStatusFilter(status) {
  const statusMap = {
    2: 'success',
    1: 'primary',
    0: 'info'
  }
  return statusMap[status]
}

export function templateStatusTextFilter(status) {
  const statusMap = {
    0: '删除',
    1: '新建',
    2: '已发布'
  }
  return statusMap[status]
}

export function purchaseorderFilter(status) {
  const statusMap = {
    5: 'success',
    4: 'danger',
    3: 'info',
    2: 'primary',
    1: 'primary',
    0: 'info'
  }
  return statusMap[status]
}

export function purchaseorderTextFilter(status) {
  const statusMap = {
    0: '删除',
    1: '新建',
    2: '备货中',
    3: '配送中',
    4: '部分验收',
    5: '验收完成'
  }
  return statusMap[status]
}
// 证件管理 via YX
export function workerLicenceFilter(status) {
  const statusMap = {
    1: '有效',
    0: '无效'
  }
  return statusMap[status]
}

// 转换算法主函数
export function NumberToChinese(money) {
  // 汉字的数字
  var cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  // 基本单位
  var cnIntRadice = ['', '拾', '佰', '仟']
  // 对应整数部分扩展单位
  var cnIntUnits = ['', '万', '亿', '兆']
  // 对应小数部分单位
  var cnDecUnits = ['角', '分', '毫', '厘']
  // 整数金额时后面跟的字符
  var cnInteger = '整'
  // 整型完以后的单位
  var cnIntLast = '元'
  // 最大处理的数字
  var maxNum = 999999999999999.9999
  // 金额整数部分
  var integerNum
  // 金额小数部分
  var decimalNum
  // 输出的中文金额字符串
  var chineseStr = ''
  // 分离金额后用的数组，预定义
  var parts
  if (money === '') { return '' }
  money = parseFloat(money)
  if (money >= maxNum) {
    // 超出最大处理数字
    return ''
  }
  if (money === 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger
    return chineseStr
  }
  // 转换为字符串
  money = money.toString()
  if (money.indexOf('.') === -1) {
    integerNum = money
    decimalNum = ''
  } else {
    parts = money.split('.')
    integerNum = parts[0]
    decimalNum = parts[1].substr(0, 4)
  }
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0
    var IntLen = integerNum.length
    for (var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1)
      var p = IntLen - i - 1
      var q = p / 4
      var m = p % 4
      if (n === '0') {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0]
        }
        // 归零
        zeroCount = 0
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q]
      }
    }
    chineseStr += cnIntLast
  }
  // 小数部分
  if (decimalNum !== '') {
    var decLen = decimalNum.length
    for (var j = 0; j < decLen; j++) {
      var k = decimalNum.substr(j, 1)
      if (k !== '0') {
        chineseStr += cnNums[Number(k)] + cnDecUnits[j]
      }
    }
  }
  if (chineseStr === '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger
  } else if (decimalNum === '') {
    chineseStr += cnInteger
  }
  return chineseStr
}

export function LongString(str) {
  if (str.length > 10) {
    str = str.substring(0, 10) + '.....'
  }
  return str
}
