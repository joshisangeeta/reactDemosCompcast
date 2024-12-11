import React,{ Component } from "react";

export default class UncontrolledForm extends Component{
       constructor(props){
        super(props);
       
         this.input=React.createRef();

       }
       handleChange(event){
        console.log(event.target.value);
       }

       handleSubmit(event){
          alert("the form will get submitted with value as:");
            event.preventDefault();
       }
   
       render(){
         return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <input type="text" ref={this.input} onChange={this.handleChange}  />
                    
                    <input type="submit" value='submit'/>
                </form>
               
                
            </div>
         )

       }







}