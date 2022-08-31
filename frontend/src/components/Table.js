import React, { useState } from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup'
import '../styles/Project.css'
const Table = ({ post, handleDelete }) => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [password, setPassword] = useState("");
    

    const handlePost = () => {
           const data = {
            id: id,
            name: name,
            type: type,
            password: password
        }
        // console.log(data)
        axios.post(`http://localhost:8089/users`, data)
            .catch((err) => console.log("Error", err))
        
        window.location.reload()
    }

    const updateData = (name,id,type,password) => {

         const data = {
            id: id,
            name: name,
            type: type,
            password: password
        }
        //console.table(data)
        axios.put(`http://localhost:8089/users/${id}`, data)
            .catch((err) => console.log("Error", err))

        window.location.reload()
    }

    //console.table(post)

    return (
        <>
            <div id='form'>
                <div className="form">
                    <h1>Add new user here</h1>
                    <label htmlFor="name">Enter a id</label><br />
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br />
                    <label htmlFor="name">Enter a name</label><br />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
                    <label htmlFor="name">Enter a type</label><br />
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} /><br />
                    <label htmlFor="name">Enter a password</label><br />
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <button className="btn btn-primary my-3" onClick={handlePost}>Add Data</button>
                </div>
            </div>
            <div>
                <h1 className='h1'>Data</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>type</th>
                            <th>password</th>
                            <th>edit</th>
                            <th>Delete</th>
                        </tr>
                        {post && post.map((Post) => (
                            <tr>
                                <td>{Post.id}</td>
                                <td>{Post.name}</td>
                                <td>{Post.type}</td>
                                <td>{Post.password}</td>
                                <td>
                                <Popup trigger={<button className="btn btn-primary">Edit</button>} position="center">
                                    <div className='popupmodal'>
                                    <h4 >Update Data Here</h4>
                                    <label htmlFor="name">Enter a name</label><br />
                                            <input type="text" value={name} placeholder={Post.name} onChange={(e) => setName(e.target.value)} /><br />
                                    <label htmlFor="name">Enter a id</label><br />
                                            <input type="text" value={id}   placeholder={Post.id} onChange={(e) => setId(e.target.value)}  /><br />
                                    <label htmlFor="name">Enter a type</label><br />
                                            <input type="text" value={type} placeholder={Post.type}  onChange={(e) => setType(e.target.value)}  /><br />
                                    <label htmlFor="name">Enter a password</label><br />
                                            <input type="text" value={password} placeholder={Post.password}  onChange={(e) => setPassword(e.target.value)} /><br />
                                            <button class="btn btn-primary" onClick={()=> updateData(name,id,type,password)} >Update</button>
                                    </div>
                                </Popup>

                                </td>
                                <td><button className="btn btn-primary" onClick={() => handleDelete(Post.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}
export default Table