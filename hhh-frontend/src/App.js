import React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import HomePage from './routes/HomePage';
import NavBar from './components/NavBar';
import Login from './layouts/login';
import UserPage from './layouts/habits';
import Main from './layouts/main';
import './App.css';

function App() {
    return (
      <div>
        <NavBar></NavBar>
          <Routes>
            <Route path="/about" element={<UserPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route exact path='/' element={<Main/>}/>
          </Routes>
      </div>
    );
}

export default App;
