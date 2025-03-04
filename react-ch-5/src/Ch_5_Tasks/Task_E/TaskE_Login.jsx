import React, { useState } from 'react'
import { Outlet, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

export default function TaskE_Login() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    //handel input field
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    //mockData
    const data = [
        {
            email: "jaydeep1@gmail.com"
        },
        {
            email: "jay1@gmail.com"
        }

    ]

    const handleSubmit = () => {
        let uData = data.find((user) => (user.email == email)
        )

        if (uData) {
            navigate("/dashboard")
        } else {
            navigate("/notfound")
        }
    }

    return (
        <>
            <div className="login-form">
                <input type="email" value={email} onChange={handleEmail} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
     

            
        </>
    )
}
