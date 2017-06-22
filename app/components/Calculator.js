import React from 'react';
import StyledButton from './styledButton';

class Button extends React.Component {
        constructor() {
            super();
            this.state = {
                inputVal1: 0,
                inputVal2: 0,
                output: 0
            }
            this.handleAdd = this.handleAdd.bind(this);
            this.handleSub = this.handleSub.bind(this);
            this.handleMul = this.handleMul.bind(this);
        }

        handleAdd() {
            this.setState({
                output: parseInt(this.state.inputVal1) + parseInt(this.state.inputVal2)
            });
        }

        handleSub() {
            this.setState({
                output: parseInt(this.state.inputVal1) - parseInt(this.state.inputVal2)
            });
        }

        handleMul() {
            this.setState({
                output: parseInt(this.state.inputVal1) * parseInt(this.state.inputVal2)
            });
        }


        render() {
            return ( 
                <div>
                    <label for="num1">num1  </label>
                    <input type="number" name="num1" id="num1" value={this.state.inputVal1} onChange={(e) => {this.setState({inputVal1: e.target.value})}}/>

                    <label for="num2">num2  </label>
                    <input type="number" name="num2" id="num2" value={this.state.inputVal2} onChange={(e) => {this.setState({inputVal2: e.target.value})}}/>
                 
                    <div>
                        <StyledButton onClick={this.handleAdd}> Add </StyledButton>
                        <StyledButton onClick={this.handleSub}> Sub </StyledButton>
                        <StyledButton onClick={this.handleMul}> Mul </StyledButton>
                    </div>
                    <span>output is : {this.state.output} </span>
                </div> )
            }
        }

        export default Button;