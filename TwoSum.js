//SOLUTION ONE

// const twoSum = (nums,target) => {
//     if (nums.length === 0) return -1;

//     for(let i = 0; i <= nums.length; i++)
//     {
//         for(let j = i + 1; j < nums.length; j++)
//         {
//             if(nums[j] + nums[i] === target )
//             {
//                 return [i,j];
//             }
//         }
//     }
// }
// console.log(twoSum(nums = [2,7,11,15], target = 9))

const twoSum = (nums, target) => {
    const map = [];// create a hashmap to store the differences between the target and the current number

    for(let i = 0; i <= nums.length; i++)
    {
        let currentNum = nums[i];
        let neededNum = target - nums[i];

        if(!map.includes(neededNum))
        {
           map.push(currentNum);
        }
        else{
            return[neededNum,currentNum];
        }
    }
}
console.log(twoSum(nums = [2,7,11,15], target = 9))