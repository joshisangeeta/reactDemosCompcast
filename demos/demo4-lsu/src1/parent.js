import { Component } from "react";
import { UserInput } from "./userinput";
import { Welcome } from "./welcome";

export class Parent extends Component{
         constructor(props){
             super(props);
           this.state={
                userName:''
           }
     }

     handleChange(val){
         this.setState({userName:val})
     }

    render(){
        return(

            <div>
            <h2>Parent Component</h2>
                <UserInput passname = {this.handleChange}></UserInput>
                <Welcome  uname={this.state.userName}/>
            </div>

        )
    }




}