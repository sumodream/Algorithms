/**
 * 匹配括号  返回括号缺失的位置
 */
function bracket(len){
    var s = [];
    for (var index = 0; index < len; index++) {
            ch = str.charAt(index);
            switch (ch) {
            case '{':
            case '[':
            case '(':
                s.push(ch); //如果是前括号，就入栈
                break;
            case '}':
            case ']':
            case ')':
                if ( !s) { //是反括号
                    chPop = s.peek();
                    if ( ( '{'==chPop && '}' != ch ) //判断栈顶的括号与现在读入的这个反括号是否匹配
                            ||('['==chPop && ']' != ch )
                            || ('('==chPop && ')' != ch ) )
                    {    //不匹配就报错
                        console.log("Error : " + ch + " at " + index);
                        flag = true;
                    }else if (( '{'==chPop && '}' == ch ) 
                            ||('['==chPop && ']' == ch )
                            || ('('==chPop && ')' == ch )) { 
                        //匹配就出栈，继续读下一个字符
                        s.pop();
                    }
                } else {//如果遇到反括号，但是栈为空，则出错
                    console.log("Error : " + ch + " at " + index);
                    flag = true;
                }
            default: 
                break;
            }
        }
    }
