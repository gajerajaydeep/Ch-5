import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Header from './Header'

export default function TaskA() {
  return (
    <>
 <Header/>
      <div className="navbar-container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>

     
      </div>

    </>
  )
}
