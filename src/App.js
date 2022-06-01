import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import DestinationsList from './Components/DestinationsList';

function App() {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/destinations")
      .then(r => r.json())
      .then(data => setDestinations(data))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<DestinationsList destinations={destinations} />} />
      </Routes>
    </div>
  );
}

export default App;
