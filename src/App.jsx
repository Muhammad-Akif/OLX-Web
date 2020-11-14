import React from 'react';
import './props.css'
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from './Components/Home.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' component={HomePage}/>  
      </BrowserRouter>
    </div>
  );
}

export default App;
