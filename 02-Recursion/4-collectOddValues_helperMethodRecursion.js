"use strict";

//This function will return odd values from an array using helper method recursion:-
function collectOddValues(arr) {
  let result = [];

  //helper function
  function helper(helperInput) {
    //base condition
    if (helperInput.length === 0) {
      return;
    }

    //action
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    //new input and called again
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//advantage-
//the result arr will not be decalred every time we call the funciton.

const collectOddValues1 = function (arr) {
  const result = [];

  const helperMethod = function (helperArr) {
    //base condition
    if (helperArr.length === 0) return;

    //action
    if (helperArr[0] % 2 !== 0) result.push(helperArr[0]);

    // different input + call again
    helperMethod(helperArr.slice(1));
  };

  helperMethod(arr);
  return result;
};

console.log(collectOddValues1([1, 2, 3, 4, 5, 6, 7, 8, 9]));