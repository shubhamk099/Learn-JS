
// Rest operator
function calculateCartPrice1(...num){        // Rest operator, whatever values comes, it converts them into an array
    return num;
}

console.log(calculateCartPrice1(200,400,500));

function calculateCartPrice2(val1,val2,...num){         // First two values will go to val1,val2 others in array num
    return num;
}

console.log(calculateCartPrice2(200,400,500,2000));


// Passing objects as arguments
const users = {
    username: "shubhamkkumar",
    email: "hello@mail.com",
};

function printUserDetails(anotherUser){
    console.log(`Username is ${anotherUser.username} and email is ${anotherUser.email}`);
}

printUserDetails(users);
printUserDetails(
    {
        username: "sonukkumar",
        email: "sonu@mail.com"
    }
)

// Passing arrays as arguments
const prices = [100,200,300,400,500];

function calculatePrice(ourPrices){
    return ourPrices[2];
}

console.log(calculatePrice(prices));
console.log(calculatePrice([200,400,600,800]));