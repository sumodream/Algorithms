//js判断传入参数是否为质数
function fn(input) {
  input = parseInt(input,10);
  return isPrime(input) ? 'is prime' : 'not prime';
}

function isPrime(input) {
  if (input < 2) {
    return false;
  } else {
    for (var i = 2; i <= Math.sqrt(input); i++) {
      if (input % i == 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(isPrime(5));//true