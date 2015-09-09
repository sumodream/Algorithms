    /**
     * 请实现javascript中的indexOf功能，判断一个字符串a中是否包含另一个字符串b。
        a）如果包含，需要返回匹配字符串b的位置
        b）如果不包含，需要返回-1
        如：indexOf("hello","el") return 1。
     */

    function indexOf(a, b) {
        var len = b.length;
        for (i = 0; i < a.length - len; i++) {
        if (a.slice(i, i + len) == b) {
            return 1;
                }
            }
            return -1;
        }

    console.log(indexOf("hello","ol"));