import React from 'react';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedMe: false,
      counter: 0,
      counter1: 10
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  
  handleClick(){
    console.log('you clicked me', this.state.clickedMe);
     this.setState({
       counter: this.state.counter + 1,
       counter1: this.state.counter1 - 1,
       clickedMe: true
      });
       
  }
  
    render() {
      return (
       <div>
          <button onClick={this.handleClick}> Click me </button>
          <span> increase : {this.state.counter} </span>
          <span> decrease : {this.state.counter1} </span>
       </div>
      )
    }
}

export default Button;