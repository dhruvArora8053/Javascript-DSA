"use strict";

const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      const [a] = arr.splice(i, 1);
      //   console.log(a);
      arr.unshift(a);
      //   console.log(arr);
    }
    for (let j = i - 1; j > 0; j--) {
      if (arr[i] < arr[j] && arr[i] > arr[j - 1]) {
        const b = arr.splice(j, 1);
        // console.log(b);
        arr.splice(j, 0, b);
        // console.log(b);
      }
    }
  }
  return arr;
};

// console.log(insertionSort([42, 33]));
console.log(insertionSort([37, 45, 29, 8]));
console.log(insertionSort([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(insertionSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(insertionSort([-8, 1, 2, -3, 4, -5, 6, 7]));

// const num = [23, 55, 6, 33, 60];
// const a = num.shift()
// num.unshift(a)

// console.log(a);
// console.log(num);
