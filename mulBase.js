/**
 * stack
 * 2-9进制转换
 */

function mulBase(num , base){
	var s = [];
	do{
		s.push(num % base);
		num = Math.floor(num /= base);
	}while(num > 0);
	var coverted = "";
	while(s.length>0){
		coverted += s.pop();
	}
	return coverted ;
}
var num = 32 ;
var base = 2 ;
var newNum = mulBase(num,base);
console.log(num +" coverted to base "+ base +" is "+ newNum);    		//32 coverted to base 2 is 100000

var num = 125 ;
var base = 8 ;
var newNum = mulBase(num,base);
console.log(num +" coverted to base "+ base +" is "+ newNum);			//125 coverted to base 8 is 175