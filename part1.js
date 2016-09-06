/**************************************
How would you verify a prime number?
***************************************/

function isPrime(num){
    // divider is 3 because 1 is by definition not prime, 2 is prime,
    // and 3 is prime.
    var divider = 3,
        // limit is sqrt because one of the factors will have to be less than
        // sqrt and the other would be greater
        limit = Math.sqrt(num);

    if (num === 2 || num === 3)
        return true;
    if (num % 2 === 0)
        return false;

    while (divider <= limit){
        if (num % divider === 0)
            return false;
        else {
            // += 2 because any even number would be divisible by 2
            divider += 2;
    }
    // if no number returned false then the function will return true
    return true;
}


/**************************************************
How could you find all prime factors of a number?
**************************************************/

function primeFactors(num){
    var factors = [],
        divisor = 2;

    while(num > 2){
        if(num % divisor === 0){
            // divisor is what would be the prime
            factors.push(divisor);
            num = num / divisor;
        }
    else{
        divisor++;
        }
    }
    return factors;
}


/**********************************
How do you get nth Fibonacci number?
**********************************/

// Do a regular Fibonacci function and add Fibonacci numbers to array
// take the nth index + 1 from the array to get the nth Fibonacci number

function nthFibonacci(num){
  let fib = [0, 1];

  if (num <= 2) {
      return 1
  };

  for (var i = 2; i <= num; i++ ){
   fib[i] = fib[i-1]+fib[i-2];
  }

 return fib[num - 1];
}
