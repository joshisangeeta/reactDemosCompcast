import { useState } from "react";
import { useEffect } from "react";
function UseEffect2(){

    const[counter,setCounter]   =  useState(0)
   
    useEffect(()=>{
        document.title= `You clicked ${counter}times`
    })

    return(
        <div>
               <h4>This button is clicked for {counter} times</h4>
              <button onClick={()=>setCounter(counter + 1)} >Click me</button>


           
        </div>
    )


}

export default UseEffect2;
    