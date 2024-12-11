import { useState } from "react";

function StateHookDemo(){

    const[counter,setCounter]   =  useState(0)
    const [flavour,setFlavour]  = useState('blueberry')


    return(
        <div>
               <h4>This button is clicked for {counter} times</h4>
              <button onClick={()=>setCounter(counter + 1)} >Click me</button>


              <h4>The current flavour is {flavour} </h4>
              <button onClick={()=>setFlavour('Raspberry')} >Click me</button>

        </div>
    )


}

export default StateHookDemo;