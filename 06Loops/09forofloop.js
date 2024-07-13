
const myArr = [1,2,3,4,5,6,7,8,9];

for(const num of myArr){
    console.log(num);
}

const greeting = "Hello World!";

for(const letter of greeting){
    console.log(letter);
}

let myMap = new Map();              // maps store (key-value) unique pairs

myMap.set('IN',"India");              // IN, "India" -> syntax error hear, but not in objects
myMap.set('USA',"United States of America");
myMap.set('FR',"France");
myMap.set('IN',"India");         
myMap.set('IN',"Indonesia")      // This will overwrite value India

console.log(myMap);             // print the whole map as is it like an object

for(const key of myMap){         // returns arrays of [key,value]
    console.log(key);
}

for(const [key,value] of myMap){
    console.log(`${key} stands for ${value}`);              // seperate key and value and use it as required
}


const myObj = {
    7266: 'Spiderman',
    8366: 'GTA-V',
    9233: 'Counter Strike',
    2332: 'PUBG'
};

/*
for(const [id,game] of myObj){                        // objects are not iteratable with this for-of loop
    console.log(game);
}
*/

// single '' or "" both are considered as same