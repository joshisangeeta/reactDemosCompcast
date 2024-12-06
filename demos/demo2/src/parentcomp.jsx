import { Component } from "react";
import { Child } from "./childcomp";
export class Parent extends Component{
        constructor(props){
             super(props);
            this.state={
                parentX:'some parent value',
                ctrP:0
            }
            this.showCtrP = this.showCtrP.bind(this);
            console.log("parent constructor")
        }
       componentDidMount(){
        console.log('parent did mount')
       }
      
       componentWillUnmount(){
          console.log('parent ...will unmount')
       }

     showCtrP(event,ctr){
          console.log("in parent ....value passed is"+ctr);
          this.setState({ctrP:ctr});
     }

     render(){

         return(
            <div>
                <h3>This is parent comp </h3>
                  {this.state.parentX}
                  <h4>This is ctr value shown in parent {this.state.ctrP}</h4>
                <h3>Below is the child comp</h3> 
                 <Child childX={this.state.parentX}  onButtonClick={this.showCtrP}></Child> 

            </div>
         )

     }


}