"use strict";

// //This function will return odd values from an array using pure recursion:-
// const collectOddValues = function (arr) {
//   let newArr = [];

//   //base condition
//   if (arr.length === 0) {
//     return newArr;
//   }

//   //action
//   if (arr[0] % 2 !== 0) {
//     newArr.push(arr[0]);
//   }

//   //new input and called again
//   newArr = newArr.concat(collectOddValues(arr.slice(1)));
//   return newArr;
// };

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const collectOddValues = function (arr) {
  let newArr = [];

  //condition
  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  //new input and call again
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
};

console.log(collectOddValues([1, 2, 3, 4, 5]));
