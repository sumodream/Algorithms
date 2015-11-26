/**
 * [randomSort description]
 * 用Javascript实现乱序函数randomSort(array)函数，
 * 输出排序后的函数。如[1,2,3,4,5]，输出[3,2,4,5,1]。要求N次以内不重复。
 */
function randomSort(array){
    var x=array.sort(function(a,b){
         return Math.random()>0.5?1:-1;
    });
    return x;
}
console.log(randomSort([1,2,3,4,5,6]));             //随机数
