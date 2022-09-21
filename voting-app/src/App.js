import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Vote from './components/Vote';
import Register from './components/Register'
import Admin from './components/Admin';

function App() {

  return (
    <>
      <Router>
        <div className="Home">
          <Routes>
            <Route exact path='/' element={< Login />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/vote' element={< Vote />}></Route>
            <Route exact path='/register' element={< Register />}></Route>
            <Route exact path='/admin'  element={< Admin />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
