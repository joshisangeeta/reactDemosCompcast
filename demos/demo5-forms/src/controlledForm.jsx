import {Component} from 'react';

export default class ControlledForm extends Component{

         constructor(props){
             super(props)
             this.state={ value:''}
             this.handleChange = this.handleChange.bind(this);
             this.handleSubmit = this.handleSubmit.bind(this);

         }

        handleChange(event){
             console.log('handleChange'+this.state.value)
             this.setState({value:event.target.value})
        }
       
        handleSubmit(event){

             console.log('handleSubmit');
             event.preventDefault();
             return false;

        }

      render(){


           return(
             <div>
                <form onSubmit={this.handleSubmit} >
                <input value={this.state.value} onChange={this.handleChange}/>
                <input type='submit' />
                </form>
                <h4>You have entered : {this.state.value} </h4>
             </div>
               

           )



      }

    






}