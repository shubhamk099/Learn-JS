
const userEmail = "mail@shubham.com";

if(userEmail){
    console.log("got user email");
}
else{
    console.log("don't have user email");
}


// Falsy values : false, "", 0, -0, BigInt 0n, null, undefined, NaN 
// Truthy values : "0", 'false', " ", [], function(){}


let myArray = [];

if(myArray.length === 0){
    console.log("Array is empty");
}
else{
    console.log("Array is not empty");
}

let myObj = {};

if(Object.keys(myArray).length === 0){
    console.log("Object is empty");
}
else{
    console.log("Object is not empty");
}

// false == 0 : true
// false == '' : true
// 0 == '' : true

// Nullish Coalescing Operator (??) : null undefined