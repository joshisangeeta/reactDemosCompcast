import { Component } from "react";

export class TempConverter extends Component{
    constructor(props){
        super(props);
        this.state={
            tempC:0,
            tempF:0
        }
        this.convertTemp = this.convertTemp.bind(this)
    }
    convertTemp(event){
         this.setState({
            tempF: event.target.value * 1.8 + 32
         })
    }


    render(){
        return(
        <div>
                <h3>
                 <input type='number' name='temp' value={this.tempC} onChange={this.convertTemp}></input>
                 </h3>
              <h4> Temp in F {this.state.tempF} </h4>

        </div>
        )
    }


}