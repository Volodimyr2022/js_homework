const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "Фицджеральд", name: "Великий Гетсби", isReading: false },
  { id: 2, author: "Толстой", name: "Анна Каренина", isReading: false },
  { id: 3, author: "Оруел", name: "1984", isReading: false },
  { id: 4, author: "Сервантес", name: "Дон Кихот", isReading: false },
  {
    id: 5,
    author: "Достоевские",
    name: "Преступление и наказание",
    isReading: false,
  },
];
function library() {
    let action = prompt('Action? take - взять книгу; return - вернуть книгу; add - добавить книгу');

    if(action === null) {
        alert('Bye!');

        return;
    };

    action = action.toLowerCase().trim()
    
    switch(action) {
        case 'take':
            takeBook()
            break;
            case 'return':
                returnBook()
                break;
                case 'add':
                    addBook()
                    break;
                    default:
                        alert('No action')
    }
};

const takeBook = () => {
    console.log('take');

    const availableBooksNames = books
    .filter((book) => !book.isReading)
    .map((book) => ` -${book.name}`)
    .join('\n ')

    let desiredBookName = prompt(`Enter book name: \n${availableBooksNames}`);

if(!desiredBookName) {
    alert('No book name');

    return;
}

desiredBookName = desiredBookName.trim().toLowerCase();

const desiredBook = books.find((book) => {
    return book.name.toLowerCase() === desiredBookName;
});

if (!desiredBook) {
    alert('No book with this name');

    return;
}

if (desiredBook.isReading) {
    alert('Sorry. This book is reading by someone else.');

    return;
}

desiredBook.isReading = true;

alert(`Thank. Your book is id${desiredBook.id}`)

};


const returnBook = () => {
    console.log('return')
        const returningBookId = Number(prompt('Enter book id'))

    if (!returningBookId) {
        alert('No book id');
    
        return;
    } 

    const currentBook = books.find((book) => book.id === returningBookId);

    if(!currentBook) {
        alert('Invalid book id');

        return;
    }
    
    if(!currentBook.isReading) {
        alert('This book is not reading now');

        return
    }

    currentBook.isReading = false;

    alert(`Thanks come again. Do your like '${currentBook.name}'`)
};


const addBook = () => {
    console.log('add');

    const name = prompt('Book name');
    const author = prompt('Book Author');

    const newBook = {
        name,
        author,
        isReading: false,
        id: generateBookId(),
    };

    console.log('newBook', newBook);
    books.push(newBook);

alert(`Book was added! Library id: ${newBook.id} `)
};

function generateBookId () {
    let isBookWithIdExists = true;
    let generatedId;

    do {
        generatedId = Math.ceil(Math.random() * 1000);
        isBookWithIdExists = Boolean( 
        books.find((book) => book.id === generateBookId)
        );
    }while(isBookWithIdExists);
    return generatedId
};

console.log(books);


