import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import DestinationsList from './Components/DestinationsList';

function App() {
  return (
    <div className="App">
      <DestinationsList />
    </div>
  );
}

export default App;
