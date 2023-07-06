"use strict";

const mergeArrays = function (arr1, arr2) {
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
};

console.log(mergeArrays([1, 2, 9], [3, 76]));
console.log(mergeArrays([-10, -5, 9, 12, 23], [-96, 12, 34, 84]));
console.log(mergeArrays([11, 33, 44, 55, 66], [6, 7, 8, 234, 576]));
console.log(mergeArrays([1, 2], [3, 6]));
console.log(mergeArrays([1], [7, 76]));
console.log(mergeArrays([43], []));

// console.log(mergeSort([2, 1, 9, 76, 4]));
// console.log(mergeSort([42, 33, 11]));
// console.log(mergeSort([37, 45, 29, 8]));
// console.log(mergeSort([1, 37, 44, 21, 4, 3, 15, 7]));
// console.log(mergeSort([8, 1, 2, 3, 4, 5, 6, 7]));
// console.log(mergeSort([-8, 1, 2, -3, 4, -5, 6, 7]));
// console.log(mergeSort([-23, -333, -400, 12, 1, 2, 3, 44, -233]));
// console.log(mergeSort([23, 2, 1, 9, 17, 345, 8, 12, 14, 5476, 2345, 9852]));
