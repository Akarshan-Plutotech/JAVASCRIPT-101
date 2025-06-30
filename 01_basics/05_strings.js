const name = "Meow mOEW"; // String
let age = 25; // Number
// console.log(name);

// console.log('Hello my zame is ${name} nigga lulu and I am ${age}. YAY!');

const GameName = String ('Akarshan')

// console.log(GameName[0]); // Postion of my name 'Akarshan'
// console.log(GameName[5]); // Postion assigned to my name 'Akarshan'
// console.log(GameName.length); // how many lenghths
// console.log(GameName.toUpperCase()); // All becomes Upper Case
// console.log(GameName.charAt(3)); // Same as 1 & 2 i belive, Yes, SAME
// // console.log(GameName.trim():[5]); //testing
// console.log(GameName.indexOf('r')); // to know where exatly that character is, A=0,K=1...r=3..n=7
// console.log(GameName.indexOf('a')); // just testing cus i've many A's in my name

// const Coolname =  GameName.substring(0, 6) // This gives name as you can see. PS: Doesnt inclue last value, 6 here.
// console.log(Coolname);

const Namdu = "      Akarshan     " //when i will take input from users they might leave spaces mistekely so i gotta fix dat. OKAY????? so i need em trim
// console.log(Namdu); // w/o trim
// console.log(Namdu.trim()); // with trim, it removes spaces from both sides
// console.log(Namdu.trim().length); // length after trim, so it will be


const CoolName = GameName.replace('Akarshan', 'Akarsh') // This will replace Akarshan with Akarsh
console.log(CoolName); // Akarsh

///////////////////////////////////FOR URLS//////////////////////////////


const url="https//:www.Akarshan%20Pandey.com"

console.log(url.replace('%20', '-')); // This will replace %20 with -

console.log(url.includes('Akarshan')) // This will check if Akarshan is in the url