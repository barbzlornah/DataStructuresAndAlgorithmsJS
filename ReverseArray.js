// Write a method/function, reverse(A) that takes an array of integers, A
// and reverses it.

// Examples:

// [1, 2, 5, 6] -> [6, 5, 2, 1]
// [] -> []
// [1] -> [1]
function reverse(A){
    let copyA = new Array(A.length);

    let j = 0;
    for(let i = A.length-1; i >=0; i--){
        copyA[j] = A[i];
        j++
    }
    return copyA;
}
let a = [1, 4, 5, 6];
console.log(reverse(a));
