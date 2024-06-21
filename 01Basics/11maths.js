

console.log(Math);

console.log(Math.abs(-34));

console.log(Math.round(43.643));
console.log(Math.ceil(4.012));
console.log(Math.floor(4.944));

console.log(Math.sqrt(255).toFixed(2));
console.log(Math.pow(5,3));

console.log(Math.max(34,43,23));
console.log(Math.min(34,43,23));

console.log((Math.random()));            // Gives random value between (0,1);
console.log((Math.random()*10) + 1);     // Random value between (1,10)
console.log(Math.floor((Math.random()*10)+1));      // Random value from [1 to 10]


const min = 10;
const max = 20;

const randomValue = Math.floor(Math.random()*(max-min+1)+min);        // Random value between [min,max]
console.log(randomValue);