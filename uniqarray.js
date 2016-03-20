/**
 * 数组去重总结
 */
/**
 * 1.使用indexOf去掉数组中重复的元素
 * @param  {[type]} attr [description]
 * @return {[type]}      [description]
 */
function uniq1(attr){
    //创建临时数组
    var result1 = [];
    //遍历当前数组
    for(var i = 0 ; i < attr.length ; i++){
        //如果当前数组的第i已经保存在临时数组里 则跳过
        //否则将当前项保存在临时数组里
        if(result1.indexOf(attr[i]) == -1){
            result1.push(attr[i]);
        }
    }
    return result1;
}
//1,或'1'当不同类别  所以木有去重
var s = [1,'1','1',2,3,4,4,6,6,7,8,7,'a','a'];  //[ 1, '1', 2, 3, 4, 6, 7, 8, 'a' ]
console.log(uniq1(s));



/**
 * 2.使用hash表去重
 * @param  {[type]} attr [description]
 * @return {[type]}      [description]
 */
function uniq2(attr){
    var hash = {},
        result2 = [];
    for(var i = 0 ; i < attr.length ; i++){
        if(!hash[attr[i]]){
            hash[attr[i]] = true ;
            result2.push(attr[i]);
        }
    }
    return result2;
}
//1,或'1'当同类别的去重了,而且是按顺序去掉后面重复的
var s2 = [1,2,3,'3','4',3,4,5];           //[ 1, 2, 3, '4', 5 ]
console.log(uniq2(s2));


/**
 * 3.排序比较相邻 去掉后面重复项
 * @param  {[type]} attr [description]
 * @return {[type]}      [description]
 */
function uniq3(attr){
    attr.sort();
    var result3 = [attr[0]];
    for(var i = 0 ; i < attr.length ; i++){
        if(attr[i] != attr[i-1]){
            result3.push(attr[i]);
        }
    }
    return result3;
}
//1,或'1'当同类别的去重了,而且是按顺序去掉后面重复的  同上
var s3 = [1,2,3,'3','4',3,4,5];           //[ 1, 2, 3, '4', 5 ]
console.log(uniq3(s3));


/**
 * 4.效率低的算法
 * @param  {[type]} attr [description]
 * @return {[type]}      [description]
 */
//木有起作用的算法
function uniq4(attr){
    if(attr.lenghth == 0 ) return ;
    var result4 = [attr[0]], 
        isRepeate;
    for(var i = 0 , j = attr.length ; i < j ;i++){
        isRepeate = false;
        for(var k = 0 , n = result4.length ; k < n ; k++){
            if(result4[k] === attr[i]){
                isRepeate = true ;
                break;
            }
            if(k == n) break ;
        }
        if(!isRepeate){
            result4.push(attr[i]);
        }        
    } 
    return result4;  
}
var s4 = [1,2,3,'3','4',3,4,5];                 //[ 1, 2, 3, '4', 5 ]
console.log(uniq4(s4));


/**
 * 5.数组原型去重 
 * @return {[type]} [description]
 */
Array.prototype.uniq5 = function () {
  var hasNaN = false;
  for(var i = 0; i < this.length; i++){
      if(this[i] !== this[i]) hasNaN = true;
      for(var j = i+1; j < this.length;){
          if(this[i] === this[j] ||(hasNaN && this[j] !== this[j])){
              this.splice(j,1);
          }else{
              j++;
          }
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  }
  return this;
};
//[ false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 2, '1' ]
console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN,1,2,1,'1','1'].uniq5());



