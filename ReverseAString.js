// SOLUTION ONE
// function reverseString(str) {
//     var splitString = str.split("");
//     var reverseArray = splitString.reverse();
//     var joinArray = reverseArray.join("");

//     return joinArray;
// }
// console.log (reverseString("hello"));

//SOLUTION TWO
// const reverseString = (str) => {
//     return str.split("").reverse().join("");
//   }
  
//   console.log (reverseString("hello"));

// SOLUTION THREE
const reverseString = (str) => {
    let result = "";

    for(let i = str.length-1; i >= 0; i-=1){
        result += str[i];
    }
    return result;
}
console.log(reverseString("hello"))