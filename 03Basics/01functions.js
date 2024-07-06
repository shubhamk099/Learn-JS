

function printLetters(){
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

console.log(printLetters);                      // Function reference
printLetters();                                 // Function call


function sumOfNumbers(num1,num2){              // Parameters
    return (num1+num2);
}

let result = sumOfNumbers(4,5);                // Arguments
console.log("Sum of numbers is : ",result);

function loginUserMessage(username = "NONE"){
    if(!username){
        return "Please enter a username";
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage());