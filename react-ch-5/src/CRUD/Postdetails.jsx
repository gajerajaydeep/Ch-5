import React from 'react'
import { Mockdata } from './Mockdata'
import { useParams } from 'react-router-dom'
import './Crud.css'

export default function Postdetails() {
  const { id } = useParams()
  const post = Mockdata.find((item) => item.id === parseInt(id));

  if(!post){
  return  <p> Post Not Found</p>
  }
  return (
<>

      <div className="post-details card bg-success text-light p-5">
        <h1 className='mb-5'>Post Details</h1>
        <div className="card-body border rounded-3">
          <h3 className='mt-5'>Post Title : {post.title}</h3>

          <p>Post Description : {post.description} </p>
          <p>Post Comment : {post.comment}</p>
          </div>
        </div>

      </>
      )
}
