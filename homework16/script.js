const VISITS_COUNT_KEY = 'visits'

const renderGreeting = (isInitial, visitsCount = 0) => {
    const greetingElement = document.createElement('p')
    const visitsCountElement = document.createElement('p')
    greetingElement.innerText = 'Добро пожаловать!'
    visitsCountElement.innerText = `Вы заходили ${visitsCount} раз.`

    document.body.append(greetingElement)

    if(isInitial){
        document.body.append(visitsCountElement)
    }
}


if(localStorage.getItem(VISITS_COUNT_KEY)){
    const visits = JSON.parse(localStorage.getItem('visits'))
    const updatedVisits = visits + 1;
    localStorage.setItem('visits', updatedVisits)

    renderGreeting(true, updatedVisits)
} else {
    localStorage.setItem('visits', 1)

    renderGreeting(false)
}