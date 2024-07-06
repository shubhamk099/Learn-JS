
// Objects using constructor (singleton)

// const tinderUser = new Object(); 

const tinderUser = {};
tinderUser.id = "344hsvb";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Shubham",
            lastName: "kumar"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {
    name: "Shubham Kumar",
    age: 23,
};

const obj2 = {
    email: "shubham@ikgmail.com",
    location: "Ranchi"
};

//const obj3 = Object.assign(obj1,obj2);        // (target,source), obj1 will be modified
const obj4 = Object.assign({},obj1,obj2);      // (target,source,source), obj1 will not be modified

console.log(obj1);
// console.log(obj3);
console.log(obj4);

const obj5 = {...obj1,...obj2};              // Using spread operator
console.log(obj5);

const users = [                     // Objects in an Array
    {
        id: 4637,
        email: "shubham@gkmail.com"
    },
    {
        id: 3883,
        email: "jay@proton.mail"
    },
    {
        if: 9373,
        email: "markesh@yahoo.com"
    }
]

console.log(users[1].email); 

console.log(tinderUser);

console.log(Object.keys(tinderUser));         // Returns an array of object keys
console.log(Object.values(tinderUser));       // Retuns an array of object values
console.log(Object.entries(tinderUser));      // Returns array of arrays of [key,value]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));      // checks if a property(key) exists in an object or not