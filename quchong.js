/**
 * 数组去重总结
 */
/**
 * 使用indexOf去掉数组中重复的元素
 * @param  {[type]} attr [description]
 * @return {[type]}      [description]
 */
function uniq(attr){
    //创建临时数组
    var result = [];
    //遍历当前数组
    for(var i = 0 ; i < attr.length ; i++){
        //如果当前数组的第i已经保存在临时数组里 则跳过
        //否则将当前项保存在临时数组里
        if(result.indexOf(attr[i]) == -1){
            result.push(attr[i]);
        }
    }
    return result;
}
//1,或'1'都当不同类别去重
var s = [1,2,3,4,'1','1',4,6,6,7,8,7];  //[ 1, 2, 3, 4, '1', 6, 7, 8 ]
var s1 = [1,2,3,'3',4,4,5]              //[ 1, 2, 3, '3', 4, 5 ]
console.log(uniq(s));
console.log(uniq(s1));


/**
 * 使用hash表去重
 * @param  {[type]} attr [description]
 * @return {[type]}      [description]
 */
function uniq1(attr){
    var hash = {},
        result1 = [];
    for(var i = 0 ; i < attr.length ; i++){
        if(!hash[attr[i]]){
            hash[attr[i]] = true ;
            result1.push(attr[i]);
        }
    }
    return result1;
}
//1,或'1'当同类别的去重了,而且是按顺序去掉后面重复的
var s2 = [1,2,3,'3','4',3,4,5];           //[ 1, 2, 3, 4, 5 ]
console.log(uniq1(s2));

/**
 * 排序比较相邻 去掉后面重复项
 * @param  {[type]} attr [description]
 * @return {[type]}      [description]
 */
function uniq2(attr){
    attr.sort();
    var result2 = [];
    for(var i = 0 ; i < attr.length ; i++){
        if(attr[i] != attr[i-1]){
            result2.push(attr[i]);
        }
    }
    return result2;
}
//1,或'1'当同类别的去重了,而且是按顺序去掉后面重复的  同上
var s3 = [1,2,3,'3','4',3,4,5]; 
console.log(uniq2(s3));