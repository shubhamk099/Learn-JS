// Find sum of digits of a number

let num = 6372;
let sum = 0;
let temp = num;

while (temp != 0) {
  let digit = temp % 10;
  sum += digit;
  temp = Math.floor(temp / 10);           // By default returns floating point
}

console.log(`Sum of digits of ${num} is ${sum}`);


