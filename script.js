const myLibrary = [];

// general functions
//------------------

function addBookToLibrary(title, author, pageCount, read) {
    if (title === '') {
        alert('you must enter a title.');
        return;
    }
    if (author === '') {
        alert('you must enter an author.');
        return;
    }
    if (pageCount === 0) {
        alert('you must enter a non-zero value for page count.');
        return;
    }
    if (isNaN(pageCount)) {
        alert('Enter a page count using numerical digits.');
        return;
    }
    let book = new Book(title, author, pageCount, read.toLowerCase());
    myLibrary.push(book);
    return true;
}


function loopThruBooksPrimitive() {
    for (let i = 0; i < myLibrary.length; i++ ) {
        let objKeys = Object.keys(myLibrary[i]);
        for (let j = 0; j < objKeys.length; j++) {
            console.log(myLibrary[i][objKeys[j]]);
        }
    };
};

function createCard(obj, idNum) {
    let cardID = `bid${idNum}`;
    const cardDiv = document.createElement('div');
    const cardBtns = document.createElement('div');
    const cardP = document.createElement('p');
    const cardBtnRead = document.createElement('button');
    const cardBtnDel = document.createElement('button');

    cardDiv.classList.add('book-card-read');
    cardDiv.classList.add('book-card-notread');
    if (obj.read === 'read') {
        cardDiv.classList.toggle('book-card-notread')
    } else {
        cardDiv.classList.toggle('book-card-read')
    }
    cardDiv.id = cardID;
    cardBtns.classList.add('card-buttons');
    cardP.classList.add('card-p');
    cardBtnRead.classList.add('card-read-button');
    cardBtnDel.classList.add('card-delete-button');

    cardP.textContent = obj.info();
    if (obj.read === 'read') {
        cardBtnRead.textContent = 'Mark as Read';
    } else {
        cardBtnRead.textContent = 'Mark as Unread';
    }
    cardBtnDel.textContent = 'Delete Book';

    //button event listeners added to two new buttons
   
    cardBtnRead.addEventListener('click', (cardID) => {
        let cardDiv = document.querySelector('#cardID');
        
        //change class on card div
        //change button
    });

    libraryDiv.appendChild(cardDiv);
    cardDiv.appendChild(cardP);
    cardDiv.appendChild(cardBtns);
    cardBtns.appendChild(cardBtnRead);
    cardBtns.appendChild(cardBtnDel);
};

function generateLibrary () {
    for (let i = 0; i < myLibrary.length; i++) {
        createCard(myLibrary[i], i);
    }
}


// book constructor
//-----------------

function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}
Book.prototype.info = function() {
    return (`${this.title} by ${this.author}, ${this.pageCount} pages, ${this.read}.`);
}
Book.prototype.changeReadStatus = function() {
    if (this.read === 'read') this.read = 'not read';
    else this.read = 'read';
}


//loopThruBooksPrimitive();


// DOM selectors
//-----------------

//buttons
btnAddNewBook = document.querySelector('#add-new-book');
btnCancelAddNew = document.querySelector('#cancel-button');
btnSubmit = document.querySelector('#submit-button');

//input fields
fieldTitle = document.querySelector('#title-field');
fieldAuthor = document.querySelector('#author-field');
fieldPageCount = document.querySelector('#pagecount-field');
fieldRadioRead = document.querySelector('#rad-read');
fieldRadioNotRead = document.querySelector('#rad-nread');

//containers
addNewForm = document.querySelector('#new-book-form');
libraryDiv = document.querySelector('#library')


//button-listener functions
//-------------------------

function getInput() {
    let newTitle = fieldTitle.value;
    let newAuthor = fieldAuthor.value;
    let newPageCount = fieldPageCount.value;
    let readStatus = getReadStatus();
    const fieldValArray = [newTitle, newAuthor, newPageCount, readStatus]
    return fieldValArray;
}

function getReadStatus() {
    if (fieldRadioRead.checked === true) return 'read';
    else return 'not read';
}


function clearInputFields() {
    fieldTitle.value = '';
    fieldAuthor.value = '';
    fieldPageCount.value = '';
    fieldRadioRead.checked = false;
    fieldRadioNotRead.checked = true;
}


// button-listeners
//-----------------
btnAddNewBook.addEventListener('click', () => {
    if (addNewForm.style['display'] === 'none') {
        addNewForm.style['display'] = 'flex';
    }
});

btnCancelAddNew.addEventListener('click', () => {
        addNewForm.style['display'] = 'none';
});

btnSubmit.addEventListener('click', () => {
    inputValues = getInput();
    let submitSuccess = addBookToLibrary(inputValues[0], inputValues[1], Number(inputValues[2]), inputValues[3],);
    if (submitSuccess === true) clearInputFields();
    //create and display new book card
});



// test books
//-----------

addBookToLibrary('Snow Crash', 'Neal Stephenson', 400, 'read');
addBookToLibrary('Ficciones', 'Jorge Louis Borges', 100, 'read');
addBookToLibrary('Tragedy and Hope', 'Carroll Quigley', 1200, 'not read');
addBookToLibrary('The Second World War', 'Antony Beevor', 800, 'read');

generateLibrary();