import React from 'react';
import StyledButton from './styledButton';
import PropTypes from 'prop-types';

class EditBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookData: this.props.bookData,
            name: this.props.editBook.name,
            edition: this.props.editBook.edition,
            author: this.props.editBook.author,
            showEditPopup: false
        }
        this.saveEditedBook = this.saveEditedBook.bind(this);
        console.log('this.state.bookData before',this.state.bookData);
    }

    saveEditedBook(){
         let newBookObj = {
                id: this.props.editBook.id,
                name: this.state.name,
                edition: this.state.edition,
                author: this.state.author,
        }

         let myBooks = this.state.bookData.map((book, i) => {
            if(book.id === this.props.editBook.id) {
                var _index = this.state.bookData.indexOf(book);
                this.state.bookData[_index] = newBookObj;
            }
         })

        this.setState({
            bookData: this.state.bookData,
            showEditPopup: !this.state.showEditPopup
        });
        console.log('this.state.bookData after',this.state.bookData);
    }

    render(){
        return(
            <div className={this.state.showEditPopup ? 'close-edit-popup' : 'edit-popup'}>
                {/*<div><input type="number" value={this.prop.id} onChange={(e) => {this.setState({id: e.target.value})}}/></div>*/}
                <div>
                    <div><input type="text"  defaultValue={this.props.editBook.name} onChange={(e) => {this.setState({name: e.target.value})}}/></div>
                    <div><input type="text"  defaultValue={this.props.editBook.edition} onChange={(e) => {this.setState({edition: e.target.value})}}/></div>
                    <div><input type="text" defaultValue={this.props.editBook.author} onChange={(e) => {this.setState({author: e.target.value})}}/></div>
                    <div><StyledButton onClick={this.saveEditedBook}>Save</StyledButton></div>
                </div>
            </div>
        )
    }
}


EditBook.propTypes = {
  name: PropTypes.string,
  edition: PropTypes.string,
  author: PropTypes.string
};

export default EditBook;