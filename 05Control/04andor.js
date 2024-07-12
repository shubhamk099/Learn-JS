
const userLoggedIn= true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Logged In Succesfully");
}