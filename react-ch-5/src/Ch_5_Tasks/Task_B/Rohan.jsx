import React from 'react'
import userProfile from '../../../public/rohan.jpg'

export default function Rohan() {
  return (
   <>
               <div className="user-container">
                   <h1>User Name : Rohan</h1>
                   <img src={userProfile} alt="jaydeep.profile" width={200}/>
                   <p>Rohan : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores hic repellat facere deserunt eum? Voluptate voluptatum modi placeat nostrum?</p>
               </div>
           </>
  )
}
