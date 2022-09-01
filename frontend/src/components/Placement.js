import React, { useState } from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup'
import '../styles/Project.css'
const Placement = ({ ppost, placementDelete }) => {

    const [name, setName] = useState("");
    const [college, setCollege] = useState("");
    const [date, setDate] = useState("");
    const [qualification, setQualification] = useState("");
    const [year, setYear] = useState("");

    const handlePost = () => {
        const data = {
            name: name,
            college: college,
            date: date,
            qualification: qualification,
            year: year
        }
        axios.post(`http://localhost:8089/Placements/`, data)
            .catch((err) => console.log("Error", err))

        window.location.reload()
    }

    const updateData = (id,name, college, date, qualification, year) => {

        const data = {
            id:7,
            name:"pravin",
            college:"VOGCE",
            date:"01-jan-22",
            qualification:"BE",
            year:2021
        }
        //console.table(data)
        axios.put(`http://localhost:8089/Placements/7`, data)
            .catch((err) => console.log("Error", err))

       // window.location.reload()
    }

    //console.log(ppost)
    
    return (
        <>
            <div id='form'>
                <div className="form">
                    <h1>Add new data here</h1>
                    <label htmlFor="name">Enter a name</label><br />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
                    <label htmlFor="name">Enter a college</label><br />
                    <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} /><br />
                    <label htmlFor="name">Enter a date</label><br />
                    <input type="text" value={date} onChange={(e) => setDate(e.target.value)} /><br />
                    <label htmlFor="name">Enter a qualification</label><br />
                    <input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} /><br />
                    <label htmlFor="name">Enter a year</label><br />
                    <input type="text" value={year} onChange={(e) => setYear(e.target.value)} /><br />
                    <button className="btn btn-primary my-3" onClick={handlePost}>Add Data</button>
                </div>
            </div>
            <div>
                <h1 className='h1'>Data Placemenplacement</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>College</th>
                            <th>Date</th>
                            <th>Qualification</th>
                            <th>Year</th>
                            <th>edit</th>
                            <th>Delete</th>
                        </tr>
                        {ppost && ppost.map((Post) => (
                            <tr>
                                <td>{Post.id}</td>
                                <td>{Post.name}</td>
                                <td>{Post.college}</td>
                                <td>{Post.date}</td>
                                <td>{Post.qualification}</td>
                                <td>{Post.year}</td>
                                <td><Popup trigger={<button className="btn btn-primary">Edit</button>} position="right center">
                                    <h4>Update Data Here</h4>
                                    <label htmlFor="name">Enter a name</label><br />
                                    <input type="text" placeholder={Post.name} onChange={(e) => setName(e.target.value)} /><br />
                                    <label htmlFor="name">Enter a college</label><br />
                                    <input type="text" placeholder={Post.college} onChange={(e) => setCollege(e.target.value)} /><br />
                                    <label htmlFor="name">Enter a date</label><br />
                                    <input type="text" placeholder={Post.date} onChange={(e) => setDate(e.target.value)} /><br />
                                    <label htmlFor="name">Enter a qualification</label><br />
                                    <input type="text" placeholder={Post.qualification} onChange={(e) => setQualification(e.target.value)}  /><br />
                                    <label htmlFor="name">Enter a year</label><br />
                                    <input type="text" placeholder={Post.year} onChange={(e) => setYear(e.target.value)} /><br />
                                    <button class="btn btn-primary" onClick={() => updateData(Post.id,name,college,date,qualification,year)}>Update</button>
                                </Popup>
                                </td>
                                <td><button className="btn btn-primary" onClick={() => placementDelete(Post.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
        </>
    )
}
export default Placement