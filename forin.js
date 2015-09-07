  /**
   * 找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
    1、返回数组，格式为 key: value
    2、结果数组不要求顺序 
   */


  function iterate(obj) {
       var arr = [];
       //使用for-in遍历对象属性
       for(var key in obj){
           //判断key是否为对象本身的属性
           if(obj.hasOwnProperty(key)){
               //将属性和值按格式存入数组
               arr.push(key+': '+obj[key]);
           }
       }
       return arr;
   }
   var C = function() {
      this.foo = 'ba'; this.baz = 'bi';
  }; 
     C.prototype.bop = 'bip'; 
     console.log(iterate(new C()));