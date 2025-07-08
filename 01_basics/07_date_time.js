let mydate = new Date();

// console.log(mydate); // Current date and time O/P: 2025-07-08T14:15:57.772Z 
// console.log(mydate.toString()); // Converts to string O/P: Tue Jul 08 2025 19:45:57 GMT+0530 (India Standard Time) BETTER TO USE THIS
// console.log(mydate.toDateString);
// console.log(mydate.toJSON);
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toString());
// console.log(mydate.toUTCString);
// console.log(typeof mydate); // O/P: object

let mynewdate = new Date("01-14-2023")
// console.log(mynewdate.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mynewdate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 2);

// console.log(newDate.toLocaleString('default', {
//     weekday: "long",
// }))