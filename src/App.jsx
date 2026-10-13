import React, { useEffect } from 'react'

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Facilities from './pages/Facilities'
import Gallery from './pages/Gallery'
// import Trainers from './pages/Trainers'
import Membership from './pages/Membership'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import gymMaps from './components/GymMaps'


function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, hash, key]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar/>

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/facilities' element={<Facilities/>}></Route>
            {/* <Route path='/trainers' element={<Trainers/>}></Route> */}
            <Route path='/membership' element={<Membership/>}></Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      <Footer/>

      <WhatsAppButton/>
      
    </BrowserRouter>
  )
}
