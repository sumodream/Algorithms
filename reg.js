	/**
	 * [containsNumber description]
	 * 给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false (正则)
	 */
	function containsNumber(str) {
	     var a = /[0-9]/;
	    //var a = /\d/;  //都可以
	  return a.test(str);
	}
	//console.log(containsNumber('abc123'));



	
	/**
	 * [containsRepeatingLetter description]
	 * 在正则表达式中，利用()进行分组，使用斜杠加数字表示引用
	 * \1就是引用第一个分组，\2就是引用第二个分组
	 * 将[a-zA-Z]做为一个分组，然后引用，就可以判断是否有连续重复的字母。
	 */
	function containsRepeatingLetter(str) {
	  return /([a-zA-Z])\1/.test(str);
	}
	console.log(containsRepeatingLetter('rattler'));



	
	/**
	 * [endsWithVowel description]
	 * 给定字符串 str，检查其是否以元音字母结尾
		1、元音字母包括 a，e，i，o，u，以及对应的大写
		2、包含返回 true，否则返回 false 
		首先确定元音集合[a,e,i,o,u]，然后是以元音结尾，加上$，
		最后通配大小写，加上i。因此正则表达式为:/[a,e,i,o,u]$/i，最后用test方法去检测字符串str
	 */
	function endsWithVowel(str) {
	  return /[a,e,i,o,u]$/i.test(str);
	}
	//console.log(endsWithVowel('gorillA'));



	
	/**
	 * [captureThreeNumbers description]
	 * 给定字符串 str，检查其是否包含连续的3个数字
		1、如果包含，返回最新出现的 3 个数字的字符串
		2、如果不包含，返回 false 
		match方法，match()返回的是正则表达式匹配的字符串数组，连续的三个任意数字用正则表达式表示为/\d{3}/
	 */
	function captureThreeNumbers(str) {
    var arr = str.match(/\d{3}/);
	    if(arr){
	        return arr[0];
	    }else{
	        return false;
	    }
	}
	//console.log(captureThreeNumbers('97v123'));
    


	
	/**
	 * [matchesPattern description]
	 *  给定字符串 str，检查其是否符合如下格式
		1、XXX-XXX-XXXX
		2、其中 X 为 Number 类型 
		开头^和结尾$必须加上来限定字符串，
		3个数可表示为\d{3}，4个数则为\d{4}，
		{n}表示前面内容出现的次数。
		正则表达式可写作/^\d{3}-\d{3}-\d{4}$/，有相同部分\d{3}-，因此也可写作/^(\d{3}-){2}\d{4}$/
	 */
	function matchesPattern(str) {
    	return /^(\d{3}-){2}\d{4}$/.test(str);
    }
    //console.log(matchesPattern('800-555-1212'));




    /**
     * [isUSD description]
     * 给定字符串 str，检查其是否符合美元书写格式
		1、以 $ 开始
		2、整数部分，从个位起，满 3 个数字用 , 分隔
		3、如果为小数，则小数部分长度为 2
		4、正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3 
		必须是USD格式，以$开头，数字结尾，$和小数点的转义。
		首先，开头必是$，而正则表达式中$表示结尾，需要进行转义，因此开头为^\$
		然后$后必然接数字，并且最少一位，最多三位数，可用{m,n}表示,最少m位，最多n位，因此此段为\d{1,3}
		接着，后面如还有数，则必然有，分隔，并且后面必有3个数，类似于，XXX的格式会出现0或者n次，因此此段可表示为(,\d{3})*
		最后，如有小数部分，则注意对小数点进行转义，此段可表示为(\.\d{2})?
		因此，最后的正则表达式为/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/
		使用test方法去检测str
     */
    function isUSD(str) {
    	return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
	}
	//console.log(isUSD('$20,933,200.93'));





	/**
	 * [isAvailableEmail description]
	 * 判断输入是否是正确的邮箱格式 
	 * 字符描述：
		^ ：匹配输入的开始位置。
		\：将下一个字符标记为特殊字符或字面值。
		* ：匹配前一个字符零次或几次。
		+ ：匹配前一个字符一次或多次。
		(pattern) 与模式匹配并记住匹配。
		x|y：匹配 x 或 y。
		[a-z] ：表示某个范围内的字符。与指定区间内的任何字符匹配。
		\w ：与任何单词字符匹配，包括下划线。

		{n,m} 最少匹配 n 次且最多匹配 m 次
		$ ：匹配输入的结尾
	 */				
	function isAvailableEmail(sEmail) {
		//  /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/
		//  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
		//  /^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/
		//  /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
		//  /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
	    if(sEmail.match(reg) != null){
	        return true;
	    }else{
	        return false;
	    }
	}
	//console.log(/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test("abc_Bb.dd.cc@qq.com"));  //true
	//console.log(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test("abc_Bb.dd.cc@qq.com"));  //true
	//console.log(/^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/.test("abc_Bb.dd.cc@qq.com"));  //false  只能这种正常的  sumo_dream@sina.com
	//console.log(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test("abc_Bb.dd.cc@qq.com"));  //true
	//console.log(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test("abc_Bb.dd.cc@qq.com"));  //true