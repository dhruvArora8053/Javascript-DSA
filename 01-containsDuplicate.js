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
console.log("****************************");

//Big O --> time: O(n**2)
//          space: O(1)

//2nd Optimized Solution:
//compare each element with it's neighbour after sorting
//Big O --> time: O(n logn)
//          space: O(1)

const containsDuplicate1 = function (arr) {
  arr.sort((a, b) => a - b);
  let containes = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) containes = true;
  }
  return containes;
};

console.log(containsDuplicate1([1, 2, 3, 1]));
console.log(containsDuplicate1([1, 2, 3, 4]));
console.log(containsDuplicate1([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate1([23, 2, 3, 4, 5, 23]));
console.log("****************************");

//3rd More Optimized Solution:
//compare each element with it's neighbour after sorting
//Big O --> time: O(n)
//          space: O(n)
const containsDuplicate3 = function (nums) {
  const numsSet = new Set();

  for (const num of nums) {
    if (numsSet.has(num)) return true;
    numsSet.add(num);
  }
  return false;
};

console.log(containsDuplicate3([1, 2, 3, 1]));
console.log(containsDuplicate3([1, 2, 3, 4]));
console.log(containsDuplicate3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate3([23, 2, 3, 4, 5, 23]));
