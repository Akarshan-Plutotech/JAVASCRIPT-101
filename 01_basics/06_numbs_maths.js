const Score = 100;
// console.log(`Your score is ${Score}`);

const balance = 500;
// console.log(`Your balance is ${balance}`);

const newScore = Number('100');
// console.log(newScore);

const newBalance = new Number(500);
// console.log(newBalance);

// console.log(balance.toString().length);
// console.log(balance.toString(2)); // Binary representation
// console.log(balance.toFixed(2)); // Hexadecimal representation

const newNumb = 99.596788;
// console.log(newNumb.toPrecision(3)); // 99.6
// console.log(newNumb.toPrecision(5)); // 99.597

const dollar = 5000000000;
// console.log(dollar.toLocaleString()); // US version
// console.log(dollar.toLocaleString('en-IN')); // Indian version
// console.log(dollar.toLocaleString('de-DE')); // German version


// +++++++++++++++++ Maths +++++++++++++++++

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.ceil(5.1)); // 6
// console.log(Math.floor(5.9)); // 5
// console.log(Math.round(5.5)); // 6
// console.log(Math.sqrt(25)); // 5
// console.log(Math.abs(-5)); // 5
// console.log(Math.min(5, 10, 15)); // 5
// console.log(Math.max(5, 10, 15)); // 15
// console.log(Math.random()); // Random number between 0 and 1
// console.log(Math.random() * 100); // Random number between 0 and 100
// console.log(Math.random() * 100 + 1); // Random number between 1 and 100
// console.log(Math.floor(Math.random() * 100) + 1); // Random



const num1  = 100;

// console.log(num1); // 101
// console.log(num1); // Pre-increment, now 102
// console.log(++num1); // Post-decrement, now 102);

const min = 10;
const max = 20;

// console.log(Math.random() * (max - min + 1) + min); // Random number between 10 and 20
// console.log(Math.floor(Math.random() * (max - min + 1) + min)); // Random integer between 10 and 20