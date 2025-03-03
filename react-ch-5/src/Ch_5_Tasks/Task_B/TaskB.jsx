import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Jaydeep from './Jaydeep'
import Rohan from './Rohan'
import Mohil from './Mohil'

export default function TaskB() {
    return (
        <>
           <nav>
                <ul>
                    <li><Link to="/">Jaydeep</Link> </li>
                    <li><Link to="/rohan">Rohan</Link></li>
                    <li><Link to="/mohil">Mohil</Link></li>

                </ul>

            </nav>
            <Routes>
                <Route path='/' element={<Jaydeep/>}/>
                <Route path='/rohan' element={<Rohan/>}/>
                <Route path='/mohil' element={<Mohil/>}/>
            </Routes>
          
        </>
    )
}
