 class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
 }

 class UI{
    addBookToList(book){
        const list=document.getElementById('book-list');

        // Create tr element (table row)
        const row=document.createElement('tr');
        // Insert columns
        row.innerHTML=`
            <td class='itemTitle'>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }

    showAlert(msg,className){
        // Create a div
        const div=document.createElement('div');
        div.classList.add('alert', className);
        div.appendChild(document.createTextNode(msg));
    
        const container=document.querySelector('.container');
        const form=document.querySelector('#book-form');
        container.insertBefore(div,form);

        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    deleteBook(target){
        target.parentElement.parentElement.remove();
    }

    clearFields(){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';
    }
 }

// local storage class
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books')===null){
            books=[];
        }else{
            books=JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks(){
        const books=this.getBooks();
        books.forEach(book => {
            const ui=new UI();
            ui.addBookToList(book);          
        });
    }

    static addBook(book){
        const books=this.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }

    static removeBook(isbn){
        const books=this.getBooks();
        books.forEach((book,index)=>{
            if(book.isbn===isbn){
                books.splice(index,1);
            }
        })
        localStorage.setItem('books',JSON.stringify(books));
    }
}

// DOM load event!!!!!!!!!
document.addEventListener('DOMContentLoaded',Store.displayBooks());

 // Event listeners
document.getElementById('book-form').addEventListener('submit',
function(e){
    // Get form values
    const title=document.getElementById('title').value,
            author=document.getElementById('author').value,
            isbn=document.getElementById('isbn').value;

    // Instantiate Book
    const book=new Book(title,author,isbn);

    // Instantiate UI
    const ui=new UI();
    // Validate
    if(title===''||author===''||isbn===''){
        ui.showAlert('Please fill in all the fields','error');
    }else{
        // Add a book into list
        ui.addBookToList(book);
        // add to storage
        Store.addBook(book);
        // Clear fields
        ui.clearFields();
        // Show message after adding a book
        ui.showAlert('Book added!','success');
    }
    e.preventDefault();
})

// Event listener for dete
document.getElementById('book-list').addEventListener('click',
function(e){
    const ui=new UI();
    if(e.target.className==='delete'){
        ui.deleteBook(e.target);
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
        ui.showAlert('Book deleted','error');    
    }
    if(e.target.className==='itemTitle'){
        ui.showAlert(`You pressed on a book named ${e.target.textContent}`,'success');    
    }
        e.preventDefault();
})

// localStorage.clear()