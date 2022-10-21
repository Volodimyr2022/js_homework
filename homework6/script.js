

let userPassword;
let userName;
let userLastName;
const upperCaseString = (userString) => {
const firstSymbolString = (userString[0]).toUpperCase();
const symbolString = (userString.slice(1)).toLowerCase();
return firstSymbolString + symbolString;
};


const userRegistrationName = () => {
  let userName 
  do {
      userName = prompt('Укажите Ваше Имя'); 
          if (!userName) {
              alert('В Имени должен быть хтоя бы 1 символ');
          } else {
            break
          }
    } while(true);
    const upperCaseName = upperCaseString(userName);
    return upperCaseName;
  }; 
  const resName = userRegistrationName();
  //   console.log(resName);

const userRegistrationLastName = () => { 
  let userLastName       
  do {   
     userLastName = prompt('Укажите Вашу Фамилию'); 
      if (!userLastName) {
          alert('В Фамилии должен быть хтоя бы 1 символ');
      }else{
        break
      }
      }while(true);
      const upperCaseLastName = upperCaseString(userLastName);
      return upperCaseLastName;
    };
    const resLastName = userRegistrationLastName();
       console.log(resLastName);

const userRegistrationPassword = () => {
  let userPassword
  do {
    userPassword = prompt('Укажите пароль (длинной более 6 символов которые написаны в разных регистрах)')
    if(!userPassword || userPassword.length < 6) {
      alert('Пароль должен содержать не менее 6 символов')
    }else{
      if(!isNaN(userPassword) || userPassword.toLowerCase() === userPassword || (userPassword.toUpperCase() === userPassword)) {
        alert('Пароль должен содержать символы записанные в разных регистрах')
      }else{
        alert('Регистрация прошла успешно')
        break
      }
    }
  }while(true);
  return userPassword
}
const resParol = userRegistrationPassword();
console.log(resParol) 





// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; }
  
//   result = getRandomIntInclusive(1, 100);
//   console.log(result)

