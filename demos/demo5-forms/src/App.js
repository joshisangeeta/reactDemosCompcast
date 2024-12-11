import logo from './logo.svg';
import './App.css';
import UncontrolledForm from './uncontrolledForm';
import IcecreamForm from './icecream-uncontrolled';
import ControlledForm from './controlledForm';
import ControlledIcecreamForm from './icecream-controlled';
function App() {
  return (
    <div className="App">   
      
      <ControlledIcecreamForm />
      <IcecreamForm />
    </div>
  );
}

export default App;
