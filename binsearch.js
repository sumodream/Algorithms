/*
非递归..
此种只对有序数据有效
 */
function binsearch(arr,data){
    var left = 0;
    var right = arr.length-1;
    while(left <= right){
        var mid = Math.floor((left+right)/2);
        if(arr[mid]<data){
            left = mid+1;
        }else if(arr[mid]>data){
            right = mid-1;
        }else{
            return mid;
        }
    }
    return false;
}
var nums = [10,22,33,44,55,66,77,88,90,99];
console.log(binsearch(nums,88));

/*
递归

 */
/*function binsearch2(arr, data, left, right) {
    var left = left || 0;
    var right = right || arr.length - 1;

        var mid = Math.floor((left + right) / 2);

        if (data == arr[mid]) {
            return mid;
        } else if (data<arr[mid]) {
            return binsearch2(arr, data, 0, mid - 1);
        } else {
            return binsearch2(arr, data, mid + 1, right);
        }
    

    return false;
}
var nums = [10, 22, 33, 44, 55, 66, 77, 88, 90, 99];
console.log(binsearch2(nums, 10));*/

function binarySearch(data, dest, start, end){
    var end = end || data.length - 1,
        start = start || 0,
        m = Math.floor((start + end) / 2);
    if(data[m] == dest){
        return m;
    }
    if(dest < data[m]){
        return binarySearch(data, dest, 0, m-1);
    }else{
        return binarySearch(data, dest, m+1, end);
    }
   
    return false;
}
var arr = [-34, 1, 3, 4, 5, 8, 34, 45, 65, 87];
console.log(binarySearch(arr,34));