import React from 'react';
import StyledButton from './styledButton';
import PropTypes from 'prop-types';

class NewAddedBook extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='book-row'>
              <span className='book-name'>{this.props.name}</span>
              <span className='book-edition'>{this.props.edition}</span>
              <span className='book-author'>{this.props.author}</span>
              {/*<span className='book-delete'><StyledButton onClick={() => this.props.deleteBook(this.props.id)}>Delete</StyledButton></span>*/}
            </div>
        )
    }
}


NewAddedBook.propTypes = {
  name: PropTypes.string,
  edition: PropTypes.string,
  author: PropTypes.string,
  deleteBook: PropTypes.func
};

export default NewAddedBook;