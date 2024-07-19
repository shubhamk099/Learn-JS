
const coding = ["JAVA", "C++", "Python", "Ruby", "Swift", "JavaScript"];

const values = coding.forEach( (item)=> {
    console.log(item);
    return item;                            // not psbl to ruturn in for-each callback function
})

console.log(values); 

const marks = [45,65,33,67,32,56,98,24,58,88,76];

const toppers1 = marks.filter( (num)=> num>=80 );       // Implicit return

const toppers2 = marks.filter( (num)=> {
    return num>70;                                      // Explicit return
} )


console.log(toppers1);
console.log(toppers2);

// same thing using for each loop

const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = [];

myNums.forEach((item)=>{
    if(item>4){
        newNums.push(item);
    }
})

console.log(newNums);