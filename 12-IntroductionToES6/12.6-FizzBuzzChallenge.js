let numbersArray = [];

for (let i = 1; i <= 100; i++) {
  numbersArray.push(i);
}

let fizzBuzzArray = [];

for (i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] % 5 === 0 && numbersArray[i] % 3 === 0) {
    fizzBuzzArray.push("FizzBuzz");
  } else if (numbersArray[i] % 5 === 0) {
    fizzBuzzArray.push("Buzz");
  } else if (numbersArray[i] % 3 === 0) {
    fizzBuzzArray.push("Fizz");
  } else {
    fizzBuzzArray.push(numbersArray[i]);
  }
}

console.log(numbersArray);
console.log(fizzBuzzArray);
