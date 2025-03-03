import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Jaydeep from './Jaydeep'
import Rohan from './Rohan'
import Mohil from './Mohil'
import JaydeepPost from './Posts/JaydeepPost'
import RohanPost from './Posts/RohanPost'
import MohilPost from './Posts/MohilPost'
import JaydeepF from './Friends/JaydeepF'
import RohanF from './Friends/RohanF'
import MohilF from './Friends/MohilF'

export default function TaskC() {
    return (
        <>
            <nav className='profile-navbar'>
                <ul>
                    <li><Link to="/">Jaydeep</Link> </li>
                    <li><Link to="/rohan">Rohan</Link></li>
                    <li><Link to="/mohil">Mohil</Link></li>

                </ul>

            </nav>
            <Routes>
                <Route path='/' element={<Jaydeep />}>
                    <Route path='post' element={<JaydeepPost />} />
                    <Route path='frind' element={<JaydeepF/>}/>
                </Route>

                <Route path='/rohan' element={<Rohan />} >
                    <Route path='rohanpost' element={<RohanPost/>}/>
                    <Route path='rohanfriend' element={<RohanF/>}/>
                </Route>

                <Route path='/mohil' element={<Mohil />} >
                    <Route path='mohilpost' element={<MohilPost/>}/>
                    <Route path='mohilfriend' element={<MohilF/>}/>
                </Route>
            </Routes>

        </>
    )
}
