import React from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <nav className="navbar">
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;