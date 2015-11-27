#学习算法

题目大部分来自
[数据结构和算法 javascript语言描述](https://github.com/oreillymedia/data_structures_and_algorithms_using_javascript)和网上小练习.

> 很多人说学习前端不需要学习算法,我也曾这么想过. 但这不是借口, 想要学好前端,计算机基础也是极其重要的(不局限于算法), 希望自己能好好重视起来.


---


> 尽管都是简单基础的例子,但还是希望自己能深入理解, 加油!

---


### 使用javascript实现斐波那契数列函数 (递归算法)

标签（空格分隔）：js Algorithms

---

```javascript
function fibonacci(n){
    if(n==1||n==2)
        return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(6));
```

**递归**


