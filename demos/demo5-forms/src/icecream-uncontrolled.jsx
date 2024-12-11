import React,{ Component } from "react";
export default class IcecreamForm extends Component{
    constructor(props){
     super(props);
     
      this.input=React.createRef();

    }
    

    handleSubmit(event){
        
       alert("your fav. icecream");
         event.preventDefault();
    }

    render(){
      return(
         <div>
             <form onSubmit={this.handleSubmit}>
                 <select  name='flavours' ref={this.input} value={this.input.value} >
                    <option value='blueberry'>Blueberry</option>
                    <option value='wildberry'>Wildberry</option>
                    <option value='strawberry'>Strawberry</option>

                 </select>
              <input type='submit'   value='submit'></input>
             </form>
            

         </div>
      )

    }







}