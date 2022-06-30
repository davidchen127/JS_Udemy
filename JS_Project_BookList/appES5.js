// ES5 version

// Book constructor
function Book(title, author, isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}

// UI constructor
function UI(){

    // Add book to UI
}
UI.prototype.addBookToList=function(book){
    const list=document.getElementById('book-list');

    // Create tr element (table row)
    const row=document.createElement('tr');
    // Insert columns
    row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
}

UI.prototype.deleteBook=target=>{
    if(target.className==='delete'){
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields=function(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
}

UI.prototype.showAlert=function(msg,className){
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
    ui.deleteBook(e.target);
    ui.showAlert('Book deleted','error');
    
    e.preventDefault();
})