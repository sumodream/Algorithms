    /**
     * 递归
     * 栈模拟递归过程
     */
    function facorial(n){
        if(n === 0){
            return 1 ;
        }else{
            return n * facorial(n-1);
        }
    }

    function fact(n){
        var s = [];
        while (n > 1) {
            s.push(n--);
        }
        var p = 1 ;
        while (s.length > 0) {
            p *= s.pop();
        }
        return p ;
    }
    console.log(facorial(5));
    console.log(fact(5));
