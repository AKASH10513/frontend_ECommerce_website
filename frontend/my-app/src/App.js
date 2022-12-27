import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import Navbar from './components/Navbr';
import Signin from './components/Signin';
import Signout from './components/Signout';
import Login from './components/Login';
import Crousel from './components/Crousel';
function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
          <Route path="Signin"   element={<Signin />} />
          <Route path="Signout"  element={<Signout/>}/>
          <Route path="Login"    element={<Login/>}/>
          <Route path="Crousel"  element={<Crousel/>}/>
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
