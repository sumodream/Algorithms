!function(){
	var num = 1 ;
	var exp = {} ;
	function add(num){
		return num++ ; 
	}
	exp.getAddNum = function(){
		return add(num);
	}
	window.a = exp ;
}()
console.log(a.getAddNum());
console.log(a.getAddNum());

!function(){
	var num = 1 ;
	var exp = {} ;
	function add(){
		return num++ ;
	}
	exp.getAddNum = function(){
		return add() ;
	}
	var a = exp ;
}()
console.log(a.getAddNum());
console.log(a.getAddNum());