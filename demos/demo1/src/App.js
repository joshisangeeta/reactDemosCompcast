import logo from './logo.svg';
import './App.css';
import Hello from './hello';

import MyDate from './mydate';
import Welcome from './welcome';
import BoilingVerdict from './boiling-verdict';
import { Counter } from './counter';

function App() {
  return (
    <div className="App">
   
      <h4>App root comp</h4>
       <BoilingVerdict temps ={101}/>

       <MyDate today={new Date()} />
     
      <Welcome fname='sangeeta' lname='joshi'></Welcome>

      <Counter  ctr1='1' />
     
    { /* <Hello></Hello>
      <Hello></Hello>*/}

    </div>
  );
}

export default App;
