const authorize = () => {
    let userPassword;
    let userName;
    let userSurname;
    do {
        userName = prompt('Имя') 
            if (!userName) {
                alert('Введите имя');
            continue
            };
        userSurname = prompt('Фамилия') 
        if (!userSurname) {
            alert('Введите фамилию');
        continue
        };
            userPassword = prompt('Пароль')
            const lengthUserPassword = userPassword.length;
                if (lengthUserPassword < 6) {
                alert('Введите пароль');
            continue
            } else {
                let lowerCaseName = userName.toLowerCase();
                let firstLetterName = lowerCaseName.slice(0, 1);
                let upperFirstLetterName = firstLetterName.toUpperCase();
                let lastLetterName = lowerCaseName.slice(1);
                let newUserName = `${upperFirstLetterName}${lastLetterName}`;
                let lowerCaseSurname = userSurname.toLowerCase();
                let firstLetterSurname = lowerCaseSurname.slice(0, 1);
                let upperFirstLetterSurname = firstLetterSurname.toUpperCase();
                let lastLetterSurname = lowerCaseSurname.slice(1);
                let newUserSurname = `${upperFirstLetterSurname}${lastLetterSurname}`
                alert(`'Здравтсвуйте' ${newUserName} ${newUserSurname}`);
            continue
            };
            // break;
    }while(true)   
}
authorize()


// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; }
  
//   result = getRandomIntInclusive(5, 10);
//   console.log(result)
