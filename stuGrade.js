/**
 * 创建记录学生成绩的对象 添加成绩的方法 显示学生平均成绩的方法
 */
   function gradeTemps(){
   	this.grade = [];
   	this.add = add ;
   	this.average = average ;
   }
   function add(temp){
   	this.grade.push(temp);
   }
   function average(){
   	var total = 0 ;
   	var average = 0.0 ;
   	for(var i = 0 ; i < this.grade.length ; i++){
   		total += this.grade[i];
   	}
   	return total / this.grade.length ;
}
var thisSgrade = new gradeTemps();
thisSgrade.add(98);
thisSgrade.add(95);
console.log(thisSgrade.average());  			//96.5