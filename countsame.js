    /**
     * [dobule description]
     * 对于一个字符串，请设计一个高效算法，找到第一次重复出现的字符。
       给定一个字符串(不一定全为字母)A及它的长度n。
       请返回第一个重复出现的字符,保证字符串中有重复字符，字符串的长度小于等于500。
     */
    var dobule = function (a, len) {
        var arr = a.split('');
        var map = {};
        for(key in arr){
            if(arr[key] in map){
                return arr[key];
            }
            map[arr[key]] = 1;
        }
    }
     
    console.log(dobule('q2yw2yer23tdd',13)); //2