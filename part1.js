


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
    }
    // if no number returned false then the function will return true
    return true;
}


/**************************************************
How could you find all prime factors of a number?
**************************************************/

function primeFactors(num){
    var factors = [],
        divider = 2;

    while(num > 2){
        if(num % divider === 0){
            // divider is what would be the prime
            factors.push(divider);
            num = num / divider;
        }
    else{
        divider++;
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
      return 1;
  }

  for (var i = 2; i <= num; i++ ){
   fib[i] = fib[i-1] + fib[i-2];
  }

 return fib[num - 1];
}


/******************************************************
How would you remove duplicate members from an array?
******************************************************/
// Ideas:
// Do a sort and then compare numbers.
// Have separate array for unique numbers
// forEach the sorted array and check if that value is in the unique array
// if it's not in the unique array then push it

function removeDuplicates(new_array){
    unique_array = [];
    sorted_array = new_array.sort();

    // check each item in sorted array to see if it's in unique_array
    sorted_array.forEach((item) => {
        // indexOf will by default equal -1 if the item is not in the
        // unique_array
        if(unique_array.indexOf(item) === -1 ){
            unique_array.push(item);
        }
    });

    console.log(unique_array);
    return unique_array;
}

// To test my answer
my_array = [4,5,2,2,4,6,7,7,4,2,1,4,3,2,4,3,4,5,7,3,2,4,5,6,7];
removeDuplicates(my_array);
