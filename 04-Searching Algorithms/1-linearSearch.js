"use strict";

const linearSearch = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));

const linearSearch1 = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
};

console.log(linearSearch1([1, 2, 3, 4, 5, 6, 7, 8, 9], 46));
