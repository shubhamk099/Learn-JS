
/* We can create objects by two ways : 
    1. Object Literals
    2. Object using constructor          (Singleton)
*/

const mySym = Symbol("I am a symbol");

const myUser = {
    name: "Shubham",
    "full-name": "Shubham Kumar",
    age: 23,
    [mySym]: "I am inside object",
    email: "shubhamkumar84@mail.com",
    location: "Ranchi",
    isLoggedIn: false,
    lastActivity: ["Monday","Tuesday","Friday"]
};

console.log(myUser);
console.log(myUser.email);
console.log(myUser["email"]);
console.log(myUser["full-name"]);
console.log(myUser[mySym]);

myUser.email = "shubhamkumar938@microsoft.com";
console.log(myUser);
// Object.freeze(myUser);
myUser.email = "shubhamkumar938@google.com";
console.log(myUser);

myUser.greeting1 = function(){
    console.log("Hello from function");
}

myUser.greeting2 = function(){
    console.log(`Hello,${this.name}`);
}

myUser.greeting1();
myUser.greeting2();
console.log(myUser.greeting);