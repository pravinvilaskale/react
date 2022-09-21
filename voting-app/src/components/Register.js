import React from 'react'
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [type, setType] = useState("");

    let navigate = useNavigate();

    const handlePost = () => {
        const data = {
            username: username,
            password: password,
            email:email,
            phone:Number(phone),
            type:type,
            vote:0
        }
        console.log(data)
        axios.post(`http://localhost:8089/voting`, data)
            .then(

                (e) => {
                    navigate("/login")
                }

            )
            .catch((err) => console.log("Error", err))
    }

    return (
        <>
            <div id='form'>
                <div className="form">
                    <h1>Register</h1>
                    <label htmlFor="name">Enter a username</label><br />
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                    <label htmlFor="name">Enter a password</label><br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <label htmlFor="email">Enter a email</label><br />
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <label htmlFor="name">Enter a phone no</label><br />
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
                    <label htmlFor="name">User Type</label><br />
                    <select name="type" onChange={(e) => setType(e.target.value)}>
                        <option >Select</option>
                        <option value="user"  >User</option>
                        <option value="admin" >Admin</option>
                    </select>
                    <br />
                    <br />
                    <button className="btn btn-primary my-3" onClick={handlePost}>Register</button>
                    <button className="btn btn-primary my-3" onClick={() => { navigate("/login") }}>Login</button>
                </div>
            </div>
        </>
    ) 
}

export default Register