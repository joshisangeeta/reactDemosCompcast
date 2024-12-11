import React,{ Component } from "react";
export default class ControlledIcecreamForm extends Component{

    constructor(props){
        super(props);
        
        this.state={value:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   
       }

    handleChange(event){
        this.setState({value:event.target.value})
    }

    handleSubmit(event){
        
        alert("your fav. icecream"+ this.state.value);
          event.preventDefault();
     }

       render(){
        return(
           <div>
               <form onSubmit={this.handleSubmit}>
                   <select  name='flavours' value={this.state.value}
                    onChange= {this.handleChange}>
                      <option value='blueberry'>Blueberry</option>
                      <option value='wildberry'>Wildberry</option>
                      <option value='strawberry'>Strawberry</option>
  
                   </select>
                <input type='submit'   value='submit'></input>
               </form>
                <h4>You have entered :{ this.state.value}</h4>
  
           </div>
        )
  

    }




}