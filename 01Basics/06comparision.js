// Basic comparisions
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

// string converted into number
console.log("2" > 1);
console.log("02" < 1);

// In, JavaScript == and <,> operations are performed differently
// For <,> and <=, >= comparisons 'null' is converted to 0;
// For == comparison 'null' is not converted to 0, and is loosely equal to 'undefined'
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === check both data type and value
console.log("2"===2);