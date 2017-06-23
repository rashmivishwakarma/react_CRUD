import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styledButton';

class BookRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        <div key={this.props.book.id} className='book-row'>
              <span className='book-name'>{this.props.book.name}</span>
              <span className='book-edition'>{this.props.book.edition}</span>
              <span className='book-author'>{this.props.book.author}</span>
              <span className='book-edit'><StyledButton onClick={() => this.editBook(book)}>Edit</StyledButton></span>
              <span className='book-delete'><StyledButton onClick={() => this.deleteBook(this.props.book.id)}>Delete</StyledButton></span>
            </div>
    }
}

export default BookRow;