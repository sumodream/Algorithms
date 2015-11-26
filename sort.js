/**
 * 正序倒序显示单词
 */	
function compare(num1 , num2){
	return num1 - num2 ;
}
var names = ["angel","angle","cancal","delete","cant","before"] ;
//此处可names.join()  names.toString()  直接console.log(name)是自动调用toString()方法
console.log(names);  						//[ 'angel', 'angle', 'cancal', 'delete', 'cant', 'before' ]
console.log(names.reverse().toString());	//before,cant,delete,cancal,angle,angel
var nums = [3,1,2,100,4,200]
console.log(names.sort());					//[ 'angel', 'angle', 'before', 'cancal', 'cant', 'delete' ]
console.log(names.reverse());				//[ 'delete', 'cant', 'cancal', 'before', 'angle', 'angel' ]
console.log(nums.sort(compare));			//[ 1, 2, 3, 4, 100, 200 ]
console.log(nums.reverse(compare));			//[ 1, 2, 3, 4, 100, 200 ]