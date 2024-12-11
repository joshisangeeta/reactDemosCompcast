import { Component } from "react";
import USERSERVICE from "./user-service";
export default class UserListComponent extends Component {

         constructor(props){
            super(props);
            this.state={
                users:[]
            }

         }
     componentDidMount(){
        USERSERVICE.getUsers().then(res => {this.setState({users:res.data});
        console.log("users asynch:"+this.state.users)})
        console.log("users:"+this.state.users)
     }
    
     render(){
        return(
            <div>
                <h5>All Users</h5>

             

            </div>
        )
     }



}