
const score = 400;
console.log(score);

const newScore = new Number(345.59943);      // In heap (object)
console.log(newScore);

console.log(newScore.toString().length);

console.log(newScore.toFixed(2));           // round off after decimal to 2 digits

console.log(newScore.toPrecision(5));        // round off whole number to 5 digits and returns as string

const num = 1000000;
console.log(num.toLocaleString('en-IN'));    // 10,00,000

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isNaN(num));
console.log(Number.isInteger(num));
