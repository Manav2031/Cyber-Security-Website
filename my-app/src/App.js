import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Malwarethreats from './pages/Malwarethreats'
import Phishingattacks from './pages/Phishingattacks'
import Dosattacks from './pages/Dosattacks'
import Zerothreats from './pages/Zerothreats'
import Iotthreats from './pages/Iotthreats'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/malwarethreats" element={<Malwarethreats />} />
      <Route path="/phishingattacks" element={<Phishingattacks />} />
      <Route path="/dosattacks" element={<Dosattacks />} />
      <Route path="/zerothreats" element={<Zerothreats />} />
      <Route path="/iotthreats" element={<Iotthreats />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
