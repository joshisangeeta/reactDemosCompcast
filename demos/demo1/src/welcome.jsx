
import MyDate from "./mydate";

function Welcome(props){

return(
     <div>
         <MyDate today={new Date()} />
        <h3>Hey, Welcome {props.fname.toUpperCase() + props.lname } !!!</h3>
    </div> 
)



}
export default Welcome;