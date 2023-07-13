"use strict";

//https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = function (arr) {
  let containes = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        containes = true;
      }
    }
  }
  return containes;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([23, 2, 3, 4, 5, 23]));

//Big O --> time: O(n**2)
//          space: O(1)

//2nd Optimized Solution:
//compare each element with it's neighbour after sorting
//Big O --> time: O(n logn)
//          space: O(1)

//3rd More Optimized Solution:
//compare each element with it's neighbour after sorting
//Big O --> time: O(n)
//          space: O(n)


/**
 * Brute Force - Linear Search
 * Time O(N^2) | Space O(1)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
  for (let right = 0; right < nums.length; right++) {/* Time O(N) */
      for (let left = 0; left < right; left++) {         /* Time O(N) */
          const isDuplicate = nums[left] === nums[right];
          if (isDuplicate) return true;
      }
  }

  return false;
}

/**
* Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
* Time O(N * log(N)) | Space O(1)
* https://leetcode.com/problems/contains-duplicate/
* @param {number[]} nums
* @return {boolean}
*/
var containsDuplicate = (nums) => {
  nums.sort((a, b) => a - b);/* Time O(N * log(N)) | Space O(1 || log(N)) */

  return hasDuplicate(nums);
}

const hasDuplicate = (nums) => {
  for (let curr = 0; curr < (nums.length - 1); curr++) {/* Time O(N) */
      const next = (curr + 1);

      const isNextDuplicate = nums[curr] === nums[next];
      if (isNextDuplicate) return true;
  }

  return false;
}

/**
* Hash Set
* Time O(N) | Space O(N)
* https://leetcode.com/problems/contains-duplicate/
* @param {number[]} nums
* @return {boolean}
*/
var containsDuplicate = (nums) => {
  const numsSet = new Set(nums);/* Time O(N) | Space O(N) */
  const isEqual = numsSet.size === nums.length;

  return !isEqual;
};

/**
* Hash Set - Early Exit
* Time O(N) | Space O(N)
* https://leetcode.com/problems/contains-duplicate/
* @param {number[]} nums
* @return {boolean}
*/
var containsDuplicate = (nums, numsSet = new Set()) => {
  for (const num of nums) {/* Time O(N) */
      if (numsSet.has(num)) return true;

      numsSet.add(num);       /* Space O(N) */
  }

  return false;
};