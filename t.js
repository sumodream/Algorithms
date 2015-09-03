/**
 * 去除空格 c
 */


void FormatString(char str[], int len)
{
  if(str == NULL || len <= 0)
  return;
 
  int i = 0, j = 0;
  while(str[i] == ' ')//开头的空格
    i++;
  while(str[i] != '\0')
  {
    if(str[i] == ' ' && (str[i+1] == ' ' || str[i+1] == '\0'))//中间或者结尾的空格
    {
        i++;
        continue;
    }
    str[j++] = str[i++];
  }
  str[j] = '\0';
}