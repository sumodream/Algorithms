/**
 * 使用indexOf去掉数组中重复的元素
 * @param  {[type]} attr [description]
 * @return {[type]}      [description]
 */
function uniq(attr){
    var result = [];
    for(var i = 0 ; i < attr.length ; i++){
        if(result.indexOf(attr[i]) == -1){
            result.push(attr[i]);
        }
    }
    return result;
}
var s = [1,2,3,4,'1','1',4,6,6,7,8,7];
var s1 = [1,2,3,3,4,4,5]
console.log(uniq(s));
console.log(uniq(s1));