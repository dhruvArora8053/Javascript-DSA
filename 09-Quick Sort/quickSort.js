"use strict";

const swap = function (array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const pivot = function (arr, start = 0, end = arr.length - 1) {
  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

console.log(pivot([9, 2, 1, 76, 4]));
console.log(pivot([42, 33, 11]));
console.log(pivot([37, 45, 29, 8]));
console.log(pivot([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(pivot([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(pivot([-8, 1, 2, -3, 4, -5, 6, 7]));
console.log(pivot([23, 2, 1, 9, 17, 345, 8, 12, 14, 5476, 2345, 9852]));
console.log(pivot([-23, -333, -400, 12, 1, 2, 3, 44, -233]));
console.log("--------------------------------");

const pivot1 = function (arr, start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  let pivotIndex = start;

  for (let i = 1; i < end; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
  }
  swap(arr, start, pivotIndex);
  return [arr, pivotIndex];
};

console.log(pivot1([9, 2, 1, 76, 4]));
console.log(pivot1([42, 33, 11]));
console.log(pivot1([37, 45, 29, 8]));
console.log(pivot1([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(pivot1([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(pivot1([-8, 1, 2, -3, 4, -5, 6, 7]));
console.log(pivot1([23, 2, 1, 9, 17, 345, 8, 12, 14, 5476, 2345, 9852]));
console.log(pivot1([-23, -333, -400, 12, 1, 2, 3, 44, -233]));
console.log(pivot1([23, 2, 1, 9, 17, 345, 8, 12, 14, 5476, 2345, 9852]));
console.log("--------------------------------");

const quickSort = function (arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([9, 2, 1, 76, 4]));
console.log(quickSort([42, 33, 11]));
console.log(quickSort([37, 45, 29, 8]));
console.log(quickSort([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(quickSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(quickSort([-8, 1, 2, -3, 4, -5, 6, 7]));
console.log(quickSort([23, 2, 1, 9, 17, 345, 8, 12, 14, 5476, 2345, 9852]));
console.log(quickSort([-23, -333, -400, 12, 1, 2, 3, 44, -233]));
console.log(quickSort([23, 2, 1, 9, 17, 345, 8, 12, 14, 5476, 2345, 9852]));
