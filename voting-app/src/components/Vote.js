import React from 'react'
import { useState} from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Vote = () => {
    const [vote, setVote] = useState("");
    let navigate = useNavigate();

    const id = localStorage.getItem('id')
    //console.log(id)
    const vote1 = localStorage.getItem('vote')
    if(id==null)
    {
        navigate('/')
    }


    const logout = () =>{
        localStorage.removeItem('id')
        navigate('/')
    }



    const handlePost = () => {
        
        const data = { 
            id:Number(id),
            vote:Number(vote)
        }
        console.log(data)
        axios.put(`http://localhost:8089/voting/${Number(id)}`, data)
            .then((e) => { navigate('/')})
            .catch((err) => alert('Already Voted!'))
    }
    return (
        <>
            <div id='form'>
                <div className="form">
                    <h1>Voting</h1>
                    <h2>{vote1!=='0'?"You are already voted to candidate"+vote1:"" }</h2>
                    <br/>
                    <label htmlFor="name">Canidate1</label>
                    <input type="radio" name="vote" value="1" checked={vote1==='1'} onChange={(e) => setVote(e.target.value)}/><br />
                    <label htmlFor="name">Canidate2</label>
                    <input type="radio" name="vote" value="2" checked={vote1 === '2'}  onChange={(e) => setVote(e.target.value)} /><br />
                    <label htmlFor="name">Canidate3</label>
                    <input type="radio" name="vote" value="3" checked={vote1 === '3'} onChange={(e) => setVote(e.target.value)} /><br />
                    <label htmlFor="name">Canidate4</label>
                    <input type="radio" name="vote" value="4" checked={vote1 === '4'} onChange={(e) => setVote(e.target.value)} /><br />
                    
                    <button className="btn btn-primary my-3" onClick={handlePost}>Vote</button>
                    <button className="btn btn-primary my-3" onClick={logout}>Logout</button>
                </div>
            </div>
        </>
    )

}

export default Vote