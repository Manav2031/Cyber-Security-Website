import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Types from './pages/Types'
import Malwarethreats from './pages/Malwarethreats'
import Phishingattacks from './pages/Phishingattacks'
import Dosattacks from './pages/Dosattacks'
import Zerothreats from './pages/Zerothreats'
import Iotthreats from './pages/Iotthreats'
import Zerotrust from './pages/Zerotrust'
import Aiml from './pages/Aiml'
import Edr from './pages/Edr'
import Ransomware from './pages/Ransomware'
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
      <Route path="/types" element={<Types />} />
      <Route path="/malwarethreats" element={<Malwarethreats />} />
      <Route path="/phishingattacks" element={<Phishingattacks />} />
      <Route path="/dosattacks" element={<Dosattacks />} />
      <Route path="/zerothreats" element={<Zerothreats />} />
      <Route path="/iotthreats" element={<Iotthreats />} />
      <Route path="/zerotrust" element={<Zerotrust />} />
      <Route path="/aiml" element={<Aiml />} />
      <Route path="/edr" element={<Edr />} />
      <Route path="/ransomware" element={<Ransomware />} />
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
