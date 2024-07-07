
const user = {
    username: "shubhamkkumar",
    price: 750,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);              // refers to the current context
    }
}

user.welcomeMessage();
user.username = "samkkumar";
user.welcomeMessage();

console.log(this);              // In node environmnet, global context is an empty object
                                // but, in browser, global context is 'Window' object


function chai1(){
    const username = "shubhamkkumar";
    console.log(this.username);                 // 'this' only works in objects not in functions
}

chai1();

const chai2 = function(){
    const username = "shubhamkkumar";
    console.log(this.username);                // hear also, 'this' will not work
}

chai2();

const chai3 = () => {
    const username = "shubhamkkumar";
    console.log(this.username);                // hear also, 'this' will not work
}

chai3();


const addNumbers1 = (num1,num2) => {
    return (num1+num2);                             // Explicit return
}

console.log(addNumbers1(4,5));

const addNumbers2 = (num1,num2) => (num1+num2);     // Implicit return, in single line

console.log(addNumbers2(4,5));


const returnObject = () => ({username: "shubhamkkumar",email: "shubham@mail.com"});   // return an object in arrow function

console.log(returnObject()); 