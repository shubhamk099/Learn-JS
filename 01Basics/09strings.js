
const name = "Shubham";
const repoCount = 5;

console.log(name + repoCount + "Value");

console.log(`My name is ${name} and i have ${repoCount} repos`);         // string interpolation


const myName = new String("Shubham");            // In heap

console.log(myName[0]);
console.log(myName.__proto__);

console.log(myName.length);                      // length is a property, not a method
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

console.log(myName.charAt(3));
console.log(myName.indexOf('h'));

const newStr = myName.substring(0,4);            // [0,1,2,3]
console.log(newStr);

const slicedStr = myName.slice(-7,6);            // Before 6 [-7,6)
console.log(slicedStr);

// ['S','h','u','b','h','a','m']
// [0 , 1 , 2 , 3 , 4 , 5 , 6]
// [-7, -6, -5, -4, -3, -2, -1]

let emailId = "      shubhamk09@gmail.com    ";
emailId = emailId.trim();
console.log(emailId);

let url = "https://shubham.com/shubham%20gupta";
url = url.replace("%20","-");
console.log(url);

console.log(url.includes("shubham"));               // true


const aSentence = "a quick brown fox jumps over a lazy dog";
const splittedSentence = aSentence.split(" ");      // " " is splitter
console.log(splittedSentence);