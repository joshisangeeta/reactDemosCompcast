import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';
function App() {
  return (
    <div className="App">
         <h3>Routing demo dashboard</h3>
         <nav 
            style={{borderBottom:'solid 1px',
              paddingBottom: ''

            }}
         
         >            

            <Link to='/about'>About</Link> <br></br>
            <Link to='/contact'>Contact</Link>

         </nav>

    </div>
  );
}

export default App;
