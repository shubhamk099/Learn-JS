
const langNames = {
  js: "JavaScript",
  cpp: "C++",
  py: "Python",
  rb: "Ruby",
};

for (const key in langNames) {
  console.log(`${key} is shortcut of ${langNames[key]}`);
}

const programming = ["JAVA", "C++", "Python", "Ruby", "Swift", "JavaScript"];

for(const key in programming){
    console.log(programming[key]);    // console.log(key) will gives array key(index) values (0,1,2,3...)
}

const myMap = new Map();

myMap.set('IN',"India");              
myMap.set('USA',"United States of America");
myMap.set('FR',"France");
myMap.set('IN',"India");         
myMap.set('IN',"Indonesia")    

for(const key in myMap){
    console.log(key);                       // will not give anything, maps are not iteratable in this way
}