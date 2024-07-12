// Find factorial of a given number

let num = 5;
let fact = 1;

for (let i = num; i >= 1; i--) {
  fact = fact * i;
}

console.log(`Factorial of ${num} is ${fact}`);
