import React from 'react'
import './TaskH.css'
import { useParams,useNavigate } from 'react-router-dom'


export default function Home() {
    const navigate = useNavigate();
  
  const { fname } = useParams()
  // console.log(fname)

  return (
    <>
      <div className="home-container"

      >
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A suscipit placeat quidem aliquam cumque adipisci ad pariatur dolores. Fugiat exercitationem veritatis rem labore recusandae explicabo quisquam maxime impedit aspernatur omnis aliquid unde neque possimus, tempora quia obcaecati. Consectetur magni, mollitia ratione accusamus, recusandae eum suscipit itaque obcaecati fuga optio, rerum veniam omnis reiciendis delectus. Repellat, dicta iusto nemo accusamus autem quo, distinctio asperiores nihil velit nisi beatae sunt voluptas corporis in quas, quam magni. Et odio praesentium nostrum asperiores, exercitationem saepe ex facere ratione repellat, dolore inventore, perferendis dolorum! Dignissimos omnis aliquam nemo distinctio totam perspiciatis ipsa, praesentium officiis assumenda.</p>

        <h2>useParam Hook</h2>
        <h3>User firstname : {fname}</h3>

        <button onClick={() => (navigate(1))} className='go-back-btn'>Go Forward</button>
      </div>
    </>
  )
}
