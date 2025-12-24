const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!
// 1. Update Existing Element
// We use getElementById to find the header with that specific ID
const bookStoreTitle = document.getElementById('header');

// Now we change the text to the name inside the bookStore object
bookStoreTitle.textContent = bookStore.name;


// 2. Create New Elements
// First, find the <ul> where all the books should live
const bookList = document.getElementById('book-list');

// We use a simple loop to go through each book in the list
for (let i = 0; i < bookStore.books.length; i++) {
    // This variable helps us talk about the specific book we are on
    const currentBook = bookStore.books[i];

    // Create the 'li' that holds everything for one book
    const bookContainer = document.createElement('li');

    // Create the 'h3' for the title and set its text
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = currentBook.title;

    // Create the 'p' for the author and set its text
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = currentBook.author;

    // Create the 'img' and set its src attribute
    const bookImage = document.createElement('img');
    bookImage.src = currentBook.imageUrl;

    // Now we put the title, author, and image INSIDE the bookContainer (li)
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    // Finally, we put the whole bookContainer into the bookList (ul)
    bookList.appendChild(bookContainer);
}


// 3. Bonus Challenge: Delete Element
// We find that placeholder element from the HTML
const elementToDelete = document.getElementById('delete-this');

// And tell it to remove itself from the page!
elementToDelete.remove();