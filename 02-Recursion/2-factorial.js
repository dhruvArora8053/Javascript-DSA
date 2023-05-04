"use strict";

//This function will return the factorial of a number using recursion:-
const factorial = function (num) {
  //base condition
  if (num === 1) return 1;

  //action+ different input+ call again
  return num * factorial(num - 1);
};

console.log(factorial(1));

