
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => num + 10);
console.log(newNums);

const ourNums = myNums
    .map( (num)=> num*10)
    .map( (num)=> num+1)
    .filter( (num)=> num>=40);               // only true values are returned in filters

console.log(ourNums);

const testNums = myNums.map( (num)=> {
    if(num>4){
        return num;
    }
});

console.log(testNums);