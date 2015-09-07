    /**
     * 字母存储在数组中 使用一个数组 连接成一个句子
     */
	function concat(wordString , item){
		return wordString + item ;
	}
	var word = ["I ","want ","to ","be ","a ","Web Front-End Engineer"];
	var sentence = word.reduce(concat);
	console.log(sentence);