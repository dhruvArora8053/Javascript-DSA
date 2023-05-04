"use strict";

// const swap = function (arr, a, b) {
//   return ([arr[a], arr[b]] = [arr[b], arr[a]]);
// };

// const bubbleSort = function (arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let noSwap = true;
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       //   console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         //traditional
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;

//         //modern
//         // swap(arr, j, j + 1);

//         //optimization
//         noSwap = false;
//       }
//     }
//     if (noSwap) {
//       break;
//     }
//   }
//   return arr;
// };

// console.log(bubbleSort([37, 45, 29, 8]));
// console.log(bubbleSort([1, 37, 44, 21, 4, 3, 15, 7]));
// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

//another loops could be
// for(let i = arr.length; i > 0; i--)
// for(let j = 0; j < i-1; j++)

//Big O:- Worst: n**2, best: n

//Use Cases:-
//When your data is nearly sorted then it could be a good candidate

const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([37, 45, 29, 8]));
console.log(bubbleSort([1, 37, 44, 21, 4, 3, 15, 7]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
