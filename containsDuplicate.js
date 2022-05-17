/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.*/

var containsDuplicate = function(nums) {
  let numsObj = {};

 for(let i = 0; i < nums.length; i++) {
     let currentNum = nums[i];
  if(numsObj[currentNum] !== undefined) {
    return true
  } else {
    numsObj[currentNum] = true;
  }
}

  return false;
};

//test
console.log(containsDuplicate([2,3,4,6,7,8,3])); // returns true

