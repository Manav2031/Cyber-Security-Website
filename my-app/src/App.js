import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
