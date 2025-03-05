import React from 'react'
import './TaskH.css'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate();
  // console.log(navigate,"navigate");

  return (
    <>
      <div className="about-container"

      >
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, expedita!</p>

        <button onClick={() => (navigate(-1))} className='go-back-btn'>Go Back</button>
       
      </div>

    </>
  )
}
