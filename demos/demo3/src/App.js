import logo from './logo.svg';
import './App.css';
import { Timer } from './timer';
import { Toggle } from './toggle';
import { TempConverter } from './temp-converter';
function App() {
  return (
    <div className="App">
      <Timer />
      <Toggle />
      <TempConverter />
    </div>
  );
}

export default App;
