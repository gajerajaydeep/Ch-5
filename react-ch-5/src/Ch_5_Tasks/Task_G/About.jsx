import React from 'react'
import './TaskG.css'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <>
      <motion.div className="about-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, expedita!</p>
      </motion.div>
    </>
  )
}
