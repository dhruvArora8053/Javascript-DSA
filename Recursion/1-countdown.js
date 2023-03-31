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

const countDown1 = function (n) {
  //1.Base Condition
  if (n === 0) {
    console.log("All Done");
    return;
  }
  //2.Action
  console.log(n);
  //3.Different Input
  n--;
  //4.Call Again
  countDown1(n);
};

countDown1(5);
