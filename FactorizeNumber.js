// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

//SOLUTION ONE : WITH RECURSION
// function factorizeNumber(num){
//     //if the number is less than 0 , reject it
//     if(num < 0) return -1;

//     // If num = 0 OR num = 1, the factorial will return 1
//     else if(num === 0 || num === 1 ) return 1;

//     // otherwise call the recursive procedure again
//     else{
//         return (num * factorizeNumber(num-1));
//     }

// }
// console.log(factorizeNumber(5));

//SOLUTION TWO : WITH A WHILE LOOP
// const factorizeNumber = (num) => {
//     // create a variable result to store num
//     let result = num;
//     //if the number is less than 0 , reject it
//      if(num < 0) return -1;

//      // If num = 0 OR num = 1, the factorial will return 1
//      if(num === 0 || num === 1 ) return 1;

//      // create a while loop
//      while(num > 1)
//      {
//          num--; // Decrementation by 1 at each iteration
//          result = result * num;
//      }
//      return result;

// }
// console.log(factorizeNumber(5));

//SOLUTION THREE : WITH A FOR LOOP
function factorizeNumber(num){
    //if the number is less than 0 , reject it
      if(num < 0) return -1;

      // If num = 0 OR num = 1, the factorial will return 1
      if(num === 0 || num === 1 ) return 1;

      // We start the FOR loop with num-1 eg for 5, we start at 4
  // We decrement i after each iteration 
      for (let i = num-1; i >= 1; i--){
          // We store the value of num at each iteration
          num = num * i; // could use (num *= i;)
      }
      return num;
}
console.log(factorizeNumber(5)); 