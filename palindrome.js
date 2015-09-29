	/**
	 * stack 判断是否是回文
	 * 
	 */
	function isPalindrome(word){
		var s = [];
		for(var i = 0 ; i < word.length ; i++){
			s.push(word[i]);
		}
		var rword = "";
		while(s.length > 0){
			rword += s.pop();
		}
		if(word == rword){
			return true ;
		}else{
			return false ;
		}
	}
	var word = "hello";
	if(isPalindrome(word)){
		console.log(word +" is a palindrome.");
	}else{
		console.log(word +" is not a palindrome.");
	}

	var word = "rececer";
	if(isPalindrome(word)){
		console.log(word +" is a palindrome.");
	}else{
		console.log(word +" is not a palindrome.");
	}

	/**
	 * 双向队列
	 */
	function Deque(str){
		var s = [];
		for(var i = 0 ; i < str.length ; i++){
			s.push(str[i]);

		}
		var s1= "";
		for(s.length > 0){
			s1.pop(str[i]);
		}
		var s2= "";
		for(s.length > 0){
			s2.shift(str[i]);
		}
		var s3= "";
		for(s.length > 0){
			s3.unshift(str[i]);
		}

	}
	var str = "hello";
	console.log()