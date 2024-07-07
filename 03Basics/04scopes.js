
function one(){
    const username = "shubham";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}

one();


if(true){
    const username = "shubham";
    if(username==="shubham"){
        const website = "youtube";
        console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);


console.log(addOne(5));        // Method1 to make functions, can make function call before the function declaration
function addOne(num){
    return (num+1);
}



console.log(addTwo(6));          // ERROR
const addTwo = function(num){   // Method2 to make functions, cannot make function call before the function declaration
    return (num+2);
}

