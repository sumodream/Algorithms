/**
  * 按所给的时间格式输出指定的时间
    格式说明
    对于 2014.09.05 13:14:20
    yyyy: 年份，2014
    yy: 年份，14
    MM: 月份，补满两位，09
    M: 月份, 9
    dd: 日期，补满两位，05
    d: 日期, 5
    HH: 24制小时，补满两位，13
    H: 24制小时，13
    hh: 12制小时，补满两位，01
    h: 12制小时，1
    mm: 分钟，补满两位，14
    m: 分钟，14
    ss: 秒，补满两位，20
    s: 秒，20
    w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五 
 */

function formatDate(oDate, sFormation) {
    var yyyy = oDate.getFullYear();
    var yy = yyyy.toString().substr(2);
    var M = (oDate.getMonth()+1).toString();
    var MM = M.length == 1?'0'+M:M;
    var d = oDate.getDate().toString();
    var dd = d.length == 1?'0'+d:d;
    var H =oDate.getHours().toString();
    var HH = H.length == 1?'0'+H:H;
    var h = H>12?(0+H-12).toString():H;
    var hh = h.length == 1?'0'+h:h;
    var m = oDate.getMinutes().toString();
    var mm = m.length == 1?'0'+m:m;
    var s = oDate.getSeconds().toString();
    var ss = s.lengh == 1?'0'+s:s;
    var wArray = ['日','一','二','三','四','五','六'];
    var week = oDate.getDay();
    var w = wArray[week];
 var newDateObj = {
  yyyy:yyyy,
  yy:yy,
  M:M,
  MM:MM,
  d:d,
  dd:dd,
  H:H,
  HH:HH,
  h:h,
  hh:hh,
  m:m,
  mm:mm,
  s:s,
  ss:ss,
  w:w
 };
    var result = sFormation.replace(/[a-z]+/ig,function($1){return newDateObj[$1];});
 return result;
}

console.log(formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w'));