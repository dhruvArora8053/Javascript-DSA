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

const collectOddValues1 = function (arr) {
  const newArr = [];
  const helperMethod = function (helperInput) {
    //base condition
    if (helperInput.length === 0) {
      return newArr;
    }

    //action
    if (helperInput[0] % 2 !== 0) {
      newArr.push(helperInput[0]);
    }

    //different input + call again
    helperMethod(helperInput.slice(1));
  };

  helperMethod(arr);
  return newArr;
};

console.log(collectOddValues1([1, 2, 3, 4, 5, 6, 7, 8, 9]));
