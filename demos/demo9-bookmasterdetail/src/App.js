import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={BookListComponent} ></Route>
      <Route path='/books' Component={BookListComponent} ></Route>
      <Route path='/book-detail/:id' Component={BookDetailComponent} ></Route>
  
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
