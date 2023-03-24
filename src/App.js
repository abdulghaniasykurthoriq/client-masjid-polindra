import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './pages/login'
import Materi from './pages/materi'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Materi/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App