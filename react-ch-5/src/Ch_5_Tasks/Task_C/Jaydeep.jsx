import React from 'react'
import userProfile from '../../../public/user.jpeg'
import { NavLink, Outlet } from 'react-router-dom'
import './TaskC.css'


export default function Jaydeep() {
    return (
        <>
            <div className="user-container">
                <h1>User Name : Jaydeep</h1>
                <img src={userProfile} alt="jaydeep.profile" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores hic repellat facere deserunt eum? Voluptate voluptatum modi placeat nostrum?</p>
            </div>
<div className="nested-routing-nav">
            <NavLink to="post">Post</NavLink><br />
            <NavLink to="frind">Friend</NavLink>
            </div>
            <Outlet/>
        </>
    )
}
