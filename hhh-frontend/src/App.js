import React, {useContext, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import './App.css';

function App() {
    return (
      <Router>
          <Routes>
              <Route exact path='/' element={<HomePage/>}/>
          </Routes>
      </Router>
    );
}

export default App;
