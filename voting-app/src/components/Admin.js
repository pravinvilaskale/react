import React from 'react'
import { useState, useEffect } from "react"



const Admin = () => {

    const [users, setUsers] = useState([])

       ( () => {
        fetch("http://localhost:8089/admin")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    })
    // fetchData()
    // console.log(users[0])

    // var cad1= 0;
    // var cad2 = 0;
    // var cad3 = 0;
    // var cad4 = 0;

    return (
        <div>
            <table>
                <tbody>
                <tr>
                <th>Canidates</th>
                <th>Votes</th>
                </tr>
                <tr>
                <td></td>
                <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Admin