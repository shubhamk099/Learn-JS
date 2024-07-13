

const programming = ["JAVA", "C++", "Python", "Ruby", "Swift", "JavaScript"];

console.log("Printing using for each loop : ")
programming.forEach(function (item) {           // function without name (callback function)
  console.log(item);
});


console.log("Printing using for each loop using arrow functions : ")
programming.forEach( (item)=> {                // using arrow function
    console.log(item);
})

console.log("Printing using for each loop with externally declared function : ")

function printMe(val){
    console.log(val);
}

programming.forEach(printMe);


programming.forEach( (item,index,arr)=> {           // parameter can have, item, index, and the whole array
    console.log(item,index,arr);
})