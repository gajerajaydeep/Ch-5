import React from 'react'
import './TaskG.css'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <>
      <motion.div className="contact-container"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ duration: 0.5 }}
      >
        <h1>Contact Page</h1>
        <p>Mo : 1234567890</p>
        <p>email : abc12@gmail.com</p>
        <p>venue : A-1,abc park ahemdabad , Gujarat</p>
      </motion.div>
    </>
  )
}
