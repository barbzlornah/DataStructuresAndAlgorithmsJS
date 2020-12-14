// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

const permute = (nums) => {
    const result = [];

    if(nums.length === 0) return [];
    if(nums.length === 1) return [nums];

    for(let i = 0; i < nums.length; i++){
        const currentNum = nums[i];
        const remainingNums = nums.slice(0,i).concat(nums.slice(i+1));
        const remainingNumsPermuted = permute(remainingNums);

        for(let j = 0; j < remainingNumsPermuted.length; j++ )
        {
            const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
            result.push(permutedArray);
        }
    }
    return result;
}
console.log(permute(nums = [1,2,3]));
     