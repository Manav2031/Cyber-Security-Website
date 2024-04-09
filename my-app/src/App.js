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
import Latesttrends from './pages/Latesttrends'
import Networksolutions from './pages/Networksolutions'
import Endpointsolutions from './pages/Endpointsolutions'
import Cloudsolutions from './pages/Cloudsolutions'
import Iamsolutions from './pages/Iamsolutions'
import Faqs from './pages/Faqs'
import Contacts from './pages/Contacts'

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
      <Route path="/latesttrends" element={<Latesttrends />} />
      <Route path="/networksolutions" element={<Networksolutions />} />
      <Route path="/endpointsolutions" element={<Endpointsolutions />} />
      <Route path="/cloudsolutions" element={<Cloudsolutions />} />
      <Route path="/iamsolutions" element={<Iamsolutions />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
