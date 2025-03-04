import React,{useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import TaskE_Login from './TaskE_Login'
import Dashboard from './Dashboard'
import Privateroute from './Privateroute'
import NotFound from './NotFound'

export default function TaskE() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <>
            {/* <h1>Task E</h1>

            <Routes>
                <Route path='/task' element={<TaskE_Login />}>
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='notfound' element={<Dashboard />} />
                </Route>
            </Routes> */}

            <Routes>
                <Route path='/' element={<TaskE_Login />} />
                <Route element={<Privateroute isLoggedIn={isLoggedIn} />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
                <Route path='/notfound' element={<NotFound/>}/>
            </Routes>
        </>
    )
}
