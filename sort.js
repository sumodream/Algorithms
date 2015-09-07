	    /**
		 * 正序倒序显示单词
		 */	
		function compare(num1 , num2){
			return num1 - num2 ;
		}
		var names = ["angel","angle","cancal","delete","cant","before"] ;
		console.log(names);  //此处可names.join()  names.toString()  直接console.log(name)是自动调用toString()方法
		console.log(names.reverse().toString());
		var nums = [3,1,2,100,4,200]
		console.log(names.sort());
		console.log(names.reverse());
		console.log(nums.sort(compare));
		console.log(nums.reverse(compare));