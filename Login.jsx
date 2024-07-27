import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        navigate('/', { state: { email, password } })
    }

    let gotohome = () => {
        navigate('/')
    }


    return (
        <>
            <div className="login_page">
                <div className="logindiv">
                    <form onSubmit={handleSubmit} className='form'>
                        <h1>Welcome to Login Page</h1><br />
                        <input
                            type="email" placeholder="Enter your email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /><br /><br />
                        <input
                            type="password" placeholder="Enter your password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br /><br />
                        <input type="submit" value="Submit" /><br /><br />
                        <button id='back' type="button" onClick={gotohome}>Back</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login