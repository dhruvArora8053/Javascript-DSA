"use strict";
//https://leetcode.com/problems/longest-consecutive-sequence/

const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let noSwap = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      //   console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //traditional
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        //modern
        // swap(arr, j, j + 1);

        //optimization
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
  return arr;
};

const longestSequence = function (nums) {
  const arr = bubbleSort(nums);
  let countMax = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      } else {
        if (arr[i] + count === arr[j] + 1) {
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
