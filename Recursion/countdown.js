"use strict";

const countDown = function (num) {
  //condition
  if (num <= 0) {  
    console.log("All Done!");
    return;
  }
  //action
  console.log(num);

  //different inputs
  num--;

  //again called
  countDown(num);
};

countDown(5);
