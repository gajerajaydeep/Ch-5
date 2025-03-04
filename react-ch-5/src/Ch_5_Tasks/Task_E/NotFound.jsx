import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    
    <>
    <div className="notfound-container">
        <h1>please Login!!</h1>
        <Link to='/'>Login Page</Link>
    </div>
    </>
  )
}
