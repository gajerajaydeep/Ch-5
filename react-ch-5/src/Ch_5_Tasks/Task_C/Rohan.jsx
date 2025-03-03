import React from 'react'
import userProfile from '../../../public/rohan.jpg'
import { NavLink, Outlet } from 'react-router-dom'
import './TaskC.css'

export default function Rohan() {
  return (
    <>
      <div className="user-container">
        <h1>User Name : Rohan</h1>
        <img src={userProfile} alt="rohan.profile" width={200} />
        <p>Rohan : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores hic repellat facere deserunt eum? Voluptate voluptatum modi placeat nostrum?</p>
      </div>

      <div className="nested-routing-nav">
      <NavLink to='rohanpost'>Post</NavLink><br />

      <NavLink to='rohanfriend'>Friend</NavLink>
      </div>
      <Outlet />
    </>
  )
}
