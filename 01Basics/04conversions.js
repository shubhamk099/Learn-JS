
let score = true;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);   // converted into number
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* 
    In Number() : 
    
    "33" --> 33
    "33abc" --> NaN
    "shubbham" --> NaN
    true -> 1, false ->0
    null -> 0
    undefined -> NaN
*/

let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/*
    In Boolean() : 

    By default value -> false
    numbers -> true
    "shubham" -> true
    "" -> false
    1 -> true, 0 -> false
    null, undefined -> false
*/

let someNumber = undefined;
let numberInString = String(someNumber);
console.log(typeof numberInString);
console.log(numberInString);


/*
    In String() : 

    true, false, null, undefined -> "true", "false", "null", "undefined"
 */