"use strict";

//This function will print the numbers from n numbers to 1 using recursion:-
const countDown = function (num) {
  //base condition
  if (num <= 0) {
    console.log("All Done!");
    return;
  }
  //action
  console.log(num);

  //different inputs
  num--;

  //called again
  countDown(num);
};

countDown(5);

