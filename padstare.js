    /**
     * [padstare description]
     *  写一个函数padstare(string str1,min_length,string str2)。
        例：padstare（‘5’，3，‘0’）返回的是‘005’； padstare（‘798’，3，‘0’）返回的是‘798’；
     */
    function padstare(str,min,str_char)
    {
        var ret=[];
        if(str.length>=min)
        {
            return str;  
        }
        else
        {
            for(var i=0;i<min-str.length;i++)
              {
                   ret.push(str_char);
              }
            return ret.join('')+str;
        }
    }
    console.log(padstare('5',3,'2'));