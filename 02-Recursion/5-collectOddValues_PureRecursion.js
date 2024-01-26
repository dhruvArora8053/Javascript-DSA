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

//helper method: uses new method so that the declared data structer do not get declared everytime as a fresh one

//pure recursion: uses loop to stop the declaration of data structure until the condtion is met and when that condition is met we probably have our input ready

//helper method advantages: easy to read

//reference
//newArr= 1.concat([].cocat)(3.concat)([].concat)(5.concat)([])

// const a = [];
// const b = [1, 2];
// const c = [];
// const d = [3];
// console.log(a.concat(b).concat(c).concat(d));

const collectOddValues1 = function (arr) {
  let newArr = [];

  // base condition
  if (arr.length === 0) return [];

  // action
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  // different input + call again
  const result = newArr.concat(collectOddValues1(arr.slice(1)));
  return result;
};

console.log(collectOddValues1([1, 2, 3, 4, 5, 6, 7, 8, 9]));
