import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import DestinationsList from './Components/DestinationsList';

function App() {

  useEffect(() => {
    fetch("http://localhost:9292/destinations")
      .then(r => r.json())
      .then(console.log)
  }, [])

  return (
    <div className="App">
      <DestinationsList />
    </div>
  );
}

export default App;
