	/**
	 * 柯里化函数
	 * 把接收多个参数的函数变成接收一个单一参数(最初函数的第一个参数)的函数,并且返回接受余下的参数且返回的结果的新函数的技术
	 */

	/**
	 * 预定义的函数的参数(传递参数)-->curryIt函数 --> 执行预定义的函数(声明) -->获得其length(声明) --> 空数组存参 (返回) --> 匿名函数接受参数并执行
	 * (判断 参数个数  < fn.length) --> 返回匿名函数 (参数个数 == fn.length) --> apply 执行预定义函数
	 */


		function curryIt(fn){
			var n = fn.length;
			var args = [] ;
			return function(arg){
				args.push(arg);
				if(n > args.length){
					return arguments.callee;
				}else{
					return fn.apply("",args);
				}
			}
		}

		var fn = function (a, b, c) {
			return a + b + c;
		}; 
		console.log(curryIt(fn)(1)(2)(3));