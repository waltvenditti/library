const myLibrary = [];

function addBookToLibrary(title, author, pageCount, read) {
    if (Number(pageCount) === NaN) {
        alert('Enter a page count using numerical digits.');
        return;
    }
    if (!(read.toLowerCase() === 'read') && !(read.toLowerCase() === 'not read')) {
        alert('enter either "read" or "not read" in prompt #4.')
        return; 
    }
    let book = new Book(title, author, Number(pageCount), read.toLowerCase());
    myLibrary.push(book);
}

function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}
Book.prototype.info = function() {
    return (`${title} by ${author}, ${pageCount} pages, ${read}.`);
}

function loopThruBooksPrimitive() {
    for (let i in myLibrary) {
        console.log(Object.keys(myLibrary[i]));
        }
    }

// test books
addBookToLibrary('Snow Crash', 'Neal Stephenson', 400, 'read');
addBookToLibrary('Ficciones', 'Jorge Louis Borges', '100', 'read');
addBookToLibrary('Tragedy and Hope', 'Carroll Quigley', 1200, 'not read');
addBookToLibrary('The Second World War', 'Antony Beevor', 800, 'read');

loopThruBooksPrimitive();