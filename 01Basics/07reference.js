
// Primitive Type

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference Type (Non-Primitive Type)

// Arrays, Object, Functions

// JavaScript is a dynamically typed language
// Which means we don't need to specify types
const score = 100;
const scoreValue = 100.4;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id1 = Symbol("123");           // Both will be different, symbol gives uniquie results
const id2 = Symbol("123");

console.log(id1===id2);               // false

const bigNumber = 3588263687n;         // BigInt Type


const fruits = ["apple","mango","banana","grapes"];       // Array

let student = {                                       // Object
    name: "Shubham Kumar",                                  
    age: 23,
};

const printHello = function(){                      // function
    console.log("Hello from function !");
} 

printHello();

console.log(typeof printHello);             // function (object), it is an object
console.log(typeof id1);                    // symbol
console.log(typeof bigNumber)               // bigint
console.log(typeof fruits);                 // object
console.log(typeof student);                // object
console.log(typeof null);                    // object
console.log(typeof undefined);               // undefined


// arrays are special type of object in JS