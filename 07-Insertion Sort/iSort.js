"use strict";

const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      const temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
    }
  }
};

console.log(insertionSort([42, 33, 11]));
console.log(insertionSort([37, 45, 29, 8]));
console.log(insertionSort([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(insertionSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(insertionSort([-8, 1, 2, -3, 4, -5, 6, 7]));
