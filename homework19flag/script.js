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
    try{
        let response = await fetch(`${url}/${country}`);
        console.log(response)
        if(response.status === 200){
            let flag = await response.json();
            console.log(flag)
            let flagSrc = renderFlag(flag[0].flag);
            console.log(flagSrc)
            renderCountryAttribute(place, flagSrc)
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
        if(response.status === 200){
            let place = await response.json()
            console.log(place)
            getCountryFlag(place, BASE_URL_FLAG)
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

// Порядок выполнения кода:

// 1. в функцию getUserIpAddress на строке 92 передаём аргументом end point BASE_URL;
// 2. этот аргумент попадает на место парамерта url в 71 строку кода;
// 3. в 76 строке отправляем get запрос на BASE_URL и получаем специальный объект класса Response;
// 4. в 79 строке получаем результат в виде объекта со свойствами где в паре ключ значение лежат название свойства и его значение. И именно их 
//    мы будем использовать в функции renderCountryAttribute;
// 5. в строке 81 мы вызываем функцию getCountryFlag c аргументами place (который мы только что получили) и BASE_URL_FLAG;
// 6. эти аргументы попадают на место параметров place и url в 26 строке кода;
// 7. в 27 строке кода мы деструктуризируем place достаём из него значение по ключу country_name а это Ukraine и разименовываем его (ключ) в country
// 8. в 30 строке отправляем get запрос на url который состоит из двух частей это BASE_URL_FLAG полученный из параметра url 26 строки, 
//    а туда он попал из 81 строки и country который мы получили из 27 строки и получаем специальный объект класса Response.
// 9. в 33 строке кода мы получаем результат в виде объекта в котором находится свойство flag и в нём по одноимённому ключу лежит адрес картинки;
// 10. в 35 строке кода мы получаем div с картинкой вызывав функцию renderFlag с аргументом flag[0].flag (формально это первое значение по 
//     ключу flag, а оно и есть путь к картинке "https://flagcdn.com/ua.svg");
// 10.1 механизм получения div таков:
// а) аргумент flag[0].flag попадёт на место параметра flag в 14 строке кода;
// б) а от туда он попадёт в 18 строку и создаст следующий атрибут src="https://flagcdn.com/ua.svg";
// в) в 17 строке кода будет создана картинка <img src="https://flagcdn.com/ua.svg" class="flag-cont">;
// г) в 15 строке буде создан div в котором лежит картинка;
// д) в 23 строке div будет возвращён из функции;
// 11. в 37 строке кода вызывается функция renderCountryAttribute с атрибутами (place, flagSrc). Они попадают на место параметров в функцию
// renderCountryAttribute на 48 строке. Первый атрибут place будет деструктуризирован в {country_name: country, country_capital: capital, currency},
// а на место второго flag станет div с картинкой.  

// В результате анализа материала об асинхронных функциях я обратил внимание на то, что все render функции вызываются внутри них. 
// Задачу с получением персонажей я хочу решить реализовав следующий алгоритм:
// 0. в HTML создаём контейнер куда будем ложить результат render функции
// 1. создаём асинхронную функцию для получения данных с сервера
// 2. сразу вызываем её в конце кода с нужным end point для определения работоспособности и тестирования 
// 3. делаем get запрос с параметром url и получаем объект класса Response
// 4. получаем сам обьект
// 5. смотрим название и значение свойств
// 6. пишем render функцию где в качестве первого параметра деструктуризированные ключи объекта, а второго некий контейнер куда мы будем 
// передавать внешний вид 
// 7. вызываем render функцию внутри асинхронной функции с первым аргументом это ответом сервера и вторым аргументом это контейнер который мы 
// создали в HTML.
// 8. если в render функции используются button то навешиваем на них обработчик событий
// 9. и далее если нам нужно получить следующие данные и отрендерить их мы создаём новый get запрос и вызываем render функцию уже внутри него
// фактически повторив алгоритм с пункта 1 до 8.
      
