const submit = document.getElementById('submit');
const booksContainer = document.getElementById('books-container');
const titleBook = document.getElementById('title');
const authorBook = document.getElementById('author');
const radioButton = document.querySelectorAll('input[name="read"]');

let myLibrary = [];
let index = 0;

function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    radioButton.forEach(element => {
        if (element.checked) {
            readStatus = element.value;
            title = titleBook.value;
            author = authorBook.value;
        }

    });
    
    const newBook = new Book(title, author, readStatus);
    myLibrary.push(newBook);
    console.log(myLibrary);
};

submit.addEventListener('click', () => {
    addBookToLibrary();
    const row = document.createElement('div');
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p');
    const pRead = document.createElement('p');
    const btnContainer = document.createElement('div');
    const StatusBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Book';
    StatusBtn.textContent = 'Change Read Status';
    btnContainer.classList.add('container-button');
    StatusBtn.classList.add('status-button');
    deleteBtn.classList.add('status-button');
    deleteBtn.setAttribute('id', 'remove');
    pTitle.textContent = `Title: ${myLibrary[index].title}`;
    pAuthor.textContent = `Author: ${myLibrary[index].author}`;
    pRead.textContent = `Read the book: ${myLibrary[index].readStatus}`;
    booksContainer.appendChild(row);
    row.classList.add('row');
    row.appendChild(pTitle);
    row.appendChild(pAuthor);
    row.appendChild(pRead);
    btnContainer.appendChild(StatusBtn);
    btnContainer.appendChild(deleteBtn);
    row.appendChild(btnContainer);
    StatusBtn.addEventListener('click', ChangeReadStatus);

    const removeBtn = document.querySelectorAll('#remove');
    removeBtn.forEach(button => {
        button.addEventListener('click', deleteBook);
    });

    function deleteBook(e) {
        const actualBook = e.target.parentNode.parentNode;
        booksContainer.removeChild(actualBook);
    };

    function ChangeReadStatus() {
        if (myLibrary[index -1].readStatus === 'yes') {
            myLibrary[index - 1].readStatus = 'no';
            pRead.textContent = `Read the book: ${myLibrary[index - 1].readStatus}`;
        } else {
            myLibrary[index - 1].readStatus = 'yes';
            pRead.textContent = `Read the book: ${myLibrary[index - 1].readStatus}`;
        };
    };
    index += 1;
});
