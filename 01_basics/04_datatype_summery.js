// PRIMITIVE DATA TYPES
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol (ES6)
// 7. BigInt (ES11)

// REFRENCE DATA TYPES
// 1. Object - MASTER THIS BRUH
// 2. Array
// 3. Function

const score = 100; // Number
const scoreValue = 100.5; // Number with decimal

const isLoggedIn = true; // Boolean


// STACK - PRIMITIVE DATA TYPES`
// HEAP - REFERENCE DATA TYPES

let userOne = {
    email: "userone@example.com",
    name: "User One",
    age: 25
};

let userTwo = userOne; // Reference to the same object in memory

userTwo.email = "usertwo@example.com";

console.log(userOne.email); // Output:
console.log(userTwo.email); // Output:
