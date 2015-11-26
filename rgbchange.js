/**
 * 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
	1. rgb 中每个 , 后面的空格数量不固定
	2. 十六进制表达式使用六位小写字母
	3. 如果输入不符合 rgb 格式，返回原始输入 
 */
function zero_fill_hex(num, digits) {
  var s = num.toString(16);
  while (s.length < digits)
    s = "0" + s;
  return s;
}

function rgb2hex(rgb) {

  if (rgb.charAt(0) == '#')
    return rgb;
 
  var ds = rgb.split(/\D+/);
  var decimal = Number(ds[1]) * 65536 + Number(ds[2]) * 256 + Number(ds[3]);
  return "#" + zero_fill_hex(decimal, 6);
}
console.log(rgb2hex('rgb(255, 255, 255)'));				//#ffffff
