// const LOGIN = 'ADMIN';
// const PASSWORD = '1q2w3e';

// const authorize = () => {
//     let userPassword;
//     let userLogin;
//     do {
//         userLogin = prompt('Логин') 
//             if (!userLogin) {
//                 alert('Введите логин');
//             continue
//             };
//             userPassword = prompt('Пароль') 
//             if (!userLogin) {
//                 alert('Введите пароль');
//             continue
//             };
//             if (userPassword !== PASSWORD || userLogin !== LOGIN) {
//                 alert('Данные не верны');
//             continue
//             };
//             break;
//     }while(true)
//     alert('Welcome!')
// }
// authorize()


// const LOGIN = 'ADMIN';
// const PASSWORD = '1q2w3e';

// const authorize = () => {
//     let userPassword;
//     let userLogin;
//     let isAuthSuccess = false;

//     do {
//         userLogin = prompt('Логин:');
//             if (!userLogin) {
//                     alert('Введите логин');
//                     continue;
//                 }
            
//         userPassword = prompt('Пароль:'); 
//             if (!userLogin) {
//                     alert('Введите пароль');
//                     continue;
//                 }
//             if (userLogin === LOGIN && userPassword === PASSWORD) {
//                 isAuthSuccess = true;
//                 } else {
//                     alert('Данные не верны')
//                 };      
//         } while(!isAuthSuccess); 
//     alert('Welcome!');
// };
// authorize()

const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';

const authorize = () => {
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;
    let attemptsLeft = 2;
    let i = 0;
    do {
        userLogin = prompt('Логин:');
            if (!userLogin) {
                    alert('Введите логин');
                    continue;
                }
            
        userPassword = prompt('Пароль:'); 
            if (!userLogin) {
                    alert('Введите пароль');
                    continue;
                }
            if (userLogin === LOGIN && userPassword === PASSWORD) {
                isAuthSuccess = true;
                alert('Welcome!');
                } 
                else if (attemptsLeft > i) {
                alert(`Данные не верны у вас осталось ${attemptsLeft - i} попыток`)
                    i++
                } else { 
                    alert('Попытки закончились');
                    break;
                }      
        } while(!isAuthSuccess);
};
authorize()


    