
let myDate = new Date();
console.log(typeof myDate);
console.log(myDate);

console.log(myDate.toString());                      // Date(detail) + Time + TimeZone
console.log(myDate.toDateString());                  // Date(detail)
console.log(myDate.toTimeString());                  // Time + TimeZone

console.log(myDate.toLocaleString());                // Date + Time
console.log(myDate.toLocaleDateString());            // Date
console.log(myDate.toLocaleTimeString());            // Time

console.log(myDate.toISOString());
console.log(myDate.toJSON());

let myCreatedDate1 = new Date(2023,0,23);            // YYYY,MM,DD
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date(2024,7,3,10,30,45);    //(YYYY,MM,DD) ,(HH,MM,SS)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14");        // YYYY-MM-DD
console.log(myCreatedDate3.toDateString());

let myCreatedDate4 = new Date("03-08-2000");        // DD-MM-YYYY
console.log(myCreatedDate4.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);                 // Date & Time in miliseconds (Always compare in miliseconds)
console.log(myCreatedDate1.getTime());    // Date & Time in miliseconds

console.log(Math.floor(Date.now()/1000));   // To convert in seconds

let newDate = new Date();
console.log(newDate.getTime());
console.log(newDate.getDate());
console.log(newDate.getDay());                // Weekday in numbers
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());


newDate.toLocaleString("default",{
    weekday: "long",
    timeZone: ""
})