import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//react-router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//pages
import Home from './Home'
import About from './About'
import People from './People'
import Error from './Error'
import Person from './Person'
//navbar
import Navbar from './Navbar'

const ReactRouterSetup=()=>{
  return <Router>
    <Route path='/'>
      <Home />
    </Route>
    <Route path='/about'>
      <About/>
    </Route>
    <Route path='/People'>
      <People/>
    </Route>
  </Router>
}
export default ReactRouterSetup;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
