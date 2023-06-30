"use strict";

const insertionSort = function (arr) {
  let currentVal;
  for (var i = 0; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(insertionSort([2, 1, 9, 76, 4]));
console.log(insertionSort([42, 33, 11]));
console.log(insertionSort([37, 45, 29, 8]));
console.log(insertionSort([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(insertionSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(insertionSort([-8, 1, 2, -3, 4, -5, 6, 7]));

//Big O: best case: n || worst case: n**2
//space complexity: O(1)

//Bubble and insertion sort do well in nearly sorted arrays than other alogrithms.

const insertionSort1 = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(insertionSort1([2, 1, 9, 76, 4]));
console.log(insertionSort1([42, 33, 11]));
console.log(insertionSort1([37, 45, 29, 8]));
console.log(insertionSort1([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(insertionSort1([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(insertionSort1([-8, 1, 2, -3, 4, -5, 6, 7]));
