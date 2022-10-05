let a = Number(prompt('Введите первое число:'));
let b = Number(prompt('Введите второе число:'));

if (a > b) {
alert(`Число ${a} больше чем число ${b}`);
}
else if (a < b) {
alert(`Число ${a} меньше чем число ${b}`);
}
else if (a == b) {
alert(`Число ${a} равно числу ${b}`);
}

let a = Number(prompt('Введите первое число:'));
let b = Number(prompt('Введите второе число:'));
let operator = prompt('Укажите математическое действие (+,-,*,/)');

switch (operator) {
    case '+':
        alert( a + b );
        break;
    case '-':
        alert( a - b );
        break;
    case '*':
        alert( a * b );
        break;
    default:
    alert( a / b );
}

let userAge = Number(prompt('Сколько Вам лет?'));

if (( userAge >= 12 && userAge < 18 ) || ( userAge >= 60 && userAge <= 80 )) {
    alert('Вход только с разрешения взрослых')
} else if (userAge >= 18 && userAge < 60) {
    alert('Вход разрешён');
} else {
    alert('Вход запрещён');
}