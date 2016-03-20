/**
 * 统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
	1. 不限制 key 的顺序
	2. 输入的字符串参数不会为空
	3. 忽略空白字符	 
*/
function count(str) {
		var text="";
        //循环的套出每个字符出现的次数 str会慢慢的变短直到为空
        while(str!==""){
            //先将字符打散
            var newstr=str.split("");
            var count=0;
            //求得第一个字符出现的次数
            for(var i=0;i < newstr.length;i++){
                if(newstr[0]===newstr[i]){
                    count++;
                }
            }
            //在字符串中删掉跟第一个字符一样的所有字符
            var re=new RegExp(newstr[0],"g");
            str=str.replace(re,"");
            text+=newstr[0]+":"+count+"次;" +"\n"; 
        }
        return text;
    }
console.log(count('hello world'));  //h:1次;e:1次;l:3次;o:2次; :1次;w:1次;r:1次;d:1次;  空格被记入其中



function count1(str){
    var text = '';
    while(str!==''){
        var newstr = str.split('');
        var count1 = 0 ;
        for(var i = 0 ; i < newstr.length ; i++){
            if(newstr[0] == newstr[i]){
                count1++;
            }
        }
        var re = new RegExp(newstr[0],'g');
        str = str.replace(re,'');
        text+=newstr[0]+':'+count1+'次;'+'\n';
    }
    return text;
}
console.log(count1('sadv vdsl'));