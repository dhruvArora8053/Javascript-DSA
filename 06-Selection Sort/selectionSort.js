"use strict";

const selectionSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

console.log(selectionSort([37, 45, 29, 8]));
console.log(selectionSort([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));
