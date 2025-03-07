import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Crud from './Crud'
import Postdetails from './Postdetails'

export default function PostProject() {
    return (
        <>
     
            <Routes>
                <Route path='/' element={<Crud />} />
                <Route path='/post/:id' element={<Postdetails />} />
            </Routes>

        </>
    )
}
