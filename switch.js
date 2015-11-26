/**
 * 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
 */


function convertToBinary(num) {
    var str=num.toString(2);
    var s="";
    if(str.length<8){
        var dif=8-str.length;
        for(var i=0;i<dif;i++){
            s+="0";
        }
    }
    str=s+str;
    return str;
}
console.log(convertToBinary(65));           //01000001