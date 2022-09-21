import React from 'react'
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
  
    let navigate = useNavigate();

    const handlePost = () => {
        const data = {
            username: username,
            password:password
        }
        // console.log(data)
        axios.post(`http://localhost:8089/login`, data)
            .then(
                
                (e) => { 
                    localStorage.setItem('id', e.data.id)
                    localStorage.setItem('vote', e.data.vote)
                    if(e.data.type==='admin')
                    {
                        navigate("/admin")
                    }
                    else
                    {
                        navigate("/vote")
                    }
                     
            }
                
                )
            .catch((err) => console.log("Error", err))
    }

    return(
    <>
            <div id='form'>
                <div className="form">
                    <h1>Login</h1>
                    <label htmlFor="name">Enter a username</label><br />
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                    <label htmlFor="name">Enter a password</label><br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <button className="btn btn-primary my-3" onClick={handlePost}>Login</button>
                    <button className="btn btn-primary my-3" onClick={()=>{navigate("/register")}}>Register</button>
                </div>
            </div>
    </>
  ) 

}

export default Login