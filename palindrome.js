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
