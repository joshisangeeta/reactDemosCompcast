import React,{Component} from "react";
import { Link } from "react-router";
export default class Main extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/' >Cars</Link></li>
                    <li><Link to='/' >About</Link></li>
                </ul>
            </div>
        )
    }
    

}