// SOLUTION ONE
// const isPalindrome = (n) => {
//    if(n < 0) return false;

//    const reversedNum = Number(n.toString().split("").reverse().join(""));
//    if(reversedNum == n) return true;
//    return false;
// }
// console.log(isPalindrome(121));

// SOLUTION TWO
const isPalindrome = (n) => {
    if(n < 0) return false;

    return n === reversedInteger(n);
};
const reversedInteger = (n) => {
    let reversed = 0;

    while(n > 0){
        reversed = (reversed * 10) + (n % 10)
        n = Math.floor(n/10);
    }
    return reversed;
}
console.log(isPalindrome(121));