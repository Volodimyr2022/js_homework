const BASE_URL = 'https://ipapi.co/json';
const BASE_URL_FLAG = 'https://restcountries.com/v2/name';
const preloader = document.getElementById('preloader');
const cardCont =document.getElementById('container');

const showPreloader = (show) => {
    if(show === true){
        preloader.style.display = 'block'
    }else{
        preloader.style.display = 'none'
    }
}

// Эта функция  создаёт элемент (контейнер) помещает в него картинку img флага присваивает значение атрибуту scr и класс картинке.
// А затем возвращает готовый div. 
const renderFlag = (flag) => {
    let div = document.createElement('div')

    let imgFlag = document.createElement('img')
    imgFlag.setAttribute('src', flag)
    imgFlag.classList.add('flag-cont')

    div.append(imgFlag)

    return(div)
}

const getCountryFlag = async (place, url) => {
    let {country_name: country} = place
    console.log(country)
// Здесь мы из place полученного на строке 95 (вот здесь я сомневаюсь и прошу подтвердить или опровергнуть мои предположения)
// путём деструкткризации достаём значение из country_name и разименовываем в country. Это значение нужно для того чтобы 
// получить вторую часть end point для fetch метода который мы используем для получения флага. Прервая часть придёт из 
// аргумента BASE_URL_FLAG переданного при вызове getCountryFlag на строке 100.  
    try{
        let response = await fetch(`${url}/${country}`);
        console.log(response)
// Здесь мы получили ответ сервера в виде служебного объекта типа Response в котором хранится информация о запросе.
        if(response.status === 200){
            let flag = await response.json();
            console.log(flag)
// Здесь мы с сайта restcountries.com получили объект со свойствами и нас интересует ключ flag со значением 
//  пути к картинке флага который мы дложны положить в атрибут src функции renderFlag.
            let flagSrc = renderFlag(flag[0].flag);
            console.log(flagSrc)
// А здесь мы передаём в функцию renderFlag значение кторое лежит по нулевому индексу в ключе flag (что для меня не совсем
//     понятно потому что flag не массив) и получаем полноценный div с картинкой внутри.
            renderCountryAttribute(place, flagSrc)
// Вызываем функцию которая отобразит на экране нужную информацию передав в качестве аргументов обьект place который в самой функции на строке 61
// будет деструктуризован и собственно div в котором находится картинка флага.
        }else{
            throw new Error(`Произошла ошибка\n
                            Код ошибки: ${response.status}`)
        }
    }catch (error){
        let errText = error.message
        alert(errText)
    }
}

const renderCountryAttribute = ({country_name: country, country_capital: capital, currency}, flag) => {
// Здесь мы создаём функцию которая в нужном нам виде представит элементы на экране. Для этого первый параметр мы
//  деструктуризовали из place полученного на строке 95 и разименовали ключи в удобные для нас названия.    
    let card = document.createElement('div')
    card.classList.add('card')

    let countryText = document.createElement('h1')
    countryText.innerText = country
    countryText.classList.add('country-text')

    let capitalText = document.createElement('h2')
    capitalText.innerText = capital
    capitalText.classList.add('capital-text')

    let currencyText = document.createElement('p')
    currencyText.innerText = currency
    currencyText.classList.add('currency-text')

    showPreloader(false);

    card.append(countryText, capitalText, currencyText, flag)

    cardCont.append(card)  
}

const getUserIpAddress = async (url) => {

    showPreloader(true);

    try{
        let response = await fetch(url)
        console.log(response)
// Здесь мы получили ответ сервера в виде служебного объекта типа Response в котором хранится информация о запросе.
        if(response.status === 200){
            let place = await response.json()
            console.log(place)
// Здесь мы с сайта ipapi.co получили объект с информацией о стране которой принадлежит текущий IP adress пользователя.
// Здесь для нас критично важно знать наличие нужных нам свойств и правильное написание пар ключ значение для 
// дальнейшего обращения к этим свойствам. Именно их мы будем использовать в функции renderCountryAttribute. 
            getCountryFlag(place, BASE_URL_FLAG)
// Вызываем функцию уже зная страну в котрой находится пользователь и получаем div с картинкой флага его страны.
        } else {
            throw new Error(`Произошла ошибка\n
            Kод ошибки: ${response.status}`)
        }
    } catch (error){
        let errText = error.message
        alert(errText)
    }
}

getUserIpAddress(BASE_URL)


