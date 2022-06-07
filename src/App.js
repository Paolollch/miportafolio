import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home/Home'
import Aboutme from './pages/Aboutme/Aboutme';
import Contact from './pages/Contact/Contact'
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About_me' element={<Aboutme/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={ <Navigate to="/" replace/> }/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
