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

// //base condition
// //action                   --> badc
// //different input
// //call again

const countDown1 = function (n) {
  //base condition
  if (n === 0) {
    return;
  }

  //action
  console.log(n);

  //different input
  n--;

  //call again
  countDown1(n);
};

countDown1(5);
