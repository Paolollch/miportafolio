import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact/>
      </Routes>
    </Router>
    <Slider>
    </Slider>
    </>
  );
}

export default App;
