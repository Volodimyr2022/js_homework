// const sum = (a, b) => a + b;
// console.log(sum(1, 4));

// function sum (a, b) {
//     return a + b;
// };

// console.log(sum(4, 2));

let userName = prompt('Как Вас зовут?');
let userAge = prompt('Сколько Вам лет?');
function userGreeting () {
    if(userAge <= 30) {
    alert('Привет' + ' ' + userName)
     } else {
    alert('Здравствуйте' + ' ' + userName); }
};
userGreeting(userName)

// function expNumber(number, exp = 2) {
//     const result = number ** exp;
//     return result;
// };

// console.log(expNumber(2, 8));

const expNumber = (number, exp = 2) => number ** exp;
console.log(expNumber(2));