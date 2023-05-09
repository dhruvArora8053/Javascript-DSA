"use strict";

const merge = function (arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    while (arr1[i] > arr2[j]) {
      newArr.push(arr2[j]);
      j++;
    }

    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
    }

    i++;
  }

  if (i === arr1.length) {
    for (let a = j; a < arr2.length; a++) {
      newArr.push(arr2[a]);
    }
  }

  if (j === arr2.length) {
    for (let b = i; b < arr1.length; b++) {
      newArr.push(arr1[b]);
    }
  }

  return newArr;
};

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(merge([-10, -7, -5, 10, 20, 100, 102], [-96, 2, 14, 51, 99, 100]));
console.log(merge([], [2, 14, 99, 100]));

/////////////////////////////
// Steele's Solution
// Merges two already sorted arrays
function merge1(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
console.log(merge1([100, 200], [1, 2, 3, 5, 6]));
