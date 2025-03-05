import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './TaskH.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { useLocation,useParams } from 'react-router-dom'


export default function TaskH() {
    const location = useLocation();
    return (
        <>
            <div className="routing-container">
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/about'>About</Link></li>
                    <li> <Link to='/contact'>Contact</Link></li>
                </ul>

                <h2>location path name : {location.pathname}</h2>
                <h2>location search  : {location.search}</h2>
                <h2>location hash : {location.hash}</h2>
            </div>

            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/:fname' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

        </>
    )
}
