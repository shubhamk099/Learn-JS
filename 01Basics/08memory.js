
// Stack(primitive type), Head(reference type)

let myname = "Shubham Kumar";
let anotherName = myname;               // value will be copied
anotherName = "Sonu";

console.log(myname);                   // Both are different
console.log(anotherName);

let userOne = {
    email: "shubhamkkumar9797@gmail.com",
    phno : "7050459310",
};

let userTwo = userOne;                 // userOne reference will be given to userTwo

userTwo.email = "shubhamgtr01.proton.me";

console.log(userOne);                  // Both will be same
console.log(userTwo);