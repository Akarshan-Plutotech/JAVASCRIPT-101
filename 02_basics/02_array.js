const singers = ["Beyonce", "Nicki", "Cardi",]
const coders = ["Pablito", "Henry", "Cally"]

singers.push(coders)

// console.log(singers);
// O/P - [ 'Beyonce', 'Nicki', 'Cardi', [ 'Pablito', 'Henry', 'Cally' ] ] --here there are 4 values b,n,c and that whole bracte



const Allsingers = singers.concat(coders)
// console.log(Allsingers);
// O/P - [
//   'Beyonce',
//   'Nicki',
//   'Cardi',
//   [ 'Pablito', 'Henry', 'Cally' ],
//   'Pablito',
//   'Henry',
//   'Cally'
// ] -- Same as Push




const All_new_singers = [...singers, ...coders]
// console.log(All_new_singers);
// o/p - [
//   'Beyonce',
//   'Nicki',
//   'Cardi',
//   [ 'Pablito', 'Henry', 'Cally' ],
//   'Pablito',
//   'Henry',
//   'Cally'
// ] =====WTF IS THIS O/P



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);
// O/P == [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ] ====weird



console.log(Array.isArray("Akarshan"))
console.log(Array.from("Akarshan"))
console.log(Array.from({name: "Akarshan"})) //INTRESTIMG

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
