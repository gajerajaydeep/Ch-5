import React from 'react'
import userProfile from '../../../public/mohil.jpeg'
import { NavLink, Outlet } from 'react-router-dom'
import './TaskC.css'

export default function Mohil() {
  return (
    <>
      <div className="user-container">
        <h1>User Name : Mohil</h1>
        <img src={userProfile} alt="jaydeep.profile" />
        <p> Mohil : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores hic repellat facere deserunt eum? Voluptate voluptatum modi placeat nostrum?</p>
      </div>
      <div className="nested-routing-nav">
        <NavLink to='mohilpost'>Post</NavLink><br />
        <NavLink to='mohilfriend'>Friend</NavLink>
      </div>
      <Outlet />
    </>
  )
}
