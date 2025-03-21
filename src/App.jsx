import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { SubjectWiseNotes } from './pages/SubjectWiseNotes';
import { Pyqs } from './pages/Pyqs';
import { About } from './pages/About';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/subject-notes" element={<SubjectWiseNotes />} /> 
         <Route path="/pyqs" element={<Pyqs />} /> 
         <Route path="/about" element={<About />} /> 


      </Routes>
    </Router>
  );
}

export default App;
