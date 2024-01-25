"use strict";

// base case
// new input

const countNumber = function (n) {
  if (n <= 0) {
    console.log("All Done!");
    return;
  }

  console.log(n);
  countNumber(--n);
};

countNumber(5);
