import React from 'react'
import userProfile from '../../../public/mohil.jpeg'

export default function Mohil() {
  return (
   <>
               <div className="user-container">
                   <h1>User Name : Mohil</h1>
                   <img src={userProfile} alt="jaydeep.profile" />
                   <p> Mohil : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores hic repellat facere deserunt eum? Voluptate voluptatum modi placeat nostrum?</p>
               </div>
           </>
  )
}
