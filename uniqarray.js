  /**
   * [uniq description]
   * 为 Array 对象添加一个去除重复项的方法 
   */
  Array.prototype.uniq = function () {
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
  //console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq());


Array.prototype.uniq = function () {
    var isNaN = false;
    for(var i = 0 ; i < this.length ; i++){
        if(this[i] != this[i]){
            isNaN = true ;
        }
        for(var j=i+1 ; j < this.length ;){
            if(this[i] === this[j] || (isNaN && this[j] != this[j])){
                this.splice(j,1)
            }else{
                j++;
            }
        }
    }
    return this;
}
console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq());
