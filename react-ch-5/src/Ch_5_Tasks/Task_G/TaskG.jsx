import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './TaskG.css'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

export default function TaskG() {
  const location = useLocation()
  return (
    <>

      {/* routing */}
      <div className="routing-container">
        <ul>
          <li> <Link to='/'>Home</Link></li>
          <li> <Link to='/about'>About</Link></li>
          <li> <Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
