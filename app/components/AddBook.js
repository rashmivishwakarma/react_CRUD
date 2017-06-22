import React from 'react';
import StyledButton from './styledButton';
import NewAddedBook from './NewAddedBook';
import PropTypes from 'prop-types';

class AddBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            edition: '',
            author: '',
            AddBookInTableFlag: false,
            bookData: this.props.newBookTemp
        }
        this.AddBookInTable = this.AddBookInTable.bind(this);
    }

    AddBookInTable(){
        let newBookObj = {
                id: this.state.id,
                name: this.state.name,
                edition: this.state.edition,
                author: this.state.author,
        }
console.log('<<>>');
        this.setState({
            AddBookInTableFlag: !this.state.AddBookInTableFlag,
            bookData: this.state.bookData.push(newBookObj)
        })
    }

    render(){
        let newBook, addBookPopup;
        if(this.state.AddBookInTableFlag){
            newBook = (
                 <NewAddedBook id={this.state.id} name={this.state.name} edition={this.state.edition} author={this.state.author} deleteBook={this.props.deleteBook}></NewAddedBook>
            )
        } else {
            addBookPopup = (
                <div>
                    <div>Enter book id : <input type="number" placeholder='enter book id' value={this.state.id} onChange={(e) => {this.setState({id: e.target.value})}}/></div>
                    <div>Enter book name : <input type="text"  placeholder='enter book name' value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}}/></div>
                    <div>Enter book edition : <input type="text"  placeholder='enter book editon' value={this.state.edition} onChange={(e) => {this.setState({edition: e.target.value})}}/></div>
                    <div>Enter book author : <input type="text" placeholder='enter book author' value={this.state.author} onChange={(e) => {this.setState({author: e.target.value})}}/></div>
                    <div><StyledButton onClick={this.AddBookInTable}>Add Mee</StyledButton></div>
                </div>
            )
        }
        return(
            <div className={this.state.AddBookInTableFlag ? 'ssss' : 'add-book-popup'}>
                {addBookPopup}
                {newBook}
            </div>
        )
    }
}
AddBook.propTypes = {
  newBookTemp: PropTypes.object
};
export default AddBook;