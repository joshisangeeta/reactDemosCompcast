function BoilingVerdict(props){
    if(props.temp >= 100)
        return (
          <div>
         <h3>This is boiling verdict comp</h3>
        <h4>Water is boiling</h4>
        </div>
    )
    else
        return(
        <h4>Water is not boiling</h4>)




}
export default BoilingVerdict;