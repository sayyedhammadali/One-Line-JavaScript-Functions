(function($) {

  // Algo 1: Armchair Algorithms 0.0.1
  // Given an array of positive number inputs, design an algorithm that returns
  // an array of the same length where the values in the new array are the
  // product of every number in the array, except the number at that index.
  //
  // eg. [3, 5, 9, 2] should return [90, 54, 30, 135]
  //
  // source: https://codeburst.io/armchair-algorithms-0-0-1-97b49a9060ab
  function armchair1() {
    /* solution here... */
  }

  // Algo 2: Armchair Algorithms 0.0.2
  // Given an Array of positive integers, determine whether that Array has any duplicates.
  //
  // eg. [2, 6, 3, 10] returns false while [2, 4, 1, 2] returns true.
  //
  // source: https://codeburst.io/armchair-algorithms-0-0-2-9b18e7601b91

  function armchair2() {
    /* solution here... */
  }

  // Algo 3: Two Sum
  // Given an array of integers, return indices of the two numbers such that they add up
  // to a specific target. You may assume that each input would have exactly one solution,
  // and you may not use the same element twice.
  //
  // e.g. Given nums = [11, 15, 2, 7], target = 9,
  // Because nums[0] + nums[1] = 2 + 7 = 9,
  // return [2, 3].
  //
  // source: leetcode

  const twoSum = function(nums, target) {
    let exist = {};
    for(let i = 0; i < nums.length; i++) {
      if (typeof (exist[target - nums[i]]) !== 'undefined') {
        return [i, exist[target - nums[i]]];
      }
      exist[nums[i]] = i;
    }
  }
  // console.log('->', twoSum([11, 15, 2, 7], 9));

})(jQuery);
