
const marvalHeros = ["Spiderman","Ironman","Thor"];
console.log(marvalHeros);

const dcHeros = ["Flash","Superman","Batman"];
console.log(dcHeros);

//marvalHeros.push(dcHeros);       // It will take dcHeros as input in arrray
console.log(marvalHeros);

const allHeros = marvalHeros.concat(dcHeros);      // This will concatinate both arrays and returns it
console.log(allHeros);

const allNewHeros = [...marvalHeros, ...dcHeros];    // Spread operator
console.log(allNewHeros);

const values = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13]]];
const realValues = values.flat(Infinity);           // returns single array, take depth as argument
console.log(realValues);

console.log(Array.isArray("Shubham"));              // false
console.log(Array.isArray([1,2,3,4]));              // true

console.log(Array.from("Shubham"));                 // creates an array with each character
console.log(Array.from({name: "Shubham"}));      // bydefault returns empty object, for object input

let num1 = 100;
let num2 = 200;
let num3 = 300;
console.log(Array.of(num1,num2,num3));          // creates an array with given elements