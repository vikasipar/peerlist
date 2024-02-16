import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='lg:mx-[79px] lg:flex'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
      <Sidebar/>
    </div>
  )
}

export default App
