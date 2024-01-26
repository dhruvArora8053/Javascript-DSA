"use strict";

//This function will return the factorial of a number using recursion:-
const factorial = function (num) {
  //base condition
  if (num === 1) return 1;

  //action+ different input+ call again
  return num * factorial(num - 1);
};

console.log(factorial(1));

//////////////////////////////////////

const factorial1 = function (num) {
  // badc -->

  //base condition
  if (num === 1) return 1;

  // action, different input, call again
  return num * factorial1(num - 1);
};

console.log(factorial1(4));
