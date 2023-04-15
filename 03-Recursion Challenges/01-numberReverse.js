"use strict";

//Write a program to reverse a given number using recursion:
const reverse = function (n) {
  const str = +String(n).split("").reverse().join("");
  console.log(str);
};

reverse(123456);
