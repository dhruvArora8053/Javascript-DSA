"use strict";

// const insertionSort = function (arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[0]) {
//       const [a] = arr.splice(i, 1);
//       arr.unshift(a);
//     }

//     for (let j = i - 1; j > 0; j--) {
//       if (arr[i] < arr[j] && arr[i] > arr[j - 1]) {
//         const [b] = arr.splice(i, 1);
//         arr.splice(j, 0, i);
//       }
//     }
//   }
//   return arr;
// };

// console.log(insertionSort([42, 33, 11]));
// console.log(insertionSort([37, 45, 29, 8]));
console.log(insertionSort([1, 37, 44, 21, 4, 3, 15, 7]));
// console.log(insertionSort([8, 1, 2, 3, 4, 5, 6, 7]));
// console.log(insertionSort([-8, 1, 2, -3, 4, -5, 6, 7]));

// const num = [23, 55, 6, 33, 60];
// const a = num.shift()
// num.unshift(a)

// console.log(a);
// console.log(num);

//Insertion of the element at specific index using splice:
function insertAt(array, index, ...elementsArray) {
  array.splice(index, 0, ...elementsArray);
}

var num = [1, 2, 3, 6, 7, 8];
insertAt(num, 3, 4, 5);

console.log(num);

//my example:
const arr1 = [2, 3, 53, 55, 84, 22];
arr1.splice(2, 0, 67);
console.log(arr1);

function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log(arr[j + 1], arr[j]);
      arr[j + 1] = arr[j];
    }
    console.log(arr[j + 1], currentVal);
    arr[j + 1] = currentVal;
    console.log(arr[j], arr[j + 1]);
  }
  return arr;
}

console.log("******************************");
console.log(insertionSort([2, 1, 9, 76, 4]));
// console.log(insertionSort([42, 33, 11]));
// console.log(insertionSort([37, 45, 29, 8]));
// console.log(insertionSort([1, 37, 44, 21, 4, 3, 15, 7]));
// console.log(insertionSort([8, 1, 2, 3, 4, 5, 6, 7]));
// console.log(insertionSort([-8, 1, 2, -3, 4, -5, 6, 7]));

