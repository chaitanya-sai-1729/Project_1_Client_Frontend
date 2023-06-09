import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import { SignUp } from './pages/SignUp';

function App(){
  return(
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='home' element={<Home />}/>
      <Route path='signup' element={<SignUp />} />
    </Routes>
  )
}

export default App;
