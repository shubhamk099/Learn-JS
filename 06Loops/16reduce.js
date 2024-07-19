
const myNums = [1,2,3,4,5];

const initialValue = 0;

const myTotal = myNums.reduce(function (accumulator,currentValue) {
    return accumulator+currentValue;
},initialValue);

console.log(myTotal);

const totalSum = myNums.reduce( (accumulator,currentValue)=> accumulator+currentValue, initialValue);

console.log(totalSum);