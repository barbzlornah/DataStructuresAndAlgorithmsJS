// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

const permute = (nums) => { //lets create a function called permute that takes an array called nums as input
    const result = []; // bcz we need to return an array of arrays as a result,lets create an empty array called result to house our results

    if(nums.length === 0) return []; //When we don’t have anything left to iterate and/or get an empty input.
    if(nums.length === 1) return [nums]; //When we just have one element left: the permutation of anything is itself.

    for(let i = 0; i < nums.length; i++){ //a for loop to iterate through the nums array
        const currentNum = nums[i]; //create a variable to house the current number we’re iterating with and call it currentNum.
        const remainingNums = nums.slice(0,i).concat(nums.slice(i+1));//We’ve set apart the first number in our iteration, but how do we separate the remaining numbers? Here’s one way:
        const remainingNumsPermuted = permute(remainingNums);
        
        //we need to iterate through the results of remainingNums(permuted) to make sure we account for all of them:
        for(let j = 0; j < remainingNumsPermuted.length; j++ )
        {
            const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
            result.push(permutedArray);
        }
    }
    return result;
}
console.log(permute(nums = [1,2,3]));
     