
const myArr = [1,2,3,4,5];
console.log(myArr);
console.log(myArr[3]);

const anotherArray = new Array("Hello","Hey","Hi");
console.log(anotherArray);
console.log(anotherArray[1]);

myArr.push(6);                      // add elements from back
myArr.push(7);
console.log(myArr);

myArr.pop();
console.log(myArr.pop());           // delete last element and returns it.
console.log(myArr);

myArr.unshift(10);                  // add element from front
console.log(myArr);

myArr.shift();                      // delete first element and returns it.
console.log(myArr.shift());         
console.log(myArr);

console.log(myArr.includes(4));
console.log(myArr.indexOf(6));

const newArr = myArr.join();       // converts in a string
console.log(newArr);

let testArr = [1,2,3,4,5,6,7,8];

console.log(testArr.slice(1,4));     // Will not effect the original array [1,4)
console.log(testArr);

console.log(testArr.splice(1,4));     // Will effect the original array [1,4]
console.log(testArr);