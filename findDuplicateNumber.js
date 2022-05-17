
/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
*/


 var findDuplicate = function(nums) {
  let numsObj = {};

for(let i = 0; i < nums.length; i++) {
  let currentNum = nums[i];
if(numsObj[currentNum] !== undefined) {
 return currentNum;
} else {
   numsObj[currentNum] = true;
}
}

};


//test
console.log(findDuplicate([3,1,3,4,2])); // output: 3
console.log(findDuplicate([1,3,4,2,2])); //output: 2