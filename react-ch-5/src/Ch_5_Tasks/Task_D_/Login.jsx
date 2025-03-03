import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Jaydeep from './Jaydeep'
import Home from './Home';
import NotFound from './NotFound';
import Mohil from './Mohil'
import Rohan from './Rohan'

export default function Login() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const mockData = [
        {
            email: "jaydeep1@gmail.com",
            name: "jaydeep"
        },
        {
            email: "mohil1@gmail.com",
            name: "mohil"
        },
        {
            email: "rohan1@gmail.com",
            name: "rohan"
        }
    ]

    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handleSubmitBtn = () => {
        const uEmail = mockData.find((v) =>
            // console.log(  v.email == email,Math.random())

            v.email == email


        )

        console.log(email);

        if (uEmail) {
            navigate(`/${uEmail.name}`); // Navigate to /jaydeep, /rohan, or /mohil
        }
        else {
            navigate('/notfound')
        }



    }



    return (

        <>
            <input type="email" onChange={handleEmail} />
            <button onClick={handleSubmitBtn}>Submit</button>

            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/jaydeep' element={<Jaydeep />} />
                <Route path='/mohil' element={<Mohil />} />
                <Route path='/rohan' element={<Rohan />} />
                <Route path='/notfound' element={<NotFound />} />
            </Routes>
        </>


    )
}
