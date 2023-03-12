"use strict";

//This function will return the sum of n numbers using recursion:
const sumRange = function (num) {
  //condition
  if (num === 1) return 1;

  //action + different input + again called
  return num + sumRange(num - 1);
};

console.log(sumRange(5));
