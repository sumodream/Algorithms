/**
 * 如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
   否则如果字符 Unicode 编码 > 255 则长度为 2 
 */
	function strLength(s, bUnicode255For1) {
    var sLength=0;
    if(bUnicode255For1===true){
        return s.length;
    }else{
        for(var i=0;i<s.length;i++){
            if(s.charCodeAt(i)>255){
                sLength+=2;
            }else{
                sLength+=1;
            }
        }
    }
    return sLength;
}
console.log(strLength('hello world,得得', false));