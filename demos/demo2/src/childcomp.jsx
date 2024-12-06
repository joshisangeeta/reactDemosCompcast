import { Component } from "react";

export class Child extends Component{
          
    constructor(props){
        super(props);
       this.state=
       {
             ctr:0
       }
       this.incrementCtr=this.incrementCtr.bind(this);
       console.log("child constructor")
   
    }

    componentDidMount(){
        console.log('child did mount')
       }
       
    componentWillUnmount(){
        console.log('child ...will unmount')
     }


    incrementCtr(event){
        this.setState({ctr:this.state.ctr+1})  
        console.log(this.state.ctr);
        this.props.onButtonClick(event,this.state.ctr);
    }

    render(){
        return(
            <div>
                <h4>This is a child component</h4>
                <h3>Showing parentX here {this.props.childX}</h3>
                <button onClick={this.incrementCtr} >Click Me</button>

            </div>
        ) 

     }

}