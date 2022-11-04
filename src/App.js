import Nav from './Nav';
import './App.css';
import './Nav.css';
import React from 'react';
import {  Routes,Route } from "react-router-dom";
import Home from './Home'
import Menu from './Menu'
import Staff from './Staff'
import Contact from './Contact'
function App() {
  return (
    <div>
      
            
      <Nav />
    
    <Routes>
   
        <Route path='/' element={<Home />}></Route>
        <Route path='/Menu' element={<Menu/>} ></Route>
        <Route path='/Staff' element={<Staff/>} ></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
