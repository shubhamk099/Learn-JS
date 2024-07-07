
// Immediately Invoked Function Expressions (IIFE)

// When we want to invoke a function immediately
// And we want to protect a function from global scope pollution

(function First(){
    // named iife
    console.log(`DB CONNECTED`);
})();


((name)=>{
    // unnamed iife
    console.log(`DB CONNECTED AGAIN, ${name}`);
})("Shubham");