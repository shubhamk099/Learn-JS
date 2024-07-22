// Basic comparisions
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

/*
The operators in JavaScript performs type coercion, meaning it converts the values to a common type before making the comparison.
*/
// string converted into number
console.log("2" > 1);
console.log("02" < 1);

// In, JavaScript == and <,> operations are performed differently
// For (>, <, >=, <=) comparisons 'null' is converted to 0;
// For == comparison 'null' is not converted to 0, and is loosely equal to 'undefined'
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


// undefined == 0 is false because undefined is only loosely equal to null.
// Comparisons (>, <, >=, <=) involving 'undefined' and a number always result in false because undefined is converted to NaN, and comparisons with NaN always return false.
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === check both data type and value
console.log("2"===2);

// NaN is not equal to anything, including itself
console.log(NaN==NaN);

// Method to check NaN
console.log(isNaN(NaN));

/*
According to the ECMAScript specification, undefined and null are considered equal when using the == operator, even though they are different types.

--> undefined is a value that represents the absence of a value or an uninitialized variable.

--> null is a value that represents the intentional absence of any object value.

*/
console.log(undefined==null);  // true

console.log(undefined===null); // false

