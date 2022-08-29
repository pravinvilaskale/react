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
        axios.post(`http://localhost:8000/users/`, data)
            .catch((err) => console.log("Error", err))
    }

    return (
        <>
            <div id='form'>
                <div className="form">
                    <h1>Add new data here</h1>
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
                                <td><Popup trigger={<button className="btn btn-primary">Edit</button>} position="right center">
                                    <div className='popupmodal'>
                                    <h4 >Upid Data Here</h4>
                                    <label htmlFor="name">Enter a name</label><br />
                                    <input type="text" placeholder={Post.name} /><br />
                                    <label htmlFor="name">Enter a id</label><br />
                                    <input type="text" placeholder={Post.id} /><br />
                                    <label htmlFor="name">Enter a type</label><br />
                                    <input type="text" placeholder={Post.type} /><br />
                                    <label htmlFor="name">Enter a password</label><br />
                                    <input type="text" placeholder={Post.password} /><br />
                                    <button class="btn btn-primary">Upid</button>
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