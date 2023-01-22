const BASE_URL = 'https://swapi.dev/api/people';
const idForm = document.getElementById('form')                      
const input = document.getElementById('input');
const container = document.getElementById('container');
const nameChar = document.getElementById('character');
const filmList = document.getElementById('filmList');


const renderFilmsList = (arrFilms) => {
    let nameFilms = arrFilms.map(film => film.title)
    console.log(nameFilms)
    for(let name of nameFilms){
        const filmName = document.createElement('p')       
        filmName.innerText = name;
        filmName.classList.add('film-text')
        console.log(filmName)
        filmList.append(filmName)
    }   
}

const handleButtonFilm = async ({ films }) => {

    const getFilms = films.map((film) => fetch(film))
    console.log(getFilms)
    try{
        const responses = await Promise.all(getFilms)
        console.log(responses)
        const jsonResponses = responses.map((response) => response.json());
        const result = await Promise.all(jsonResponses)
        console.log(result)
        renderFilmsList(result)

    }catch{
        alert('Error')
    }
}

const renderCharacterCard = (char) => {
    const { name } = char;
    console.log(char)
    nameChar.innerText = name;

    const filmsButton = document.createElement('button')
    filmsButton.classList.add('button')
    filmsButton.innerText = 'Фильмы'

    container.append(nameChar, filmsButton)

    filmsButton.addEventListener('click', (event) => {
        if(!event.target.hasAttribute('isActive')){
            event.target.hasAttribute('isActive', '')
            handleButtonFilm(char)
        }else{
            event.target.removeAttribute('isActive')
            event.target.nextElementSibling.remove()
        }
    })
}

const getCharacter = async (id) => {

    try{
        const response = await fetch(`${BASE_URL}/${id}`)
        console.log(response)
        if(response.status === 200){
            const character = await response.json();
            console.log(character)
            renderCharacterCard(character)
        } else {
            throw new Error(`Произошла ошибка\n
            Kод ошибки: ${response.status}`)
        }
    } catch (error){
        let errText = error.message
        alert(errText)
    }
}

const handleForm = (event) => {

    event.preventDefault()
    const { value } = input;
    console.log(value)
        getCharacter(value)
        container.firstElementChild.remove()
}

idForm.addEventListener('submit', handleForm)

// 1. В HTML я создал форму с input и кнопкой submit при этом добавил labelс подсказкой какое значение id персонажа 
// возможно и доступно;
// 2. посколько работа программы начинается с ввода значения id персонажа cоздаём обработчик событий handleForm и 
// "вешаем" его на форму (которая написана в HTML); 
// 3. на строке 82 достаём из input value (фактически то что ввёл пользователь);
// 4. и на строке 83 вызываем функцию с аргументом value;
// 5. этот аргумент попадает на место параметра id в строке 60, а затем 63;
// 6. на строке 63 получаем объект класса response;
// 7. на строке 66 получаем результат со свойствами объекта. И здесь нас по условию задачи интересует ключ name с его
// значением которое мы можем достать сразу и ключ films в котором лежит массив end point-ов который мы не можем достать 
// сразу, но можем применить метод Promise.all.
// 8. на строке 68 мы вызываем функцию renderCharacterCard с аргументом который является результатом со строки 66;
// 9. этот аргумент становится на место параметра char в строке 38, а в строке 39 мы деструктуризируем весь результат и
// достаём из него только ключ name с его значением. 
// 10. на строке 43 мы создаём кнопку и её атрибуты на строках 44 и 45;
// 11. на строке 49 "вешаем" на кнопку обработчик событий;
// 12. на строке 52 вызываем функцию handleButtonFilm c аргументом char который фактически является результатом 
// полученным на строке 66;
// 13. аргумент char попадает в функцию handleButtonFilm на строке 21 и с помощью деструктуризации из него достаётся ключ
// films, а поскольку там лежит массив end point-ов то мы отправляем get запрос и достаём свойства из films с помощью метода
// promise.all;
// 14. На 29 строке мы получим результат в виде массива со всей информацией о фильмах но нас интересует только как
// назвается ключ по которому лежит название фильма;
// 15. на строке 31 вызываем функцию renderFilmsList с аргументом result в котором собственно находится массив фильмов;
// 16. этот аргумент станет на место параметра arrFilms в функции renderFilmsList на строке 9;
// 17. на строке 10 мы создаём новый массив куда войдут только названия фильмов и ничего больше;
// 18. на строках 12-17 мы просто отображаем список фильмов на странице.

// Зачем я трачу время на описание порядка выполнения кода? Я пытаюсь понять его порядок, какую функцию за какой 
// писать,какую в какой вызывать. И теперь ВОПРОС. Есть ли общие правила построения кода и где их можно прочитать или 
// написание этих правил невозможно из-за бесконечного разнообразия случаев в программировании и то, что правильно в 
// одном случае будет фатальной ошибкой в другом. Я понимаю, что этот вопрос вызван совершенным отсутствием практики и если 
// я стану разработчиком то через какое-то время он будет вызывать у меня только улыбку, но тем не менее, сейчас это прям
// очень актуально.
