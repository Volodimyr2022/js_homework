// const numbers = [1, 2, -10, -2, 7];
// const numbersToBool = numbers.map((number) => {    
//     if (number > 0) {
//         return true
//     }
//     return false
// });
// console.log(numbersToBool);

// const users = [
//     {
//       name: 'Sam',
//       role: 'admin',
//       age: 25,
//     },
//       {
//       name: 'Peter',
//       role: 'admin',
//       age: 16,
//     },
//       {
//       name: 'Pablo',
//       role: 'admin',
//       age: 32,
//     },
//       {
//       name: 'Enrico',
//       role: 'client',
//       age: 43,
//     },
//       {
//       name: 'Mary',
//       role: 'client',
//       age: 34,
//     },
//       {
//       name: 'Katerine',
//       role: 'guest',
//       age: 17,
//     },
//   ]

// const adult = users.filter((userData) => userData.age > 18)

// console.log(adult)

//   const adultAdmins = yourFunction(users);

const numbers = [1, 10, 17, 24, 45];
const middleNumber = numbers.reduce((sum, current) => sum + current) / numbers.length;
console.log(middleNumber);
console.log(numbers)