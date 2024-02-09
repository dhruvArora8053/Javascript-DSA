"use strict";

const selectionSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      //   console.log(i, j);
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    //optimization
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([37, 45, 29, 8]));
console.log(selectionSort([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(selectionSort([-8, 1, 2, -3, 4, -5, 6, 7]));

//Big O: best - n**2 || worst - n**2
//space complexity - O(1)

console.log("---------------------------------");

const selectionSort1 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

console.log(selectionSort1([37, 45, 29, 8]));
console.log(selectionSort1([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(selectionSort1([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(selectionSort1([-8, 1, 2, -3, 4, -5, 6, 7]));
