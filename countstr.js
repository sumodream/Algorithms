//js实现一个函数，来判断一个字符串出现次数最多的字符，并统计这个次数
function countStr(str) {
    var obj = {};
    for (var i = 0, l = str.length, k; i < l; i++) {
        k = str.charAt(i);
        if (obj[k]) {
            obj[k]++;
        } else {
            obj[k] = 1;
        }
    }
    var m = 0,
        i = null;
    for (var k in obj) {
        if (obj[k] > m) {
            m = obj[k];
            i = k;
        }
    }
    return i + ':' + m;
}

console.log(countStr("aabbcc"));



var str="Helloworld!"
 
console.log("Thefirstcharacteris:" + str.charAt(0))
 
console.log("Thesecondcharacteris:" + str.charAt(1))
 
console.log("Thethirdcharacteris:" + str.charAt(2))
 
console.log("Thethirdcharacteris:" + str.charAt(str.length-1))

var str="Helloworld!"
 
console.log("Thefirstcharacteris:" + str.indexOf('H'))
 
console.log("Thesecondcharacteris:" + str.indexOf('e'))
 
console.log("Thethirdcharacteris:" + str.indexOf('l'))
 
console.log("Thethirdcharacteris:" + str.indexOf('last'))