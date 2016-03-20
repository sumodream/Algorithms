function strToInt(str){
    var num = 0;
    while (str!=0) {
        num = num*10 + str - '0';
        ++str;
    }
    return num;
}
var strings='h';
console.log(strToInt('hesrfdrsf'));