import React from 'react';
import axios from 'axios';
import StyledButton from './styledButton';
import AddBook from './AddBook';
import EditBook from './EditBook';

class Book extends React.Component {
  constructor() {
    super();
    this.state = {
      bookData: [],
      showAddBookFlag: false,
      isEditing: false,
      newBook: '',
      editedBook: ''
    }
    this.addBook = this.addBook.bind(this);
  }
  componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
  componentDidMount(){
    const url = '../data/data.json';
    axios
      .get(url)
      .then((data)=> {
        this.setState({
          bookData: data.data.books
        })
        
      })
      .catch((err)=> {})
  }
  


   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }


   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
  addBook(){
    this.setState({
      showAddBookFlag: !this.state.showAddBookFlag
    })
  }    

  deleteBook(bookId){
      let newBookData = this.state.bookData.filter(function(book){
        if(bookId !== book.id) {
            return book;
          }     
        })
      
        this.setState({
          bookData: newBookData
        })
  }

  editBook(book){
    console.log('bookId',book);
    this.setState({
      isEditing: !this.state.isEditing,
      editedBook: book
    })
    console.log('this.state.bookData after in main book.js',this.state.bookData);
  }

  render() {
    let myBooks, AddBookComponent, editBookComponent;
    if(this.state.isEditing){
        editBookComponent = (
          <EditBook bookData={this.state.bookData} editBook={this.state.editedBook}></EditBook>
        )
    }
    if(this.state.bookData){
        myBooks = this.state.bookData.map((book, i) => {
          return (
            <div key={book.id} className='book-row'>
              <span className='book-name'>{book.name}</span>
              <span className='book-edition'>{book.edition}</span>
              <span className='book-author'>{book.author}</span>
              <span className='book-edit'><StyledButton onClick={() => this.editBook(book)}>Edit</StyledButton></span>
              <span className='book-delete'><StyledButton onClick={() => this.deleteBook(book.id)}>Delete</StyledButton></span>
            </div>
          )
        })
    }
    if(this.state.showAddBookFlag){
      AddBookComponent = <AddBook newBookTemp={this.state.bookData} deleteBook={this.deleteBook.bind(this)}></AddBook>
     }
    return(
    <div>
        <span className='book-lib'>Book Library</span>
        <StyledButton className='add-book' onClick={this.addBook}>Add Book</StyledButton>
        <div className='book-row-wrapper'> 
          <div className='book-row book-lib-title'>
            <span className='book-name'>Book</span>
            <span className='book-edition'>Edition</span>
            <span className='book-author'>Author</span>
          </div>
          {myBooks}
          {AddBookComponent}
          {editBookComponent}
     </div>
    </div>
    );
  }
}

export default Book;