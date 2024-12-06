import { Component } from "react";
export class Toggle extends Component{

     constructor(props){
        super(props);
        this.state={
          flag:true
        }
       this.toggleCaption = this.toggleCaption.bind(this)
  }

      toggleCaption(){
          
         this.setState({flag:!this.state.flag});
      }



      render(){
        return(
            <div>
                <h3>Toggle effect</h3>
                <button onClick={this.toggleCaption}>{this.state.flag?'ON':'OFF'}</button>
            </div>
        )
      }




}