"use strict";

//This function will return odd values from an array using pure recursion:-
const collectOddValues = function (arr) {
  let newArr = [];

  //base condition
  if (arr.length === 0) {
    return newArr;
  }

  //action
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  //new input and called again
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
};

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//reference
//newArr= 1.concat([].cocat)(3.concat)([].concat)(5.concat)([])

const a = [];
const b = [1, 2];
const c = [];
const d = [3];
console.log(a.concat(b).concat(c).concat(d));
