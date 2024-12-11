
import { useEffect, useState } from "react";


function UseEffectDemo(){
        const [date] =useState(new Date());
        const [second,setSecond]= useState(date.getMilliseconds())

    useEffect(()=>{
            console.log("setting interval here");
             const id =    setInterval(()=>setSecond(second + 1),1000);
            return ()=>{
                console.log("clearing the interval here");
                clearInterval(id);
            }

    })

    return(

         <div>
           <h4> Today is {date.toDateString()}  </h4>
            
           <h3>seconds passed {second}</h3>
         </div>

    )


}
export default UseEffectDemo;