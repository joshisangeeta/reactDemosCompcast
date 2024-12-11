import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Router,Route  }from 'react-router'
//import { browserHistory } from 'react-router-dom';
import Main from './main.component';
import Home from './home.component';
import Car from './car.component';
import CarDetail from './car-detail.component';
import About from './about.component';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router >
     <Route component={Main}>
     <Route path='/' component={Home}></Route>
     <Route path='/cars' component={Car} ></Route>
     <Route path='/cars/:id' component={CarDetail}></Route>
     <Route path='/about' component={About}></Route>

     </Route>

 </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
