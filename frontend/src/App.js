import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Table from './components/Table';
import Placement from './components/Placement';
import Output from './components/Output';

const App = () => {

  const baseURL = "http://127.0.0.1:8089/users"

  const pbaseURL = "http://127.0.0.1:8089/Placements"

  const [ppost, setPpost] = useState(null);
  useEffect(() => {
    axios.get(pbaseURL)
      .then((response) => {
        setPpost(response.data);
      });
  }, []);


  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
      setPost(response.data);
    });
  }, []);


  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8089/users/${id}`)
    window.location.reload()
  }

  const placementDelete = (id) => {
    axios.delete(`http://127.0.0.1:8089/Placements/${id}`)
    window.location.reload()
  }

  return (
    <>
      <Router>
        <div className="page">
          <Navbar />
        </div>
        <div className="Home">
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/About' element={< About />}></Route>
            <Route exact path='/Table' element={< Table post={post} handleDelete={handleDelete} />}></Route>
            <Route exact path='/Placement' element={< Placement ppost={ppost} placementDelete={placementDelete} />}></Route>
            <Route exact path='/Output' element={< Output />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;