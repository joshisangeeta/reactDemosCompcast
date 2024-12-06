import { Component } from "react";

export class Timer extends Component{

        constructor(props){
              super(props);
              this.state={
                date:new Date()
              }

        }
        tick(){
            console.log('tick')
            this.setState({date:new Date()});
        }
  
        componentDidMount(){
            console.log('did mount')
            this.timeId=  setInterval(()=>this.tick(),1000)
        }


        componentWillUnmount(){
            console.log('unmount')
            clearInterval(this.timeId);
        }

        render(){
            return(
                <h3>Today is {this.state.date.toLocaleString()}</h3>
            )
        }



}