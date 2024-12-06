import { Component } from "react";

export class UserInput extends Component{
    constructor(props){
             super(props);
             this.handleInput = this.handleInput.bind(this)   
    }

   handleInput(event){
        this.props.passname(event.target.value);
   }

   render(){
    return(
        <div>
            <h4>Please enter your name</h4>
            <input type='text' onChange={this.handleInput}></input>
        </div>
    )}
}