var leftShiftOne = function(str,n){
    var tmp = str[0];
    var tmp_str = [];
    for(var i = 1;i<n;i++){
        tmp_str[i-1]=str[i];
    }
    tmp_str[n-1]=tmp;
    return tmp_str;

};
var leftRotateString = function(str,n,m){
    while (m--) {
        str = leftShiftOne(str,n);
    }
    return str;
};
var str = 'abcdef';
console.log(leftShiftOne(str));


var  reverseString = function(s,left,right){
    var t;
    while (left < right) {
        t = s[left];
        s[left++]=s[right];
        s[right--]=t;
    }
    return s;
}
var leftRotateString = function(s,n,m){
    m%=n;
    var str = reverseString(s.split(""),0,m-1);
    str = reverseString(str,m,n-1);
    str = reverseString(str,0,n-1);
    return str.join('');
};
console.log(leftRotateString("saddfg"));


