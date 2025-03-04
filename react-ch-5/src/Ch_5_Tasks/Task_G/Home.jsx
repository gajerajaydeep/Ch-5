import React from 'react'
import './TaskG.css'
import { motion } from 'framer-motion'

export default function Home() {
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }
  return (
    <>
      <motion.div className="home-container"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 0.5 }}
        
      >
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A suscipit placeat quidem aliquam cumque adipisci ad pariatur dolores. Fugiat exercitationem veritatis rem labore recusandae explicabo quisquam maxime impedit aspernatur omnis aliquid unde neque possimus, tempora quia obcaecati. Consectetur magni, mollitia ratione accusamus, recusandae eum suscipit itaque obcaecati fuga optio, rerum veniam omnis reiciendis delectus. Repellat, dicta iusto nemo accusamus autem quo, distinctio asperiores nihil velit nisi beatae sunt voluptas corporis in quas, quam magni. Et odio praesentium nostrum asperiores, exercitationem saepe ex facere ratione repellat, dolore inventore, perferendis dolorum! Dignissimos omnis aliquam nemo distinctio totam perspiciatis ipsa, praesentium officiis assumenda.</p>
      </motion.div>
    </>
  )
}
