const createList = (title, subtitle, text) => {
    const listContainer = document.createElement('div');
    
    const textHTML = text
    .map((textItem) => `<li>${textItem}</li>`)
    
    
    const articleHTML = 
    <h1>${title}</h1>
    <h3>${subtitle}</h3>
    <ul>
        ${textHTML}
    </ul>

    listContainer.innerHTML = articleHTML; 

    return listContainer;
};

const listElement = createList('Iphone 12', 'Apple', ['Best camera', 'Fast memory', 'Apple A12 Processor']);

document.body.append(listElement);