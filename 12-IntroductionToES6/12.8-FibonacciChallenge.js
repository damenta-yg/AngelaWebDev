/*
let generatorNumber = 3;

let firstArray = [0, 1];
let toReturnArray = [];

for (let i = 0; i < generatorNumber; i++) {
  if (toReturnArray.length < firstArray.length) {
    toReturnArray.push(firstArray[i]);
  } else {
    toReturnArray.push(toReturnArray[i - 1] + toReturnArray[i - 2]);
  }
}

console.log(toReturnArray);
*/

function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  let toReturnArray = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      toReturnArray.push(0);
    } else if (i === 1) {
      toReturnArray.push(1);
    } else {
      toReturnArray.push(toReturnArray[i - 1] + toReturnArray[i - 2]);
    }
  }

  //Return an array of fibonacci numbers starting from 0.
  return toReturnArray;
  //Do NOT change any of the code below 👇
}

let x = fibonacciGenerator(15);
console.log(x);
