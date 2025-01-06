import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Aboutme from './pages/Aboutme'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/about' element={<Aboutme/>}></Route>

        
      </Routes>
    </>
  )
}

export default App
