let dogAge = parseInt(prompt("Input your dog age"));

let humanAge = (dogAge - 2) * 4 + 21;
console.log(
  `If the dog is ${dogAge} then the human age of the dog is ${humanAge}`
);

function bmiCalculator(weight, height) {
  return Math.floor(weight / height ** 2);
}

console.log(bmi);
