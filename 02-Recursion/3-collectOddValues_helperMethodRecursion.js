"use strict";

//This function will return odd values from an array using helper method recursion:-
// function collectOddValues(arr) {
//   let result = [];

//   //helper function
//   function helper(helperInput) {
//     //base condition
//     if (helperInput.length === 0) {
//       return;
//     }

//     //action
//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }

//     //new input and called again
//     helper(helperInput.slice(1));
//   }

//   helper(arr);

//   return result;
// }

const collectOddValues = function (arr) {
  const pushArr = [];

  const helperFunction = function (newArr) {
    //base condition
    if (newArr.length === 0) {
      return pushArr;
    }

    //action
    if (newArr[0] % 2 !== 0) {
      pushArr.push(newArr[0]);
    }

    //different input+ call again
    helperFunction(newArr.slice(1));
  };

  helperFunction(arr);

  return pushArr;
};

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
