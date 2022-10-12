import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Covid from './components/Covid';
import Search from './/components/Search';
import Home from './components/Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/covid' element={<Covid/>}/>
   <Route path='/search' element={<Search/>}/>

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
