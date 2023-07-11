"use strict";
//https://leetcode.com/problems/longest-consecutive-sequence/

const longestSequence = function (nums) {
  let countMax = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else {
        if (nums[i] + count === nums[j] + 1) {
          count++;
        }
      }
    }
    if (countMax < count) {
      countMax = count;
    }
  }
  return countMax;
};

console.log(longestSequence([100, 4, 200, 1, 3, 2]));
console.log(longestSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
