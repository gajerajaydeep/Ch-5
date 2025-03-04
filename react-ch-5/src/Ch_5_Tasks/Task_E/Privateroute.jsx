import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Privateroute({isLoggedIn}) {
  return (
isLoggedIn ? <Outlet/> : <Navigate to='/notfound'/>
  )
}
