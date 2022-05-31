import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home/Home'
import Aboutme from './pages/Aboutme/Aboutme';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About_me' element={<Aboutme/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
